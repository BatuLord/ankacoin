const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: 'hesap-oluştur',
  description: 'Hesap oluşturursunuz',
  options: [     
       {
        name: 'isim',
        description: 'Hesap ismi giriniz!',
        type: 'STRING',
        required: true
        }
     ],
  
  execute: async (client, interaction) => {
         const hesapBakiye = await db.get(`hesapBakiye${interaction.user.id}`);
         const hesapDurum = await db.get(`hesapDurum${interaction.user.id}`);
         const hesapİsmi = await db.get(`hesapİsmi${interaction.user.id}`);
         const hesapYıl = await db.get(`hesapTarihYıl${interaction.user.id}`);
         const hesapAy = await db.get(`hesapTarihAy${interaction.user.id}`);
         const hesapGün = await db.get(`hesapTarihGün${interaction.user.id}`);
    
         let hesapİsim = interaction.options.getString("isim")
         
         if(hesapİsmi) {
          if(hesapDurum) {
         const durumEmbed = new MessageEmbed()
            .setTitle("AC Coin")
            .setDescription(`Hesabınız bulunuyor. Bilgilerinizi öğrenmek için \`/hesap-bilgi\``)
            .setColor("BLUE")
            return interaction.followUp({embeds:[durumEmbed]})
          }
        }
   
          
      
         if(!hesapDurum) {
      if(!hesapİsmi) {  
        try {
        db.set(`hesapDurum${interaction.user.id}`, "open");
        const hesapEmbedd = new MessageEmbed()
        .setColor("BLUE")
        .setTitle("AC Coin")
        .setDescription("Hesabınız oluşturuldu! Bilgilerinizi öğrenmek için \`/hesap-bilgi\`")
        interaction.followUp({ embeds: [hesapEmbedd]})
        db.set(`hesapİsmi${interaction.user.id}`, hesapİsim);
        const hesapYıl = new Date().getFullYear();
        const hesapAy = new Date().getDate();
        const hesapGün = new Date().getMonth();
        db.set(`hesapTarihYıl${interaction.user.id}`, hesapYıl);
        db.set(`hesapTarihAy${interaction.user.id}`, hesapAy);
        db.set(`hesapTarihGün${interaction.user.id}`, hesapGün);
        db.add(`hesapBakiye${interaction.user.id}`, 50);
        } catch(e) {
          console.log(e)
          const hataEmbed = new MessageEmbed()
          .setTitle("AC Coin")
          .setColor("BLUE")
          .setDescription("Hesap oluştururken hata oluştu!")
          return interaction.followUp({ embeds: [hataEmbed]})
        }

      }
    }   

    }
         
    
       
    
};
