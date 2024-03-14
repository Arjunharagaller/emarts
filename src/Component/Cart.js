import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addCart,delCart } from '../Redux/Action/Action'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    const cartdata=useSelector((state)=>state.handleCart)
    let total=0;
    cartdata.map((val)=>val.qty!==0?total+=(val.qty*val.price):0);
    const dispatch=useDispatch();
    const additem=(item)=>{
        dispatch(addCart(item))
    }
    const delitem=(item)=>{
        dispatch(delCart(item))
    }
  return (
    <>
    <div className='row m-5'>
        <div className='col-md-6'>
        <table class="table table-bordered">
                <thead>
                    <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Details</th>
                    <th scope="col" style={{width:'35%'}}>Actions</th>
                    </tr>
                </thead>
            <tbody>
                {cartdata.map((data)=>{
                return( <tr key={data.id}>
                        <td><img src={data.image} alt={data.title} height={80} width={80}></img></td>
                        <td><div className='d-flex flex-column'>
                            <h6 className=''>{data.title}</h6>
                            <h6>${data.price}</h6>
                            <h6>Qty: {data.qty}</h6>
                            </div>
                         </td>
                        <td>
                            <div className='d-flex flex-row justify-content-center mb-3'>
                            <h6 className=' lead fw-bold'>{data.qty} * {data.price}= {data.qty*data.price}</h6>
                            </div>
                            <div className=' d-flex flex-row justify-content-around'>
                                <button className='btn btn-dark btn-sm'  onClick={()=>additem(data)}><FontAwesomeIcon size='xs' icon={faPlus}></FontAwesomeIcon></button>
                                <button className='btn btn-dark btn-sm' onClick={()=>delitem(data)}><FontAwesomeIcon size='xs' icon={faMinus}></FontAwesomeIcon></button>
                            </div>
                        </td>
                    </tr>
                )
                })}
            </tbody>
            </table>
        </div>
        <div className='col-md-6'>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Product</th>
                <th scope="col">Qty</th>
                <th scope="col">Cost</th>
                <th scope="col" style={{width:'15%'}}>Sub Total</th>
                </tr>
            </thead>
            <tbody>
            {cartdata.map((dat)=>{
                return(
                    <tr key={dat.id}>
                    <td>{dat.title}</td>
                    <td>{dat.qty}</td>
                    <td>{dat.price}</td>
                    <td>{dat.qty*dat.price}</td>
                    </tr>
                )
            })}
               <tr>
                <th colSpan={3}>Total</th>
                <td className='fw-bold'> {Math.round(total*100)/100}</td>
               </tr>
            </tbody>
        </table>
        </div>
    </div>
    </>
  )
}

export default Cart