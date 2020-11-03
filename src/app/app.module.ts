import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.component';

import { AppComponent } from './app.component';
import { CategoryModule } from './category/category.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksModule } from './books/books.module';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CategoryModule,
    NgxDatatableModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    BooksModule,
    UserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
