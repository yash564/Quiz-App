import {
  Typography,
  makeStyles,
  Grid,
  Card,
  CardContent,
  Container,
  Button,
  CardActions,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Pricing = () => {
  const useStyle = makeStyles({
    section1: {
      height: "35vh",
      background: "#5d6cd7",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
    },
    center: {
      textAlign: "center",
    },
    linkStyle: {
      textDecoration: "none",
      color: "white",
    },
    cards: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
    },
  });
  let classes = useStyle();

  return (
    <div>
      <Nav></Nav>
      <div className={classes.section1}>
        <Typography variant="h3" style={{ marginBottom: "10px" }}>
          Choose a plan
        </Typography>
        <Typography variant="h4">
          Find the right solution for your needs
        </Typography>
      </div>
      <div
        className={classes.center}
        style={{
          marginTop: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          variant="contained"
          size="large"
          style={{
            fontSize: "19px",
            width: "15%",
            background: "yellow",
            fontWeight: "bold",
            border:"1px solid black",
          }}
        >
          <CardContent>Annual</CardContent>
        </Card>
      </div>
      <Container style={{ marginTop: "30px" }}>
        <Grid container spacing={5} className={classes.cards}>
          <Grid item xs={3}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  variant="h5"
                  className={classes.center}
                  style={{ background: "aqua" }}
                >
                  FREE
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  variant="h3"
                  className={classes.center}
                  style={{ color: "aquamarine" }}
                >
                  FREE
                </Typography>
              </CardContent>
              <CardContent className={classes.center}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ width: "70%" }}
                >
                  <Link to="/signup" className={classes.linkStyle}>
                    SignUp
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  variant="h5"
                  className={classes.center}
                  style={{ background: "orange" }}
                >
                  BASIC
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  variant="h3"
                  className={classes.center}
                  style={{ color: "orchid" }}
                >
                  $11
                </Typography>
              </CardContent>
              <CardContent className={classes.center}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ width: "70%" }}
                >
                  Buy
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card variant="outlined">
              <CardContent>
                <Typography
                  variant="h5"
                  className={classes.center}
                  style={{ background: "red" }}
                >
                  PROFESSIONAL
                </Typography>
              </CardContent>
              <CardContent>
                <Typography
                  variant="h3"
                  className={classes.center}
                  style={{ color: "blueviolet" }}
                >
                  $15
                </Typography>
              </CardContent>
              <CardContent className={classes.center}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ width: "70%" }}
                >
                  Buy
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Pricing;
