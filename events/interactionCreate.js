const client = require("../index");
const { MessageEmbed } = require("discord.js");

client.on("interactionCreate", async (interaction) => {
    // Slash Command Handling
    if (interaction.isCommand()) {
        await interaction.deferReply({ ephemeral: false }).catch(() => {});
        const cmd = client.slashCommands.get(interaction.commandName);
        if (!cmd)
        return interaction.followUp({ content: "❌ -> Hata oluştu!" });
      
      

       const description1 = `Komutu çalıştırabilmem için ${cmd.permission} iznine sahip olmalıyım!`
       .replace(`MODERATE_MEMBERS`, `\`Zaman Aşımı Uygula\``)
       .replace(`BAN_MEMBERS`, `\`Üyeleri Yasakla\``)
       .replace(`KICK_MEMBERS`, `\`Üyeleri At\``)
       .replace(`ADMINISTRATOR`, `\`Yönetici\``)
       .replace(`MANAGE_ROLES`, `\`Rolleri Yönet\``) 

       if(cmd.botPermission) {
        const authorPerms = interaction.channel.permissionsFor(interaction.guild.members.cache.get(interaction.client.user.id))
        if(!authorPerms || !authorPerms.has(cmd.botPermission)) {
          const botpermEmbed = new MessageEmbed()
          .setColor("BLUE")
          .setDescription(description1)
          return interaction.followUp({ embeds: [botpermEmbed]})
        }
      } 

       const description = `Komutu çalıştırabilmen için ${cmd.permission} iznine sahip olmalısın!`
       .replace(`MODERATE_MEMBERS`, `\`Zaman Aşımı Uygula\``)
       .replace(`BAN_MEMBERS`, `\`Üyeleri Yasakla\``)
       .replace(`KICK_MEMBERS`, `\`Üyeleri At\``)
       .replace(`ADMINISTRATOR`, `\`Yönetici\``)
       .replace(`MANAGE_ROLES`, `\`Rolleri Yönet\``)

       if(cmd.permission) {
         const authorPerms = interaction.channel.permissionsFor(interaction.member)
         if(!authorPerms || !authorPerms.has(cmd.permission)) {
           const permEmbed = new MessageEmbed()
           .setColor("#28282B")
           .setTitle("Splix Beta | Hata")
           .setDescription(description)
           return interaction.followUp({ embeds: [permEmbed]})
         }
       }
      

        const args = [];

        for (let option of interaction.options.data) {
            if (option.type === "SUB_COMMAND") {
                if (option.name) args.push(option.name);
                option.options?.forEach((x) => {
                    if (x.value) args.push(x.value);
                });
            } else if (option.value) args.push(option.value);
        }
        interaction.member = interaction.guild.members.cache.get(interaction.user.id);

        cmd.execute(client, interaction, args);
    }

    // Context Menu Handling
    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
        if (command) command.execute(client, interaction);
    }
});
