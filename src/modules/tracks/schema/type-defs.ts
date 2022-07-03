import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Track {
    id: ID!
    title: String!
    albums: [Album]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }
`;

export default typeDefs;
