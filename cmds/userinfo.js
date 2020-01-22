const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require('../profile.json');
module.exports.run = (bot,message,args) => {
    let a = message.author;
    let uid = message.author.id;
    let u = profile[uid];
    let embed = new Discord.RichEmbed()
    .setDescription("Информация о сервере")
    .setColor('#10c7e2')
    .addField("Имя",a.username)
    .addField("Опыт",`${u.xp} из ${u.lvl * 50}`)
    .addField("Уровень",u.lvl)
    .addField("Коины",u.coins)
    .addField("Тэг",a.tag)
    .addField("Дискриминатор",a.discriminator)
    .addField("Создание аккаунта",a.createdAt)
    .addField("ID",a.id)
    .setThumbnail(a.avatarURL);

    bot.send(embed);

};
module.exports.help = {
    name: "userinfo"
};