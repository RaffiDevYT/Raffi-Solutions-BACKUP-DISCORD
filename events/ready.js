module.exports = (client) => {
    console.log(`👌 Ready as ${client.user.tag} to server in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
    
};