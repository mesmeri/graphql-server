import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    firstName: String
    secondName: String
    password: String
    email: String!
  }
`;

export default typeDefs;
