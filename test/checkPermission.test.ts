import { describe, expect, test } from '@jest/globals';
import { DiscordPermissionHelper } from '../src';

describe('checkPermission', () => {
	test('simple admin permission check', () => {
		const discordPermissionHelper = new DiscordPermissionHelper();

		expect(discordPermissionHelper.checkPermission('ADMINISTRATOR', '8')).toStrictEqual(true);
	});

	test('false permission check', () => {
		const discordPermissionHelper = new DiscordPermissionHelper();

		expect(discordPermissionHelper.checkPermission('MODERATE_MEMBERS', '8')).toStrictEqual(false);
	});
});
