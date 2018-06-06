const express = require('express');
const path = require('path');
const Logger = require('./logger');

const logger = new Logger('Serve Dev');

const app = express();
const outputPath = path.join(__dirname, '..', '.tmp');
logger.debug(`Path to serve: ${outputPath}`);

app.use(express.static(outputPath));
app.listen(3001);
