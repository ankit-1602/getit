import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Row,Col,Image,Card,ListGroup,Button, Form} from 'react-bootstrap';
import Rating from '../components/Rating';
import axios from 'axios';

const ProductScreen = ({match}) => {
    const [qty,setQty]=useState(0)
    const [product,setProduct]=useState({})

    const fetchProduct = async ()=>{
        const {data}=await axios.get(`/api/products/${match.params.id}`)
        setProduct(data.product)
    }

    useEffect(()=>{
        fetchProduct();
    },[])

    const addToCartHandler=()=>{
        console.log('Add to cart handler.')
    }
    return (
        <>
            <Link className="btn btn-light my-3" to="/">
                Go Back
            </Link>   
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>{product.name}</h2>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating 
                                value={product.rating*1}
                                text={`${product.numReviews} Reviews`}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price : ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description : ${product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price :
                                    </Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status :
                                    </Col>
                                    <Col>
                                        {
                                        product.countInStock > 0 ? 'In Stock':'Out of Stock'
                                        }
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            {product.countInStock>0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>
                                            Qty :
                                        </Col>
                                        <Col>
                                            <Form.Control 
                                                as='select'
                                                value={qty}
                                                onChange={(e)=>setQty(e.target.value)}
                                            >
                                                {
                                                    [...Array(product.countInStock).keys()].map(x=>(
                                                        <option key={x+1} value={x+1}>
                                                            {x+1}
                                                        </option>
                                                    ))
                                                
                                                }
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}
                            <ListGroup.Item>
                                <Button             
                                    type="button"
                                    className="btn-block"
                                    onClick={addToCartHandler}
                                    disabled={product.countInStock===0
                                    }
                                >
                                    Add to Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen
