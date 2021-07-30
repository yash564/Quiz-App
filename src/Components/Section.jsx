import React from "react";
import { Typography, makeStyles, Card, CardMedia } from "@material-ui/core";
import Video from "../Video.mp4";

const Section = () => {
  const useStyle = makeStyles({
    font: {
      fontFamily: "cursive",
      marginBottom: "20px",
      marginTop: "20px",
      textAlign: "center",
    },
    videoDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "66vh",
    },
    video: {
      height: "100%",
      width: "100%",
    },
  });
  let classes = useStyle();
  return (
    <div>
      <Typography variant="h4" className={classes.font}>
        They engage from any device. You get instant feedback.
      </Typography>
      <Typography variant="h5" className={classes.font}>
        Play with your peers and see who scores best!!
      </Typography>
      <div className={classes.videoDiv}>
        <video
          className={classes.video}
          autoPlay
          loop
        >
            <source src={Video} type="video/mp4"></source>
        </video>
      </div>
    </div>
  );
};

export default Section;
