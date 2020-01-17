const Discord = module.require("discord.js");
const fs = require("fs");
let profile = require('../profile.json');
module.exports.run = async (bot,message,args) => {
    let uid = message.author.id;
    let u = profile[uid];
    u.coins += 500;
    u.lvl++;

    message.delete().catch();
    let embed = new Discord.RichEmbed()
    .setDescription("Купон охотника за пасхалками")
    .setColor('#e22216')
    .addField("Получено","500 коинов")
    .addField("Бонус","Повышен уровень");
    message.channel.send(embed);

    fs.writeFile('./profile.json',JSON.stringify(profile),(err)=>{
        if(err) console.log(err);
    });
};
module.exports.help = {
    name: "pashunter100801"
};