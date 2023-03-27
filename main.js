const { Client, Message } = require("discord.js")



/**
 * EVENTZ:
 * welcomeByw
 * autoRole
 * autoTag
*/

$registeredEvent = (client, { event, channel, role, text }) => {
  if (!(client instanceof Client)) {
    throw new TypeError('client objesi girmediniz.');
  }
  
  // registeredEvent:welcomeBye
  if(event == "welcomeBye"){
    if(!channel) throw new TypeError('kanal ID si girmediniz.')
    
    client.on("guildMemberAdd", async (member) => {
      member.guild.channels.cache.get(channel).send({ content: `📥 **${member.user.tag}** sunucuya katıldı.`})
    })
    
    client.on("guildMemberRemove", async (member) => {
      member.guild.channels.cache.get(channel).send({ content: `📤 **${member.user.tag}** sunucudan ayrıldı.`})
    })
  }
  
  // registeredEvent:autoRole
  if(event == "autoRole"){
    if(!channel) throw new TypeError('kanal ID si girmediniz.')
    if(!role) throw new TypeError('rol ID si girmediniz..')
    
      client.on("guildMemberAdd", member => {
        const roleCache = member.guild.roles.cache.get(role)
        const otorol = role
        const embed = new MessageEmbed()
       .setTitle(`Autorole`)
       .setColor("GREEN")
       .setDescription(`${member.user.tag} Sunucuya katıldı ve \`@${roleCache.name}\` rolü verildi..`)
       member.guild.channels.cache.get(channel).send({ embeds: [embed] })
       member.roles.add(role)
    })
  }
  
  // registeredEvent:autoTag
  if(event == "autoTag"){
    if(!channel) throw new TypeError('kanal ID si girmediniz..')
    if(!text) throw new TypeError('tag girmediniz. [MAX 3 KARAKTER İÇERMELİDİR]')
    if(text.length < 1 || text.length > 3) throw new TypeError('tag maximum 3 karakter içermelidir.')
    
    client.on("guildMemberAdd", member => {
      member.setNickname(`${text} ${member.user.username}`)
      member.guild.channels.cache.get(channel).send({ content: `📥 **${member.user.tag}** Sunucuya katıldı ve \`${text}\` tag verildi.` })
    })
  }
  
}
//END








//
module.exports = {
  $registeredEvent
}
