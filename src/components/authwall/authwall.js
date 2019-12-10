import React from 'react';
import { Link } from 'react-router-dom'
import auth from '../../auth'

const Authwall = ({authToken}) => {
  var tokenResponse = auth(authToken)
  console.log(tokenResponse)

  return(
    <>
    <div style={{margin: "80px", fontSize: "40px"}}>{tokenResponse}</div>
    <Link to="/">Go back Home</Link>
    </>
  )
}

export default Authwall