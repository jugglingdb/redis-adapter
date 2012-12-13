var jdb = require('jugglingdb'),
    Schema = jdb.Schema,
    test = jdb.test;

var schema = new Schema(__dirname + '/..', {});

test(module.exports, schema);

