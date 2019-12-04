import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Button, Link} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  loginTitle: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  userLogin: {
    display: "flex",
    flexDirection: "column",
    marginTop: "10px",
    width: "60vw",
    "& > *": {
      marginTop: "20px",
    },
  },
  loginButton: {
    marginTop: "20px",
    marginBottom: "10px",
  },
}))

export default function Login() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Typography className={classes.loginTitle} variant="h4">
        Welcome to simpleLogin
      </Typography>
      <div className={classes.userLogin}>
        <TextField label="Username" variant="outlined" />
        <TextField label="Password" variant="outlined" />
      </div>
      <Button className={classes.loginButton} variant="contained" color="primary">Sign In</Button>
      <Typography variant="h6">
        Not Registered?
      </Typography>
      <Typography variant="h6">
        <Link href="#">
          Sign Up
        </Link>
      </Typography>
    </div>
  )
}