import React, { useContext, useEffect, useState } from "react";
import Nav from "./Nav";
import {
  Avatar,
  makeStyles,
  Typography,
  TextField,
  Paper,
  TableContainer,
  TableBody,
  TableCell,
  TableHead,
  Table,
  TableRow,
  withStyles,
  Card,
  CardContent,
  CardMedia,
} from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import Sad from "../Images/Sad.jpg";
import { firebaseDB, firebaseStorage } from "../Config/firebase";
import { AuthContext } from "../Context/Authprovider";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  const [profileImage, setProfileImage] = useState(null);
  const [updatedProfile, setUpdatedProfile] = useState(null);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [score, setScore] = useState([]);

  useEffect(async () => {
    let doc = await firebaseDB.collection("users").doc(currentUser.uid).get();
    setProfileImage(doc.data().profileImageURL);
    setUserName(doc.data().username);
    setEmail(doc.data().email);
    setScore(doc.data().scores);
  }, []);

  const handleProfile = async (e) => {
    let fileObj = e.target.files[0];
    console.log(fileObj);
    let url = URL.createObjectURL(fileObj);
    console.log(url);
    setUpdatedProfile(url);
    let doc = await firebaseDB.collection("users").doc(currentUser.uid).get();
    await firebaseStorage.refFromURL(doc.data().profileImageURL).delete();

    const uploadPhotoObj = firebaseStorage
      .ref(`/profilePhotos/${currentUser.uid}/image.jpg`)
      .put(fileObj);
    uploadPhotoObj.on("state_changed", fun1, fun2, fun3);

    function fun1(snapshot) {
      let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(progress);
    }

    function fun2(error) {
      console.log(error);
    }

    async function fun3() {
      let updatedProfileImageURL =
        await uploadPhotoObj.snapshot.ref.getDownloadURL();
      await firebaseDB.collection("users").doc(currentUser.uid).update({
        profileImageURL: updatedProfileImageURL,
      });
    }
  };

  const useStyle = makeStyles({
    profileDiv: {
      height: "30vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    profile: {
      height: "90%",
      width: "14%",
    },
    textDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px",
    },
    labelRoot: {
      fontSize: "23px",
    },
    score: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "20px",
    },
    center: {
      textAlign: "center",
    },
  });
  let classes = useStyle();

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
    logo: {
      fontSize: "25px",
      position: "absolute",
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  return (
    <div>
      <Nav></Nav>
      <div
        style={{ background: "#5d6cd7", position: "relative", height: "100vh" }}
      >
        <div className={classes.profileDiv}>
          <Avatar
            src={updatedProfile ? updatedProfile : profileImage}
            className={classes.profile}
          ></Avatar>
          <label for="file">
            <AddAPhotoIcon
              style={{
                fontSize: "26px",
                position: "absolute",
                top: "20px",
                left: "53.5vw",
              }}
            ></AddAPhotoIcon>
            <input
              type="file"
              accept="image/*"
              id="file"
              onChange={(e) => {
                handleProfile(e);
              }}
              hidden
            ></input>
          </label>
        </div>
        <div>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            {username}
          </Typography>
        </div>
        <div className={classes.textDiv}>
          <TextField
            value={email}
            label="Email"
            contentEditable={false}
            spellCheck={false}
            style={{ width: "40%" }}
            InputLabelProps={{
              classes: {
                root: classes.labelRoot,
              },
            }}
          ></TextField>
        </div>
        <div>
          <Typography variant="h4" style={{ textAlign: "center" }}>
            ScoreBoard
          </Typography>
        </div>
        <div className={classes.score}>
          {score.length>0 ? (
            <TableContainer component={Paper} style={{ width: "30vw" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <StyledTableCell
                      align="center"
                      style={{ fontWeight: "600", fontSize: "18px" }}
                    >
                      Subject
                    </StyledTableCell>
                    <StyledTableCell
                      align="center"
                      style={{ fontWeight: "600", fontSize: "18px" }}
                    >
                      Score
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {score.map((score) => (
                    <StyledTableRow key={score.subject}>
                      <StyledTableCell align="center">
                        {score.subject}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {score.marks}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Card>
              <CardContent>
                <Typography variant="h4">You don't play any quiz</Typography>
              </CardContent>
              <CardMedia
                image={Sad}
                style={{ height: "5rem", backgroundSize: "contain" }}
              ></CardMedia>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;

