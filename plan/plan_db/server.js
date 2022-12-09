import table from "./db_init.js";
import express from "express";
import bodyParser from "body-parser";
import findRoutes from "./routes/index.js";
const app = express();
const PORT = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
findRoutes(app, table);

app.listen(PORT, function () {
    console.log(`App running on port ${PORT}`);
});
