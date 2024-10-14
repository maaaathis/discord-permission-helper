import { describe, expect, test } from '@jest/globals';
import { DiscordPermissionHelper } from '../src';

describe('convertPermissions', () => {
	test('simple non json array', () => {
		const discordPermissionHelper = new DiscordPermissionHelper();

		expect(discordPermissionHelper.convertPermission('1409084834386')).toStrictEqual([
			'KICK_MEMBERS',
			'MANAGE_CHANNELS',
			'ADD_REACTIONS',
			'STREAM',
			'EMBED_LINKS',
			'CHANGE_NICKNAME',
			'MANAGE_ROLES',
			'CREATE_PUBLIC_THREADS',
			'SEND_MESSAGES_IN_THREADS',
			'MODERATE_MEMBERS',
		]);
	});

	test('pure admin permission', () => {
		const discordPermissionHelper = new DiscordPermissionHelper();

		expect(discordPermissionHelper.convertPermission('8')).toStrictEqual(['ADMINISTRATOR']);
	});

	test('pure admin permission as json', () => {
		const discordPermissionHelper = new DiscordPermissionHelper();

		expect(discordPermissionHelper.convertPermission('8', true)).toStrictEqual(
			JSON.stringify(['ADMINISTRATOR']),
		);
	});

	test('empty permission hash', () => {
		const discordPermissionHelper = new DiscordPermissionHelper();

		expect(discordPermissionHelper.convertPermission('')).toStrictEqual('[]');
	});
});
