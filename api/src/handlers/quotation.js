const express = require("express");
const dbContext = require("../db/dbcontext");

const _dbContext = new dbContext();
const quotationRouter = express.Router();

quotationRouter.post("/create", async (request, response) => {
    let keysString = "";
    let valuesString = "";

    const keys = Object.keys(request.body);
    const values = Object.values(request.body);

    keys.forEach((item) => {
        keysString += "`" + item + "`,";
    });

    values.forEach((item) => {
        valuesString += "?,"
    });

    const stringKeys = keysString.substring(0, keysString.length - 1);
    const stringValues = valuesString.substring(0, valuesString.length - 1);

    const results = await _dbContext.handleDBQueries(`INSERT INTO quotation (${stringKeys}) VALUES (${stringValues})`, values);

    response.send({ data: results, status: true, error: null });
});


quotationRouter.get("/getall", async (_, response) => {
    response.send({ data: await _dbContext.handleDBQueries("SELECT * FROM quotation"), status: true, erros: null });
});

module.exports = quotationRouter;