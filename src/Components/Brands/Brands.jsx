import React, { useContext, useState } from "react";
import styles from "./Brands.module.css";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import axios from "axios";

export default function Brands(){
function getBrands(){

    return axios.get(`https://route-ecommerce.onrender.com/api/v1/Brands`)
   .then((response) =>response).catch((err) =>err)
}
    async function setBrands(){
            let response=await getBrands();
            setBrandsDitails(response.data)
            console.log(response.data);
            console.log();
    };
    
    useEffect (()=>{
    setBrands();},[]);
    const [BrandsDitails, setBrandsDitails] = useState(null);
    return<> 
    <div className="containar d-flex justify-content-center flex-wrap ">
    {BrandsDitails?.data.map((BrandsDitails, index) => (
        <div key={index} className="row col-md-3  -1  ">
       <Card>
        <Card.Img variant="top" src={BrandsDitails?.image}/>
        <Card.Header className="text-center">{BrandsDitails?.name}</Card.Header>
       </Card>
       </div>
    ))}
    </div>

</>
}