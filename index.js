const { Client, Collection, MessageEmbed, MessageAttachment, MessageActionRow, MessageButton, Permissions } = require("discord.js");
const db = require("quick.db");
const ms = require('ms');
const moment = require("moment");
const config = require("./config.json");
const canvas = require("canvas");
const client = new Client({
    intents: 32767
});

module.exports = client;

client.commands = new Collection();
client.slashCommands = new Collection();


client.on('ready', async () => {
    console.log(`${client.user.tag} ismi ile giriş yapıldı.`)
})


require(`./handler`)(client);

  
client.login(config.token);

client.on("messageCreate", async(message) => {
  const hesapBakiye = await db.get(`hesapBakiye${message.member.id}`);
  const hesapDurum = await db.get(`hesapDurum${message.member.id}`);
  const hesapİsmi = await db.get(`hesapİsmi${message.member.id}`);
  const hesapYıl = await db.get(`hesapTarihYıl${message.member.id}`);
  const hesapAy = await db.get(`hesapTarihAy${message.member.id}`);
  const hesapGün = await db.get(`hesapTarihGün${message.member.id}`);

  if(!hesapDurum) return;

  if(message.content.length > 15) {
    db.add(`hesapBakiye${message.member.id}`, 2)
  }
});