import { useState } from "react"

export default function index(){
    const [data,setData]=useState({})
    const [emailError,setEmailError]= useState('');
    const [passwordError,setPasswordError]= useState('');

    function handleChange(event){
        setData({
            ...data,
            [event.target.name]:event.target.value
        })
    }

    function handleClick(){
        if(data.email===undefined||!data.email.includes('@')){
            setEmailError('@가 없네요.')
        }else{
            setEmailError('')
        }
        if(data.password !== data.checkPassword){
            setPasswordError('비밀번호와 비밀번호확인이 다르네요.')
        }else{
            setPasswordError('')
        }
    }
    return(

        <>
            <div>이메일</div>
            <input type={'text'} name={'email'} value={data.email||''} onChange={handleChange}/>
            <div>{emailError}</div>
            <div>비밀번호</div>
            <input type={'password'} name={'password'} value={data.password||''} onChange={handleChange}/>
            <div>{passwordError}</div>
            <div>비밀번호 확인</div>
            <input type={'password'} name={'checkPassword'} value={data.checkPassword||''} onChange={handleChange}/>
            <div>{passwordError}</div>
            <button onClick={handleClick}>가입하기</button>
        </>

    )
}