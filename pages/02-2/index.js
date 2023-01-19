import { useState } from 'react';
export default function index(){
    const[count,setCount]= useState(0);

    function handleClick(){
        setCount(count+1)
    }

    return(
        <>
            <div>{count}</div>
            <button onClick={handleClick}>카운트올리기</button>
        </>
    )
}