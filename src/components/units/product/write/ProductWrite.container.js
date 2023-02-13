import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductWritePresenter from "./ProductWrite.presenter";
import { CREATE_PRODUCT_INPUT } from "./ProductWrite.queries";

export default function ProductWriteContainer() {
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

      router.push(`/05/boards/${result.data.createProduct._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ProductWritePresenter
      handleChange={handleChange}
      handleClick={handleClick}
    />
  );
}
