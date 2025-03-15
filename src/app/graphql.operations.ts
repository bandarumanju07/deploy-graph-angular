import { gql } from 'apollo-angular';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
    }
  }
`;

const GET_PRODUCTS_BY_ID = gql`
  query GetProductsById($id: String!) {
    products(id: $id) {
      name
    }
  }
`;

export { GET_PRODUCTS, GET_PRODUCTS_BY_ID };
