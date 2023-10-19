sap.ui.define([
    "sap/ui/core/mvc/Controller",
    'sap/m/MessageToast',
    'sap/ui/Device',
    'sap/ui/model/json/JSONModel',

],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("test.controller.View1", {
        


            
            mcPress: function(evt) {
                this.getRouter().navTo("mc");
            },

            burgerPress: function(evt) {
               this.getRouter().navTo("burger");
            },

                zusjePress: function(evt) {
                    this.getRouter().navTo("zusje");
                },

                getRouter: function() {
                    return this.getOwnerComponent().getRouter();
                }
        
        });
    });

    
