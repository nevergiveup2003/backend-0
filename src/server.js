require("dotenv").config();
const viewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "localhost";
console.log("process.end", process.env);

//config view engine
viewEngine(app);
app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
