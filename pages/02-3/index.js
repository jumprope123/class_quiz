import { useState } from 'react';
export default function index(){
    const[number,setNumber]= useState('000000');

    function handleClick(){
        let num1 = Math.floor(Math.random()*10).toString()
        let num2 = Math.floor(Math.random()*10).toString()
        let num3 = Math.floor(Math.random()*10).toString()
        let num4 = Math.floor(Math.random()*10).toString()
        let num5 = Math.floor(Math.random()*10).toString()
        let num6 = Math.floor(Math.random()*10).toString()
        setNumber(num1+num2+num3+num4+num5+num6);
    }

    return(
        <>
            <div>인증번호 6자리 : {number}</div>
            <button onClick={handleClick}>인증번호전송</button>
        </>
    )
}