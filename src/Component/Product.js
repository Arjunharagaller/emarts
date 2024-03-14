import React,{useState,useEffect} from 'react'
import { Container } from 'react-bootstrap';
import {useParams} from 'react-router'
import Skeleton from 'react-loading-skeleton'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { addCart } from '../Redux/Action/Action';
const Product = () => {
   const dispatch=useDispatch()
   const addproductcart=(product)=>{
     dispatch(addCart(product))
   }

  const {id}=useParams();
  const [product,setProduct]=useState([]);
  const [loading,setLoading]=useState(false)
  useEffect(()=>{
   const getProduct=async()=>{
    setLoading(true)
    const response=await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json());
    setLoading(false);
   }
    getProduct();
  },[id])

  const Loading=()=>{
    return(<>
      <div className='col-md-3'><Skeleton height={350}></Skeleton></div>
      <div className='col-md-3'><Skeleton height={350}></Skeleton></div>
      <div className='col-md-3'><Skeleton height={350}></Skeleton></div>
      <div className='col-md-3'><Skeleton height={350}></Skeleton></div>
    </>)
  }
  const Showproduct=()=>{
    return (<>
     <div className='col-md-6'>
      <img src={product.image} alt={product.title} height='450px' width='400px'></img>
     </div>
     <div className='col-md-6 d-flex flex-column justify-content-center'>
       <h4 className='text-uppercase text-block-50'>{product.category}</h4>
       <h1 className='display-5'>{product.title}</h1>
       <p className='lead'>Rating: {product.rating && product.rating.rate} <FontAwesomeIcon icon={faStar}></FontAwesomeIcon></p>
       <h3 className='display-6 fw-bold my-1'> ${product.price}</h3>
       <p className='lead fw-normal fs-6 '>{product.description}</p>
       <div className='d-flex flex-row'>
        <button className='btn btn-outline-dark me-2' onClick={()=>addproductcart(product)}>Add to Cart</button>
        <NavLink to='/cart' className='btn btn-outline-dark me-2'>Go to Cart</NavLink>
        <NavLink to='/' className='btn btn-outline-dark'>Buy More</NavLink>

       </div>
     </div>
    </>)
  }
  return (
    <>
     <Container className='mt-5'>
      <div className='row'>
          {loading?<Loading></Loading>:<Showproduct></Showproduct>}
      </div>
     </Container>
    </>
  )
}

export default Product