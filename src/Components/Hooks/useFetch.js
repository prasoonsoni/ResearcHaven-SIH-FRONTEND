import {useState,useEffect} from 'react';

export const useFetch = (url,method,body)=>{
    const [isLoading,setLoading] = useState(false);
    const [error,setError] = useState('');
    const [data,setData] = useState('');
    useEffect(()=>{
        let fetchData = async ()=>{
            setLoading(true);
            let response = await fetch(url,{
                method:method,
                headers:{
                    "Content-type": "application/json",
                    "auth-token":sessionStorage.getItem('token')
                },
                body:method==='GET'? null:body
            });
            let data = await response.json();
            if(data.success){
                setData(data);
                setLoading(false);
            }else{
                setError(data.message);
                setLoading(false);
            }
        };
        fetchData();
    },[url,method,body]);
    return {data,isLoading,error};
}