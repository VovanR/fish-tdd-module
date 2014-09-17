requirejs([
    '../js/modules/bar',
], function (
    Bar
) {

    'use strict';

    QUnit.start();

    QUnit.module('Bar module', {
        setup: function () {
            this.m = new Bar();
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

        assert.equal(m.getName(), 'Bar');
    });

    QUnit.test('`setName` should change name', function (assert) {
        var m = this.m;

        assert.equal(m.getName(), 'Bar', 'Module name is Bar');

        m.setName('Lol');
        assert.equal(m.getName(), 'Lol', 'Set name');
    });

});
