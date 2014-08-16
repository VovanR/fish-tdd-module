requirejs([
    '../js/modules/bar',
], function(
    Bar
) {

    'use strict';

    QUnit.start();

    test('Bar module', function () {
        var bar = new Bar();

        equal(bar.getName(), 'Bar', 'Module name is Bar');
    });

});
