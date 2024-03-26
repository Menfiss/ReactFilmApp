import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import { typeDefs } from "./schema"; 
import movies from "./_db";


const resolvers = {
  Query: {
    movies: () => {
      return movies;
    },
    movie:(_:any, args: {id: string}) => {
      return movies.find(movie => movie.id === args.id);
    }
  },
};



const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {
    context: async req => ({ req }),
});

export { handler as GET, handler as POST };