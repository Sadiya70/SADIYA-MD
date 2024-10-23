const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "qbRwUQRY#jyeQmlSA2dQtF8mMzghPl_9eyAtrPb2J-5v9eB3ycmM", // මෙතනට SESSION_ID එක දෙන්න
MONGODB: process.env.MONGODB || "mongodb://mongo:lHEiZPmFVdVYfLXPuuIlStvrkXIhWJYF@autorack.proxy.rlwy.net:20671", // mongodb url එක දෙන්න
};
