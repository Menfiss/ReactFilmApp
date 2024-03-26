import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SearchIcon from "@mui/icons-material/Search";
import { Box, TextField, Typography } from "@mui/material";
import Link from "next/link";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Link style={{ textDecoration: "none" }} href="/">
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontSize: "2.5rem",
            }}
          >
            LOGO
          </Typography>
        </Link>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <TextField
          sx={{ input: { color: "white", border: "1px solid white"}}}
          placeholder="Search"
        ></TextField>
        <SearchIcon
          sx={{ color: "white", fontSize: "2rem", marginLeft: "1rem" }}
        ></SearchIcon>
      </Box>
      <Box>
        <Link href="/mylistPage">
          <BookmarkBorderIcon
            sx={{ color: "white", fontSize: "2rem", marginLeft: "1rem" }}
          ></BookmarkBorderIcon>
        </Link>

        <NotificationsNoneOutlinedIcon
          sx={{ color: "white", fontSize: "2rem", marginLeft: "1rem" }}
        ></NotificationsNoneOutlinedIcon>

        <Link href="/loginPage">
          <AccountCircleIcon
            sx={{ color: "white", fontSize: "2rem", marginLeft: "1rem" }}
          ></AccountCircleIcon>
        </Link>
      </Box>
    </Box>
  );
};

export default Navbar;
