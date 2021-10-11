import path from "path";
import fs from "fs";
import Helmet from 'react-helmet';

import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";

const PORT = 3006;
const app = express();
app.get("/", (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
  const helmet = Helmet.renderStatic()
  const indexFile = path.resolve("./build/index.html");
  fs.readFile(indexFile, "utf8", (err, data) => {
    if (err) {
      console.error("Something went wrong:", err);
      return res.status(500).send("Oops, better luck next time!");
    }
    
    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${app}</div>`)
      .replace("</head>", `${helmet.meta.toString()}</head>`)
    .replace("</head>", `${helmet.title.toString()}</head>`)
    .replace("</head>", `${helmet.script.toString()}</head>`)
    );
  });
});

app.use(express.static("./build"));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
