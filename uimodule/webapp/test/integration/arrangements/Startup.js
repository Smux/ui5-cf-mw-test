sap.ui.define(["sap/ui/test/Opa5"], function (Opa5) {
    "use strict";

    return Opa5.extend("sap.ies.ui5cfmw.test.integration.arrangements.Startup", {
        iStartMyApp: function () {
            this.iStartMyUIComponent({
                componentConfig: {
                    name: "sap.ies.ui5cfmw",
                    async: true,
                    manifest: true
                }
            });
        }
    });
});
