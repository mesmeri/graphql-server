import { CreateBandDto, UpdateBandDto } from "./band.types";

const resolver = {
  Query: {
    band: async (
      _: any,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.bandAPI.getBandById(id);
    },
    bands: async (_: any, __: any, { dataSources }: { dataSources: any }) => {
      return await dataSources.bandAPI.getAll();
    },
  },

  Mutation: {
    createBand: async (
      _: any,
      { createBandInput }: { createBandInput: CreateBandDto },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.bandAPI.create(createBandInput);
    },
    updateBand: async (
      _: any,
      { id, updateBandInput }: { id: string; updateBandInput: UpdateBandDto },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.bandAPI.update(id, updateBandInput);
    },
    deleteBand: async (
      _: any,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.bandAPI.deleteBand(id);
    },
  },
};

export default resolver;
