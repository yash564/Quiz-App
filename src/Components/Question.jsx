import React from "react";
import {
  Button,
  Typography,
  TextField,
  CardContent,
  CardActions,
  CardMedia,
  Container,
  Card,
} from "@material-ui/core";

let i = 0;
const Question = (props) => {
  return (
    <Container>
      <Card>
        <CardContent variant="outlined">
          <Typography>{props.id.question}</Typography>
        </CardContent>
        <CardContent style={{display:"flex",justifyContent:"space-evenly"}}>
          <Typography style={{display:"flex",justifyContent:"space-evenly"}}>
            {props.id.incorrect_answers.map((incorrect) => {
              return <Incorrect key={i++} id={incorrect}></Incorrect>;
            })}
          </Typography>
          <Typography>{props.id.correct_answer}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

function Incorrect(props) {
  return <Typography>{props.id}</Typography>;
}

export default Question;
