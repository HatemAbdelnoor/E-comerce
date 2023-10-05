import React from 'react';
import './Home.module.css';
import MainSlider from '../MainSlider/MainSlider';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import CategorySlider from '../CategorySlider/CategorySlider';
import { Helmet } from 'react-helmet';
 
function Home (){

return<>
   <Helmet>
    <title>Home </title>
   </Helmet>
<div className=" container-fluid">

<MainSlider/>
<CategorySlider/>
<FeaturedProducts/>
</div>
</>

};

export default Home;
