# discord.js-easycmd
- bu modül botlarınıza daha kolay/hazır komut kurmanıza yarar.

## Kayıtlı Eventler;
- welcomeBye
- autoRole
- autoTag
- **(Zamanla güncelleme gelecek)**

## Örnek Kullanımlar;
- index.js
```js
const { Client } = require("discord.js");
const client = new Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"]
});
const { $registeredEvent } = require("discord.js-easycmd")

// Welcome Bye
$registeredEvent(client, {
  event: "welcomeBye",
  channel: "CHANNEL_ID"
});

// Auto Tag
$registeredEvent(client, {
  event: "autoTag",
  channel: "CHANNEL_ID",
  text: "♡" // tag
});

// Auto Role
$registeredEvent(client, {
  event: "autoRole",
  channel: "CHANNEL_ID",
  role: "ROLE_ID"
});
```

## NOT
- Discord.js V13 destekli.

<div align="center">
  <b>[GitHub](https://github.com/warfdev)</b> | <b>[Discord Support](https://discord.com/invite/RVN8dGhNEY)</b>
</div>
