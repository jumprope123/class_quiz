import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ProductWritePresenter from "./ProductWrite.presenter";
import { CREATE_PRODUCT_INPUT, UPDATE_PRODUCT_INPUT } from "./ProductWrite.queries";

export default function ProductWriteContainer(props) {
  const [data, setData] = useState({});
  const [createProduct] = useMutation(CREATE_PRODUCT_INPUT);
  const [updateProduct] = useMutation(UPDATE_PRODUCT_INPUT);
  const [boolButton, setBoolButton] = useState(false);

  const router = useRouter();

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (data.name && data.detail && data.price && data.price) {
      setBoolButton(true);
    } else {
      setBoolButton(false);
    }
  }, [data]);

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

      router.push(`/08/boards/${result.data.createProduct._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const result = await updateProduct({
        variables: {
          productId: router.query.productId,
          updateProductInput: {
            name: data?.name,
            detail: data?.detail,
            price: Number(data?.price),
          },
        },
      });
      router.push(`/08/boards/${result.data.updateProduct._id}`);
    } catch (err) {
      console.error(err);
    }
  };

  return <ProductWritePresenter handleChange={handleChange} handleClick={handleClick} handleUpdate={handleUpdate} boolButton={boolButton} isEdit={props.isEdit} />;
}
