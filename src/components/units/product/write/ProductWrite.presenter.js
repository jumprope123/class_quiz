export default function ProductWritePresenter(props) {
  return (
    <>
      seller :{" "}
      <input type={"text"} name="seller" onChange={props.handleChange} />
      <br />
      name : <input type={"text"} name="name" onChange={props.handleChange} />
      <br />
      detail :{" "}
      <input type={"text"} name="detail" onChange={props.handleChange} />
      <br />
      price :{" "}
      <input type={"number"} name="price" onChange={props.handleChange} />
      <br />
      <button onClick={props.handleClick}>제출</button>
    </>
  );
}
