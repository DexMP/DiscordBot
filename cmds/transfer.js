const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require('../profile.json');
module.exports.run = (bot,message,args) => {
    try{
    let uid = message.author.id;
    let u = profile[uid];
    if(u.coins < args[0]) return message.channel.send("У вас недостаточно средств");
    if(args[0]>1000) return bot.send("Укажите значение меньше 1000");
    if(args[0]<10) return bot.send("Укажите значение больше 10");
    let rUser = bot.rUser;
    if(!args[1]) return bot.send("Вы не указали пользователя");
    if(!rUser) return bot.send("Пользователь не найден");
    if(!profile[rUser.id])return bot.send("Пользователя нету в profile.json");

    u.coins -= parseInt(args[0], 10);
    profile[rUser.id].coins += parseInt(args[0], 10);

    //Запись в файл
    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });

    let embed = new Discord.RichEmbed()
    .setDescription("Перевод")
    .setColor('#e22216')
    .addField("Перевёл",message.author.username)
    .addField("Принял",`${rUser.user.username}`)
    .addField("Сумма",`${args[0]}`);
    message.channel.send(embed);
}catch(err){
    console.log(err.name)
}
};
module.exports.help = {
    name: "transfer"
};