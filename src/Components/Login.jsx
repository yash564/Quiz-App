import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../Context/Authprovider";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);

  const handleLogin = async () => {
    let response = await login(email, password);
    props.history.push("/");
    console.log(response.user.uid);
  };

  const useStyle = makeStyles({
    linkStyle: {
      textDecoration: "none",
      color: "white",
    },
    text: {
      width: "90%",
    },
    center:{
      display:"flex",
      justifyContent:"center"
    }
  });
  let classes = useStyle();

  return (
    <div>
      <Nav></Nav>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "90.3vh",
          background: "#5d6cd7",
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h4" style={{ textAlign: "center", padding:"8px" }}>
              Sign In to Quiz App
            </Typography>
          </CardContent>
          <CardContent className={classes.center}>
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={classes.text}
            ></TextField>
          </CardContent>
          <CardContent className={classes.center}>
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className={classes.text}
            ></TextField>
          </CardContent>
          <CardActions className={classes.center}>
            <Button
              color="primary"
              variant="contained"
              onClick={handleLogin}
              style={{ width: "70%" }}
            >
              Log In
            </Button>
          </CardActions>
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant="p" style={{ marginRight: "8px" }}>
              Don't have an account?
            </Typography>
            <Button color="primary" variant="contained">
              <Link to="/signup" className={classes.linkStyle}>
                Sign Up
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
