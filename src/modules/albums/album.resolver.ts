import { CreateAlbumDto, UpdateAlbumDto } from "./album.types";

const resolver = {
  Query: {
    album: async (
      _: any,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.albumAPI.getAlbumById(id);
    },
    albums: async (_: any, __: any, { dataSources }: { dataSources: any }) => {
      return await dataSources.albumAPI.getAll();
    },
  },

  Mutation: {
    createAlbum: async (
      _: any,
      { createAlbumInput }: { createAlbumInput: CreateAlbumDto },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.albumAPI.create(createAlbumInput);
    },
    updateAlbum: async (
      _: any,
      {
        id,
        updateAlbumInput,
      }: { id: string; updateAlbumInput: UpdateAlbumDto },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.albumAPI.update(id, updateAlbumInput);
    },
    deleteAlbum: async (
      _: any,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.albumAPI.deleteAlbum(id);
    },
  },
};

export default resolver;
