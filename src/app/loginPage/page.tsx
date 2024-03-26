"use client";
import LoginForm from "@/components/LoginForm/LoginForm";
import Navbar from "@/components/Navbar/Navbar";
import { Toolbar } from "@mui/material";

export default function loginPage() {
  
  return (
    <>
      <Toolbar variant="regular">
        <Navbar></Navbar>
      </Toolbar>
      <LoginForm></LoginForm>
    </>
  );
}
