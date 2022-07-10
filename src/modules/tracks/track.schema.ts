import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Track {
    _id: ID!
    title: String!
    artists: Artist
    albums: [Album]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
    bandsIds: [String]
    name: String
  }

  type DeleteTrackResponse {
    acknowledged: Boolean
    deletedCount: Int
  }

  input CreateTrackInput {
    title: String
    name: String
    description: String
    country: String
    year: Int
    bandsIds: [String]
    duration: Int
    genresIds: [String]
  }

  input UpdateTrackInput {
    title: String
    albumId: String
    artistsIds: [String]
    bandsIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  }

  type Query {
    track(id: ID): Track
    tracks: [Track]
  }

  type Mutation {
    createTrack(createTrackInput: CreateTrackInput): Track
    updateTrack(id: ID, updateTrackInput: UpdateTrackInput): Track
    deleteTrack(id: ID): DeleteTrackResponse
  }
`;

export default typeDefs;
