import ArtistsTypeDefs from "./modules/artists/artist.schema";
import AlbumsTypeDefs from "./modules/albums/album.schema";
import BandsTypeDefs from "./modules/bands/band.schema";
import FavouritesTypeDefs from "./modules/favourites/favourites.schema";
import GenresTypeDefs from "./modules/genres/genre.schema";
import TracksTypeDefs from "./modules/tracks/track.schema";
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
