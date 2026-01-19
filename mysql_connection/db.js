const mysql = require("mysql2");


const database=mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root",
  database:"testdb"
})

database.connect((errr)=>{
  if(errr) throw errr;
  console.log("connect Done")
})

module.exports =database;