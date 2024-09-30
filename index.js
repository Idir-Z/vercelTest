// api/index.js
const express = require('express');
const app = express();
app.use(express.json());
app.get('/home', (req, res) => {
  res.send('heyyy you are home');
});
const port  = process.env.PORT  || 9001
app.listen(port, () => {
  console.log(`listening onport ${port}`);
  
})
// Export the app as a Vercel serverless function

