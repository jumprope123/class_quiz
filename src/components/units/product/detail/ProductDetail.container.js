import { FETCH_PRODUCT } from "./ProductDetail.queries";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import ProductDetailPresenter from "./ProductDetail.presenter";

export default function ProductDetailContainer() {
  const router = useRouter();

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

  return <ProductDetailPresenter data={data} />;
}
