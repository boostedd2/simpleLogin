import React, { useState } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Button, Link} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
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
    maxWidth: "300px",
    "& > *": {
      marginTop: "20px",
    },
  },
  loginButton: {
    marginTop: "20px",
    marginBottom: "10px",
  },
}))

export default function Login(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [uname, setUName] = useState('')
  const [uemail, setUEmail] = useState('')
  const [upassword, setUPassword] = useState('')
  const [cpassword, setCPassword] = useState('')

  const userCreationPayload = {
    "name": uname,
    "email": uemail,
    "password": upassword
  }

  const attemptUserCreation = () => {
    axios.post('http://localhost:3000/api/user/register', userCreationPayload,
    {headers: {"Content-Type": "application/json"}})
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return(
    <div className={classes.root}>
      <div className={classes.loginContainer}>
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
          <Link href="#" onClick={handleClickOpen}>
            Sign Up
          </Link>
        </Typography>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out your info below to create an account.
            </DialogContentText>
            <TextField
              margin="dense"
              id="name"
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              onChange={event => setUEmail(event.target.value)}
            />
            <TextField
              margin="dense"
              id="name"
              label="Username"
              type="text"
              variant="outlined"
              fullWidth
              onChange={event => setUName(event.target.value)}
            />
            <TextField
              margin="dense"
              id="name"
              label="New Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={event => setUPassword(event.target.value)}
            />
            <TextField
              margin="dense"
              id="name"
              label="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={event => setCPassword(event.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={() => attemptUserCreation()} color="primary">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  )
}