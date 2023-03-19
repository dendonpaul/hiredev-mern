import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Login.css";
import Header from "../header/Header";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic
  };

  return (
    <>
      <Header />
      <main className="main">
        <Typography variant="h4">Login Page</Typography>
        <form onSubmit={handleSubmit} className="login-form">
          <Typography variant="h5">Login</Typography>
          <TextField
            className="login-field"
            label="Email"
            variant="outlined"
            type="email"
            name="email"
            required
          />
          <TextField
            className="login-field"
            label="Password"
            variant="outlined"
            type="password"
            name="password"
            required
          />
          <Button
            className="login-button"
            variant="contained"
            color="primary"
            type="submit"
          >
            Login
          </Button>
        </form>
      </main>
      <footer className="login-footer" style={{ minHeight: "1000px" }}>
        <Typography variant="h6">Footer</Typography>
      </footer>
    </>
  );
}

export default Login;
