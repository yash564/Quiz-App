import React from "react";
import { makeStyles, Button, Typography } from "@material-ui/core";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import {Link} from "react-router-dom";
import { AuthContext } from "../Context/Authprovider";
import {useContext} from "react";

const Container = () => {
  const {currentUser} =useContext(AuthContext);

  const useStyle = makeStyles({
    color: {
      backgroundColor: "#5d6cd7",
      height: "90vh",
      position: "relative",
    },
    center: {
      width: "50%",
      position: "absolute",
      top: "120px",
      left: "60px",
    },
    imgDiv: {
      position: "absolute",
      top: "50px",
      right: "140px",
    },
    image: {
      height: "100%",
      width: "100%",
    },
    linkStyle: {
      textDecoration: "none",
      color: "white",
    },
    mb:{
      marginBottom: "20px", 
      fontFamily:"cursive",
    }
  });
  let classes = useStyle();

  // const theme = createTheme({
  //   typography: {
  //     fontFamily: "cursive",
  //   },
  // });

  return (
    <div className={classes.color}>
      <div className={classes.center}>
        <ThemeProvider>
          <Typography variant="h3" className={classes.mb}>
            Online Quiz Application
          </Typography>
          <Typography variant="h6" className={classes.mb}>
            Taking online quizzes can be formal as well as informal. If you give
            a presentation about a certain subject and you want to test what the
            people have learnt from your presentation, you can take a test.
            There’s no need for people to download an app, which is very
            time-consuming. You are able to make an online quiz on any device
            with a modern browser. From laptops, tablets to mobile phones, as
            long as you’re connected to the Internet. Our responsive design
            makes that possible.
          </Typography>
        </ThemeProvider>
        <Button variant="contained" color="secondary">
          {/* {currentUser?( */}
            <Link className={classes.linkStyle} to="/demo">Try Demo Quiz</Link>
          {/* ):( */}
            {/* <Link className={classes.linkStyle} to="/login">Try Demo Quiz</Link> */}
          {/* )} */}
        </Button>
      </div>
      <div
        className={classes.imgDiv}
        style={{ height: "463px", width: "400px" }}
      >
        <img
          className={classes.image}
          src="https://myquizhub-waveaccess.netdna-ssl.com/app/images/home/animation.gif?ver=4.20210715.1.15"
        />
      </div>
    </div>
  );
};

export default Container;
