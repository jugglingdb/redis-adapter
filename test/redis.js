var jdb = require('jugglingdb'),
    Schema = jdb.Schema,
    test = jdb.test;

var schema = new Schema(__dirname + '/..', {});

test(module.exports, schema);

test.it('should not parse String as JSON', function (test) {
    var Model = schema.define('Model', {
        name: String,
    });
    var m = new Model({name: '{"property": true}'});
    m.save(function (err, mm) {
        test.ok(!err);
        test.equal(mm.name, '{"property": true}');
        Model.find(mm.id, function (err, mmm) {
            test.ok(!err);
            test.equal(typeof mmm.name, 'string');
            test.equal(mmm.name, '{"property": true}');
            test.done();
        });
    });
});
