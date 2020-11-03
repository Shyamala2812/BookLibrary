import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BooksService } from 'src/app/services/books/books.service';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-edit-add-book',
  templateUrl: './edit-add-book.component.html',
  styleUrls: ['./edit-add-book.component.css']
})
export class EditAddBookComponent implements OnInit {

  User: FormGroup;
  categoryLists;
  // tslint:disable-next-line: variable-name
  edit_Add_Data;
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private bookService: BooksService,
    private categoryService: CategoryService
  ) {
    this.getCategoryList();
  }

  async getCategoryList(): Promise<void> {
    try {
      this.categoryLists = await this.categoryService.getCategoryList();
      console.log(this.categoryLists);
    } catch (error) {
      console.log('failed to get categoryList');
    }
  }

  ngOnInit(): void {
    this.User = this.fb.group({
      bookTitle: [this.edit_Add_Data?.event?.bookTitle, Validators.required],
      author: [this.edit_Add_Data?.event?.author, Validators.required],
      yearofPub: [formatDate(this.edit_Add_Data?.event?.YoP || Date.now(), 'yyyy-MM-dd', 'en-US'), Validators.required],
      category: [this.edit_Add_Data?.event?.category?._id || '', Validators.required]
    });

    console.log(this.edit_Add_Data?.event?.category);

  }

  async saveData(): Promise<void> {
    const id = this.edit_Add_Data?.event?._id;
    const data = {
      bookTitle: this.User.get('bookTitle').value,
      author: this.User.get('author').value,
      YoP: this.User.get('yearofPub').value,
      category: this.User.get('category').value,
    };

    if (this.edit_Add_Data.type === 'edit') {
      try {
        await this.bookService.editBooksList(id, data);
        this.activeModal.close('saved successfully');
      } catch (error) {
        console.log('Failed to save user data');
      }
    } else {
      try {
        await this.bookService.createBooksList(data);
        this.activeModal.close('added successfully');
      } catch (error) {
        console.log('Failed to add user data');
      }
    }
  }


}
