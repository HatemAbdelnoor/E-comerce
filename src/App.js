import logo from './logo.svg';
import './App.css';
 import{Navigate, RouterProvider, createBrowserRouter} from "react-router-dom";
 import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Cart from "./Components/Cart/Cart";
import Proudcts from "./Components/Proudcts/Proudcts";
import NotFound from "./Components/NotFound/NotFound";
import ProudctDetails from "./Components/ProuductDetails/ProuductDetails"
import MainSlider from "./Components/MainSlider/MainSlider"
import Footer from "./Components/Footer/Footer";
import Login from './Components/Login/Login';
import Brands from "./Components/Brands/Brands" 
import Categories from "./Components/Categories/Categories";  
import jwtDecode from 'jwt-decode';
import ProuductDetails from './Components/ProuductDetails/ProuductDetails';
import { useEffect, useState } from 'react';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import  { Toaster } from 'react-hot-toast';
import CounterContextProvider from './Context/CounterContext';
import CartContextProvider from './Context/CartContext';
import CategoryDetails from './Components/CategoryDetails/CategoryDetails';


function App() { 
  
  
 
  
  useEffect (()=>{
if(localStorage.getItem("userToken")!==null){
  saveUserData();
}
},[])

  const [userDate, setuUserDate] = useState(null);



   function saveUserData(){
    let encodedToken=  localStorage.getItem("userToken");
    let decodedToken=  jwtDecode(encodedToken);
    setuUserDate(decodedToken);
    

  };
 


let routers = createBrowserRouter ([
    { path:'', element:<Layout  userDate={userDate} setuUserDate={setuUserDate}   />, children:[
    {index:true, element: <ProtectedRoute> <Home/></ProtectedRoute>},
    {path:"Proudcts", element : <ProtectedRoute> <Proudcts/>  </ProtectedRoute> },
    {path:`ProuductDetails/:id`, element :   <ProtectedRoute><ProuductDetails/> </ProtectedRoute>   },
    {path:`CategoryDetails/:id`, element :   <ProtectedRoute><CategoryDetails/> </ProtectedRoute>   },
    {path:"Cart",element:<ProtectedRoute><Cart/> </ProtectedRoute>},
    {path:"Footer",element:<Footer/>},
    {path:"login",element:<Login  saveUserData={saveUserData}  />},
    {path:"Register",element:<Register/>},
    {path:"MainSlider",element: <ProtectedRoute> <MainSlider/></ProtectedRoute> },
    {path:"*" ,element:<NotFound/>},
    {path:"Brands", element:<ProtectedRoute> <Brands/> </ProtectedRoute>},
    {path:"Categories", element:<ProtectedRoute> <Categories/> </ProtectedRoute>},
    {path:"ProuductDetails", element: <ProtectedRoute> <ProudctDetails/> </ProtectedRoute>},
       
  ]}

])


return <>


<CartContextProvider>
  <Toaster/>
  <CounterContextProvider>
<RouterProvider router={routers} > 
<Toaster/>

</RouterProvider>
</CounterContextProvider>
</CartContextProvider>
</>
}


export default App;
