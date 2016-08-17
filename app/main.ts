import {bootstrap} from '@angular/platform-browser-dynamic';
import {provide} from '@angular/core';
import {HTTP_PROVIDERS, XHRBackend} from '@angular/http';

import {AppComponent} from './app.component';
import {AppRouterProviders} from './app.routes';
import {MediaItemService} from './media-item.service';
import {LOOKUP_LISTS, lookupLists} from './providers';
import {MockXHRBackend} from './mock-xhr-backend';

bootstrap(AppComponent, [
    MediaItemService,
    AppRouterProviders,
    provide(LOOKUP_LISTS, { useValue: lookupLists }),
    HTTP_PROVIDERS,
    provide(XHRBackend, { useClass: MockXHRBackend }),
]);
