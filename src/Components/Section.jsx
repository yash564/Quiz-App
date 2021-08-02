import React from "react";
import { Typography, makeStyles, Card, CardMedia } from "@material-ui/core";
import Video from "../Video.mp4";

const Section = () => {
  const useStyle = makeStyles({
    font: {
      fontFamily: "cursive",
      marginBottom: "50px",
      marginTop: "50px",
      textAlign: "center",
    },
    videoDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "80vh",
    },
    video: {
      height: "100%",
      width: "100%",
    },
  });
  let classes = useStyle();
  return (
    <div>
      {/* <Typography variant="h4" className={classes.font}>
        They engage from any device. You get instant feedback.
      </Typography> */}
      <Typography variant="h3" className={classes.font}>
        Play and Beat the High Score!!
      </Typography>
      <div className={classes.videoDiv}>
        <video
          className={classes.video}
          autoPlay
          loop
          muted
        >
            <source src={Video} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default Section;
