import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
app.use(helmet()); //helmet is a security middleware to protect my app by setting various HTTP headers
app.use(morgan("dev")); //log requests

app.get("/test", (req, res) => {
    console.log(res.getHeaders());
    res.send("Hello from the test route");
});


app.listen(3000, () => {
    console.log("Server is running on port " + PORT);
});