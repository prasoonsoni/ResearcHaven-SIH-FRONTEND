
import React from "react";
import Login from "./Login";
import Register from "./Register";

function FormComponent(props) {
  if(props.showRegForm===true){
    return <><Register m={4}/></>
  }else if(props.showLoginForm===true){
    return <><Login m={4}/></>
  }
}

export default FormComponent;
