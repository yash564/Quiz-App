import React from "react";
import {
  Typography,
  makeStyles,
  Card,
  Button,
  CardContent,
  Grid,
  Box,
  CardMedia,
} from "@material-ui/core";
import Cartoon from "../Images/Cartoon.jpg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/Authprovider";
import { useContext } from "react";

const QuizBox = () => {
  const { currentUser } = useContext(AuthContext);

  const useStyle = makeStyles((theme) => ({
    font: {
      fontFamily: "cursive",
      marginBottom: "50px",
      marginTop: "20px",
      textAlign: "center",
    },
    flexing: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      width: "50vw",
      height: "60vh",
    },
    card: {
      margin: "10px",
      border: "1px solid #000",
      background: "lightgray",
      color: "black",
      "&:hover": {
        background: "white",
      },
    },
    linkStyle: {
      textDecoration: "none",
      color: "black",
    },
  }));
  let classes = useStyle();

  return (
    <div style={{ height: "90.3vh" }}>
      <Typography variant="h3" className={classes.font}>
        Explore more quizzes
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "40vw", height: "70vh" }}>
          <CardMedia
            image={Cartoon}
            style={{ height: "100%", width: "100%", backgroundSize: "contain" }}
          ></CardMedia>
        </div>
        <div className={classes.flexing}>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Science and nature" }}
                    className={classes.linkStyle}
                  >
                    Science and nature
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Science and nature
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "History" }}
                    className={classes.linkStyle}
                  >
                    History
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    History
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Geography" }}
                    className={classes.linkStyle}
                  >
                    Geography
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Geography
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Politics" }}
                    className={classes.linkStyle}
                  >
                    Politics
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Politics
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Gadgets" }}
                    className={classes.linkStyle}
                  >
                    Gadgets
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Gadgets
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Art" }}
                    className={classes.linkStyle}
                  >
                    Art
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Art
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Mythology" }}
                    className={classes.linkStyle}
                  >
                    Mythology
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Mythology
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Sports" }}
                    className={classes.linkStyle}
                  >
                    Sports
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Sports
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Animals" }}
                    className={classes.linkStyle}
                  >
                    Animals
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Animals
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Vehicles" }}
                    className={classes.linkStyle}
                  >
                    Vehicles
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Vehicles
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Comics" }}
                    className={classes.linkStyle}
                  >
                    Comics
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Comics
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Books" }}
                    className={classes.linkStyle}
                  >
                    Books
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Books
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Video Games" }}
                    className={classes.linkStyle}
                  >
                    Video Games
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Video Games
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Board Games" }}
                    className={classes.linkStyle}
                  >
                    Board Games
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Board Games
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Cartoons" }}
                    className={classes.linkStyle}
                  >
                    Cartoons
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Cartoons
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Japenese Anime" }}
                    className={classes.linkStyle}
                  >
                    Japenese Anime
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Art
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">
                {currentUser ? (
                  <Link
                    to={{ pathname: "/subjects", name: "Films" }}
                    className={classes.linkStyle}
                  >
                    Films
                  </Link>
                ) : (
                  <Link to="/signup" className={classes.linkStyle}>
                    Films
                  </Link>
                )}
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuizBox;
