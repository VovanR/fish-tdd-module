/**
 * @author VovanR [mail@vovanr.com]
 */

define([
], function (
) {

    var Bar;


    /**
     * Bar module
     *
     * @constructor
     */
    Bar = function () {
        this.name = 'Bar';
    };

    Bar.prototype = {
        /**
         * Returns module name
         *
         * @returns {String} name
         */
        getName: function () {
            return this.name;
        },
    };


    return Bar;

});
