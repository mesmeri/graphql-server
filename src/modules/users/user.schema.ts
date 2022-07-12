import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String!
  }

  type JWTToken {
    jwt: String
  }

  input UserInput {
    firstName: String
    lastName: String
    password: String
    email: String!
  }

  input LoginInput {
    email: String
    password: String
  }

  type Query {
    user(id: ID!): User
    jwt(loginInput: LoginInput): JWTToken
  }

  type Mutation {
    register(userInput: UserInput): User
  }
`;

export default typeDefs;
