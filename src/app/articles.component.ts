import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Article } from './art';
import { ArticleService } from './art.service';

import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';



@Component({
  moduleId: module.id,
  selector: 'my-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})


export class ArticlesComponent implements OnInit {
  title = 'The Specimen';
  articles: Article[];

  selected_article: Article;
  cat: string;
  sorting = 'newest';

  constructor(
    private art_service: ArticleService,
    private router: Router,
    private route: ActivatedRoute) { 
  }

  onSelect(art: Article) {
    this.selected_article = art;
  }

  gotoDetail() {
    this.router.navigate(['/read', this.selected_article.id]);
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => this.cat = params['cat'])
      // .switchMap((params: Params) => {this.cat = params['cat'];});
    if(this.cat) {
      this.getCertainArticles();
    } else {
    this.getArticles();
    }
  }

  getArticles() {
    this.art_service.getArticles().then(articles => this.articles = articles);
  }

  getCertainArticles() {
    this.art_service.getCertainArticles(this.cat).then(articles => this.articles = articles);
  }
}
