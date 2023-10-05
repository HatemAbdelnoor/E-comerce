import React from "react";
import styles from "./NotFound.module.css";
import { ReactComponent as Error } from "../../error.svg"
import { Helmet } from 'react-helmet';

export default function NotFound(){
    return(<>
     <Helmet>
    
      <title> page not found </title>
     </Helmet>
      <div className="container-fluid d-flex justify-content-center align-items-center">
        <Error/>
      </div>
      </>
    )
}