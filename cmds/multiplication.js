const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    answer = parseInt(args[0], 10) * parseInt(args[1], 10);
    bot.send(answer);
};
module.exports.help = {
    name: "*"
};