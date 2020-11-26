const express = require("express");
const path = require("path");
const app = express();
var mysql = require("mysql");
require("dotenv").config();

app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());

var connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  database: process.env.database,
});

app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.post("/post", (req, res) => {
  // check if duplicate is returned
  connection.query(
    `SELECT * FROM mailinglist WHERE email_address =  '${req.body.data.email}'`,

    function (err, response, field) {
      if (response.length === 0) {
        connection.query(
          "INSERT INTO mailing_list.mailinglist (name,email_address)" +
            `VALUES('${req.body.data.name}', '${req.body.data.email}')`,
          function (err) {
            if (err) throw err;
            console.log("Added User " + req.body.data.email + " successfully");
            res.send({ express: "success" });
          }
        );
      } else {
        res.send({ express: "duplicate" });
      }
    }
  );
});

app.listen(process.env.PORT || 8080);
