import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './books.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAddBookComponent } from './edit-add-book/edit-add-book.component';
import { BookslistComponent } from './bookslist/bookslist.component';
import { SelectUserslistComponent } from './select-userslist/select-userslist.component';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [
    BooksComponent,
    EditAddBookComponent,
    BookslistComponent,
    SelectUserslistComponent,
    BookDetailsComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    BooksComponent,
    EditAddBookComponent,
    BookslistComponent

  ],
  entryComponents: [
    EditAddBookComponent
  ]
})
export class BooksModule { }
