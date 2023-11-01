sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    'sap/ui/Device',
    'sap/ui/model/json/JSONModel',

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("test.controller.View1", {
	
        


		burgerPress: function(oEvent) {
            this.getRouter().navTo("burger");
		},

		mcPress: function(oEvent) {
            this.getRouter().navTo("mc");
		},

        zusjePress: function(oEvent) {
            this.getRouter().navTo("zusje");
        },


        testPress: function(oEvent) {
            this.getRouter().navTo("page");
        },

	
        getRouter: function() {
            return this.getOwnerComponent().getRouter();
        },
		


        });
    });

    
