import { ApolloServer } from "apollo-server-express";
import * as express from "express";
import { DocumentNode } from "graphql";
import "dotenv/config";

import resolvers from "./resolvers";
import typeDefs from "./schema";
import UserAPI from "./modules/users/user.api";
import ArtistAPI from "./modules/artists/artist.api";
import GenreAPI from "./modules/genres/genre.api";

const PORT = process.env.PORT || 5000;

async function startApolloServer(typeDefs: DocumentNode[], resolvers: any) {
  const app = express();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    dataSources: () => {
      return {
        userAPI: new UserAPI(),
        artistAPI: new ArtistAPI(),
        genreAPI: new GenreAPI(),
      };
    },
    context: ({ req }) => {
      return {
        token: req.headers.authorization || req.headers.Authorization,
      };
    },
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

startApolloServer(typeDefs, resolvers);
