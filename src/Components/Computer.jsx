import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  TextField,
  Button,
  CardActions,
  Typography,
  CardHeader,
  makeStyles,
  List,
  Paper,
  ListItem,
  CircularProgress,
  CardMedia,
  Modal,
  Backdrop,
  Fade,
  RadioGroup,
  Radio,
  FormControl,
  FormControlLabel,
  FormLabel,
  Divider,
} from "@material-ui/core";
import download from "../Images/download.png";
import Nav from "./Nav";
import { Link, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/Authprovider";
let idx = 0;
let index = 0;
let shuffledArray = [];
let val = "";
let score = 0;
let newArr = [];

export const Computer = () => {
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState({});

  const useStyle = makeStyles({
    color: {
      backgroundColor: "#5d6cd7",
      height: "90.3vh",
      position: "relative",
    },
    center: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "90vh",
    },
    linkStyle: {
      textDecoration: "none",
      color: "white",
    },
  });
  let classes = useStyle();

  useEffect(async () => {
    let response = await fetch(
      "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple"
    );
    let data = await response.json();
    setQuestions(data.results);
    setQuestion(data.results[0]);
  }, []);

  String.prototype.deentitize = function (ret) {
    ret = ret.replace(/&gt;/g, ">");
    ret = ret.replace(/&lt;/g, "<");
    ret = ret.replace(/&quot;/g, '"');
    ret = ret.replace(/&apos;/g, "'");
    ret = ret.replace(/&amp;/g, "&");
    ret = ret.replace(/&#039;/g, "'");
    return ret;
  };

  const handleNextQuestion = () => {
    console.log(index);
    let arr = questions;
    if (index < arr.length) {
      setQuestion(arr[++index]);
    }
  };

  if (question.incorrect_answers != undefined) {
    shuffledArray = [
      ...question.incorrect_answers,
      question.correct_answer,
    ].sort(() => Math.random() - 0.5);
    console.log(shuffledArray);
  }

  const handleSubmit = () => {
    let element = document.querySelectorAll(".MuiIconButton-label>input");
    let divEle = document.querySelectorAll(".MuiIconButton-label div");
    let labelEle = document.querySelectorAll(
      ".MuiTypography-root.MuiFormControlLabel-label.MuiTypography-body1"
    );
    if (val == question.correct_answer) {
      console.log("correct");
      for (let i = 0; i < element.length; i++) {
        if (element[i].value == val) {
          divEle[i].style.color = "lightgreen";
          labelEle[i].style.background = "lightgreen";
          labelEle[i].style.width = "80%";
        }
        element[i].disabled = true;
      }
      score += 10;
    } else {
      for (let i = 0; i < element.length; i++) {
        if (element[i].value == question.correct_answer) {
          labelEle[i].style.background = "lightgreen";
          labelEle[i].style.width = "80%";
        }
        if (element[i].value == val) {
          divEle[i].style.color = "red";
          labelEle[i].style.background = "red";
          labelEle[i].style.width = "80%";
        }
        element[i].disabled = true;
      }
    }
  };

  return (
    <React.Fragment>
      <Nav></Nav>
      <div className={classes.color}>
        <div className={classes.center}>
          <Card>
            <CardContent>
              <Typography variant="h5" style={{ textAlign: "center" }}>
                Questions
              </Typography>
            </CardContent>
            <Divider></Divider>
            <CardContent>
              <Ques id={question}></Ques>
            </CardContent>
            <CardContent>
              {index == 9 ? (
                <div>
                  <Button color="primary" variant="contained" disabled>
                    Next
                  </Button>
                  <Button
                    color="secondary"
                    variant="contained"
                    style={{ marginLeft: "15px" }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                  <Button
                    color="secondary"
                    variant="contained"
                    style={{ marginLeft: "15px" }}
                  >
                    <Link to="/computerscore" className={classes.linkStyle}>
                      Finish
                    </Link>
                  </Button>
                </div>
              ) : (
                <div>
                  <Button
                    color="primary"
                    variant="contained"
                    onClick={handleNextQuestion}
                  >
                    Next
                  </Button>
                  <Button
                    color="secondary"
                    variant="contained"
                    style={{ marginLeft: "15px" }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export const Ques = (props) => {
  const [value, setValue] = useState("");
  const useStyle = makeStyles({
    options: {
      display: "block",
    },
    circular: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    center: {
      display: "block",
      marginTop: "10px",
      marginLeft: "18px",
    },
    disp: {
      display: "inline",
      fontSize: "1rem",
      fontFamily: "Arial",
      fontWeight: "400",
      lineHeight: "1.5",
      letterSpacing: "0.00938em",
    },
  });
  let classes = useStyle();
  val = value;

  return (
    <React.Fragment>
      <p className={classes.disp}>
        {props.id.question != undefined ? `Q${index + 1}) ` : ""}
      </p>
      <p
        dangerouslySetInnerHTML={{ __html: props.id.question }}
        className={classes.disp}
      ></p>
      {props.id.incorrect_answers != undefined ? (
        <FormControl component="fieldset" className={classes.center}>
          <RadioGroup
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            {shuffledArray.map((option) => {
              return <Options key={idx++} incorrect={option}></Options>;
            })}
          </RadioGroup>
        </FormControl>
      ) : (
        <Typography className={classes.circular}>
          <CircularProgress color="secondary"></CircularProgress>
        </Typography>
      )}
    </React.Fragment>
  );
};

export const Options = (props) => {
  const useStyle = makeStyles({
    options: {
      display: "block",
    },
    center: {
      marginTop: "15px",
      marginLeft: "30px",
    },
  });
  let classes = useStyle();

  return (
    <FormControlLabel
      value={String.prototype.deentitize(props.incorrect)}
      control={<Radio></Radio>}
      label={String.prototype.deentitize(props.incorrect)}
    ></FormControlLabel>
  );
};

export function Computerscore(props) {
  const [open, setOpen] = useState(true);
  const useStyle = makeStyles((theme) => ({
    center: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
  let classes = useStyle();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.history.push("/");
    index = 0;
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        className={classes.modal}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Congratulations!!
            </Typography>
            <Typography variant="h5">You Completed Computer Quiz</Typography>
            <Typography variant="h5">
              Your Score is:- {score} out of 100
            </Typography>
            <CardMedia
              image={download}
              style={{ height: "5rem", backgroundSize: "contain" }}
            ></CardMedia>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
