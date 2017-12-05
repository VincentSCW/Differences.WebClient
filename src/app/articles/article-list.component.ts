import { Component } from '@angular/core';

import { ArticleService } from '../services/article.service';
import { CategoryService } from '../services/category.service';
import { IntermediaryService } from '../services/intermediary.service';

import { ListComponentBase } from '../componentbase/list-component-base';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html'
})

export class ArticleListComponent extends ListComponentBase {
  constructor(protected articleService: ArticleService,
    protected categoryService: CategoryService,
    protected intermediaryService: IntermediaryService) {
      super(categoryService, intermediaryService);
  }

  getCount(data: any) {
    return data.article_count;
  }

  getValues(data: any) {
    return data.articles;
  }

  fetchData() {
    return this.articleService.getArticles(this.selectedCategory.value.id, 0, this.pagination.limit);
  }

  fetchMore() {
    return this.articleService.fetchMoreAticles(this.query, this.selectedCategory.value.id,
      this.queryData.length, this.pagination.limit);
  }
}
