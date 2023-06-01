// To run file, use "node index.js" command

const connectDB = require("./config/db");
const router = require("./router/router");
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions")

connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors())
app.use("/Path", router);

const PORT = 8000;
app.listen(PORT, () => {
        console.log(`Server is on port ${PORT}`)
    }
);