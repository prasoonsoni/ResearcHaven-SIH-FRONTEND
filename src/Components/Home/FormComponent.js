
import React from "react";
import Login from "./Login";
import Register from "./Register";

function FormComponent(props) {
  if(props.showRegForm===true){
    return <><Register/></>
  }else if(props.showLoginForm===true){
    return <><Login/></>
  }
}

export default FormComponent;
