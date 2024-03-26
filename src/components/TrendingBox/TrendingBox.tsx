'use client';
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { getApolloClient } from "@/app/apollo-client";
import { useGetMovieQuery } from "@/generated/graphql";

const TrendingBox = () => {
  const randomNumber = String(Math.floor(Math.random() * 5) + 1);
  const {data, loading, error} = useGetMovieQuery({
    client: getApolloClient(),
    variables: {id: randomNumber},
  });
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          marginTop: "2em",
          borderRadius: "15px",
          overflow: "hidden",
        }}
      >
        <iframe
          width="1100"
          height="600"
          src={data?.movie.trailerUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "2em",
          marginRight: "13em",
          marginLeft: "13em",
        }}
      >
        <Image
          style={{ borderRadius: "15px", marginRight: "2em" }}
          src={data !== undefined ? data.movie.poster : ""}
          width={200}
          height={225}
          alt="Poster of a movie"
        ></Image>
        <Typography color={"white"} paragraph={true}>
          {data?.movie.description}
        </Typography>
      </Box>
    </Box>
  );
};

export default TrendingBox;
