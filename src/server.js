require("dotenv").config();
const viewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web");
const express = require("express");
const app = express();
const connection = require("./config/database");
const port = process.env.PORT || 3000;
const hostname = process.env.HOSTNAME || "localhost";
//config req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//config view engine
viewEngine(app);
app.use("/", webRoutes);
// test connection to MySQL



(async () => {
  try {
    await connection();

    app.listen(port, hostname, () => {
      console.log(`Server running at http://localhost:${port}/`);
    });
  } catch (error) {
    console.log(">>>>error: ", error);
  }
})();
