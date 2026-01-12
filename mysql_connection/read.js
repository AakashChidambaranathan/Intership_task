const db = require("./db");

db.query("SELECT * FROM users", (err, results) => {
  if (err) throw err;
  console.log(results);
  db.end();
});
