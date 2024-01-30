const sql = require("mysql2/promise"); // Importa la versión de promesa

const host = "viaduct.proxy.rlwy.net";
const user = "root";
const password = "5Ehb4hBFg2-Dhfh34Ec-GH-BcHhdHaDf";
const database = "articulos";
const port = 17149;

const pool = sql.createPool({
  host: host,
  user: user,
  password: password,
  database: database,
  port: port,
});

module.exports = pool;
