const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("server")
    .setDescription("Info about the server!"),
  async execute(interaction) {
    await interaction.reply(
      `Server name : ${interaction.guild.name}
        \nTotal members : ${interaction.guild.memberCount}
        \nCreated at : ${interaction.guild.createdAt}
        \nVerification level : ${interaction.guild.verificationLevel}`
    );
  },
};
