import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Article } from './art';
import { ArticleService } from './art.service';


@Component({
  moduleId: module.id,
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selected_article: Article;
  hot_articles: Article[];
  recent_articles: Article[];
  random_articles: Article[];
  recommendations: Article[];

  constructor(private art_service: ArticleService,
              private router:Router) { }


  ngOnInit() {
    this.art_service.getArticles().then(articles => this.hot_articles = articles.slice(0, 3));
    this.art_service.getRecentArticles().then(articles => this.recent_articles = articles);
  }

  onSelect(art: Article) {
    this.selected_article = art;
  }

  gotoDetail() {
    this.router.navigate(['radha/read', this.selected_article.id]);
  }

  goBack() {
    this.selected_article = null;
  }

}
