const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require('../profile.json');
module.exports.run = (bot,message,args) => {
    try{
    let uid = message.author.id;
    let u = profile[uid];
    if(!args[1]) return bot.send("Вы не указали ставку");
    if(u.coins < args[1]) return message.channel.send("У вас недостаточно средств");
    if(args[1]>1000) return bot.send("Укажите значение меньше 1000");
    if(args[1]<50) return bot.send("Укажите значение больше 50");
    if(!args[0]) return bot.send("Вы не указали число");
    if(args[0]>10) return bot.send("Укажите ставка от 1 до 10");
    if(args[0]<1) return bot.send("Укажите ставка от 1 до 10");
    u.coins -= parseInt(args[1], 10);

    let answer = randomInteger(1, 10);
    if(parseInt(args[0], 10) == answer){
        u.coins += parseInt(args[1], 10)*3;

        fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
            if(err) console.log(err);
        });

        let embed = new Discord.RichEmbed()
        .setDescription("Победа")
        .setColor('#e22216')
        .addField("Ваша ставка",args[1])
        .addField("Вы выиграли",parseInt(args[1], 10)*3)
        .addField("Выпало",answer);
        message.channel.send(embed);
    } else {
        let embed = new Discord.RichEmbed()
        .setDescription("Поражение")
        .setColor('#e22216')
        .addField("Ваша ставка",args[1])
        .addField("Выпало",answer);
        message.channel.send(embed);
    }

    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });

    function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }
}catch(err){
    console.log(err)
}
};
module.exports.help = {
    name: "roll"
};