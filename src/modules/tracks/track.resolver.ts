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
