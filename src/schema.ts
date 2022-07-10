import ArtistsTypeDefs from "./modules/artists/artist.schema";
import AlbumsTypeDefs from "./modules/albums/schema/type-defs";
import BandsTypeDefs from "./modules/bands/schema/type-defs";
import FavouritesTypeDefs from "./modules/favourites/schema/type-defs";
import GenresTypeDefs from "./modules/genres/genre.schema";
import TracksTypeDefs from "./modules/tracks/schema/type-defs";
import UsersTypeDefs from "./modules/users/user.schema";

const typeDefs = [
  ArtistsTypeDefs,
  AlbumsTypeDefs,
  BandsTypeDefs,
  FavouritesTypeDefs,
  GenresTypeDefs,
  TracksTypeDefs,
  UsersTypeDefs,
];

export default typeDefs;
