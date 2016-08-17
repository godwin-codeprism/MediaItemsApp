import { provideRouter, RouterConfig } from '@angular/router';

import {MediaItemListComponent} from './media-item-list.component';
import {MediaItemFormComponent} from './media-item-form.component';

const routes: RouterConfig = [
    {
        path: 'add',
        component: MediaItemFormComponent,
    },
    {
        path: ':medium',
        component: MediaItemListComponent
    },
    {
        path:'',
        redirectTo:'/add',
        pathMatch:'full'
    }
];
export const AppRouterProviders = [
  provideRouter(routes)
];
