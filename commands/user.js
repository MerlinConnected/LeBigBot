const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("user")
    .setDescription("Info about the user!"),
  async execute(interaction) {
    await interaction.reply(
      `Your tag : ${interaction.user.tag}
        \nCreation date : ${interaction.user.createdAt}
        \nPFP : ${interaction.user.displayAvatarURL()}`
    );
  },
};
