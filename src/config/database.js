require("dotenv").config();
const mongoose = require("mongoose");
//test connection to MySQL
// const connection = mysql.createPool({
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   waitForConnections: true,
//   connectionLimit: 10,
//     queueLimit: 0,
// });
const dbState = [
  { value: 0, label: "Disconnected" },
  { value: 1, label: "Connected" },
  { value: 2, label: "Connecting" },
  { value: 3, label: "Disconnecting" },
];

// mongoose.connect(CONNECTIONSTRING, { useNewUrlParer: true }, () => {

// });

const connection = async () => {
  // Or:
  try {
    await mongoose.connect("mongodb://root:123456@localhost:27018");
    const state = Number(mongoose.connection.readyState);
    console.log(
      dbState.find((f) => f.value === state).label,
      " Database is ready"
    );
  } catch (error) {
    handleError(error);
  }
};

module.exports = connection;
