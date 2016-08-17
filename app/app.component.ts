import {Component} from '@angular/core';
import {MediaItemListComponent} from './media-item-list.component';
import {MediaItemFormComponent} from './media-item-form.component';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector: 'media-tracker-app',
    directives: [ROUTER_DIRECTIVES],
    precompile: [MediaItemListComponent, MediaItemFormComponent],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})
export class AppComponent {}
