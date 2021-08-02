import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Button,
  makeStyles,
  CardActions,
  CardMedia,
} from "@material-ui/core";
import Dekstop from "../Images/Dekstop.jpg";
import Gk from "../Images/Gk.jpg";
import Science from "../Images/Science.jpg";
import Maths from "../Images/Maths.jpg";
import {Link} from "react-router-dom";

const Boxes = () => {
  const useStyle = makeStyles({
    center: {
      textAlign: "center",
    },
    buttons: {
      display: "flex",
      justifyContent: "center",
    },
    linkStyle: {
      textDecoration: "none",
      color: "white",
    },
  });
  let classes = useStyle();

  return (
    <Container>
      <Typography
        style={{
          textAlign: "center",
          marginBottom: "50px",
          marginTop: "50px",
          fontFamily: "cursive",
        }}
        variant="h3"
      >
        Quiz App is perfect for:
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4" className={classes.center}>
                Computer
              </Typography>
            </CardContent>
            <CardMedia
              image={Dekstop}
              style={{ height: "8rem", backgroundSize: "contain" }}
            ></CardMedia>
            <CardContent>
              <Typography variant="p">
                Multiple Choice Questions (MCQs) related to Basics of Computer
              </Typography>
            </CardContent>
            <CardActions className={classes.buttons}>
              <Button variant="contained" color="primary">
                <Link className={classes.linkStyle} to="/computer">Start Quiz</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" className={classes.center} style={{fontSize:"29.14px"}}>
                General Knowledge
              </Typography>
            </CardContent>
            <CardMedia
              image={Gk}
              style={{ height: "8rem", backgroundSize: "contain" }}
            ></CardMedia>
            <CardContent>
              <Typography variant="p">
                Multiple Choice Questions (MCQs) related to Basics of General Knowledge
              </Typography>
            </CardContent>
            <CardActions className={classes.buttons}>
              <Button variant="contained" color="primary">
                <Link className={classes.linkStyle} to="/gk">Start Quiz</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4" className={classes.center}>
                Science
              </Typography>
            </CardContent>
            <CardMedia
              image={Science}
              style={{ height: "8rem", backgroundSize: "contain" }}
            ></CardMedia>
            <CardContent>
              <Typography variant="p">
                Multiple Choice Questions (MCQs) related to Basics of Science
              </Typography>
            </CardContent>
            <CardActions className={classes.buttons}>
              <Button variant="contained" color="primary">
                <Link className={classes.linkStyle} to="/science">Start Quiz</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4" className={classes.center}>
                Mathematics
              </Typography>
            </CardContent>
            <CardMedia
              image={Maths}
              style={{ height: "8rem", backgroundSize: "contain" }}
            ></CardMedia>
            <CardContent>
              <Typography variant="p">
                Multiple Choice Questions (MCQs) related to Basics of
                Mathematics
              </Typography>
            </CardContent>
            <CardActions className={classes.buttons}>
              <Button variant="contained" color="primary">
                <Link className={classes.linkStyle} to="/maths">Start Quiz</Link>
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Boxes;
