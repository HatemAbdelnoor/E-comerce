
import React, { useEffect, useState } from "react";
import styles from "./CategorySlider.module.css";
import axios from "axios";
import Slider from "react-slick";



export default function CategorySlider(){

    const [Category, setCategory] = useState([]);
   
    async function getCategory() {   
      let {data}= await axios.get(`https://route-ecommerce.onrender.com/api/v1/Categories`)
  setCategory(data.data)
      console.log(data.data);
    }
  useEffect(()=>{
    getCategory();
  },[])

  const  settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1
  };
    return<>
    <div className="container p-3">
    <Slider {...settings} > 
    {Category.map((category,index)=><div className=""  key={index}>

 <img className="w-100 p-1 " height={200} src={category.image} alt="" />
<h2 className="h6 text-center pt-2">{category.name}</h2>

    </div>)}
    
    </Slider>
    </div>
    </>
       
}
