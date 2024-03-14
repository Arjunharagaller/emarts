import React,{useState,useEffect} from 'react'
import {Container} from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChild, faChildDress,faGem,faRing,faTv, faBox} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
const Products = () => {
    const [data,setData]=useState([]);
    const [filter,setFilter]=useState(data);
    const [loading,setLoading]=useState(false)
    let compMount=true;
    useEffect(()=>{
        
        const getProducts=async()=>{
            setLoading(true);
            const response=await fetch('https://fakestoreapi.com/products');
            if(compMount)
            {
                setData(await response.clone().json())
                setFilter(await response.json())
                setLoading(false)
                console.log(filter)
            }
             return ()=>{
                compMount=false;
             }
        }
            getProducts();
    },[])
    const Loading=()=>{
        return (
        <>
          <div className='col-md-3'><Skeleton height={350} baseColor="#202020" highlightColor="#444"></Skeleton></div>
          <div className='col-md-3'><Skeleton height={350} baseColor="#202020" highlightColor="#444"></Skeleton></div>
          <div className='col-md-3'><Skeleton height={350} baseColor="#202020" highlightColor="#444"></Skeleton></div>
          <div className='col-md-3'><Skeleton height={350} baseColor="#202020" highlightColor="#444"></Skeleton></div>
        </>
        )
    }

    const filterProduct=(cat)=>{
       const filtered=data.filter((x)=>x.category===cat)
       setFilter(filtered);
    }
    const Showproducts=()=>{ 
        return(
        <>
            <div className='buttons d-flex justify-content-center'>
                <button type="button" class="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>
                <FontAwesomeIcon icon={faBox}/> All</button>
                <button type="button" class="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>
                   <FontAwesomeIcon icon={faChild} size='md'/> Men's Clothing</button>
                <button type="button" class="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>
                <FontAwesomeIcon icon={faChildDress}/> Women's Clothing</button>
                <button type="button" class="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>
                <FontAwesomeIcon icon={faGem}/><FontAwesomeIcon className='ring' icon={faRing}/> Jewelery</button>
                <button type="button" class="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>
                <FontAwesomeIcon icon={faTv}/> Electronics</button>
            </div>
            {filter.map((product)=>{
                return (
                    <>
                    <div className='col-md-3 mt-4' key={product.id}>
                       <div className="card text-center p-4 h-100" >
                        <img src={product.image} class="card-img-top" alt={product.title} height='220px'/>
                        <div className="card-body">
                            <h5 className="card-title mb-0 lead fw-bold">{product.title.substring(0,11)}</h5>
                            <p className="card-text fw-bold">${product.price}</p>
                            <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Product Details</NavLink>
                        </div>
                        </div>
                     </div>
                    </>
                )
            })}
        </>
        )
    }

  return (
    <>
    <Container className='my-5 py-5'>
      <div className='row'>
          <div className='col-12 mb-3'>
             <h1 className='display-6 fw-bolder text-center'>Latest Products</h1><hr></hr>
          </div>
      </div>
      <div className='row justify-content-center'>
         {loading?<Loading></Loading>:<Showproducts></Showproducts>}
      </div>
    </Container>
    </> 
  )
}

export default Products