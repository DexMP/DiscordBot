const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = async (bot,message,args) => {
    let news = new Discord.RichEmbed()
    .setDescription("Новости")
    .setColor('#e22216')
    .addField("Добавлены новые команды", "/help для просмотра")
    .addField("Исправлена подача жалоб", "Доступно админам")
    .addField("Появилось место кудда тратить коины и это роллинг", "/roll")
    .addField("Появилось сам новостной блок", "/news Доступно всем")
    .addField("Появился новый купон, но он тайный", "Кто первый узнает, тот получит коины и +лвл")
    .addField("Исправлена передача коинов", "Теперь полноценно работает передача коинов друзьям");

    message.channel.send(news);
};
module.exports.help = {
    name: "news"
};