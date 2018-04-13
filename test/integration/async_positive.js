var test = require('tap').test;
var sentiment = require('../../lib/index');

var dataset = 'This is so cool';
sentiment(dataset, function (err, result) {
    test('asynchronous positive', function (t) {
        t.type(result, 'object');
        t.equal(result.score, 1);
        t.equal(result.comparative, 0.25);
        t.equal(result.tokens.length, 4);
        t.equal(result.words.length, 3);
        t.end();
    });
});
