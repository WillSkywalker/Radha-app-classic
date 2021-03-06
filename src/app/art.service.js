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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var ARTICLES = [
    { id: 1, title: 'The Specimen', chinese_title: '稻草人', content: ['None'], category: 'Anal', translation: [], tags: ['t', 'r1'], viewcount: 0, url: '' },
    { id: 2, title: 'The Specimen 2', chinese_title: '稻草人2', content: ['more'], translation: [], category: 'BDSM', tags: ['t', 'r'], viewcount: 0, url: '' },
    { id: 3, title: 'The Specimen 3', chinese_title: '稻草人3', content: ['better'], translation: [], category: 'Romance', tags: ['dfst', 'r'], viewcount: 0, url: '' },
    { id: 4, title: 'The Specimen 4', chinese_title: '稻草人4', content: ['fuck'], translation: [], category: 'Gay Male', tags: ['t', 'r'], viewcount: 0, url: '' },
    { id: 5, title: 'The Specimen 5', chinese_title: '稻草人5', content: ['you'], translation: [], category: 'NonHuman', tags: ['t123', 'r'], viewcount: 0, url: '' },
    { id: 7, title: 'Breeding Time at the Hucow Farm Ch. 05', chinese_title: '奶牛农场5', content: [
            'Rachel',
            "'Ugh,' I groaned as I blinked my eyes against the glaring morning light that pierced its way through the crack in the window shades. My head must have been replaced with a thorn bush during the night for how it ached in so many places. Every nerve seemed like a dagger stabbing into me. ",
            "Gingerly, I lifted myself up on my arm, trying to swallow away the horrid taste in my mouth. What did I drink again last night? Tequila, I think. Yes. Susan had a bottle. That wasn't the taste of tequila in my mouth, though. Tasted more like beer or scotch or like I spent the night licking a dirty oven clean. ",
            "'Ugh,' I groaned again, sitting upright; ready to run to the bathroom if I needed to. ",
            "I sat motionless as the minutes ticked by. The feeling of unease in my stomach slowly faded but I remained still. What happened last night? There were patches in my memory. I could remember everything up until we started doing shots. But wait, I remember we finished the tequila off. We were making jokes about how it wasn't even the end of semester yet. What did we do shots with? ",
            "I stared at the sheets bunched up in my lap, tracing the shadows the sun cast with my eyes. We... we... hmm. We did shots with some of the others there. Maybe we were drinking their stuff. Whatever it was, it- that's right! They brought Bacardi 151. One of the guys was bragging about how strong it was. Fitting that I can't remember what happened after that. ",
            "I clumsily pulled my legs out from under the sheets and stepped out of bed, bracing myself for a sudden turn of my stomach. Thankfully, it never came. ",
            "I looked down at myself. I was still wearing the same t-shirt and jeans from last night. I pulled the neck of my shirt open. No bra, though. The logic of drunk people. I must have taken my shirt off to remove my bra, but still decided to wear the same clothes to bed. ",
            "I looked around my room. It wasn't... the tidiest, but there was a certain order to it. Either way, surely my bra would be on top of whatever pile I chose to place it in. Or... not. Where was it? ",
            "I opened my wardrobe and looked inside. It wasn't with my other bras. It was the one that I was thinking of, right? Yeah, I was positive. The black one with the... you know, the fancy bits. All right, it was my sexy bra. I really liked that one. I better not have lost it. ",
            "I stepped back from wardrobe and surveyed my room once more. Did I hook up with a guy? I can't remember, and surely I'd remember that. ",
            "I felt that queasiness return to my stomach. It would explain where my bra went, probably still at Susan's house. I crouched down by my nightstand and fished out my birth control pills. Please tell me I remembered to take it yesterday. What day is it...? Uh, Sunday! Yeah. Okay, I did. Thank god. I breathed a sigh of relief. The worry fading from my stomach. "
        ],
        translation: [],
        category: 'NonConsent/Reluctance',
        tags: ['t', 'r'],
        viewcount: 0, url: ''
    }
];
var ArticleService = (function () {
    function ArticleService(http) {
        this.http = http;
        // private ApiUrl ='https://willskywalker.com/api/';
        this.ApiUrl = 'http://127.0.0.1:5000/api/';
    }
    ArticleService.prototype.getArticles = function () {
        return this.http.get(this.ApiUrl + 'article').toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    ArticleService.prototype.getRecentArticles = function () {
        return Promise.resolve(ARTICLES.slice(-3).reverse());
    };
    ArticleService.prototype.getHottestArticles = function () {
        return Promise.resolve(ARTICLES.slice(-3).reverse());
    };
    ArticleService.prototype.getRecommendedArticles = function () {
        return Promise.resolve(ARTICLES.slice(-3).reverse());
    };
    ArticleService.prototype.getCertainArticles = function (category) {
        return Promise.resolve(ARTICLES.filter(function (art) { return art.category === category; }).slice(-3).reverse());
    };
    ArticleService.prototype.getArticle = function (id) {
        return this.http.get(this.ApiUrl + 'article/' + id.toString()).toPromise()
            .then(function (res) { return res.json(); })
            .catch(this.handleError);
        // return this.getArticles()
        //   .then(articles => articles.find(art => art.id === id));
    };
    ArticleService.prototype.getArticlePreview = function (id) {
        return this.getArticles()
            .then(function (articles) { return articles.find(function (art) { return art.id === id; }); });
    };
    ArticleService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ArticleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArticleService);
    return ArticleService;
}());
exports.ArticleService = ArticleService;
//# sourceMappingURL=art.service.js.map