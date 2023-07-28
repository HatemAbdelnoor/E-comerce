import React, { useContext, useEffect, useState } from "react";
import styles from "./Cart.module.css";
import CartContextProvider, { CartContext } from '../../Context/CartContext';
import { toast } from 'react-hot-toast';
import { Helmet } from "react-helmet";


export default function Cart(){

let {getLoggedUserCart,updateProudct,RemoveSpecificCartItem}=useContext(CartContext);

async function RemoveItem(productId){
    let Response = await RemoveSpecificCartItem(productId);
    setcartDetails(Response.data);

    console.log(productId);
    console.log(Response);
    if(Response.data.status=="success")
{
  toast.success("the product has been removed");
}

 }
 

 async function updateProudctCount(productId,proudctCount){
    let Response = await updateProudct(productId,proudctCount);
    setcartDetails(Response.data);

    console.log(productId);
    console.log(Response);
    if(Response.data.status=="success")
    {
      toast.success("the product has been updated successfully");
    }
    

 }
 
async function getCart(){

    let response=await getLoggedUserCart();
     setcartDetails(response.data);
    console.log(response);
}
useEffect (()=>{
    getCart();},[]);

const [cartDetails, setcartDetails] = useState(null);




    return<>
    <Helmet>
        <title> Shop Cart </title>

    </Helmet>
   {cartDetails !==null ? <div className="    bg-light m-5 p-4 my-4 ">
       
       
       
        <h5>shop Cart</h5>
        {cartDetails.data.products.map((product , index) => 
                 <div key={index} className= "row border-bottom py-2 my-2 align-items-center">
<div className=" col-md-1">
    
    <img className="w-100" src={product.product.imageCover} alt="" />
</div>

<div className=" col-md-11 d-flex justify-content-between">
    <div className="">
    <h6 className="fw-border">{product.product.title}</h6>
    <h6 className="text-success">{product.price} EGP</h6>
    <h6>{product.product._id}</h6>
    <button onClick={()=>RemoveItem(product.product._id)} className="btn m-0 p-0 "> <i className="fa-regular   text-danger fa-trash-can">   </i> Remove</button>

    </div>

    <div className="d-flex  align-self-end">
<button onClick={()=>updateProudctCount(product.product._id, product.count+1)} className="btn border-success  btn-sm ">+</button>
<span className="m-3">  {product.count}</span>
<button  onClick={()=>updateProudctCount(product.product._id, product.count-1)}    className="btn border-success  btn-sm ">-</button>

</div>
    </div>


            </div>) }
            <h6 className="text-success text-center "> Total Price : {cartDetails.data.totalCartPrice} EGP</h6>

            <button   className=" btn  w-100 btn-outline-success p-2 text-center">  pay </button>

    </div>:null}
    
    </>
}




/*
proudct.map((product , index)
*/