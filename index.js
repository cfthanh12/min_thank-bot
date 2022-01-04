const Discord = require("discord.js")
require("dotenv").config()
const TOKEN = "OTI3NzI3NjExMDg0NDM5NTUy.YdObqg.zpHit7o_cs3ewdSOdE67vRtb9Vs"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello")
    }
})
 
client.login(process.env.TOKEN)
