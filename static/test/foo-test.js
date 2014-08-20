requirejs([
    '../js/modules/foo',
], function (
    Foo
) {

    'use strict';

    QUnit.start();

    QUnit.test('Foo module', function (assert) {
        var foo = new Foo();

        assert.equal(foo.getName(), 'Foo', 'Module name is Foo');
    });

});
