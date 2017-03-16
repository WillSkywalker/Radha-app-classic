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
var art_service_1 = require('./art.service');
var ArticlesComponent = (function () {
    function ArticlesComponent(art_service, router) {
        this.art_service = art_service;
        this.router = router;
        this.title = 'The Specimen';
    }
    ArticlesComponent.prototype.onSelect = function (art) {
        this.selected_article = art;
    };
    ArticlesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/read', this.selected_article.id]);
    };
    ArticlesComponent.prototype.ngOnInit = function () {
        this.getArticles();
    };
    ArticlesComponent.prototype.getArticles = function () {
        var _this = this;
        this.art_service.getArticles().then(function (articles) { return _this.articles = articles; });
    };
    ArticlesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-articles',
            templateUrl: './articles.component.html',
            styleUrls: ['./articles.component.css']
        }), 
        __metadata('design:paramtypes', [art_service_1.ArticleService, router_1.Router])
    ], ArticlesComponent);
    return ArticlesComponent;
}());
exports.ArticlesComponent = ArticlesComponent;
//# sourceMappingURL=articles.component.js.map