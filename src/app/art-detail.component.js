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
var http_1 = require('@angular/http');
var art_1 = require('./art');
var art_service_1 = require('./art.service');
require('rxjs/add/operator/switchMap');
require('rxjs/add/operator/toPromise');
var ArtDetailComponent = (function () {
    function ArtDetailComponent(art_service, route, location, http, jsonp) {
        this.art_service = art_service;
        this.route = route;
        this.location = location;
        this.http = http;
        this.jsonp = jsonp;
        // private lookUpApiUrl ='https://api.shanbay.com/bdc/search/?word=';
        // private lookUpApiUrl ='http://localhost:5000/api/word/';
        this.lookUpApiUrl = 'https://willskywalker.com/api/word/';
    }
    ArtDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.art_service.getArticle(+params['id']); })
            .subscribe(function (art) { return _this.art = art; });
    };
    ArtDetailComponent.prototype.showPopup = function (word) {
        var _this = this;
        this.http.get(this.lookUpApiUrl + word).toPromise()
            .then(function (res) { return _this.explain = res.text(); })
            .catch(this.handleError);
        // document.getElementsByClassName('popover-content')[0].innerHTML+=this.explain;
        return 'Hello ' + word;
    };
    ArtDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    // private lookUpWord(): Promise<string> {}
    ArtDetailComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
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
        core_1.Injectable(), 
        __metadata('design:paramtypes', [art_service_1.ArticleService, router_1.ActivatedRoute, common_1.Location, http_1.Http, http_1.Jsonp])
    ], ArtDetailComponent);
    return ArtDetailComponent;
}());
exports.ArtDetailComponent = ArtDetailComponent;
//# sourceMappingURL=art-detail.component.js.map