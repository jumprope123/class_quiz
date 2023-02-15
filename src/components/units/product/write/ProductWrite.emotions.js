import styled from "@emotion/styled";

export const Input = styled.input`
  width: 300px;
  border: 1px solid black;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.boolButton ? "green" : "default")};
`;
