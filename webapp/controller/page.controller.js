sap.ui.define([
    'sap/m/MessageToast',
    'sap/ui/Device',
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function(MessageToast, Device, Controller, JSONModel) {
"use strict";

var ImageGroupController = Controller.extend("test.controller.View1", {
	handleImage3Press: function(evt) {
        MessageToast.show("The image has been pressed");
    }

});

return ImageGroupController;

});