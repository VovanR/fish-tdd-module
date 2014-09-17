requirejs([
    '../js/modules/foo',
], function (
    Foo
) {

    'use strict';

    QUnit.start();

    QUnit.module('Foo module', {
        setup: function () {
            this.m = new Foo();
        },
        teardown: function () {
        }
    });

    QUnit.test('Should initialize', function (assert) {
        var m = this.m;

        assert.ok(m);
    });

    QUnit.test('`getName` should return name', function (assert) {
        var m = this.m;

        assert.equal(m.getName(), 'Foo');
    });

});
