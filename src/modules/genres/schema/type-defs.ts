import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Genre {
    _id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  input GenreInput {
    name: String
    description: String
    country: String
    year: Int
  }
`;

export default typeDefs;
