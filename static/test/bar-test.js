requirejs([
    '../js/modules/bar',
], function (
    Bar
) {

    'use strict';

    QUnit.start();

    QUnit.test('Bar module', function (assert) {
        var bar = new Bar();

        assert.equal(bar.getName(), 'Bar', 'Module name is Bar');

        bar.setName('Lol');
        assert.equal(bar.getName(), 'Lol', 'Set name');
    });

});
