const Discord = require('discord.js');
const os = require('os')
const cpuStat = require("cpu-stat");
const moment = require("moment") 
moment.locale('pt-BR')

module.exports.run = async(client, message, args) => {

    message.delete()

    let creator = 'Fraachz_#4191';
    let eusou = '<@543911140187701287>';

    let version = '• v2.5';
    let ling = '• Javascript';
    let suporte = '• Em Breve';
    let loc = '• Brasil ';
    let dev = '• <@446857017429196810>';

    let emj = '🤖';
    let emj2 = '💻';
    let emj3 = '🖥';

    let emj4 = '<:Javascript:562380485423136768>';
    let emj5 = '<a:Engrenagem:562375919478767636>';
    let emj6 = '<:brasil:562375788695912449>';

    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
          return console.log(err);
        }
       
       let secs = Math.floor(client.uptime % 60);
       let days = Math.floor((client.uptime % 31536000) / 86400);
       let hours = Math.floor((client.uptime / 3600) % 24);
       let mins = Math.floor((client.uptime / 60) % 60);


    let inf = new Discord.RichEmbed()

    .setTitle(`**INFORMAÇÃO DO BOT**`)
    .setDescription(`Olá eu sou o(a) ${eusou}, sou programado(a) em\nJavaScript. Caso esteja perdido ou achar algum BUG utilize o \nnosso suporte abaixo:`)
    .addField(`${emj} VERSAO DO BOT:`, `${version}`)
    .addField(`${emj4} LINGUAGEM:`, `${ling}`)
    .addField(`${emj5} SUPORTE:`, `${suporte}`)
    .addField(`${emj6} LOCALIZAÇÃO:`, `${loc}`)
    .addField(`${emj2} DESENVOLVEDOR:`, `${dev}`)
    .addField(`${emj3} PLATAFORMA:`, `${os.platform()}`)
    .addField(`${emj3} MEMORIA LIVRE:`, `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`)
    .addField(`${emj3} CPU:`, `${os.cpus().map(i => `${i.model}`)[0]}`)
    .addField(`${emj3} CPU LIVRE:`, `${percent.toFixed(2)}%`)
    .addField(`${emj3} ARCH:`, `${os.arch()}`)
    .setThumbnail(client.user.displayAvatarURL)
    .setTimestamp(new(Date))
    .setFooter(`${creator} • © 2019`, client.user.displayAvatarURL)

    message.channel.send(inf).then(message => {
        message.react(`🔥`)
        })
    })
}

module.exports.help = {
    name: 'info'
}