import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './user.component';
import { EditAddUserComponent } from './edit-add-user/edit-add-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserslistComponent } from './userslist/userslist.component';


@NgModule({
  declarations: [
    UserComponent,
    EditAddUserComponent,
    UserDetailsComponent,
    UserslistComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    // TemplateModule
  ],
  exports: [
    UserComponent

  ],
  entryComponents: [
  ]
})
export class UserModule { }
