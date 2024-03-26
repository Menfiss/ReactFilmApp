import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Movie = {
  __typename?: 'Movie';
  actors: Array<Scalars['String']['output']>;
  description: Scalars['String']['output'];
  director: Scalars['String']['output'];
  genre: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imageUrl: Scalars['String']['output'];
  poster: Scalars['String']['output'];
  rating: Scalars['Int']['output'];
  title: Scalars['String']['output'];
  trailerUrl: Scalars['String']['output'];
  year: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  movie: Movie;
  movies?: Maybe<Array<Movie>>;
};


export type QueryMovieArgs = {
  id: Scalars['String']['input'];
};

export type GetMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMoviesQuery = { __typename?: 'Query', movies?: Array<{ __typename?: 'Movie', id: string, genre: string, director: string, actors: Array<string>, imageUrl: string, title: string, year: number, description: string, poster: string, trailerUrl: string }> | null };

export type GetMovieQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetMovieQuery = { __typename?: 'Query', movie: { __typename?: 'Movie', actors: Array<string>, director: string, genre: string, id: string, imageUrl: string, title: string, year: number, description: string, poster: string, trailerUrl: string, rating: number } };

export type GetMovieImageQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetMovieImageQuery = { __typename?: 'Query', movie: { __typename?: 'Movie', imageUrl: string } };

export type GetGenreQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGenreQuery = { __typename?: 'Query', movies?: Array<{ __typename?: 'Movie', id: string, genre: string }> | null };


export const GetMoviesDocument = gql`
    query GetMovies {
  movies {
    id
    genre
    director
    actors
    imageUrl
    title
    year
    description
    poster
    trailerUrl
  }
}
    `;

/**
 * __useGetMoviesQuery__
 *
 * To run a query within a React component, call `useGetMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMoviesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMoviesQuery(baseOptions?: Apollo.QueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
      }
export function useGetMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
        }
export function useGetMoviesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMoviesQuery, GetMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMoviesQuery, GetMoviesQueryVariables>(GetMoviesDocument, options);
        }
export type GetMoviesQueryHookResult = ReturnType<typeof useGetMoviesQuery>;
export type GetMoviesLazyQueryHookResult = ReturnType<typeof useGetMoviesLazyQuery>;
export type GetMoviesSuspenseQueryHookResult = ReturnType<typeof useGetMoviesSuspenseQuery>;
export type GetMoviesQueryResult = Apollo.QueryResult<GetMoviesQuery, GetMoviesQueryVariables>;
export const GetMovieDocument = gql`
    query GetMovie($id: String!) {
  movie(id: $id) {
    actors
    director
    genre
    id
    imageUrl
    title
    year
    description
    poster
    trailerUrl
    rating
  }
}
    `;

/**
 * __useGetMovieQuery__
 *
 * To run a query within a React component, call `useGetMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieQuery(baseOptions: Apollo.QueryHookOptions<GetMovieQuery, GetMovieQueryVariables> & ({ variables: GetMovieQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
      }
export function useGetMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
        }
export function useGetMovieSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMovieQuery, GetMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieQuery, GetMovieQueryVariables>(GetMovieDocument, options);
        }
export type GetMovieQueryHookResult = ReturnType<typeof useGetMovieQuery>;
export type GetMovieLazyQueryHookResult = ReturnType<typeof useGetMovieLazyQuery>;
export type GetMovieSuspenseQueryHookResult = ReturnType<typeof useGetMovieSuspenseQuery>;
export type GetMovieQueryResult = Apollo.QueryResult<GetMovieQuery, GetMovieQueryVariables>;
export const GetMovieImageDocument = gql`
    query GetMovieImage($id: String!) {
  movie(id: $id) {
    imageUrl
  }
}
    `;

/**
 * __useGetMovieImageQuery__
 *
 * To run a query within a React component, call `useGetMovieImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMovieImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMovieImageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMovieImageQuery(baseOptions: Apollo.QueryHookOptions<GetMovieImageQuery, GetMovieImageQueryVariables> & ({ variables: GetMovieImageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMovieImageQuery, GetMovieImageQueryVariables>(GetMovieImageDocument, options);
      }
export function useGetMovieImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMovieImageQuery, GetMovieImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMovieImageQuery, GetMovieImageQueryVariables>(GetMovieImageDocument, options);
        }
export function useGetMovieImageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMovieImageQuery, GetMovieImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMovieImageQuery, GetMovieImageQueryVariables>(GetMovieImageDocument, options);
        }
export type GetMovieImageQueryHookResult = ReturnType<typeof useGetMovieImageQuery>;
export type GetMovieImageLazyQueryHookResult = ReturnType<typeof useGetMovieImageLazyQuery>;
export type GetMovieImageSuspenseQueryHookResult = ReturnType<typeof useGetMovieImageSuspenseQuery>;
export type GetMovieImageQueryResult = Apollo.QueryResult<GetMovieImageQuery, GetMovieImageQueryVariables>;
export const GetGenreDocument = gql`
    query GetGenre {
  movies {
    id
    genre
  }
}
    `;

/**
 * __useGetGenreQuery__
 *
 * To run a query within a React component, call `useGetGenreQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGenreQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGenreQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGenreQuery(baseOptions?: Apollo.QueryHookOptions<GetGenreQuery, GetGenreQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGenreQuery, GetGenreQueryVariables>(GetGenreDocument, options);
      }
export function useGetGenreLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGenreQuery, GetGenreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGenreQuery, GetGenreQueryVariables>(GetGenreDocument, options);
        }
export function useGetGenreSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetGenreQuery, GetGenreQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetGenreQuery, GetGenreQueryVariables>(GetGenreDocument, options);
        }
export type GetGenreQueryHookResult = ReturnType<typeof useGetGenreQuery>;
export type GetGenreLazyQueryHookResult = ReturnType<typeof useGetGenreLazyQuery>;
export type GetGenreSuspenseQueryHookResult = ReturnType<typeof useGetGenreSuspenseQuery>;
export type GetGenreQueryResult = Apollo.QueryResult<GetGenreQuery, GetGenreQueryVariables>;