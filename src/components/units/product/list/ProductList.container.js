import { useMutation, useQuery } from "@apollo/client";
import ProductListUI from "./ProductList.presenter";
import { DELETE_PRODUCT, FETCH_PRODUCTS } from "./ProductList.queries";

export default function ProductList() {
  const { data } = useQuery(FETCH_PRODUCTS);
  const [deleteProduct] = useMutation(DELETE_PRODUCT);

  const onClickDelete = (event) => {
    console.log(event.target.id);
    deleteProduct({
      variables: {
        productId: event.target.id,
      },
      refetchQueries: [{ query: FETCH_PRODUCTS }],
    });
  };

  return <ProductListUI data={data} onClickDelete={onClickDelete} />;
}
