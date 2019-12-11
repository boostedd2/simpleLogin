import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    marginTop: "80px",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  },
  message: {
    fontSize: "40px",
    marginBottom: "20px"

  }
}))

const Authwall = ({authToken}) => {
  const classes = useStyles()
  const [responseMessage, setResponseMessage] = useState('')
  
  function jwtauth(token) {
    //authenticate with jwt
    axios.get('http://192.168.1.12:3000/api/posts',
      {headers: {"auth-token": token}})
      .then(res => {
        setResponseMessage(res.data.welcome.msg)
      }, error => {
        setResponseMessage(error.response.data)
      })
    }

  jwtauth(authToken)


  return(
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.message}>{responseMessage}</div>
        <Link to="/">Go back Home</Link>
      </div>
    </div>
    
  )
}

export default Authwall