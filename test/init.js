var Schema = require('jugglingdb').Schema;

global.getSchema = function() {
    return new Schema(require('../'), {});
};
