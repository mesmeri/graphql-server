import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }
`;

export default typeDefs;
