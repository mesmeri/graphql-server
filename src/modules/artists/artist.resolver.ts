import { CreateArtistDto, UpdateArtistDto } from "./artist.types";

const resolver = {
  Query: {
    artist: async (
      _: any,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.artistAPI.getArtistById(id);
    },
    artists: async (_: any, __: any, { dataSources }: { dataSources: any }) => {
      return await dataSources.artistAPI.getAll();
    },
  },

  Artist: {
    async bands(parent: any, _: any, { dataSources }: any) {
      const bandsData = await Promise.all(
        parent.bandsIds.map((id: string) => {
          return dataSources.bandAPI.getBandById(id);
        })
      );

      return bandsData;
    },
  },

  Mutation: {
    createArtist: async (
      _: any,
      { createArtistInput }: { createArtistInput: CreateArtistDto },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.artistAPI.create(createArtistInput);
    },
    updateArtist: async (
      _: any,
      {
        id,
        updateArtistInput,
      }: { id: string; updateArtistInput: UpdateArtistDto },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.artistAPI.update(id, updateArtistInput);
    },
    deleteArtist: async (
      _: any,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.artistAPI.deleteArtist(id);
    },
  },
};

export default resolver;
