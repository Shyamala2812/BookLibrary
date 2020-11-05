import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { BooksRoutingModule } from './books/books-routing.module';
import { BooksComponent } from './books/books.component';
import { BookslistComponent } from './books/bookslist/bookslist.component';
import { CategoryComponent } from './category/category.component';
import { LoginComponent } from './login/login.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { UserComponent } from './user/user.component';
import { UserslistComponent } from './user/userslist/userslist.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'category',
        component: CategoryComponent
    },
    {
        path: 'books',
        component: BookslistComponent,
        children: [
            {
                path: '',
                component: BooksComponent
            },
            {
                path: 'bookdetails',
                component: BookDetailsComponent
            }
        ]
    },
    {
        path: 'user',
        component: UserslistComponent,
        children: [
            {
                path: '',
                component: UserComponent
            },
            {
                path: 'userdetails',
                component: UserDetailsComponent
            }
        ]
    },
    {
        path: '**',
        component: LoginComponent
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        BooksRoutingModule
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}