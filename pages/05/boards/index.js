import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";

const CREATE_PRODUCT_INPUT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export default function App() {
  const [data, setData] = useState({});
  const [createProduct] = useMutation(CREATE_PRODUCT_INPUT);
  const router = useRouter();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      const result = await createProduct({
        variables: {
          seller: data?.seller,
          createProductInput: {
            name: data?.name,
            detail: data?.detail,
            price: Number(data?.price),
          },
        },
      });

      console.log(result);
      router.push(`/05/boards/${result.data.createProduct._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      seller : <input type={"text"} name="seller" onChange={handleChange} />
      <br />
      name : <input type={"text"} name="name" onChange={handleChange} />
      <br />
      detail : <input type={"text"} name="detail" onChange={handleChange} />
      <br />
      price : <input type={"number"} name="price" onChange={handleChange} />
      <br />
      <button onClick={handleClick}>제출</button>
    </>
  );
}
