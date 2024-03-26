import { Box, Typography } from "@mui/material";
import MovieBox from "../MovieBox/MovieBox";

interface props {
  genre: String;
  ids: string[];
}

const MovieRow: React.FC<props> = (props) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "1.5em",
          fontWeight: "bold",
          marginTop: "1rem",
          marginLeft: "2rem",
          color: "white",
        }}
        paragraph={true}
      >
        {props.genre}
      </Typography>
      <Box
        sx={{
          display: "flex",
          marginLeft: "2rem",
        }}
      >
        {props.ids.map((id, index) => {
          return <MovieBox key={index} id={id}></MovieBox>;
        })}
      </Box>
    </>
  );
};

export default MovieRow;
