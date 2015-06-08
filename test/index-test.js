requirejs([
    'jquery',
    'chai',
    'sinon',
    'lodash',
    '../index',
], function (
    $,
    chai,
    sinon,
    _,
    FishTddModule
) {

    'use strict';

    mocha.setup('bdd');
    var assert = chai.assert;

    describe('FishTddModule', function () {
        /**
         */
        var module = function (o) {
            var $fixtures = $('#fixtures');

            o = _.defaults(
                o || {},
                {
                }
            );

            return new FishTddModule(o);
        };

        var _bFixtureTemplate = $('#fixture-template');
        var _fixtureTemplate = _bFixtureTemplate.html();
        _bFixtureTemplate.empty();

        beforeEach(function () {
            $('#fixtures').html(_fixtureTemplate);
        });

        afterEach(function () {
        });

        describe('constructor', function () {
        });

        describe('_init', function () {
        });

        describe('_bindControls', function () {
        });

        describe('#destroy', function () {
            it('should be a `Function`', function () {
                var m = module();
                assert.isFunction(m.destroy);
            });
        });
    });

    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    } else {
        mocha.run();
    }

});
