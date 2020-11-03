import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../services/category/category.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddEditComponent } from './add-edit/add-edit.component';
import { DeleteComponent } from '../model/delete/delete.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  data;
  counter = 0;
  categorylists;
  constructor(
    private fb: FormBuilder,
    private categories: CategoryService,
    private model: NgbModal) {

    this.getCategoryList();
  }

  async getCategoryList(): Promise<void> {
    try {
      const listData = await this.categories.getCategoryList();
      console.log(listData);
      if (Array.isArray(listData)) {
        this.categorylists = listData;
      } else {
        this.counter = this.counter + 1;
      }
    } catch (error) {
      console.log('failed to get Category data');
    }
  }

  async addCategoryToList(): Promise<void> {
    const data = { type: 'Add' };
    const modelRef = this.model.open(AddEditComponent);
    modelRef.componentInstance.edit_Add_Data = data;
    try {
      await modelRef.result;
      this.getCategoryList();
    } catch (error) {
      console.log('model dismissed');
    }
  }

  async editCategoryList(event): Promise<void> {
    const data = { type: 'edit', event };
    const modelRef = this.model.open(AddEditComponent);
    modelRef.componentInstance.edit_Add_Data = data;
    try {
      await modelRef.result;
      this.getCategoryList();
    } catch (error) {
      console.log('model dismissed');
    }
  }

  async deleteCategoryList(event): Promise<void> {
    try {
      const modelRef = this.model.open(DeleteComponent);
      const a = await modelRef.result;
      if (a === 'yes') {
        await this.categories.deleteCategoryList(event._id);
        this.getCategoryList();
      } else {
        console.log('model closed without action');
      }

    } catch (error) {
      console.log('model dismissed');
    }
  }

  ngOnInit(): void {
  }

}
