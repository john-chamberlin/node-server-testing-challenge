exports.up = function (knex) {
	return knex.schema.createTable('d2Guns', table => {
		table.increments()
		table.string('name').notNullable()
		table.string('type')
		table.string('energyType')
	})
}

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('d2guns')
}
