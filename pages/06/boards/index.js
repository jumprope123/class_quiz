import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductWriteContainer from "../../../src/components/units/product/write/ProductWrite.container";

export default function App() {
  return <ProductWriteContainer />;
}
