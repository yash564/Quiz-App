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

const QuizBox = () => {
  const useStyle = makeStyles((theme)=>({
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
      width:"50vw",
      height:"60vh",
    },
    card:{
        margin:"10px",
        border: "1px solid #000",
        background:"lightgray",
        color:"black",
        "&:hover":{
            background:"black",
            color:"white",
        }
    }
  }));
  let classes = useStyle();

  return (
    <div style={{ height:"90.3vh" }}>
      <Typography variant="h3" className={classes.font}>
        Explore more quizzes
      </Typography>
      <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}>
        <div style={{width:"40vw",height:"70vh"}}>
          <CardMedia
            image={Cartoon}
            style={{ height: "100%",width:"100%",backgroundSize: "contain" }}
          ></CardMedia>
        </div>
        <div className={classes.flexing}>
          <Card variant="outlined"  className={classes.card}>
            <CardContent>
              <Typography variant="h6">Science and nature</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">History</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Geography</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Politics</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Art</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Gadgets</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Mythology</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Sports</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Animals</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Vehicles</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Comics</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Books</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Video Games</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Board Games</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Cartoons</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Japenese Anime</Typography>
            </CardContent>
          </Card>
          <Card variant="outlined" className={classes.card}>
            <CardContent>
              <Typography variant="h6">Films</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QuizBox;
