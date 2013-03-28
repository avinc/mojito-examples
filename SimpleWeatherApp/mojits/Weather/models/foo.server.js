/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('WeatherModelFoo', function(Y, NAME) {

/**
 * The WeatherModelFoo module.
 *
 * @module Weather
 */

    /**
     * Constructor for the WeatherModelFoo class.
     *
     * @class WeatherModelFoo
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
            Y.YQL("select * from weather.forecast where woeid=2295420", function(data) {
                callback(null, data.query);
            });
        }

    };

}, '0.0.1', {requires: ['yql']});
