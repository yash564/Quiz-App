import React from "react";
import { useState, useContext } from "react";
import { AuthContext } from "../Context/Authprovider";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  TextField,
  makeStyles,
} from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { firebaseStorage, firebaseDB } from "../Config/firebase";

const SignUp = (props) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { currentUser, signUp } = useContext(AuthContext);
  const [profilePhoto, setProfilePhoto] = useState(null);

  const useStyles = makeStyles((theme) => ({
    linkStyle: {
      textDecoration: "none",
      color: "white",
    },
    text: {
      width: "90%",
    },
    center: {
      display: "flex",
      justifyContent: "center",
    },
  }));
  let classes = useStyles();

  const handleSignUp = async () => {
    let response = await signUp(email, password);
    let uid = response.user.uid;
    const uploadPhotoObj =firebaseStorage
      .ref(`/profilePhotos/${uid}/image.jpg`)
      .put(profilePhoto);
    uploadPhotoObj.on("state_changed",fun1,fun2,fun3);

    function fun1(snapshot){
      let progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
      console.log(progress);
    }

    function fun2(error){
      console.log(error);
    }

    async function fun3(){
      let profileImageURL=await uploadPhotoObj.snapshot.ref.getDownloadURL();
      await firebaseDB.collection("users").doc(uid).set({
        email:email,
        userId:uid,
        username:username,
        profileImageURL:profileImageURL,
        scores:[],
      });
      props.history.push("/");
    }
  }

  const uploadPhoto = (e) => {
    let fileObj = e.target.files[0];
    setProfilePhoto(fileObj);
  };

  return (
    <div>
      <Nav></Nav>
      <div
        style={{
          display: "flex",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          height: "90.3vh",
          background: "#5d6cd7",
        }}
      >
        <Card variant="outlined">
          <CardContent>
            <Typography variant="h4">Sign Up</Typography>
          </CardContent>
          <CardContent>
            <Typography variant="p">
              Create your account and get started with Quiz App
            </Typography>
          </CardContent>
          <CardContent className={classes.center}>
            <TextField
              variant="outlined"
              label="Username"
              type="text"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className={classes.text}
            ></TextField>
          </CardContent>
          <CardContent className={classes.center}>
            <TextField
              variant="outlined"
              label="Email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className={classes.text}
            ></TextField>
          </CardContent>
          <CardContent className={classes.center}>
            <TextField
              variant="outlined"
              label="Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className={classes.text}
            ></TextField>
          </CardContent>
          <CardActions className={classes.center}>
            <Button
              variant="outlined"
              color="secondary"
              component="label"
              style={{ width: "86%" }}
              startIcon={<CloudUpload></CloudUpload>}
            >
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  uploadPhoto(e);
                }}
                hidden
              ></input>
            </Button>
          </CardActions>
          <CardActions style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSignUp}
              style={{ width: "70%" }}
            >
              Sign Up
            </Button>
          </CardActions>
          <CardContent>
            <Typography variant="p" style={{ marginRight: "8px" }}>
              Already have an account?
            </Typography>
            <Button variant="contained" color="primary">
              <Link to="/login" className={classes.linkStyle}>
                Log In
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignUp;
