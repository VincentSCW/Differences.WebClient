import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Category, CategoryGroup } from '../models/category.model';
import { BrowserStorage } from './browser-storage.service';

const selected_category_key = 'selected_category';
@Injectable()
export class CategoryService {
  categoryGroups: CategoryGroup[] = [
    {
      name: '技术',
      categories: [
        { id: 101, name: 'IT' },
        { id: 102, name: '机械' },
        { id: 103, name: '电子' },
        { id: 199, name: '其他' }
      ]
    },
    {
      name: '科学与自然',
      categories: [
        { id: 201, name: '科学' },
        { id: 202, name: '自然' }
      ]
    },
    {
      name: '语言',
      categories: [
        { id: 303, name: '英语' },
        { id: 399, name: '其他' }
      ]
    },
    {
      name: '社科',
      categories: [
        { id: 401, name: '历史' },
        { id: 499, name: '其他' }
      ]
    },
    {
      name: '人文',
      categories: [
        { id: 501, name: '名人' },
        { id: 599, name: '其他' }
      ]
    },
    {
      name: '其他',
      categories: [{ id: 999, name: '其他' }]
    }
  ];

  categories: Category[] = [];

  selectedCategory = new BehaviorSubject<Category>(this.getSelectedCategory());

  constructor(private browserStorage: BrowserStorage) {
    this.categoryGroups.forEach(element => {
      element.categories.forEach(c => {
        this.categories.push(c);
      });
    });
  }

  setSelectedCategory(categoryId: number) {
    const found = this.categories.find(obj => obj.id === categoryId);
    if (found === undefined) {
      console.log('Category cannot be found');
      return;
    }

    this.browserStorage.set(selected_category_key, JSON.stringify(found));
    this.selectedCategory.next(found);
  }

  getSelectedCategory(): Category {
    return this.browserStorage.get(selected_category_key)
      ? JSON.parse(this.browserStorage.get(selected_category_key))
      : this.categories[0];
  }
}
