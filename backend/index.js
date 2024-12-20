const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const mainRouter = require("./routes/index");
const accountRouter = require("./routes/index");

app.use(cors());
app.use(express.json());

app.use("/api/v1/", mainRouter);
app.use("/api/v1/", accountRouter);

app.listen(PORT, function () {
  console.log("listened");
});
