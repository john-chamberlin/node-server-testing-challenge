const db = require('../data/db-config')

function insert(gun) {
	return db('d2Guns')
		.insert(gun)
		.then(([id]) => {
			return db('d2Guns').where('id', id).first()
		})
}

function remove(id) {
	return db('d2Guns').where('id', id).del()
}

module.exports = {
	insert,
	remove
}
