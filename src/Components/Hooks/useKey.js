import React, { useEffect, useRef } from 'react'


function useKey(key,cb) {
    const callbackRef = useRef(cb);
    useEffect(()=>{
        callbackRef.current = cb;
    })
    useEffect(()=>{
        const handle = (event)=>{
            if (event.code===key){
                callbackRef.current(event);
            }
        }
        document.addEventListener("keypress",handle);
        return()=>{document.removeEventListener("keypress",handle);}
    },[key])
  return (

    <div>useKey</div>
  )
}

export default useKey