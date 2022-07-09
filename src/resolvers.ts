import { mergeDeepRight, reduce } from "ramda";
import userResolver from "./modules/users/user.resolver";

const resolvers = reduce<Record<string, any>, Record<string, any>>(
  mergeDeepRight,
  {},
  [userResolver]
);

export default resolvers;
