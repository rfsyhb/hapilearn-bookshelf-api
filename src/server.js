const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // menerima object
  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

// handler error
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception:', err);
});

init();
