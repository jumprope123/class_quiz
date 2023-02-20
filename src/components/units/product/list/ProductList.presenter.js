import {
  CheckBox,
  ContentDiv,
  DeleteDiv,
  Wrapper,
} from "./ProductList.emotions";

export default function ProductListUI(props) {
  return (
    <>
      {props.data?.fetchProducts.map((product) => (
        <Wrapper key={product?._id}>
          <CheckBox type={"checkbox"}></CheckBox>
          <ContentDiv>{product?.seller}</ContentDiv>
          <ContentDiv>{product?.name}</ContentDiv>
          <ContentDiv>{product?.detail}</ContentDiv>
          <ContentDiv>{product?.price}</ContentDiv>
          <DeleteDiv id={product?._id} onClick={props.onClickDelete}>
            삭제
          </DeleteDiv>
        </Wrapper>
      ))}
    </>
  );
}
