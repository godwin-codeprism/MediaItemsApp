import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, ROUTER_DIRECTIVES} from '@angular/router';
import {MediaItemComponent} from './media-item.component';
import {CategoryListPipe} from './category-list.pipe';
import {MediaItemService} from './media-item.service';

@Component({
    selector: 'media-item-list',
    directives: [MediaItemComponent, ROUTER_DIRECTIVES],
    pipes: [CategoryListPipe],
    templateUrl: 'app/media-item-list.component.html',
    styleUrls: ['app/media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit{
    medium:any = '';
    mediaItems = [];
    constructor(
        private mediaItemService: MediaItemService,
        private route : ActivatedRoute
        ) {}
    ngOnInit (){
        this.medium = this.route.params.subscribe(params => {
            let medium = params['medium'];
            this.medium = medium;
            this.getMediaItems(this.medium);
        });
    }
    onMediaItemDeleted(mediaItem) {
        this.mediaItemService.delete(mediaItem)
            .subscribe(() => {
                this.getMediaItems(this.medium);
            });
    }
    getMediaItems(medium){
        this.medium = medium;
        this.mediaItemService.get(medium)
        .subscribe(mediaItems => {
            this.mediaItems = mediaItems;
        })
    }
}
