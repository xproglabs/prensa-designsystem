const app = require('express')()
const next = require('next')
const server = require('http').Server(app)

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

// next prepare
nextApp.prepare().then(() => {
	// react routes
	app.get('*', (req, res) => {
		return nextHandler(req, res)
	})
	server.listen(port, (err) => {
		if (err) throw err
		console.log(`> Ready on localhost:${port}`)
	})
})