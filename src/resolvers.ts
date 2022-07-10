import { mergeDeepRight, reduce } from "ramda";

import userResolver from "./modules/users/user.resolver";
import artistResolver from "./modules/artists/artist.resolver";
import genreResolver from "./modules/genres/genre.resolver";
import bandResolver from "./modules/bands/band.resolver";
import trackResolver from "./modules/tracks/track.resolver";
import albumResolver from "./modules/albums/album.resolver";

const resolvers = reduce<Record<string, any>, Record<string, any>>(
  mergeDeepRight,
  {},
  [
    userResolver,
    artistResolver,
    genreResolver,
    bandResolver,
    trackResolver,
    albumResolver,
  ]
);

export default resolvers;
