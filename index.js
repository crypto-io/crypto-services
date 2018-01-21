const express = require('express');

const api = express();

api.use('/paper-wallet', express.static('node_modules/crypto-paper-wallet'));

api.listen('5050');
