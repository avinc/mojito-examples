/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('Demo', function(Y, NAME) {

    function linkHelper(title, url) {
        return "<a href='" + url + "'>" + title + "</a>";
    }
/**
 * The Demo module.
 *
 * @module Demo
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
            ac.helpers.set("link", linkHelper);
            ac.models.get('DemoModelFoo').getData(function(err, data) {
                if (err) {
                    ac.error(err);
                    return;
                }
                ac.assets.addCss('./index.css');
                ac.done({
                    status: 'Mojito is working.',
                    data: data
                });
            });
        }

    };

}, '0.0.1', {requires: ['mojito', 'mojito-assets-addon', 'mojito-models-addon', 'DemoModelFoo', "mojito-helpers-addon"]});
