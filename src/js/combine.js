
/*globals ol3turf, turf */

//==================================================
// combine control
//--------------------------------------------------
(function (ol3turf) {

    "use strict";

    // Control name
    var name = "combine";

    /**
     * Compute combine of feature collection
     * @private
     */
    var action = function (control) {

        var collection = ol3turf.utils.getCollection(control, 1, Infinity);

        var output = turf.combine(collection);
        var inputs = {
            fc: collection
        };
        control.toolbar.ol3turf.handler.callback(name, output, inputs);

    };

    ol3turf.controls[name] = {
        /*
         * Create control then attach custom action and it's parent toolbar
         * @param toolbar Parent toolbar
         * @param prefix Selector prefix.
         */
        create: function (toolbar, prefix) {
            var title = "Combine feature collection";
            var control = ol3turf.Control.create(toolbar, prefix, name, title, action);
            return control;
        }
    };

    return ol3turf;

}(ol3turf || {}));
