import { gql } from "@apollo/client";

export const CREATE_PRODUCT_INPUT = gql`
  mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;

export const UPDATE_PRODUCT_INPUT = gql`
  mutation updateProduct($productId: ID, $updateProductInput: UpdateProductInput!) {
    updateProduct(productId: $productId, updateProductInput: $updateProductInput) {
      _id
      number
      message
    }
  }
`;
