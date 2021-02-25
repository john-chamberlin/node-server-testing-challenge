const express = require('express')
const server = express()

const d2Guns = require('./d2Guns-model')

server.use(express.json())

server.post('/d2Guns', (req, res) => {
	d2Guns
		.insert(req.body)
		.then(gun => {
			res.status(201).json(gun)
		})
		.catch(err => {
			res.status(500).json(`err: ${err}`)
		})
})

server.delete('/d2Guns/:id', (req, res) => {
	const { id } = req.params
	d2Guns
		.remove(id)
		.then(() => {
			res.status(200).json(`item deleted successfully`)
		})
		.catch(err => {
			res.status(500).json(`err: ${err}`)
		})
})

module.exports = server
