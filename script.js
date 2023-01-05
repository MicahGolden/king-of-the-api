import express from "express"
import router from './routes.js';
import bodyParser from "body-parser";

const app = express();
const port = 3400;

app.listen(port, (req, res) => {
  console.log(`The server is live on port ${port}`)
})

app.use(bodyParser.json());
app.use("/api/characters", router)