const mysql = required("mysql2/promise");
required ("dotenv").config();

const con = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: preocess.env.DB_NAME
});

module.exports = con;