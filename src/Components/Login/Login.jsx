import React from 'react'
import styles from './Login.module.css';
import { useFormik } from 'formik';
import * as Yup from "yup";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';

export default function Login({saveUserData}) {

  
  let navigate = useNavigate();
 const [isloading,setisloading]= useState(false);
 const [messageError, setmessageError] = useState("");



async   function handleLogin(values){
    let {data}=  await axios.post(`https://route-ecommerce.onrender.com/api/v1/auth/signin`,values);
          
            setisloading(true);

    if (data.message==="success"){
      localStorage.setItem("userToken", data.token);
      setisloading(false);
      navigate('/ ');
      console.log("hello");
      saveUserData();

    };


  }
  
  let validationSchema=Yup.object({
    email:Yup.string().required("Email is required").email("email is invalid"),
    password:Yup.string().required("Password is required").matches(/^[A-Z][a-zA-Z0-9]{5,10}$/,"password must start with a letter"),
  })
  
  let formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: handleLogin

    
    
  });
  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};
   
  return <>

  <form  onSubmit={formik.handleSubmit}>

    <div className='w-75 mx-auto py-4' >
      <label htmlFor='email' >email</label>
      <input type='text'  onBlur={formik.handleSubmit} className='form-control' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />
      <label htmlFor='password' >password</label>
      <input type='password'  onBlur={formik.handleSubmit} className='form-control' id='password' name='password' onChange={formik.handleChange} value={formik.values.password} />
      
      
      {isloading? <button type='button' className='btn btn-primary'><i className='fas fa-spinner fa-spin'></i></button>:
            <button  type='submit' className='btn btn-primary'>Login</button>}
                <br />
            <br />
            <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />

      </div>

      <div>
        
        </div>
      </form>

  </>
}
