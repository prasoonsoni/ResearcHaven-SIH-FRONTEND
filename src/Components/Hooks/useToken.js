import {useEffect, useState} from 'react'

export function useToken() {
    const [token,setToken] = useState('');
    useEffect(()=>{
        setToken(sessionStorage.getItem('token'));
    },[token]);
    return token;
}