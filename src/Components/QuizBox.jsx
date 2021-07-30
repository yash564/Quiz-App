import React from "react";
import {
  Typography,
  makeStyles,
  Card,
  Button,
  CardContent,
  Grid,
} from "@material-ui/core";

const QuizBox = () => {
  const useStyle = makeStyles({
    font: {
      fontFamily: "cursive",
      marginBottom: "20px",
      marginTop: "20px",
      textAlign: "center",
    },
  });
  let classes = useStyle();

  return (
    <div style={{ backgroundColor: "#5d6cd7" }}>
      <Typography variant="h4" className={classes.font}>
        Explore more quizzes
      </Typography>
      <div>
          <Grid container spacing={3}>
              <Grid item sm={2}>
                  <Card variant="outlined">
                      <CardContent>
                          <Typography variant="h5">Entertainment</Typography>
                      </CardContent>
                  </Card>
              </Grid>
              <Grid item sm={2}>
                  <Card variant="outlined">
                      <CardContent>
                          <Typography variant="h5">Entertainment</Typography>
                      </CardContent>
                  </Card>
              </Grid>
              <Grid item sm={2}>
                  <Card variant="outlined">
                      <CardContent>
                          <Typography variant="h5">Entertainment</Typography>
                      </CardContent>
                  </Card>
              </Grid>
              <Grid item sm={2}>
                  <Card variant="outlined">
                      <CardContent>
                          <Typography variant="h5">Entertainment</Typography>
                      </CardContent>
                  </Card>
              </Grid>
              <Grid item sm={2}>
                  <Card variant="outlined">
                      <CardContent>
                          <Typography variant="h5">Entertainment</Typography>
                      </CardContent>
                  </Card>
              </Grid>
          </Grid>
      </div>
    </div>
  );
};

export default QuizBox;
