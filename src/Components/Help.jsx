import React from "react";
import Nav from "./Nav";
import {
  Typography,
  makeStyles,
  Card,
  CardContent,
  Grid,
  Container,
} from "@material-ui/core";

const Help = () => {
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
          How can we help you?
        </Typography>
        <Typography variant="h4">
          I hope below querie's answers can help you:)
        </Typography>
      </div>
      <Container style={{ marginTop: "30px" }}>
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <Card variant="outlined">
              <CardContent className={classes.cards}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  What steps should I do to play the quiz?
                </Typography>
              </CardContent>
              <CardContent className={classes.cards}>
                <Typography variant="h6">
                  To join the quiz you need to signup into quiz app by just
                  clicking Try Now option!!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card variant="outlined">
              <CardContent className={classes.cards}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  Is there any way to rearrange the order of my questions?
                </Typography>
              </CardContent>
              <CardContent className={classes.cards}>
                <Typography variant="h6">
                  The following are paid features Show questions in random order
                  will be applied the same for all players. Show answer options
                  in random order will arrange answers for each player
                  individually.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card variant="outlined">
              <CardContent className={classes.cards}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  How can I edit my account settings?
                </Typography>
              </CardContent>
              <CardContent className={classes.cards}>
                <Typography variant="h6">
                  For account settings please visit My Profile section where you
                  can change your username and profile picture.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={3}>
            <Card variant="outlined">
              <CardContent className={classes.cards}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                  Is it possible to have background music in our quiz? Can I add
                  music to a quiz?
                </Typography>
              </CardContent>
              <CardContent className={classes.cards}>
                <Typography variant="h6">
                  Unfortunately you can't add music but we add this
                  functionality in future for sure!!
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Help;
