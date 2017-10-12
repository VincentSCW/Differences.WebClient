import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ControlsModule } from '../controls/contorls.module';
import { ArticlesRoutingModule } from './articles-routing.module';

import { ArticleService } from '../services/article.service';

import { ArticleListComponent } from './article-list.component';
import { ArticleDetailComponent } from './article-detail.component';
import { WriteArticleComponent } from './write-article.component';

@NgModule({
  imports: [
    SharedModule,
    ControlsModule,
    ArticlesRoutingModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    WriteArticleComponent
  ],
  providers: [
    ArticleService
  ],
  entryComponents: [
    WriteArticleComponent
  ]
})
export class ArticlesModule {}
