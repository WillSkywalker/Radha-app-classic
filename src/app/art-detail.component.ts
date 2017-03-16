import { Component, Input, OnInit } from '@angular/core'; // Remove Input later
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Article } from './art';

import { ArticleService } from './art.service';
import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: module.id,
  selector: 'my-art-detail',
  templateUrl: './art-detail.component.html'
})
export class ArtDetailComponent implements OnInit {

  @Input()
  art: Article;

  constructor(
    private art_service: ArticleService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.art_service.getArticle(+params['id']))
      .subscribe(art => this.art = art)
  }
  goBack() {
    this.location.back();
  }
}
