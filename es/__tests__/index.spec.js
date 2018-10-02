import hapi from 'hapi';
import Inert from 'inert';
import HapiSoftonicLoadBalancing from '../index';

async function createServerWithPlugin(options = {}) {
  const server = new hapi.Server();

  await server.register({
    plugin: Inert,
  });
  await server.register({
    plugin: HapiSoftonicLoadBalancing,
    options,
  });

  await server.start();

  return { server };
}

describe('HapiSoftonicLoadBalancing', () => {
  it('should be a Hapi plugin', () => {
    expect(HapiSoftonicLoadBalancing.register).toBeInstanceOf(Function);
    expect(HapiSoftonicLoadBalancing.pkg.name).toBe('hapi-softonic-load-balancing');
  });

  describe('when it is registered', () => {
    describe('and the file is available', () => {
      it('should return a successful status code', async () => {
        const { server } = await createServerWithPlugin({
          path: 'es/__tests__/fixtures/loadbalancer.html',
        });
        const response = await server.inject('/loadbalancer.html');
        const { statusCode } = response;

        expect(statusCode).toBe(200);
      });
    });

    describe('and the file is not available', () => {
      it('should return a client error status code', async () => {
        const { server } = await createServerWithPlugin({ path: 'notfound.js' });
        const response = await server.inject('/loadbalancer.html');
        const { statusCode } = response;

        expect(statusCode).toBe(404);
      });
    });
  });
});
