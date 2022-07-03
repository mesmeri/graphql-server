import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Member {
    id: ID!
    artist: Artist
    instrument: String
    years: [String]
  }
`;

export default typeDefs;
