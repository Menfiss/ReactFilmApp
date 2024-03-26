import { gql } from "graphql-tag";


export const typeDefs = gql`
type Movie {
  id: String!
  title: String!
  year: Int!
  genre: String!
  director: String!
  actors: [String!]!
  imageUrl: String!
  poster: String!
  trailerUrl: String!
  description: String!
  rating: Int!
}

type Query {
  movies: [Movie!]
  movie(id:String!): Movie!
}

`;