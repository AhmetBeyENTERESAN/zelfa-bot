const Discord = require("discord.js");
const Gamedig = require("gamedig");
exports.run = (client, message, args) => {

  
  Gamedig.query({
    type: "mtasa",
    host: "217.195.202.234"
  })

    .then(state => {
      const client = new Discord.MessageEmbed()
        .setColor("ffa500")
        .addField("Sunucumuzun IP Adresi","IP : 217.195.202.234")
      	.setTimestamp()
	    .setFooter("ZelfaRPG | ENTERESAN");
      message.channel.send(client);
    })

.catch(err =>
  
       
      console.log(err)
    );
  
};

exports.conf = {
    aliases: ['ip']
}
exports.help = {
    name: "ip"
}