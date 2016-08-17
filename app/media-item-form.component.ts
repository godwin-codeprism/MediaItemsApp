import {Component, Inject} from '@angular/core';
import {Control, Validators, FormBuilder} from '@angular/common';
import {Router} from '@angular/router';

import {MediaItemService} from './media-item.service';
import {LOOKUP_LISTS} from './providers';

@Component({
    selector: 'media-item-form',
    templateUrl: 'app/media-item-form.component.html',
    styleUrls: ['app/media-item-form.component.css'],
})

export class MediaItemFormComponent {
    form;
    constructor(private formBuilder: FormBuilder,
        private mediaItemService: MediaItemService,
        private route: Router,
        @Inject(LOOKUP_LISTS) public lookupLists) { }
    ngOnInit() {
        this.form = this.formBuilder.group({
            'medium': new Control(''),
            'name': new Control('', Validators.compose([
                Validators.required,
                Validators.pattern('[\\w\\-\\s\\/]+')
            ])),
            'category': new Control(''),
            'year': new Control('', this.yearValidator)
        });
    }
    onSubmit(mediaItem) {
        this.mediaItemService.add(mediaItem)
            .subscribe(() => {
                this.route.navigate(['/medium',{medium: mediaItem.medium}]);
            });
    }
    yearValidator(control) {
        if (control.value.trim().length == 0) return null;
        var year = parseInt(control.value);
        var minYear = 1800;
        var maxYear = 2500;
        if (year >= minYear && year <= maxYear) return null;
        return { 'year': { 'min': minYear, 'max': maxYear } };
    }
}
