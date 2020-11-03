import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditAddUserComponent } from '../user/edit-add-user/edit-add-user.component';
import { UserService } from '../services/user/user.service';
import { DeleteComponent } from '../model/delete/delete.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  usersLists;
  counter;
  constructor(
    private userService: UserService,
    private model: NgbModal,
    private router: Router
  ) {
    this.getUsersList();
  }

  ngOnInit(): void {
  }

  async getUsersList(): Promise<void> {
    this.counter = 0;
    const counter = 0;
    try {
      const a = await this.userService.getUsersList();
      console.log(a);
      if (Array.isArray(a)) {
        this.usersLists = a;
      } else {
        this.usersLists = undefined;
        this.counter = counter + 1;
      }
    } catch (error) {
      console.log('Failed to get Data');
    }
  }

  movetoUserDetails(data): void {
    this.router.navigate(['user', 'userdetails'], { queryParams: { userId: data._id } });
  }

  async addUser(): Promise<void> {
    const a = { type: 'Add' };
    const modelRef = this.model.open(EditAddUserComponent);
    modelRef.componentInstance.edit_Add_Data = a;
    try {
      await modelRef.result;
      this.getUsersList();
    } catch (error) {
      console.log('model dismissed');
    }
  }

  async editUser(clickevent, event): Promise<void> {
    clickevent.stopPropagation();
    const a = { type: 'edit', event };
    const modelRef = this.model.open(EditAddUserComponent);
    modelRef.componentInstance.edit_Add_Data = a;
    try {
      await modelRef.result;
      // console.log(modelRef.result)
      this.getUsersList();
    } catch (error) {
      console.log('model dismissed');
    }

  }

  async deleteUser(clickevent, event): Promise<void> {
    clickevent.stopPropagation();
    try {
      const modelRef = this.model.open(DeleteComponent);
      // modelRef.componentInstance.data = {type: 'Dele'}
      const data = await modelRef.result;
      if (data === 'yes') {
        await this.userService.deleteUsersList(event._id);
        this.getUsersList();
      } else {
        console.log('model closed');
      }

    } catch (error) {
      console.log('model dismissed');
    }
  }



}
