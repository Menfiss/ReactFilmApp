import { Box, Button, Input, TextField } from "@mui/material";

const LoginForm = () => {

  return (
    <Box
      sx={{
        width: "100%",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField placeholder="Username"></TextField>
      <TextField placeholder="Email"></TextField>
      <TextField placeholder="Password"></TextField>
      <Button>Login</Button>
    </Box>
  );
};

export default LoginForm;
