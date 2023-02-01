import { useQuery, useMutation, gql } from '@apollo/client';
import { useState } from 'react';

const CREATE_BOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String){    
            createBoard(writer:$writer,title:$title,contents:$contents){
                _id,
                number,
                message
            }
    }
    
`

const CREATE_PRODUCT = gql`
    mutation createProduct($seller: String, $createProductInput: CreateProductInput!){
    createProduct(seller:$seller,createProductInput:$createProductInput){
        _id,
        number,
        message
    }
    }
`

export default function index(){

    const[data,setData] = useState(null);

    const [createBoard] = useMutation(CREATE_BOARD)
    const [createProduct] = useMutation(CREATE_PRODUCT)
    

    async function handleClick() {
        console.log(data)
        const result = await createBoard({
            variables: {
                writer: data?.writer,
                title: data?.title,
                contents: data?.contents
            }
        })
        console.log(result)
    }   

    async function handleClick2() {
        console.log(data)
        const result = await createProduct({
            variables: {
                seller: data?.seller,
                createProductInput: {
                    name: data?.name,
                    detail: data?.detail,
                    price: Number(data?.price)
                }
            }
        })
        console.log(result)
    }   

    function handleChange(e){
        setData({
          ...data,
            [e.target.name]:e.target.value
        })
    }

    return(
        <>
        writer : <input type="text" name="writer" onChange={handleChange}/>
        title :<input type="text" name="title" onChange={handleChange}/>
        contents :<input type="text" name="contents" onChange={handleChange}/>
        <button onClick={handleClick}>GRAPHQL-API 요청하기(createBoard)</button>
        <br/>
        seller : <input type="text" name="seller" onChange={handleChange}/>
        name :<input type="text" name="name" onChange={handleChange}/>
        detail :<input type="text" name="detail" onChange={handleChange}/>
        price :<input type="number" name="price" onChange={handleChange}/>
        <button onClick={handleClick2}>GRAPHQL-API 요청하기(createProduct)</button>
        </>
        
    )
}