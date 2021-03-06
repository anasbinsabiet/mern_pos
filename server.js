const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDb = require("./config/config");

dotenv.config();
connectDb();

//rest obj
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const PORT = process.env.PORT || 8080;
app.use(express.static(publicPath));
//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(morgan("dev"));

//routes
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/bills", require("./routes/billsRoute"));
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
 });
//const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}`);
});