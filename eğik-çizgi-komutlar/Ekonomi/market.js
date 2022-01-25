const { MessageButton, MessageActionRow, MessageEmbed, Permissions, Interaction } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "market", 
    description: "Bakiyeniz ile marketten ürün alırsınız",
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

   const row = new MessageActionRow()
   .addComponents(
      new MessageButton()   
      .setCustomId('urun1')
      .setLabel(`Ürün - Fiyat`)
      .setStyle('PRIMARY'),

      new MessageButton()   
      .setCustomId('urun2')
      .setLabel(`Ürün 2 - Fiyat`)
      .setStyle('PRIMARY'),

   )

   const butonEmbed = new MessageEmbed()
   .setColor("BLUE")
   .setDescription(`Ürün - Fiyat\nÜrün - Fiyat`)

   const btn = await interaction.followUp({ embeds: [butonEmbed], components: [row] })
   const kullanıcıFilter = i => i.user.id === interaction.user.id
   const collector = btn.createMessageComponentCollector({ filter: kullanıcıFilter, time: 600000})

   collector.on('collect', async klnc => {
    const hesapa = await db.get(`test${interaction.user.id}`);
    const hesap = await db.get(`hesapBakiye${interaction.user.id}`);
    if(klnc.customId === 'urun1'){
      if(hesapa){
        const kaldırEmbed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`ürün zaten alınmış!`)
        klnc.reply({ embeds: [kaldırEmbed], ephemeral: true})
      } else if (hesap > 5) {
       db.add(`hesapBakiye${interaction.user.id}`, -10);
       db.set(`test1${interaction.user.id}`, "alınmıss");
        const basar2Embed = new MessageEmbed()
        .setColor("BLUE")
        .setDescription(`ürünü aldın!`)
        klnc.reply({ embeds: [basar2Embed], ephemeral: true})
      } else if(hesap < 5) {
       const basar2Embed = new MessageEmbed()
       .setColor("BLUE")
       .setDescription(`paran yok ağla`)
       klnc.reply({ embeds: [basar2Embed], ephemeral: true})
    } 
       }

       if(klnc.customId === 'urun2'){
        const hesapas = await db.get(`test1${interaction.user.id}`);
        const hesap = await db.get(`hesapBakiye${interaction.user.id}`);
        if(hesapas){
            const kaldırEmbed = new MessageEmbed()
            .setColor("BLUE")
            .setDescription(`ürün zaten alınmış!`)
            klnc.reply({ embeds: [kaldırEmbed], ephemeral: true})
          } else if (hesap > 5) {
           db.add(`hesapBakiye${interaction.user.id}`, -10);
           db.set(`test1${interaction.user.id}`, "alınmıss");
            const basar2Embed = new MessageEmbed()
            .setColor("BLUE")
            .setDescription(`ürünü aldın!`)
            klnc.reply({ embeds: [basar2Embed], ephemeral: true})
          } else if(hesap < 5) {
           const basar2Embed = new MessageEmbed()
           .setColor("BLUE")
           .setDescription(`paran yok ağla`)
           klnc.reply({ embeds: [basar2Embed], ephemeral: true})
        }
       }
          
    }); 
    }
};