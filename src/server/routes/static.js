// Export static route

const inert = require('inert');

function configureStaticRoute(server) {
  server.register(inert, (err) => {
    const pluginsConfig = {
      good: {
        suppressResponseEvent: true
      }
    };

    if (err) {
      throw err;
    }

    server.log('info', 'Creating static routes');

    server.route({
      method: 'GET',
      path: '/src/client/{param*}',
      config: {
        handler: {
          directory: {
            path: 'src/client'
          }
        },
        plugins: pluginsConfig
      }
    });

    server.route({
      method: 'GET',
      path: '/app/{params*}',
      config: {
        handler: {
          directory: {
            path: 'src/client/app'
          }
        },
        plugins: pluginsConfig
      }
    });

    server.route({
      method: 'GET',
      path: '/assets/{params*}',
      config: {
        handler: {
          directory: {
            path: 'src/client/assets'
          }
        },
        plugins: pluginsConfig
      }
    });

    server.route({
      method: 'GET',
      path: '/.tmp/{params*}',
      config: {
        handler: {
          directory: {
            path: '.tmp'
          }
        },
        plugins: pluginsConfig
      }
    });

    server.route({
      method: 'GET',
      path: '/bower_components/{param*}',
      config: {
        handler: {
          directory: {
            path: 'bower_components/'
          }
        },
        plugins: pluginsConfig
      }
    });

    server.route({
      method: 'GET',
      path: '/favicon.ico',
      config: {
        handler: {
          file: 'src/server/favicon.ico'
        },
        plugins: pluginsConfig
      }
    });

    server.route({
      method: 'GET',
      path: '/{params*}',
      handler: {
        file: {
          path: 'src/client/index.html'
        }
      }
    });
  });
}

module.exports = configureStaticRoute;
