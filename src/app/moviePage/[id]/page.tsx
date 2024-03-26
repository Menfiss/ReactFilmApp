"use client";
import { getApolloClient } from "@/app/apollo-client";
import Navbar from "@/components/Navbar/Navbar";
import { useGetMovieQuery } from "@/generated/graphql";
import { Box, Toolbar, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";
import Image from "next/image";

export default function Detail({ params: { id } }: { params: { id: string } }) {
  const { data, loading, error } = useGetMovieQuery({
    client: getApolloClient(),
    variables: { id },
  });
  return (
    <>
      <Toolbar variant="regular">
        <Navbar></Navbar>
      </Toolbar>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingTop: "2em",
          paddingLeft: "5em",
          paddingRight: "2em",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "15px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            marginRight: "2em",
          }}
        >
          <Box>
            <iframe
              width="700"
              height="350"
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
              flexDirection: "row",
              marginRight: "8em",
              paddingTop: "1.4em",
            }}
          >
            <Image
              style={{ borderRadius: "15px", marginRight: "2em" }}
              src={data !== undefined ? data.movie.poster : ""}
              width={150}
              height={220}
              alt="Poster of a movie"
            ></Image>

            <Typography maxWidth={500} color={"white"} paragraph={true}>
              {data?.movie.description}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box>
            <Typography color={"white"} variant="h4">
              {data?.movie.title}
            </Typography>
            <Typography color={"white"} paragraph={true}>
              Year: {data?.movie.year}
            </Typography>
            <Typography color={"white"} paragraph={true}>
              Genre: {data?.movie.genre}
            </Typography>
            <Typography color={"white"} paragraph={true}>
              Main Actors: {data?.movie.actors.join(", ")}
            </Typography>
            <Typography color={"white"} paragraph={true}>
              Director: {data?.movie.director}
            </Typography>
          </Box>
          <Box height={200}>
            <PieChart
              series={[
                {
                  data: [
                    {
                      value: data !== undefined ? data?.movie.rating : 0,
                      color: "yellow",
                    },
                    {
                      value:
                        100 - (data !== undefined ? data?.movie.rating : 0),
                      color: "grey",
                    },
                  ],
                  arcLabel: "value",
                  innerRadius: 30,
                  outerRadius: 100,
                  paddingAngle: 5,
                  cornerRadius: 5,
                  startAngle: -90,
                },
              ]}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}
