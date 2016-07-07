const http = require('http')
const url = require('url')

module.exports = class App {
	start(route, use, port, host) {
		function onRequest(req, res) {
			var pathname = url.parse(req.url).pathname
			var content = route(use, pathname)

			res.write(content)
			res.end()
		}

		http.createServer(onRequest).listen(port, host)
		console.log(`listening on ${host}:${port}`)
	}
}