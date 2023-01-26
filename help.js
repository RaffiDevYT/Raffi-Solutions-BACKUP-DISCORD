const Discord = require("discord.js");
const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  if (message.author.bot) return;
  let prefix = config.prefix;
  if (!message.content.startsWith(prefix)) return;

  let help = new Discord.MessageEmbed()
    .setAuthor('Bot Command List', client.user.displayAvatarURL())
    .setDescription("> Bot Prefix is: .")
    .addField(
      "Backup Commands",
     "x!info-backup(id)"
    )

    .addField(
      "Backup Load Commands",
      "x!load-backup"
    )

    .addField(
      "Backup create Commands",
      "x!make-backup"
    )
 
    .addField("? Information ?", "stats", true)
    .addField("Bot Invite Link!", "[Invite me To Your Server!]()")
    .setTimestamp()
    .setFooter(
      `Command Requested By ${message.author.tag}`,
      client.user.displayAvatarURL(),
      message.delete()
    );
  message.channel.send(help);

};

module.exports.help = {
  name: "help"
};