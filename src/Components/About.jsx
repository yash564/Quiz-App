import React from "react";
import { Typography, Card, CardContent, makeStyles } from "@material-ui/core";

const About = () => {
  const useStyle = makeStyles({
    card: {
      width: "30vw",
      height: "40vh",
      background: "#5d6cd7",
      color: "white",
      fontFamily: "cursive",
      padding:"23px",
    },
  });
  let classes = useStyle();

  return (
    <div
      style={{
        background: "lightblue",
        height: "80vh",
        // marginBottom: "50px",
        // marginTop: "50px",
      }}
    >
      <Typography
        variant="h3"
        style={{
          textAlign: "center",
          marginBottom: "30px",
        //   marginTop: "50px",
          fontFamily: "cursive",
          padding:"50px"
        }}
      >
        Why Quiz App?
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              No downloading and installation
            </Typography>
            <Typography
              variant="h6"
              style={{ margin: "20px", textAlign: "center" }}
            >
              Launch quizzes and play online with no extra effort required.
            </Typography>
          </CardContent>
        </Card>
        <Card variant="outlined" className={classes.card}>
          <CardContent>
            <Typography
              variant="h4"
              style={{ textAlign: "center", marginTop: "20px" }}
            >
              Online and Offline
            </Typography>
            <Typography
              variant="h6"
              style={{ margin: "20px", marginTop: "40px", textAlign: "center" }}
            >
              Launch quizzes and play online with no extra effort required.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
