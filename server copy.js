const express = require('express');
const app = require('./app');
const logger = require('./logger'); 
const cors = require('cors');
app.use(cors());

const PORT = process.env.PORT || 3000;

var figlet = require("figlet");

figlet("Hello YoungPoong!!", function (err, data) {
  if (err) {
    logger.info("Something went wrong...");
    logger.error(err);
    return;
  }
  logger.info(data);
});

// 서버 실행
app.listen(PORT, () => {
  logger.info(`Server is running on port:${PORT}`);
});
