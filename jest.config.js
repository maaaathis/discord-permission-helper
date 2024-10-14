/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
	extensionsToTreatAsEsm: ['.ts'],
	testEnvironment: 'node',
	transform: {
		'^.+.tsx?$': ['ts-jest', {}],
	},
};
