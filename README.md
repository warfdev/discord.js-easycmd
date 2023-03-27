# discord.js-registeredEvents
- bu modül botlarınıza daha kolay/hazır event kurmanıza yarar.

## Kayıtlı Eventler;
- welcomeBye
- autoRole
- autoTag
- **(Zamanla güncelleme gelecek)**

## Örnek Kullanımlar;
- index.js
```js
const { Client } = require("discord.js");
const { $registeredEvent } = require("discord.js-registeredEvents")

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
