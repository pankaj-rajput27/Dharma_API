import mysql from  "mysql2";

export default mysql.createPool({
    user : 'root',
    password : 'root',
    database : 'dharma',
    host : 'localhost',
    connectionLimit:100
});