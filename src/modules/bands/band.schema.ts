import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Band {
    _id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
    genresIds: [String]
  }

  type Member {
    _id: ID!
    artist: Artist
    instrument: String
    years: [String]
  }

  type DeleteBandResponse {
    acknowledged: Boolean
    deletedCount: Int
  }

  input MemberInput {
    artist: CreateArtistInput
    instrument: String
    years: [String]
  }

  input CreateBandInput {
    name: String
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [String]
  }

  input UpdateBandInput {
    name: String
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [CreateGenreInput]
  }

  type Query {
    band(id: ID): Band
    bands: [Band]
  }

  type Mutation {
    createBand(createBandInput: CreateBandInput): Band
    updateBand(id: ID, updateBandInput: UpdateBandInput): Band
    deleteBand(id: ID): DeleteBandResponse
  }
`;

export default typeDefs;
