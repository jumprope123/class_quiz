export default function ProductDetailPresenter(props) {
  return (
    <>
      <div>seller : {props?.data?.fetchProduct?.seller}</div>
      <div>name : {props?.data?.fetchProduct?.name}</div>
      <div>detail : {props?.data?.fetchProduct?.detail}</div>
      <div>price : {props?.data?.fetchProduct?.price}</div>
    </>
  );
}
