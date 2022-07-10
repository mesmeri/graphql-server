import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Genre {
    _id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type DeleteGenreResponse {
    acknowledged: Boolean
    deletedCount: Int
  }

  input CreateGenreInput {
    name: String
    description: String
    country: String
    year: Int
  }

  input UpdateGenreInput {
    name: String
    description: String
    country: String
    year: Int
  }

  type Query {
    genre(id: ID): Genre
    genres: [Genre]
  }

  type Mutation {
    createGenre(createGenreInput: CreateGenreInput): Genre
    updateGenre(id: ID, updateGenreInput: UpdateGenreInput): Genre
    deleteGenre(id: ID): DeleteGenreResponse
  }
`;

export default typeDefs;
