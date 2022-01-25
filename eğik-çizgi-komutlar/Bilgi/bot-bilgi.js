const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const config = require("../../config.json");
const prefix = "/"
const os = require("os");
const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
const ms = require('ms')


module.exports = {
  name: 'bot-bilgi',
  description: 'Bot hakkında bir kaç bilgi görüntülersin',
  execute: async (client, interaction) => {
    
   
    const zaman = moment
    .duration(client.uptime)
    .format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");

  const embed = new MessageEmbed()
    .setColor("#28282B")
    .setTitle("Splix Beta | Bot bilgi")
    .addField("Ping Süresi","Mesaj Gecikmesi: {ping31} ms \nBot Ping: {ping231} ms" .replace("{ping31}", new Date().getTime() - interaction.createdTimestamp).replace("{ping231}", client.ws.ping, true))
    .addField("Bellek kullanımı",(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB", true)
    .addField("Çalışma süresi", zaman)
    .addField("Kullanıcılar",client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField("Sunucular", client.guilds.cache.size.toLocaleString(), true)
    .addField("Kanallar", client.channels.cache.size.toLocaleString(), true)
    .addField("Discord.JS sürüm", "v" + Discord.version, true)
    .addField("Node.JS sürüm", `${process.version}`, true)
  interaction.followUp({embeds: [embed]})

    
  }    
};
