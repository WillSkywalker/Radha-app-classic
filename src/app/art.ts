export class Article {
  id: number;
  title: string;
  chinese_title: string;
  content: string[];
  translation: string[];
  category: string;
  tags: string[];
  viewcount: number;
  url: string;
};

export class ArticlePre {
  id: number;
  title: string;
  chinese_title: string;
  category: string;
  tags: string[];
  viewcount: number;
  url: string;
}