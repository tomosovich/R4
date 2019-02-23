Log to console when bot is online
client.on('ready', () => {
  // List servers the bot is connected to
  console.log("Servers:")
  client.guilds.forEach((guild) => {
    console.log(" - " + guild.name)
    // Log to console 
    console.log("Connected as " + client.user.tag);
    // List channels the bot is connected to
    guild.channels.forEach((channel) => {
      console.log(`-- ${channel.name} (${channel.type} - ${channel.id}`)
    })
  })
  // Posts a pre-determined message to the channel when bot comes online
  let generalChannel = client.channels.get("548775697066491916");
  generalChannel.send("Hello, World!");

})
// Responds to a message
client.on('message', (receivedMessage) => {
  // Prevent bot from responding to it's own messages
  if (receivedMessage.author == client.user) {
    return
  }
  receivedMessage.channel.send("Message received from " + receivedMessage.author.toString() + ": " + receivedMessage.content)
})
