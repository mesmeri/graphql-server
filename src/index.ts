import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { DocumentNode } from "graphql";
import "dotenv/config";

import ArtistsTypeDefs from "./modules/artists/schema/type-defs";
import AlbumsTypeDefs from "./modules/albums/schema/type-defs";
import BandsTypeDefs from "./modules/bands/schema/type-defs";
import FavouritesTypeDefs from "./modules/favourites/schema/type-defs";
import GenresTypeDefs from "./modules/genres/schema/type-defs";
import TracksTypeDefs from "./modules/tracks/schema/type-defs";
import UsersTypeDefs from "./modules/users/schema/type-defs";

const PORT = process.env.PORT || 5000;

async function startApolloServer(typeDefs: DocumentNode[], resolvers: any) {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
  });
  await server.start();

  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    app.listen({ port: PORT }, () => {
      console.log(`🚀 Server ready at PORT ${PORT}`);
      resolve();
    })
  );
}

const typeDefs = [
  ArtistsTypeDefs,
  AlbumsTypeDefs,
  BandsTypeDefs,
  FavouritesTypeDefs,
  GenresTypeDefs,
  TracksTypeDefs,
  UsersTypeDefs,
];

startApolloServer(typeDefs, {});
