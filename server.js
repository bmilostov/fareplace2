const express = require("express");
const cors = require("cors");
const path = require("path");
const https = require("https");
//const fetch = require("node-fetch");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());


app.get("/auctions", (req, res) => {
  https
    .get(
      "https://static.bidflyer.com.s3.amazonaws.com/promotional/test.json",
      { rejectUnauthorized: false },
      (resp) => {
        let rawData = "";

        // A chunk of data has been recieved.
        resp.on("data", (chunk) => {
          rawData += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          let data = JSON.parse(rawData);
          res.send(data);
        });
      }
    )
    .on("error", (err) => {
      console.log("Error: " + err.message);
    });
});


if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("server running");
});

