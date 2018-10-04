import packageJSON from '../package.json';

/**
 * Hapi plugin to expose a file that enables/disables the server from the load balancers
 * @type {Object}
 */
export default {
  pkg: packageJSON,
  dependencies: ['inert'],
  /**
   * @param  {hapi.Server}  server
   */
  register(server, options = {}) {
    const {
      path = '/var/www/html/loadbalancer.html',
    } = options;

    /**
     * Load balancing
     */
    server.route({
      method: 'GET',
      path: '/loadbalancer.html',
      handler: {
        file: {
          path,
          confine: false,
        },
      },
      config: {
        description:
          'Endpoint that the load balancer checks in order to send traffic to this app.'
          + ' If the file that is served is not available, the app no longer receives traffic',
        plugins: {
          'hapi-newrelic': {
            transactionName: 'load_balancer',
          },
        },
      },
    });
  },
};
