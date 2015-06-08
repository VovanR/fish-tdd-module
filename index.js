/**
 * @module FishTddModule
 * @author Vladimir Rodkin <mail@vovanr.com>
 */

define([
    'jquery',

    // nothing returns
], function (
    $
) {

    'use strict';

    var FishTddModule;

    /**
     * @param {Object} [o] Options
     * @constructor
     * @alias module:FishTddModule
     */
    FishTddModule = function (o) {

        this._init();
    };

    FishTddModule.prototype = {
        /**
         * Initialize
         *
         * @private
         */
        _init: function () {
            console.info('FishTddModule init');

            this._bindControls();
        },

        /**
         * Bindings
         *
         * @private
         */
        _bindControls: function () {
        },

        /**
         */
        destroy: function () {
            console.log('destroy');
        },
    };

    return FishTddModule;

});
