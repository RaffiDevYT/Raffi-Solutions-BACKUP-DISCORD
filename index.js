const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Working!')
})

app.listen(port, () => {
  console.log(`👌 Your app is listening at port ${port}`)
})

/* Load all events */
fs.readdir("./events/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        console.log(`👌 Event loaded: ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./events/${file}`)];
    });
});

client.commands = new Discord.Collection();
client.config = require('./config.json')

/* Load all commands */
fs.readdir("./commands/", (_err, files) => {
    files.forEach((file) => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
        console.log(`👌 Command loaded: ${commandName}`);
    });
});

// Login
client.login("");
