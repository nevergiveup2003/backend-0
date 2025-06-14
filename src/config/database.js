require("dotenv").config();
const mongoose = require("mongoose");

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
    const options = {
      user: process.env.DB_USER,
      pass: process.env.DB_PASSWORD,
      dbName: process.env.DB_NAME,
    };
    await mongoose.connect(process.env.DB_HOST, options);
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
