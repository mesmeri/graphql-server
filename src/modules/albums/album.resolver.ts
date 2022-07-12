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

  Album: {
    async artists(parent: any, _: any, { dataSources }: any) {
      const artistsData = await Promise.all(
        parent.artistsIds.map((id: string) => {
          return dataSources.artistAPI.getArtistById(id);
        })
      );

      return artistsData;
    },
    async bands(parent: any, _: any, { dataSources }: any) {
      const bandsData = await Promise.all(
        parent.bandsIds.map((id: string) => {
          return dataSources.bandAPI.getBandById(id);
        })
      );

      return bandsData;
    },
    async tracks(parent: any, _: any, { dataSources }: any) {
      const tracksData = await Promise.all(
        parent.tracksIds.map((id: string) => {
          return dataSources.trackAPI.getTrackById(id);
        })
      );

      return tracksData;
    },
    async genres(parent: any, _: any, { dataSources }: any) {
      const genresData = await Promise.all(
        parent.genresIds.map((id: string) => {
          return dataSources.genreAPI.getGenreById(id);
        })
      );

      return genresData;
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
