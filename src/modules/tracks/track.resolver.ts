import { CreateTrackDto, UpdateTrackDto } from "./track.types";

const resolver = {
  Query: {
    track: async (
      _: any,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.trackAPI.getTrackById(id);
    },
    tracks: async (_: any, __: any, { dataSources }: { dataSources: any }) => {
      return await dataSources.trackAPI.getAll();
    },
  },

  Track: {
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
    createTrack: async (
      _: any,
      { createTrackInput }: { createTrackInput: CreateTrackDto },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.trackAPI.create(createTrackInput);
    },
    updateTrack: async (
      _: any,
      {
        id,
        updateTrackInput,
      }: { id: string; updateTrackInput: UpdateTrackDto },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.trackAPI.update(id, updateTrackInput);
    },
    deleteTrack: async (
      _: any,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.trackAPI.deleteTrack(id);
    },
  },
};

export default resolver;
