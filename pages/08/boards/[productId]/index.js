import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";

const FETCH_PRODUCT = gql`
  query fetchProduct($productId: ID) {
    fetchProduct(productId: $productId) {
      _id
      seller
      name
      detail
      price
      createdAt
    }
  }
`;

export default function App() {
  const router = useRouter();

  const onClickUpdate = () => {
    router.push(`/08/boards/${router.query.productId}/edit`);
  };

  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: router.query.productId,
    },
  });

  console.log(data);

  useEffect(() => {
    console.log(router);
    console.log(router.query);
  }, []);

  return (
    <>
      <div>seller : {data?.fetchProduct?.seller}</div>
      <div>name : {data?.fetchProduct?.name}</div>
      <div>detail : {data?.fetchProduct?.detail}</div>
      <div>price : {data?.fetchProduct?.price}</div>
      <button onClick={onClickUpdate}>수정하기</button>
    </>
  );
}
