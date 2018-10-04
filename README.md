# hapi-softonic-load-balancing

Hapi plugin to provide health checks for a server in the Softonic infrastructure.

The health check endpoint is `/loadbalancer.html`.

## Installation

```bash
npm install hapi-softonic-load-balancing
```

## Usage

```javascript
// CommonJS
// const HapiSoftonicLoadBalancing = require('hapi-softonic-load-balancing');

// ES6
import Inert from 'inert';
import HapiSoftonicLoadBalancing from 'hapi-softonic-load-balancing';

// Register dependency
await server.register({
  plugin: Inert,
});

// Registration
await server.register({
  plugin: HapiSoftonicLoadBalancing
});
```

## Testing

Clone the repository and execute:

```bash
npm test
```

## Contribute

1. Fork it: `git clone https://github.com/softonic/hapi-softonic-load-balancing.git`
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Added some feature'`
4. Check the build: `npm run build`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
