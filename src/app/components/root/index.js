if (PRODUCTION) {
  module.exports = require('./root.prod')
} else {
  module.exports = require('./root.dev')
}
