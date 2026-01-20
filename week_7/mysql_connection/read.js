const db = require("./db");

db.query("SELECT * FROM users", (err, results) => {
  if (err) throw err;
  console.log(results);
  db.end();
});

// const sql = "INSERT INTO users (name, email) VALUES (?, ?)";
// const values = ["aakash", "aakash@gmail.com"];

// db.query(sql, values, (err, results) => {
//   if (err) return console.error(err);
//   console.log("Inserted:", results.insertId);
//   db.end();
// });

// db.query("select *from users",(err,results)=>{
//   if(err) throw err;
//   console.log(results);
// });

// db.query("select name from users",(err,results)=>{
//   if(err) throw err;
//   console.log(results);
// })

// db.query("select email from users",(err,results)=>{
//   if(err) throw err;
//   console.log(results);
// })

// db.query("alter table users add COLUMN mark int",(err,results)=>{
//   if(err) throw err;
//   console.log("create Done")
// });

db.query("drop table users",(err,results)=>{
  if(err) throw err;
  console.log(results);
})