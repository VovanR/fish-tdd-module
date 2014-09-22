requirejs([
    '../vendor/chai/chai',
    '../js/modules/foo',
], function (
    chai,
    Foo
) {

    'use strict';

    mocha.setup('bdd');
    var assert = chai.assert;

    describe('Foo', function () {
        var module = function () {
            return new Foo();
        };

        beforeEach(function () {
        });

        afterEach(function () {
        });

        describe('constructor', function () {
            it('should initialize', function () {
                var m = module();
                assert.isDefined(m);
            });
        });

        describe('#getName', function () {
            it('should return name', function () {
                var m = module();
                assert.equal(m.getName(), 'Foo');
            });
        });
    });

    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    } else {
        mocha.run();
    }

});
