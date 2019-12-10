import React from 'react';
import { Link } from 'react-router-dom'

const Authwall = (authToken) => {
  var userStatus = "NOT LOGGED IN"

  return(
    <>
    <div style={{margin: "80px", fontSize: "40px"}}>{userStatus}</div>
    <Link to="/">Go back Home</Link>
    </>
  )
}

export default Authwall