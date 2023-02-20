import { Button, Input } from "./ProductWrite.emotions";

export default function ProductWritePresenter(props) {
  console.log(props.boolButton);
  return (
    <>
      seller : <Input type={"text"} name="seller" onChange={props.handleChange} />
      <br />
      name : <Input type={"text"} name="name" onChange={props.handleChange} />
      <br />
      detail : <Input type={"text"} name="detail" onChange={props.handleChange} />
      <br />
      price : <Input type={"number"} name="price" onChange={props.handleChange} />
      <br />
      <Button boolButton={props.boolButton} onClick={props.isEdit ? props.handleUpdate : props.handleClick}>
        {props.isEdit === true ? "수정" : "등록"}
      </Button>
    </>
  );
}
