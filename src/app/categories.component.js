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
var CategoriesComponent = (function () {
    function CategoriesComponent() {
        // articles: Article[];
        // categories: String[];
        this.categories = [
            ["Anal", "肛交"],
            ["BDSM", "BDSM"],
            ["Celebrities & Fan Fiction", "名人同人"],
            ["Chain Stories", "故事接龙"],
            ["Erotic Couplings", "两情相悦"],
            ["Erotic Horror", "恐怖性爱"],
            ["Exhibitionist & Voyeur", "裸露癖和偷窥癖"],
            ["Fetish", "恋物癖"],
            ["First Time", "初夜"],
            ["Gay Male", "男同性恋"],
            ["Group Sex", "群P"],
            ["How To", "教你如何啪啪啪"],
            ["Humor & Satire", "幽默&讽刺"],
            ["Illustrated",],
            ["Incest/Taboo",],
            ["Interracial Love",],
            ["Lesbian Sex",],
            ["Letters & Transcripts",],
            ["Loving Wives",],
            ["Mature",],
            ["Mind Control",],
            ["Non-Erotic",],
            ["NonConsent/Reluctance",],
            ["NonHuman",],
            ["Novels and Novellas",],
            ["Reviews & Essays",],
            ["Romance",],
            ["Sci-Fi & Fantasy",],
            ["Text With Audio",],
            ["Toys & Masturbation",],
            ["Transsexuals & Crossdressers",],
            ["Others",]
        ];
    }
    CategoriesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-categories',
            templateUrl: './categories.component.html',
            styleUrls: ['./categories.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], CategoriesComponent);
    return CategoriesComponent;
}());
exports.CategoriesComponent = CategoriesComponent;
//# sourceMappingURL=categories.component.js.map