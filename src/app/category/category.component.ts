import {Component} from '@angular/core';
import {categories, Category} from '../categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  categories = [...categories];

  addCategory(name: string) {
    this.categories.unshift({name: name});
  }

  editable = false;

  saveCategory(name: string, category: Category) {
    if (!name) return;
    this.editable = false;
    category.name = name;
  }

  edit() {
    this.editable = !this.editable
  }

  remove(category: Category) {
    let index = this.categories.indexOf(category);
    this.categories.splice(index, 1)
  }
}
