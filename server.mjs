import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());
const port= process.env.PORT || 3000;

app.get('/home', (req, res) => {
  res.send('I am home page!')
})

app.get('/profile', (req, res) => {
  res.send('Iam profile page!')
})

app.get('/weather', (req, res) => {
  res.send({
    weather: `sunny`,
    temperature: `20`,
    city: `karachi`,
  })
}) 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})