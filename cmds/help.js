const Discord = module.require("discord.js");
const fs = require("fs");
module.exports.run = (bot,message,args) => {
    let comand = new Discord.RichEmbed()
    .setDescription("Команды бота")
    .setColor('#e22216')
    .addField("Пользователь",message.author.username)
    .addField("/info", "Информмация о боте")
    .addField("/ban", "Бан игрока")
    .addField("/clear", "Очистка сообщений")
    .addField("/kick", "Пнуть пользователя с сервера")
    .addField("/mute", "Выключить микро игрока")
    .addField("/unmute", "Включить обратно")
    .addField("/say", "Просит бота сказать что-то")
    .addField("/serverinfo", "Информация о сервере")
    .addField("/warn", "Жалоба на игрока 3 жалобы - кик")
    .addField("/unwarn", "Отменить свою жалобу")
    .addField("/transfer", "Передать деньги игроку Пример: /transfer 100 @DexMP#1662")
    .addField("/roll", "Ролим на коины Пример: /roll Число Ставка")
    .addField("/+", "Сложение Пример: /+ 2 3 Ответ:5")
    .addField("/-", "Сложение Пример: /- 3 2 Ответ:1")
    .addField("/:", "Сложение Пример: /: 4 2 Ответ:2")
    .addField("/*", "Сложение Пример: /* 4 2 Ответ:8")
    .addField("/userinfo", "О себе!");

    message.channel.send(comand);
};
module.exports.help = {
    name: "help"
};