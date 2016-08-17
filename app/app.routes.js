"use strict";
var router_1 = require('@angular/router');
var media_item_list_component_1 = require('./media-item-list.component');
var media_item_form_component_1 = require('./media-item-form.component');
var routes = [
    {
        path: 'add',
        component: media_item_form_component_1.MediaItemFormComponent,
    },
    {
        path: ':medium',
        component: media_item_list_component_1.MediaItemListComponent
    },
    {
        path: '',
        redirectTo: '/add',
        pathMatch: 'full'
    }
];
exports.AppRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map
