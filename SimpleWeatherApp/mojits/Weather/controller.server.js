/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Weather', function(Y, NAME) {

/**
 * The Weather module.
 *
 * @module Weather
 */

    /**
     * Constructor for the Controller class.
     *
     * @class Controller
     * @constructor
     */
    Y.namespace('mojito.controllers')[NAME] = {

        /**
         * Method corresponding to the 'index' action.
         *
         * @param ac {Object} The ActionContext that provides access
         *        to the Mojito API.
         */
        index: function(ac) {
            ac.models.get('WeatherModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    channel : data.results.channel,
                    queryTime: data.created
                });
            });
        },
        forecast: function(ac) {
            ac.models.get('WeatherModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    channel : data.results.channel,
                    queryTime: data.created
                });
            });
        }



    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'WeatherModelFoo']});
