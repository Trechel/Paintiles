const mysql = require("mysql2");

class DbContext {
    constructor() { }

    async createConnection() {
        const pool = mysql.createPool({
            user: "treasur2_trechel",
            password: "82jvJpDa24JyeRvvu2vD",
            host: "localhost",
            database: "treasur2_trechel",
            port: 3306,
            multipleStatements: true
        });

        return pool;
    }

    async handleDBQueries(query, values) {
        const pool = await this.createConnection();

        return new Promise((resolve, reject) => {
            pool.getConnection((error, connection) => {
                if (error) {
                    reject(error)
                    pool.end();
                } else {
                    connection.query(query, values, (error, results) => {
                        if (error) {
                            reject(error);
                            pool.end();
                        } else {
                            resolve(results);
                            pool.end();
                        }
                    });
                }
            });
        });
    }
}

module.exports = DbContext;