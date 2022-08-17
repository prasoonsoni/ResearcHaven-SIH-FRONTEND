import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate();
    useEffect(()=>{
        if(!sessionStorage.getItem('secretKey')){
            navigate('/')
        }
    });
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard