const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PFMAQLCC#i2wrueBue0BcxPO7EYMp31uqKOZJy67q0BTyk-g_5TY",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/pubudurathnage714/bot_helper/blob/main/Images/Gemini_Generated_Image_h2ns7ch2ns7ch2ns.png?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 AURO_MD Is Alive Now😍*",
BOT_OWNER: '94752997591',  // Replace with the owner's phone number



};
