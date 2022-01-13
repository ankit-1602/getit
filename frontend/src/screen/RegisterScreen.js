import React,{useState,useEffect} from 'react';
import FormContainer from './../components/FormContainer';
import {Form,Button,Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import Loader from './../components/Loader';
import Message from './../components/Message';
import { register } from './../actions/userActions';

const RegisterScreen = ({location,history}) => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');
    const [message,setMessage]=useState(null);

    const dispatch=useDispatch();
    const userRegister=useSelector(state=>state.userRegister)
    const {userInfo,loading,error} = userRegister

    const redirect=location.search ? location.search.split('=')[1] : '/'
    
    useEffect(()=>{
        if(userInfo){
            history.pushState(redirect)
        }
    },[history,userInfo,redirect])

    const submitHandler=(e)=>{
        e.preventDefault();
        if(password !==confirmPassword){
            setMessage('Passwords do not match.');
        }else{
            dispatch(register(name,email,password))
        }
        console.log('Submit Handler')
    }
    return (
        <FormContainer>
            <h1>Sign Up</h1>
            { message && <Message variant='danger'>{message}</Message> }
            { error && <Message variant='danger'>{error}</Message> }
            { loading && <Loader /> }
            <Form onSubmit={submitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>
                        Name    
                    </Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>
                        Email Address    
                    </Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>
                        Enter Password    
                    </Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='confirmPassword'>
                    <Form.Label>
                        Confirm Password    
                    </Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                    >

                    </Form.Control>
                </Form.Group>
                <br />
                <Button type='submit' variant='primary'>
                    Register
                </Button>
            </Form>
            <Row className='py-3'>
                <Col>
                    Have an account?{' '}
                    <Link to={redirect?`/login?redirect=${redirect}`:'/login'}>
                        Login
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    )
}

export default RegisterScreen
