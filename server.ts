import express from "express";
import routes from "./controllers/router";

const app = express();
app.use(express.json());

app.use(routes);

app.listen(5000, () => {
    console.log('server started at http://localhost:5000');
});