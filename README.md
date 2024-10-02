<div align="center">
  <br />
  <p>
    <a href="https://www.npmjs.com/package/foxrpc-lib"><img src="https://img.shields.io/npm/v/foxrpc-lib.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/foxrpc-lib"><img src="https://img.shields.io/npm/dt/foxrpc-lib.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://david-dm.org/zlear
    /foxrpc-lib"><img src="https://img.shields.io/david/zelear/foxrpc-lib.svg?maxAge=3600" alt="Dependencies" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/foxrpc-lib/"><img src="https://nodei.co/npm/foxrpc-lib.png?downloads=true&stars=true" alt="NPM info" /></a>
  </p>
</div>

# foxrpc-lib Extension

### [Documentation](https://discord.js.org/#/docs/rpc/)

### [Rich Presence Example](https://github.com/discordjs/RPC/blob/master/example)

### __Browser__ Example

```javascript
const clientId = '287406016902594560';
const scopes = ['rpc', 'rpc.api', 'messages.read'];

const client = new RPC.Client({ transport: 'websocket' });

client.on('ready', () => {
  console.log('Logged in as', client.application.name);
  console.log('Authed for user', client.user.username);

  client.selectVoiceChannel('81384788862181376');
});

// Log in to RPC with client id
client.login({ clientId, scopes });
```
