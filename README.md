## JDB-Redis [![Build Status](https://travis-ci.org/1602/jugglingdb-redis.png)](https://travis-ci.org/1602/jugglingdb-redis)

Adapter for jugglingdb.

## Usage

To use it you need `jugglingdb@0.2.x`.

1. Setup dependencies in `package.json`:

```json
"dependencies": {
  "jugglingdb": "0.2.x",
  "jugglingdb-redis": "latest"
}
```

2. Use:

```javascript
    var Schema = require('jugglingbd').Schema;
    var schema = new Schema('redis');
```

