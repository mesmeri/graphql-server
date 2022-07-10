import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Album {
    _id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  input CreateAlbumInput {
    name: String
    released: Int
    artists: [String]
    bands: [String]
    tracks: [String]
    genres: [String]
    image: String
  }

  type Query {
    albums: [Album]
  }
`;

export default typeDefs;
