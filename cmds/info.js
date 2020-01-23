const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = (bot,message,args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о боте")
    .setColor('#ffcc00')
    .addField("Ссылка на бота", "https://discordapp.com/oauth2/authorize?client_id=620545059837706276&permissions=8&scope=bot")
    .addField("Разработчик", "<@288618868686192640>")
    .addField("Донат", "https://money.yandex.ru/to/410015720722325");
    message.channel.send(embed);
};
module.exports.help = {
    name: "info"
};