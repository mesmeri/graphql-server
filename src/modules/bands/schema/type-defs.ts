import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Band {
    _id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Member {
    _id: ID!
    artist: Artist
    instrument: String
    years: [String]
  }

  input MemberInput {
    artist: CreateArtistInput
    instrument: String
    years: [String]
  }

  input BandInput {
    name: String
    origin: String
    members: [MemberInput]
    website: String
    genres: [GenreInput]
  }
`;

export default typeDefs;
