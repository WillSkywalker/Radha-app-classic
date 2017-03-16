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
var DashboardComponent = (function () {
    function DashboardComponent(art_service, router) {
        this.art_service = art_service;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.art_service.getArticles().then(function (articles) { return _this.hot_articles = articles.slice(0, 3); });
        this.art_service.getRecentArticles().then(function (articles) { return _this.recent_articles = articles; });
    };
    DashboardComponent.prototype.onSelect = function (art) {
        this.selected_article = art;
    };
    DashboardComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/read', this.selected_article.id]);
    };
    DashboardComponent.prototype.goBack = function () {
        this.selected_article = null;
    };
    DashboardComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-dashboard',
            templateUrl: './dashboard.component.html',
            styleUrls: ['./dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [art_service_1.ArticleService, router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map