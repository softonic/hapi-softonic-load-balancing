import packageJSON from '../package.json';

/**
 * Hapi plugin to expose a file that enables/disables the server from the load balancers
 * @type {Object}
 */
const HapiSoftonicLoadBalancing = {

  /**
   * @param  {hapi.Server}  server
   * @param  {Object}       options
   * @param  {Function}     next
   */
  register(server, options, next) {

    /**
     * Load balancing
     */
    server.route({
      method: 'GET',
      path: '/loadbalancer.html',
      handler: {
        file: {
          path: '/var/www/html/loadbalancer.html',
          confine: false
        }
      },
      config: {
        description:
          'Endpoint that the load balancer checks in order to send traffic to this app.' +
          ' If the file that is served is not available, the app no longer receives traffic',
        plugins: {
          'hapi-newrelic': {
            transactionName: 'load_balancer'
          }
        }
      }
    });

    next();
  }

};

HapiSoftonicLoadBalancing.register.attributes = {
  pkg: packageJSON,
  dependencies: ['inert']
};

export default HapiSoftonicLoadBalancing;
