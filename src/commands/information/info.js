const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed, MessageAttachment } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("info")
    .setDescription("Returns info based on input")
    .addSubcommand((subcommand) =>
      subcommand
        .setName("user")
        .setDescription("Gets infomation of a user mentioned")
        .addUserOption((option) =>
          option.setName("target").setDescription("The user mentioned")
        )
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("server").setDescription("Info about the server")
    ),
  async execute(interaction, client) {
    if (interaction.options.getSubcommand() === "user") {
      const user = interaction.options.getUser("target");
      if (user) {
        const file = new MessageAttachment("./src/images/OnaixiaAvatar.png");
        const userEmbed = new MessageEmbed()
          .setTitle(`${user.username}'s Infomation:`)
          .setDescription("This is a Description")
          .setURL("https://youtube.com/joqnix")
          .setAuthor(
            "JoqniX",
            client.user.displayAvatarURL(),
            "https://youtube.com/joqnix"
          )
          .setThumbnail(client.user.displayAvatarURL())
          .addFields(
            {
              name: `Username:`,
              value: `Username is: ${user.username}`,
              inline: true,
            },
            { name: `\u200B`, value: `\u200B`, inline: true },
            {
              name: `Tag:`,
              value: `Tag is: #${user.discriminator}`,
              inline: true,
            }
          )
          .setImage("attachment://OnaixiaAvatar.png")
          .setTimestamp()
          .setColor("LUMINOUS_VIVID_PINK")
          .setFooter(client.user.tag, client.user.displayAvatarURL());

        await interaction.reply({ embeds: [userEmbed], files: [file] });
      } else {
        await interaction.reply(
          `Username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`
        );
      }
    } else if (interaction.options.getSubcommand() === "server") {
      await interaction.reply(
        `Server name: ${interaction.guild.name}\nTotal Members: ${interaction.guild.memberCount}`
      );
    } else {
      await interaction.reply("No sub commands was used.");
    }
  },
};
