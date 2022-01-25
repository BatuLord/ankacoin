const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: 'hesap-bilgi',
  description: 'Hesabınızın bilgilerini öğrenirsiniz',
  execute: async (client, interaction) => {
    
    
         const hesapBakiye = await db.get(`hesapBakiye${interaction.user.id}`);
         const hesapDurum = await db.get(`hesapDurum${interaction.user.id}`);
         const hesapİsmi = await db.get(`hesapİsmi${interaction.user.id}`);
         const hesapYıl = await db.get(`hesapTarihYıl${interaction.user.id}`);
         const hesapAy = await db.get(`hesapTarihAy${interaction.user.id}`);
         const hesapGün = await db.get(`hesapTarihGün${interaction.user.id}`);
    
    
         if(!hesapİsmi) {
          if(!hesapDurum) {
         const durumEmbed = new MessageEmbed()
            .setTitle("AC Coin")
            .setDescription(`Hesabınız bulunmuyor. Oluşturmak için \`/hesap-oluştur\``)
            .setColor("BLUE")
            return interaction.followUp({embeds:[durumEmbed]})
          }
        }
  
      
      if(hesapDurum) {
    if(hesapİsmi) {
      const bilgiEmbed = new MessageEmbed()
      .setTitle("AC Coin")
      .setColor("BLUE")
      .addField("📄 Hesap Adı", `${hesapİsmi}`)
      .addField("💵 Hesap Bakiyesi", `${hesapBakiye}`)
      .addField("🗒 Hesap Oluşturulma Tarihi", `${hesapAy}/${hesapGün+1}/${hesapYıl}`)
      interaction.followUp({ embeds: [bilgiEmbed]})
        
      }
    }

    }
         
    
       
    
};
