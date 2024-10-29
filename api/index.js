const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

const quotationRouter = require("./src/handlers/quotation");

app.use("/api/quotations", quotationRouter);

app.listen(5500);