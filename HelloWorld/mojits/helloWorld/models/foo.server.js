/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('helloWorldModelFoo', function(Y, NAME) {

/**
 * The helloWorldModelFoo module.
 *
 * @module helloWorld
 */

    /**
     * Constructor for the helloWorldModelFoo class.
     *
     * @class helloWorldModelFoo
     * @constructor
     */
    Y.namespace('mojito.models')[NAME] = {

        init: function(config) {
            this.config = config;
        },

        /**
         * Method that will be invoked by the mojit controller to obtain data.
         *
         * @param callback {function(err,data)} The callback function to call when the
         *        data has been retrieved.
         */
        getData: function(callback) {
            callback(null, { some: 'data' });
        }

    };

}, '0.0.1', {requires: []});
