"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var media_item_service_1 = require('./media-item.service');
var providers_1 = require('./providers');
var mock_xhr_backend_1 = require('./mock-xhr-backend');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    media_item_service_1.MediaItemService,
    app_routes_1.AppRouterProviders,
    core_1.provide(providers_1.LOOKUP_LISTS, { useValue: providers_1.lookupLists }),
    http_1.HTTP_PROVIDERS,
    core_1.provide(http_1.XHRBackend, { useClass: mock_xhr_backend_1.MockXHRBackend }),
]);
//# sourceMappingURL=main.js.map
