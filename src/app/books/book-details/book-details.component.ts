import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteComponent } from 'src/app/model/delete/delete.component';
import { BooksService } from 'src/app/services/books/books.service';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { UserService } from 'src/app/services/user/user.service';
import { EditAddBookComponent } from '../edit-add-book/edit-add-book.component';
import { SelectUserslistComponent } from '../select-userslist/select-userslist.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  usersData;
  transactionDetails;
  oneBook;
  constructor(
    private userService: UserService,
    private bookService: BooksService,
    private route: ActivatedRoute,
    private router: Router,
    private model: NgbModal,
    private tran: TransactionService) {
    this.getBookDetails();


  }

  async getTransaction(): Promise<void> {
    const id = this.route.snapshot.queryParamMap.get('bookId');
    const bookId = 'bookId';
    this.transactionDetails = await this.tran.getTransaction(bookId, id);
  }


  ngOnInit(): void {
  }

  async getAllUsers(): Promise<void> {
    this.usersData = await this.userService.getUsersList();
  }

  async editBookDetails(event): Promise<void> {
    const a = { type: 'edit', event };
    const modelRef = this.model.open(EditAddBookComponent);
    modelRef.componentInstance.edit_Add_Data = a;
    try {
      await modelRef.result;
      this.getBookDetails();
    } catch (error) {
      console.log('model dismissed');
    }
  }

  async deleteBookDetails(event): Promise<void> {
    try {
      const modelRef = this.model.open(DeleteComponent);
      const data = await modelRef.result;
      if (data === 'yes') {
        await this.bookService.deleteBooksList(event._id);
        this.oneBook = undefined;
        this.router.navigate(['/books']);
      } else {
        console.log('model closed');
      }

    } catch (error) {
      console.log('model dismissed');
    }
  }

  async getBookDetails(): Promise<void> {
    const id = this.route.snapshot.queryParamMap.get('bookId');
    this.oneBook = await this.bookService.getBookDetails(id);
    console.log(this.oneBook);
    await this.getTransaction();

  }

  async selectUser(): Promise<void> {
    await this.getAllUsers();
    const modelRef = this.model.open(SelectUserslistComponent);
    modelRef.componentInstance.allUSers = this.usersData;

    try {
      const a = await modelRef.result;
      if (a === 'saved') {
        this.getTransaction();
      }
    } catch (error) {
      console.log('failed to save transaction details');
    }
  }

}
