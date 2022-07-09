import { LoginDto, RegisterDto } from "./user.types";

const resolver = {
  Query: {
    user: async (
      _: any,
      { id }: { id: string },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.userAPI.getUserById(id);
    },
    jwt: async (
      _: any,
      { loginInput }: { loginInput: LoginDto },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.userAPI.login(loginInput);
    },
  },

  Mutation: {
    register: async (
      _: any,
      { userInput }: { userInput: any },
      { dataSources }: { dataSources: any }
    ) => {
      return await dataSources.userAPI.register(userInput);
    },
  },
};

export default resolver;
