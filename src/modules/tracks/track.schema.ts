import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Track {
    _id: ID!
    title: String!
    artists: [Artist]
    album: Album
    bands: [Band]
    genres: [Genre]
    bandsIds: [String]
    genresIds: [String]
    artistsIds: [String]
    duration: Int
    released: Int
  }

  type DeleteTrackResponse {
    acknowledged: Boolean
    deletedCount: Int
  }

  input CreateTrackInput {
    title: String
    description: String
    country: String
    year: Int
    duration: Int
    bandsIds: [String]
    genresIds: [String]
  }

  input UpdateTrackInput {
    title: String
    albumId: String
    artistsIds: [String]
    duration: Int
    released: Int
    bandsIds: [String]
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
