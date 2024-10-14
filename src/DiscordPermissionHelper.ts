/**
 * Defines the structure for Discord permissions.
 */
type DiscordPermissions = {
	[key: string]: bigint;
};

/**
 * Defines the structure of the response object returned by the convertPermission method.
 */
type ConvertPermissionResponse = string[] | string;

/**
 * Defines all possible Discord permissions.
 */
export type Permissions =
	| 'CREATE_INSTANT_INVITE'
	| 'KICK_MEMBERS'
	| 'BAN_MEMBERS'
	| 'ADMINISTRATOR'
	| 'MANAGE_CHANNELS'
	| 'MANAGE_GUILD'
	| 'ADD_REACTIONS'
	| 'VIEW_AUDIT_LOG'
	| 'PRIORITY_SPEAKER'
	| 'STREAM'
	| 'VIEW_CHANNEL'
	| 'SEND_MESSAGES'
	| 'SEND_TTS_MESSAGES'
	| 'MANAGE_MESSAGES'
	| 'EMBED_LINKS'
	| 'ATTACH_FILES'
	| 'READ_MESSAGE_HISTORY'
	| 'MENTION_EVERYONE'
	| 'USE_EXTERNAL_EMOJIS'
	| 'VIEW_GUILD_INSIGHTS'
	| 'CONNECT'
	| 'SPEAK'
	| 'MUTE_MEMBERS'
	| 'DEAFEN_MEMBERS'
	| 'MOVE_MEMBERS'
	| 'USE_VAD'
	| 'CHANGE_NICKNAME'
	| 'MANAGE_NICKNAMES'
	| 'MANAGE_ROLES'
	| 'MANAGE_WEBHOOKS'
	| 'MANAGE_EMOJIS_AND_STICKERS'
	| 'USE_APPLICATION_COMMANDS'
	| 'REQUEST_TO_SPEAK'
	| 'MANAGE_EVENTS'
	| 'MANAGE_THREADS'
	| 'CREATE_PUBLIC_THREADS'
	| 'CREATE_PRIVATE_THREADS'
	| 'USE_EXTERNAL_STICKERS'
	| 'SEND_MESSAGES_IN_THREADS'
	| 'USE_EMBEDDED_ACTIVITIES'
	| 'MODERATE_MEMBERS'
	| 'VIEW_CREATOR_MONETIZATION_ANALYTICS'
	| 'USE_SOUNDBOARD'
	| 'USE_EXTERNAL_SOUNDS'
	| 'SEND_VOICE_MESSAGES'
	| 'SEND_POLLS'
	| 'USE_EXTERNAL_APPS';

// **PermissionConverter Class**

/**
 * DiscordPermissionHelper
 *
 * This class is used to convert and check discord permission hashes.
 *
 * @author maaaathis
 */
export class DiscordPermissionHelper {
	/** Define all discord permissions */
	private readonly permissions: DiscordPermissions = {
		CREATE_INSTANT_INVITE: 1n,
		KICK_MEMBERS: 2n,
		BAN_MEMBERS: 4n,
		ADMINISTRATOR: 8n,
		MANAGE_CHANNELS: 16n,
		MANAGE_GUILD: 32n,
		ADD_REACTIONS: 64n,
		VIEW_AUDIT_LOG: 128n,
		PRIORITY_SPEAKER: 256n,
		STREAM: 512n,
		VIEW_CHANNEL: 1024n,
		SEND_MESSAGES: 2048n,
		SEND_TTS_MESSAGES: 4096n,
		MANAGE_MESSAGES: 8192n,
		EMBED_LINKS: 16384n,
		ATTACH_FILES: 32768n,
		READ_MESSAGE_HISTORY: 65536n,
		MENTION_EVERYONE: 131072n,
		USE_EXTERNAL_EMOJIS: 262144n,
		VIEW_GUILD_INSIGHTS: 524288n,
		CONNECT: 1048576n,
		SPEAK: 2097152n,
		MUTE_MEMBERS: 4194304n,
		DEAFEN_MEMBERS: 8388608n,
		MOVE_MEMBERS: 16777216n,
		USE_VAD: 33554432n,
		CHANGE_NICKNAME: 67108864n,
		MANAGE_NICKNAMES: 134217728n,
		MANAGE_ROLES: 268435456n,
		MANAGE_WEBHOOKS: 536870912n,
		MANAGE_EMOJIS_AND_STICKERS: 1073741824n,
		USE_APPLICATION_COMMANDS: 2147483648n,
		REQUEST_TO_SPEAK: 4294967296n,
		MANAGE_EVENTS: 8589934592n,
		MANAGE_THREADS: 17179869184n,
		CREATE_PUBLIC_THREADS: 34359738368n,
		CREATE_PRIVATE_THREADS: 68719476736n,
		USE_EXTERNAL_STICKERS: 137438953472n,
		SEND_MESSAGES_IN_THREADS: 274877906944n,
		USE_EMBEDDED_ACTIVITIES: 549755813888n,
		MODERATE_MEMBERS: 1099511627776n,
		VIEW_CREATOR_MONETIZATION_ANALYTICS: 2199023255552n,
		USE_SOUNDBOARD: 4398046511104n,
		USE_EXTERNAL_SOUNDS: 35184372088832n,
		SEND_VOICE_MESSAGES: 70368744177664n,
		SEND_POLLS: 2251799813685248n,
		USE_EXTERNAL_APPS: 4503599627370496n,
	};

	/**
	 * Converts a discord permission hash to a readable array.
	 *
	 * @param bitfield - The permission bitfield to convert.
	 * @param json - Whether the output should be json formatted or not.
	 * @returns The converted readable permission array or JSON string.
	 */
	public convertPermission(bitfield: string | bigint, json?: boolean): ConvertPermissionResponse {
		if (!bitfield || bitfield === '') {
			return '[]';
		}

		const bigIntHash = typeof bitfield === 'string' ? BigInt(bitfield) : bitfield;
		const permissionsOutput: string[] = [];

		for (const [permission, value] of Object.entries(this.permissions)) {
			if (bigIntHash & value) {
				permissionsOutput.push(permission);
			}
		}

		if (json) {
			return JSON.stringify(permissionsOutput);
		} else {
			return permissionsOutput;
		}
	}

	/**
	 * Checks if a specific permission is granted in the given permission bitfield.
	 *
	 * @param permission - The permission to check.
	 * @param bitfield - The permission bitfield to check against.
	 * @returns True if the permission is granted, false otherwise.
	 * @throws Error if an invalid permission is provided.
	 */
	public checkPermission(permission: Permissions, bitfield: string | bigint): boolean {
		const permissionValue = this.permissions[permission];

		if (permissionValue === undefined) {
			throw new Error(`Invalid permission (${permission})`);
		}

		const bigIntBitfield = typeof bitfield === 'string' ? BigInt(bitfield) : bitfield;

		return (bigIntBitfield & permissionValue) === permissionValue;
	}
}
