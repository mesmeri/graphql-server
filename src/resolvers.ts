import { mergeDeepRight, reduce } from "ramda";
import userResolver from "./modules/users/user.resolver";
import artistResolver from "./modules/artists/artist.resolver";
import genreResolver from "./modules/genres/genre.resolver";

const resolvers = reduce<Record<string, any>, Record<string, any>>(
  mergeDeepRight,
  {},
  [userResolver, artistResolver, genreResolver]
);

export default resolvers;
