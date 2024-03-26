"use client";
import { useGetGenreQuery } from "@/generated/graphql";
import MovieRow from "../MovieRow/MovieRow";
import { getApolloClient } from "@/app/apollo-client";
import { Box } from "@mui/material";

const MovieRows = () => {
  const { data, loading, error } = useGetGenreQuery({
    client: getApolloClient(),
    variables: {},
  });
  let myMovies: { [key: string]: string[] } = {};

  data?.movies?.forEach((element) => {
    if (myMovies[element.genre] === undefined)
      myMovies[element.genre] = new Array();
    myMovies[element.genre].push(element.id);
  });

  return (
    <>
      {Object.keys(myMovies).map((key, index) => {
        return (
          <Box key={index}>
            <MovieRow genre={key} ids={myMovies[key]}></MovieRow>
          </Box>
        );
      })}
    </>
  );
};

export default MovieRows;
