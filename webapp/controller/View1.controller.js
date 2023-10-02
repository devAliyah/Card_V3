sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("test.controller.View1", {
            resolveUrl: function(sUrl) {
                return sap.ui.require.toUrl("card_v3/assets/avatars/" + sUrl);
            }
        });
    });
