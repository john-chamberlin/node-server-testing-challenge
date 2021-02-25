const request = require('supertest')
const db = require('../data/db-config')
const server = require('./server')

const lament = { name: 'lament' }

it('correct env', () => {
	expect(process.env.DB_ENV).toBe('testing')
})

beforeAll(async () => {
	await db.migrate.rollback()
	await db.migrate.latest()
})

beforeEach(async () => {
	await db('d2Guns').truncate()
})

afterAll(async () => {
	await db.destroy()
})

describe('server', () => {
	describe('post /d2Guns', () => {
		it('responds with status 201', async () => {
			const res = await request(server).post('/d2Guns').send(lament)
			expect(res.status).toBe(201)
		})
		it('returns correct data', async () => {
			const res = await request(server).post('/d2Guns').send(lament)
			expect(res.body).toMatchObject({ ...lament })
		})
	})

	describe('delete /d2Guns', () => {
		it('responds with status 200', async () => {
			await request(server).post('/d2Guns').send(lament)
			const res = await request(server).delete('/d2Guns/1')
			expect(res.status).toBe(200)
		})
		it('item ceases to exist in db', async () => {
			await request(server).post('/d2Guns').send(lament)
			await request(server).delete('/d2Guns/1')
			const res = await db('d2Guns')
			expect(res).toHaveLength(0)
		})
	})
})
