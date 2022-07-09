import { gql } from "apollo-server-express";

const typeDefs = gql`
  type Artist {
    _id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  type DeleteArtistResponse {
    acknowledged: Boolean
    deletedCount: Int
  }

  input CreateArtistInput {
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [BandInput]
    instruments: [String]
  }

  input DeleteArtistInput {
    _id: ID!
  }

  input UpdateArtistInput {
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [BandInput]
    instruments: [String]
  }

  type Query {
    artists: [Artist]
    artist(id: ID): Artist
  }

  type Mutation {
    createArtist(createArtistInput: CreateArtistInput): Artist
    deleteArtist(
      id: ID
      deleteArtistInput: DeleteArtistInput
    ): DeleteArtistResponse
    updateArtist(id: ID, updateArtistInput: UpdateArtistInput): Artist
  }
`;

export default typeDefs;
