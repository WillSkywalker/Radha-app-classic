import { Component, Input, OnInit } from '@angular/core'; // Remove Input later
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Http, Headers } from '@angular/http';

import { Article } from './art';

import { ArticleService } from './art.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';


@Component({
  moduleId: module.id,
  selector: 'my-art-detail',
  templateUrl: './art-detail.component.html',
  styleUrls: ['./art-detail.component.css']
})
export class ArtDetailComponent implements OnInit {

  private lookUpApiUrl ='https://api.shanbay.com/bdc/search/?word=';
  explain: string;

  @Input()
  art: Article;

  constructor(
    private art_service: ArticleService,
    private route: ActivatedRoute,
    private location: Location,
    private http: Http
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.art_service.getArticle(+params['id']))
      .subscribe(art => this.art = art)
  }

  showPopup(word:string) {
    this.http.get(this.lookUpApiUrl+word).toPromise()
        .then(res => document.getElementsByClassName('popover-content')[0].innerHTML += res.json().definition)
        .catch(this.handleError);

    // document.getElementsByClassName('popover-content')[0].innerHTML+=this.explain;

    return 'Hello '+word;
  }

  goBack() {
    this.location.back();
  }

  // private lookUpWord(): Promise<string> {}
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
