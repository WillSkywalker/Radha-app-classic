import { Component, OnInit } from '@angular/core';
import { Article } from './art';
import { ArticleService } from './art.service';






@Component({
  moduleId: module.id,
  selector: 'my-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  // articles: Article[];
  // categories: String[];
  categories: String[][] = [
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
  //菊花文
  // BDSM
  // 名人同人
  // 故事接龙
  // 两情相悦
  // 恐怖性爱
  // 裸露癖和偷窥癖
  // 恋物癖
  // 初夜
  // 男同性恋
  // 群P
  // 教你如何啪啪啪
  // 幽默&讽刺

  // constructor(private art_service: ArticleService) { }


  // ngOnInit() {
  //   this.art_service.getArticles().then(articles => this.articles = articles.slice(0, 3));
  // }

}
