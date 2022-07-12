import { CreateGenreDto, UpdateGenreDto } from "./genre.types";

const resolver = {
  Query: {
    genre: async (
      _: any,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.genreAPI.getGenreById(id);
    },
    genres: async (_: any, __: any, { dataSources }: { dataSources: any }) => {
      return await dataSources.genreAPI.getAll();
    },
  },

  Mutation: {
    createGenre: async (
      _: any,
      { createGenreInput }: { createGenreInput: CreateGenreDto },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.genreAPI.create(createGenreInput);
    },
    updateGenre: async (
      _: any,
      {
        id,
        updateGenreInput,
      }: { id: string; updateGenreInput: UpdateGenreDto },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.genreAPI.update(id, updateGenreInput);
    },
    deleteGenre: async (
      _: any,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.genreAPI.deleteGenre(id);
    },
  },
};

export default resolver;
