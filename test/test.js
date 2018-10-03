const http = require('http')
const assert = require('assert')
const app = require('../lib/app')

describe('app', function() {
  before( function() {
    app.start()
  })

  describe('#start', function() {
    it('starts a process listening on port 8000', function(done) {
      assert(http.Agent().createConnection({port: 8000}));
      done();
    })
  })

  after( function() {
    app.stop()
  })
})
