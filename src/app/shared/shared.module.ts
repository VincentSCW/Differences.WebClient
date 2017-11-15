import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { QuillEditorModule } from 'ngx-quill-editor';
import { ApolloModule } from 'apollo-angular';
import { AvatarModule } from 'ngx-avatar';
import { MomentModule } from 'angular2-moment';
import * as moment from 'moment';
import 'moment/min/locales';

import { TitlePipe } from '../utlities/title.pipe';

import { provideClient } from '../services/apollo-client.service';

moment.locale('zh-cn'); // Chinese

@NgModule({
    declarations: [
        TitlePipe
    ],
    imports: [
        HttpModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        QuillEditorModule,
        AvatarModule,
        MomentModule,
        ApolloModule.forRoot(provideClient)
    ],
    exports: [
        HttpModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        QuillEditorModule,
        AvatarModule,
        ApolloModule,
        MomentModule,
        TitlePipe
    ]
})

export class SharedModule { }
