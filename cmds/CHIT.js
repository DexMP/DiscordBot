const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require('../profile.json');
module.exports.run = async (bot,message,args) => {
    let uid = message.author.id;
    let u = profile[uid];
    u.coins += 500;
    u.lvl++;

    let embed = new Discord.RichEmbed()
    .setDescription("Купон фаната")
    .setColor('#e22216')
    .addField("Получено","500 опыта")
    .addField("Бонус","Повышен уровень");
    message.channel.send(embed);

    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
};
module.exports.help = {
    name: "dexmp3"
};