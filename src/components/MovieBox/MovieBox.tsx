"use client";
import { getApolloClient } from "@/app/apollo-client";
import { useGetMovieImageQuery } from "@/generated/graphql";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

interface props {
  id: string;
}

const MovieBox: React.FC<props> = (props) => {
  const { data, loading, error } = useGetMovieImageQuery({
    client: getApolloClient(),
    variables: {
      id: props.id,
    },
  });
  return (
    <Box
      sx={{
        bgcolor: "black",
        boxShadow: 1,
        borderRadius: 2,
        width: "16vw",
        height: "9vw",
        marginRight: "1rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        ":hover": {
          cursor: "pointer",
        },
      }}
    >
      {data !== undefined && data.movie !== null ? (
        <Link href={`/moviePage/${props.id}`}>
        <Image
          style={{ objectFit: "contain" }}
          src={data.movie.imageUrl}
          width={260}
          height={200}
          alt="a"
        ></Image>
        </Link>
      ) : (
        <Typography>loading</Typography>
      )}
    </Box>
  );
};

export default MovieBox;
