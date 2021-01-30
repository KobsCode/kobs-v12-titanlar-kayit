const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  if (!message.member.roles.cache.has("762306051336437800"))
    return message.channel.send(
      `${message.author}, \`register\` komutunu kullanmak için yeterli yetkiye sahip değilsin.`
    );

  let user = message.mentions.members.first();

  if (!user) return message.channel.send("Bir Üye Pls");

  if (args[1] === "kadın") {
    /*
!kayıt @user erkek/kadın isim yaş
*/

    let isim = args[2];
    let yaş = args[3];

    if (!isim) return message.channel.send("Bir İsim pls");
    if (!yaş) return message.channel.send("Bir yaş pls");

  user.roles.add("762306052699324446");
  user.roles.remove("762306275916644372");
  
    user.setNickname(`${isim} ${yaş}`);

    const s = new Discord.MessageEmbed()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/722917476224204870/722965538191704144/ezgif-4-0f37e775c9f0.gif"
      )
      .setColor("GOLD")
      .setDescription(
        `
❯ Titanlar'a Hoş Geldiniz.
❯  Aramıza katıldı.

**❯ Kayıt Başarı ile Gerçekleşti.**
Public odalara geçiş yapabilirsin kendine popüler davranmayı unutma.

**Bilgiler**;

**❯ İsim**  : ${isim}
**❯ Yaş** : ${yaş}
**❯ Cinsiyet** : Kadın
                    `
      )

      .addField(`❯ Kayıt Eden Yetkili`, `${message.author}`);
    message.channel.send(s);
  }

  if (args[1] === "erkek") {
    let isim = args[2];
    let yaş = args[3];

    if (!isim) return message.channel.send("Bir İsim pls");
    if (!yaş) return message.channel.send("Bir yaş pls");

     user.roles.add("762306051999531068");
  user.roles.remove("762306275916644372");
    user.setNickname(`${isim} ${yaş}`);

    const s = new Discord.MessageEmbed()
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/722917476224204870/722965538191704144/ezgif-4-0f37e775c9f0.gif"
      )
      .setColor("GOLD")
      .setDescription(
        `
❯ Titanlar'a Hoş Geldiniz.
❯  Aramıza katıldı.

**❯ Kayıt Başarı ile Gerçekleşti.**
Public odalara geçiş yapabilirsin kendine popüler davranmayı unutma.

**Bilgiler**;

**❯ İsim**  : ${isim}
**❯ Yaş** : ${yaş}
**❯ Cinsiyet** : Erkek
                    `
      )

      .addField(`❯ Kayıt Eden Yetkili`, `${message.author}`);
    message.channel.send(s);
  }

  return message.channel.send(
    `:white_check_mark: | ${user.user.username} , adlı kullanıcıyı başarıyla kayıt yapıldı.`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: "kayıt",
  description: "v12 erkek kayıt.",
};
