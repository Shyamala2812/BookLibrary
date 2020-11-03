import { Component, OnInit } from '@angular/core';
import { BooksService } from '../services/books/books.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditAddBookComponent } from './edit-add-book/edit-add-book.component';
import { DeleteComponent } from '../model/delete/delete.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  booksLists;
  counter;

  constructor(
    private booksService: BooksService,
    private model: NgbModal,
    private router: Router) {

    this.getBooksList();
  }


  ngOnInit(): void {
  }

  async getBooksList(): Promise<void> {
    this.counter = 0;
    const counter = 0;
    try {
      const a = await this.booksService.getBooksList();
      if (Array.isArray(a)) {
        this.booksLists = a;
      } else {
        this.booksLists = undefined;
        this.counter = counter + 1;
      }
    } catch (error) {
      console.log('Failed to get Data');
    }
  }

  async addUser(): Promise<void> {
    const a = { type: 'Add' };
    const modelRef = this.model.open(EditAddBookComponent);
    modelRef.componentInstance.edit_Add_Data = a;
    try {
      await modelRef.result;
      this.getBooksList();
    } catch (error) {
      console.log('model dismissed');
    }
  }

  async editUser(clickevent, event): Promise<void> {
    clickevent.stopPropagation();
    const a = { type: 'edit', event };
    const modelRef = this.model.open(EditAddBookComponent);
    modelRef.componentInstance.edit_Add_Data = a;
    try {
      await modelRef.result;
      this.getBooksList();
    } catch (error) {
      console.log('model dismissed');
    }

  }

  async deleteUser(clickevent, event): Promise<void> {
    clickevent.stopPropagation();
    try {
      const modelRef = this.model.open(DeleteComponent);
      const data = await modelRef.result;
      if (data === 'yes') {
        await this.booksService.deleteBooksList(event._id);
        this.getBooksList();
      } else {
        console.log('model dismissed');
      }

    } catch (error) {
      console.log('Failed to delete');
    }
  }

  bookDetailsPage(book): void {
    this.router.navigate(['books', 'bookdetails'], { queryParams: { bookId: book._id } });
  }



}
