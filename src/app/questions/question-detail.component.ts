import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { ApolloQueryObservable } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';

import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html'
})

export class QuestionDetailComponent implements OnInit {
  question: any;
  id: number;
  answers: ApolloQueryObservable<any>;
  myAnswerContent: string;

  constructor(
    private questionService: QuestionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: Params) => this.id = params.get('id'))
      .subscribe(() => this.questionService.getQuestion(this.id)
        .subscribe(({data}) => {
          this.question = data.question;

          this.answers = this.questionService.getQuestionAnswers(this.id);
        })
      );
  }

  goBack(): void {
    this.location.back();
  }

  submitAnswer(): void {
    this.questionService.submitAnswer(this.id, null, this.myAnswerContent)
      .subscribe((data) => {
        this.myAnswerContent = null;
      });
  }

  onUpdate(data: any): void {
    alert(JSON.stringify(data));
  }
}
