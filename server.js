const express = require("express");
const path = require("path");
const app = express();
var mysql = require("mysql");

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

var connection = mysql.createConnection({
  host: "localhost",
  user: "newuser",
  password: "pass123",
  database: "mailing_list",
});

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

// POST method route
app.post("/post", (req, res) => {
  connection.query(
    `SELECT * FROM mailinglist WHERE email_address =  '${req.body.data.email}'`,
    function (err, res, field) {
      if (res.length === 0) {
        console.log("not a duplicate");
        connection.query(
          "INSERT INTO mailing_list.mailinglist (name,email_address)" +
            `VALUES('${req.body.data.name}', '${req.body.data.email}')`,
          function (err, rows, fields) {
            if (err) throw err;
            console.log("Added User " + req.body.data.email + "successfully");
          }
        );
      } else {
        console.log("duplicate");
        res.sendStatus(403);
      }
    }
  );
});

app.listen(process.env.PORT || 8080);
