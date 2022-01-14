import React,{useState,useEffect} from 'react';
import {Row,Col,Button,Form,Table} from 'react-bootstrap';
import {useDispatch,useSelector} from 'react-redux';
import Message from './../components/Message';
import Loader from './../components/Loader';
import {getUserDetails} from './../actions/userActions';
import { LinkContainer } from 'react-router-bootstrap';

const ProfileScreen = ({history,location}) => {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [message,setMessage]=useState(null)
    const dispatch = useDispatch()
    
    const userLogin=useSelector(state=>state.userLogin)
    const {userInfo}=userLogin 

    const userDetails=useSelector(state=>state.userDetails)
    const {loading,error,user}=userDetails

    const submitHandler=()=>{
        console.log('Submit Hnadler')
    }

    useEffect(() => {
        console.log("use effect",user)
        if(!userInfo){
            history.push('/login')
        }else{
            if(!user){
                dispatch(getUserDetails('profile'))
            }else{
                console.log(user)
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [dispatch,history,userInfo,user])

    return (
        <Row>
            <Col md={3}>
                <h2>User Profile</h2>
                {message && <Message variant='danger'>{message}</Message>}
                {error && <Message variant='danger'>{error}</Message>}
                {/* {success && <Message variant='success'>Profile updated</Message>} */}
                {loading && <Loader />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>
                            Name    
                        </Form.Label>
                        <Form.Control
                            type='name'
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
                            Password     
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
                            placeholder='Enter Confirm Password'
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                        >
                        </Form.Control>
                    </Form.Group>
                    <Button type='submit' variant='primary'>
                        Update
                    </Button>
                </Form>
            </Col>
            <Col md={9}>
                
            </Col>
        </Row>
    )
}

export default ProfileScreen
