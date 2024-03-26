import { Box, Toolbar } from "@mui/material";
import Navbar from "../components/Navbar/Navbar";
import TrendingBox from "@/components/TrendingBox/TrendingBox";
import MovieRows from "@/components/MovieRows/MovieRows";

export default function Home() {
  return (
    <Box>
      <Toolbar variant="regular">
        <Navbar></Navbar>
      </Toolbar>

      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <TrendingBox></TrendingBox>
      </Box>

      <MovieRows></MovieRows>
    </Box>
  );
}
