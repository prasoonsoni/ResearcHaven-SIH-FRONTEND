
import React from "react";
import Login from "./Login";
import Register from "./Register";
import {UserConsumer} from '../Contexts/userContext';
function FormComponent() {

  return (
    <UserConsumer>
      {(props)=>{
        if(props.showRegForm===true){
          return <><Register show="md" width="65%" m={4}/></>
        }else if(props.showLoginForm===true){
          return <><Login show="md" width="70%" m={4}/></>
        }
      }}
    </UserConsumer>
  );
}

export default FormComponent;
