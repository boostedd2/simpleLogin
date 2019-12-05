import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { Toolbar, Typography } from '@material-ui/core';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <AppBar position="absolute" style={{backgroundColor: "white"}}>
        <Toolbar>
          <Typography variant="h4" color="textPrimary">
            simpleLogin
          </Typography>
          <VpnKeyIcon fontSize="large" style={{color: "black", marginLeft: "10px"}}/>
          <GitHubIcon fontSize="large" style={{color: "black", marginLeft: "auto"}}/>
        </Toolbar>
      </AppBar>
    </div>
  )
}