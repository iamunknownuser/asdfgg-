const axios = require("axios")
const sesi2 = "48818879616:000xbnbSqd4hPx:23"

async function igstalk(user) {
  if(!user) throw Error("Provide your instagram name")
  let data = await axios.get(`https://instagram.com/${user}/?__a=1`, { headers: { cookie: `sessionid=${sesi2}` }})
  return data.data.graphql.user;
}

module.exports = igstalk;
