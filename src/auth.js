import axios from 'axios'

//function to provide jwt to backend api
export default function jwtauth(token) {
  //check token, if valid
  var tokenRes = []
  axios.get('http://192.168.1.17:3000/api/posts',
    {headers: {"auth-token": token}})
    .then(res => {
      tokenRes.push(res.data.welcome.msg)
      return tokenRes
    }, error => {
      tokenRes.push(error.response)
      return token
    })
  return tokenRes}