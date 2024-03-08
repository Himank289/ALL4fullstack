//1
const dotenv=require('dotenv');
dotenv.config();
console.log(process.env.DATABASE_HOST);
console.log(process.env.DATABASE_USER);
console.log(process.env.DATABASE_PASSWORD);
console.log(process.env.DATABASE_NAME);

//2
var mysql = require('mysql2');

//3.  pass connection details as json config object to create connection method 
// it return coonection object (that contains urlwith username & password)
const connection=mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE_NAME

});

//4. on connection object call method to connect to db
connection.connect((err)=>{
    if (err)
        throw err;
    else 
        console.log('mysql db connected');
});

//5.
exports.dbconn=connection;