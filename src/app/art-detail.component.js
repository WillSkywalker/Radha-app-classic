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
var core_1 = require('@angular/core'); // Remove Input later
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var art_1 = require('./art');
var art_service_1 = require('./art.service');
require('rxjs/add/operator/switchMap');
var ArtDetailComponent = (function () {
    function ArtDetailComponent(art_service, route, location) {
        this.art_service = art_service;
        this.route = route;
        this.location = location;
    }
    ArtDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.art_service.getArticle(+params['id']); })
            .subscribe(function (art) { return _this.art = art; });
    };
    ArtDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', art_1.Article)
    ], ArtDetailComponent.prototype, "art", void 0);
    ArtDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-art-detail',
            templateUrl: './art-detail.component.html',
            styleUrls: ['./art-detail.component.css']
        }), 
        __metadata('design:paramtypes', [art_service_1.ArticleService, router_1.ActivatedRoute, common_1.Location])
    ], ArtDetailComponent);
    return ArtDetailComponent;
}());
exports.ArtDetailComponent = ArtDetailComponent;
//# sourceMappingURL=art-detail.component.js.map