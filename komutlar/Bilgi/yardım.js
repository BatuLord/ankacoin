const { MessageEmbed, Message } = require("discord.js");
const db = require("quick.db");
const config = require("../../config.json");
const prefix = config.prefix
const ms = require('ms')


module.exports = {
  name: 'yardım',
  aliases: ["yardım"],
  execute: async (client, message) => {
    

  const embed = new MessageEmbed()
  .setColor("#28282B")
  .setTitle(`Splix Beta | Yardım Menüsü`)
  .setDescription("test")
  message.reply({embeds: [embed]})

    
  }    
};
