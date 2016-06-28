# hapi-softonic-load-balancing

Hapi plugin to provide health checks for a server in the Softonic infrastructure.

The health check endpoint is `/loadbalancer.html`.

Active maintainer: [ruben.norte@softonic.com](mailto:ruben.norte@softonic.com?subject=hapi-softonic-load-balancing)

## Installation

```bash
npm install hapi-softonic-load-balancing
```

## Usage

```javascript
// CommonJS
// const HapiSoftonicLoadBalancing = require('hapi-softonic-load-balancing');

// ES6
import HapiSoftonicLoadBalancing from 'hapi-softonic-load-balancing';

// Registration
server.register([
  HapiSoftonicLoadBalancing
], err => {});
```

## Testing

Clone the repository and execute:

```bash
npm test
```

## Contribute

1. Fork it: `git clone ssh://git@stash.redtonic:7999/NODE/hapi-softonic-load-balancing.git`
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Added some feature'`
4. Check the build: `npm run build`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D
