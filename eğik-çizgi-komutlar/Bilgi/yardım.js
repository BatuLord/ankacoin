const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const config = require("../../config.json");
const prefix = "/"
const ms = require('ms')


module.exports = {
  name: 'yardım',
  description: 'Botun komutlarını listelersin',
  execute: async (client, interaction) => {
    

  const embed = new MessageEmbed()
  .setColor("#28282B")
  .setTitle(`Splix Beta | Yardım Menüsü`)
  .addField(`> \`${prefix}kayıt-sistemi\``, `<:pc:919542161790357514> Kayıt sistemi menüsünü gösterir`)
  .addField(`> \`${prefix}moderasyon\``, `<:kalkan:919541579792928808> Moderasyon menüsünü gösterir`)
  .addField(`> \`${prefix}ekonomi\``, `<:onay:919541579520294943> Ekonomi menüsünü gösterir`)
  .addField(`> \`${prefix}çekiliş-sistemi\``, `<:ckls:919541579809710100> Çekiliş sistemi menüsünü gösterir`)
  .addField(`> \`${prefix}müzik\``, `<:mzik:923154667624624138> Müzik menüsünü gösterir`)
  .addField(`> \`${prefix}kullanıcı\``, `<:etiket:919541579927146566> Kullanıcı menüsünü gösterir`)
  .addField(`> \`${prefix}abone-sistemi\``, `<:ckc:919542161534513167>  Abone menüsünü gösterir`)
  interaction.followUp({embeds: [embed]})
  db.delete(`test1${interaction.user.id}`);
  db.delete(`test${interaction.user.id}`);

    
  }    
};
