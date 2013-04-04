var db, Model, should = require('should');

require('jugglingdb/test/common.batch.js');
require('jugglingdb/test/include.test.js');

describe('redis', function() {

    before(function() {
        db = getSchema();
        Model = db.define('Model', { name: String });

        it('should not parse String as JSON', function (done) {
            var m = new Model({name: '{"property": true}'});
            m.save(function (err, mm) {
                should.not.exist(err);
                should.exist(mm);
                mm.name.should.equal('{"property": true}');
                Model.find(mm.id, function (err, mmm) {
                    should.not.exist(err);
                    should.exist(mmm);
                    mmm.name.should.be.a.String;
                    mmm.name.should.equal('{"property": true}');
                    done();
                });
            });
        });

    });

})
