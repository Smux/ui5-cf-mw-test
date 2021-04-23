/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use strict";

    sap.ui.require(["sap/ies/ui5cfmw/test/integration/AllJourneys"], function () {
        QUnit.start();
    });
});
