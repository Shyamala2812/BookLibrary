import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteComponent } from 'src/app/model/delete/delete.component';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { UserService } from 'src/app/services/user/user.service';
import { EditAddUserComponent } from '../edit-add-user/edit-add-user.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  UserData;
  oneUser;

  constructor(
    private transaction: TransactionService,
    private route: ActivatedRoute,
    private userService: UserService,
    private model: NgbModal,
    private router: Router) {

    this.getTransactionDetails();
    this.GetUserData();
  }

  ngOnInit(): void {
  }

  async deleteUserData(event): Promise<void> {
    const id = this.route.snapshot.queryParamMap.get('userId');
    try {
      const modelRef = this.model.open(DeleteComponent);
      const data = await modelRef.result;
      if (data === 'yes') {
        await this.userService.deleteUsersList(event._id);
        this.oneUser = undefined;
        this.router.navigate(['/user']);
      } else {
        console.log('model closed');
      }

    } catch (error) {
      console.log('model dismissed');
    }
  }

  async editUserData(event): Promise<void> {
    try {
      const a = { type: 'edit', event };
      const modelRef = this.model.open(EditAddUserComponent);
      modelRef.componentInstance.edit_Add_Data = a;
      try {
        await modelRef.result;
        this.GetUserData();
      } catch (error) {
        console.log('model dismissed');
      }
    } catch (error) {
      console.log('model closed');
    }
  }

  async getTransactionDetails(): Promise<void> {
    const Id = this.route.snapshot.queryParamMap.get('userId');
    const userId = 'userId';
    this.UserData = await this.transaction.getTransaction(userId, Id);
    console.log(this.UserData);

  }

  async GetUserData(): Promise<void> {
    const id = this.route.snapshot.queryParamMap.get('userId');
    this.oneUser = await this.userService.getOneUserDetails(id);
  }


}
