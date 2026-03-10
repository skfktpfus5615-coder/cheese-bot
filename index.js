const { Client, GatewayIntentBits } = require("discord.js");
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once("ready", () => {
  console.log(`봇 로그인: ${client.user.tag}`);
});

client.on("messageCreate", message => {

  if (message.author.bot) return;

  if (message.content === "!핑") {
    message.reply("퐁!");
  }

});

client.login(process.env.TOKEN);
