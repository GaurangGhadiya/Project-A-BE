import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./routes/index.js";
import "./models/index.js";
const app = express();
app.use(cors());

app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

app.use(router);
app.use("*", (req, res) => {
  res.status(502).json("Backend API Bad Gateway");
});

app.get("/", (req, res) => {
  try {
    res.status(200).json("Server is up.");
  } catch (e) {
    res.status(200).json("Server is down.");
  }
});

app.listen("5000", (req, res) => {
  try {
    console.log("listening on 5000");
  } catch (e) {
    console.log("listening falied: " + e.message);
  }
});
