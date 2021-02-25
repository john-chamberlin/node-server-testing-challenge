// Update with your config settings.

module.exports = {
	development: {
		client: 'sqlite3',
		connection: {
			filename: './data/d2Guns.db3'
		},
		migrations: {
			directory: './data/migrations'
		},
		useNullAsDefault: true
	},
	testing: {
		client: 'sqlite3',
		useNullAsDefault: true,
		migrations: { directory: './data/migrations' },
		seeds: { directory: './data/seeds' },
		connection: {
			filename: './data/test.db3'
		}
	},
	staging: {},

	production: {}
}
