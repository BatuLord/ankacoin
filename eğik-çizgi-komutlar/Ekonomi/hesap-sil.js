const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: 'hesap-sil',
  description: 'Hesabınızı silersiniz',
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
        db.delete(`hesapDurum${interaction.user.id}`);
        db.delete(`hesapİsmi${interaction.user.id}`);
        db.delete(`hesapBakiye${interaction.user.id}`);
        const hesapEmbed = new MessageEmbed()
        .setColor("#28282B")
        .setTitle("AC Coin")
        .setDescription("Hesabınız kaldırıldı! Tekrar oluşturmak için \`/hesap-oluştur\`")
        interaction.followUp({ embeds: [hesapEmbed]})
        

      }
    }   

    }
         
    
       
    
};
