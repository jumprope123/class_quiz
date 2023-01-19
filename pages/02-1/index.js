import { useState } from 'react';
export default function index(){
    const[buttonText,setButtonText]= useState('안녕하세요');

    function handleClick(){
        setButtonText('반갑습니다.')
    }

    return(
        <>
            <button onClick={handleClick}>{buttonText}</button>
        </>
    )
}