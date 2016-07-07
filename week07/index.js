const App = require('./app')
const userFirst = require('./user1')
const userSecond = require('./user2')
const config = require('config').get('server')
const use = []
const app = new App()

function route(use, pathname) {
  if (typeof use[pathname] === 'function') {
    return use[pathname]()
  } else {
    return '404 Not Found !!'
  }
}

use['/user1'] = userFirst.user1
use['/user2'] = userSecond.user2

app.start(route, use, config.port, config.host)
