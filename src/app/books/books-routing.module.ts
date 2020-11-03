import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books.component';
import { BookslistComponent } from './bookslist/bookslist.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: BooksComponent
  // },
  // {
  //   path: ':id/histroy',
  //   component: BookHistoryComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
