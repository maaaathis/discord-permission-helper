# Discord Permission Helper
[![Test](https://github.com/maaaathis/discord-permission-helper/actions/workflows/test.yml/badge.svg)](https://github.com/maaaathis/discord-permission-helper/actions/workflows/test.yml)

This npm package provides a simple implementation for converting and checking Discord permission bitfields.

## Installation

```shell
npm i discord-permission-helper
```

## Example usage

```javascript
import { DiscordPermissionHelper } from 'discord-permission-helper';

// Create a DiscordPermissionHelper instance
const discordPermissionHelper = new DiscordPermissionHelper();

// Convert a permission bitfield to an array of permission names
const permissionBitfield = '2199023255552n';
const convertedPermissions = discordPermissionHelper.convertPermission({
  hash: permissionBitfield,
  json: false
});

console.log(convertedPermissions);
// Output: ['VIEW_CREATOR_MONETIZATION_ANALYTICS']

// Check if a specific permission is granted in a bitfield
const hasPermission = discordPermissionHelper.checkPermission('KICK_MEMBERS', permissionBitfield);

console.log(hasPermission);
// Output: false

// Convert permissions to JSON string
const jsonPermissions = discordPermissionHelper.convertPermission({
  hash: permissionBitfield,
  json: true
});

console.log(jsonPermissions);
// Output: '["VIEW_CREATOR_MONETIZATION_ANALYTICS"]'
```

## License

[MIT](https://choosealicense.com/licenses/mit/)