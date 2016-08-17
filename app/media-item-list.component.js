"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var media_item_component_1 = require('./media-item.component');
var category_list_pipe_1 = require('./category-list.pipe');
var media_item_service_1 = require('./media-item.service');
var MediaItemListComponent = (function () {
    function MediaItemListComponent(mediaItemService, route) {
        this.mediaItemService = mediaItemService;
        this.route = route;
        this.medium = '';
        this.mediaItems = [];
    }
    MediaItemListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.medium = this.route.params.subscribe(function (params) {
            var medium = params['medium'];
            _this.medium = medium;
            _this.getMediaItems(_this.medium);
        });
    };
    MediaItemListComponent.prototype.onMediaItemDeleted = function (mediaItem) {
        var _this = this;
        this.mediaItemService.delete(mediaItem)
            .subscribe(function () {
            _this.getMediaItems(_this.medium);
        });
    };
    MediaItemListComponent.prototype.getMediaItems = function (medium) {
        var _this = this;
        this.medium = medium;
        this.mediaItemService.get(medium)
            .subscribe(function (mediaItems) {
            _this.mediaItems = mediaItems;
        });
    };
    MediaItemListComponent = __decorate([
        core_1.Component({
            selector: 'media-item-list',
            directives: [media_item_component_1.MediaItemComponent, router_1.ROUTER_DIRECTIVES],
            pipes: [category_list_pipe_1.CategoryListPipe],
            templateUrl: 'app/media-item-list.component.html',
            styleUrls: ['app/media-item-list.component.css']
        }),
        __metadata('design:paramtypes', [media_item_service_1.MediaItemService, router_1.ActivatedRoute])
    ], MediaItemListComponent);
    return MediaItemListComponent;
}());
exports.MediaItemListComponent = MediaItemListComponent;
//# sourceMappingURL=media-item-list.component.js.map
