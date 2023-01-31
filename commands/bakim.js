const Discord = require('discord.js')

exports.run = (client, message, args) => { 
if(message.author.id == "1070032644034801784"){
	const aktifEmbed = new Discord.MessageEmbed()
		.setColor("ff0000")
		.setTitle("**Sunucumuz Kısa Süreliğine Bakım Moduna Alınmıştır. Sizlere daha iyi bir hizmet verebilmek için çalışıyoruz...**")
		.setImage("https://media.discordapp.net/attachments/921837812750372916/1043552532657623050/99rpsari.png?width=348&height=348")
		.setTimestamp()
		.setFooter("ZelfaRPG | ENTERESAN");
		message.channel.send({content: "||@everyone||", embed: aktifEmbed})
}else return message.reply(`:x: Bunu yapabilmek için yetkin yok!`)
};

exports.conf = {
    aliases: ['bakim']
}
exports.help = {
    name: "bakım"
}