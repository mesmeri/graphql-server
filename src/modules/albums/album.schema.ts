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

  type DeleteAlbumResponse {
    acknowledged: Boolean
    deletedCount: Int
  }

  input CreateAlbumInput {
    name: String!
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
  }

  input UpdateAlbumInput {
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
  }

  type Query {
    album(id: ID!): Album
    albums: [Album]
  }

  type Mutation {
    createAlbum(createAlbumInput: CreateAlbumInput): Album
    updateAlbum(id: ID, updateAlbumInput: UpdateAlbumInput): Album
    deleteAlbum(id: ID): DeleteAlbumResponse
  }
`;

export default typeDefs;
