const Discord = require('discord.js')

exports.run = (client, message, args) => { 
if(message.author.id == "1070032644034801784"){
	const aktifEmbed = new Discord.MessageEmbed()
		.setColor("ffa500")
		.setTitle("**Sunucumuza restart atılıyor en kısa zamanda tekrardan aktif olacaktır.**")
		.setImage("https://media.discordapp.net/attachments/921837812750372916/1043552532657623050/99rpsari.png?width=348&height=348")
		.setTimestamp()
		.setFooter("ZelfaRPG | ENTERESAN");
		message.channel.send({content: "||@everyone||", embed: aktifEmbed})
}else return message.reply(`:x: Bunu yapabilmek için yetkin yok!`)
};

exports.conf = {
    aliases: ['restart']
}
exports.help = {
    name: "restart"
}