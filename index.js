require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT
const githubdata = {
  "login": "puneetsharma004",
  "id": 148180265,
  "node_id": "U_kgDOCNUNKQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/148180265?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/puneetsharma004",
  "html_url": "https://github.com/puneetsharma004",
  "followers_url": "https://api.github.com/users/puneetsharma004/followers",
  "following_url": "https://api.github.com/users/puneetsharma004/following{/other_user}",
  "gists_url": "https://api.github.com/users/puneetsharma004/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/puneetsharma004/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/puneetsharma004/subscriptions",
  "organizations_url": "https://api.github.com/users/puneetsharma004/orgs",
  "repos_url": "https://api.github.com/users/puneetsharma004/repos",
  "events_url": "https://api.github.com/users/puneetsharma004/events{/privacy}",
  "received_events_url": "https://api.github.com/users/puneetsharma004/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Puneet ",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 0,
  "following": 1,
  "created_at": "2023-10-17T04:25:40Z",
  "updated_at": "2025-07-24T18:14:29Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res)=>{
    res.send(`<h1>Hey this is the Login Page.</h1>`)
})

app.get('/other', (req, res)=>{
    res.send("404 ERROR ohk this is the other page not the error page my boi")
})

app.get('/githubdata', (req, res)=>{
    res.json(githubdata)
})

app.get('/haribol', (req, res)=>{
    res.send("Haribol")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

