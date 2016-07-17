const Good = require('good');

function logger(server) {
  server.register({
    register: Good,
    options: {
      reporters: {
        console: [{
          module: 'good-console'
        }, 'stdout']
      }
    }
  }, (err) => {

    if (err) {
      throw err; // something bad happened loading the plugin
    }

    server.start((err) => {

      if (err) {
        throw err;
      }
      server.log('info', 'Server running at: ' + server.info.uri);
    });
  });
}

module.exports = logger;
