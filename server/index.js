const express = require("express");
const cors = require("cors");
const conn = require("./database/db");
const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use("api/user/doctor/", require("./api/doctor"));
app.use("/api/user/receptionist/", require("./api/receptionist"));

app.listen(PORT, () => {
  console.log(`Server started on Port ${PORT}....`);
});
