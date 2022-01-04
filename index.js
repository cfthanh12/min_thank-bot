const Discord = require("discord.js")
require("dotenv").config()
const TOKEN = "OTI3NzI3NjExMDg0NDM5NTUy.YdObqg.VOTCmn3KWMTss6er40Le1w8vBDo"

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
