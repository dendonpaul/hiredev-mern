import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Login.css";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <Typography variant="h4">Login Header</Typography>
      </header>
      <main className="login-main">
        <form onSubmit={handleSubmit} className="login-form">
          <Typography variant="h5">Login</Typography>
          <TextField
            className="login-field"
            label="Email"
            variant="outlined"
            type="email"
            required
          />
          <TextField
            className="login-field"
            label="Password"
            variant="outlined"
            type="password"
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
      <footer className="login-footer">
        <Typography variant="h6">Footer</Typography>
      </footer>
    </div>
  );
}

export default Login;
