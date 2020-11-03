import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-edit-add-user',
  templateUrl: './edit-add-user.component.html',
  styleUrls: ['./edit-add-user.component.css']
})
export class EditAddUserComponent implements OnInit {

  User: FormGroup;
  // tslint:disable-next-line: variable-name
  edit_Add_Data;
  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.User = this.fb.group({
      name: [this.edit_Add_Data?.event?.name, Validators.required],
      email: [this.edit_Add_Data?.event?.email, Validators.required],
      phoneNo: [this.edit_Add_Data?.event?.phoneNo, Validators.required],
      address: [this.edit_Add_Data?.event?.address, Validators.required],
    });
  }

  async saveData(): Promise<void> {
    const id = this.edit_Add_Data?.event?._id;
    const data = {
      name: this.User.get('name').value,
      email: this.User.get('email').value,
      phoneNo: this.User.get('phoneNo').value,
      address: this.User.get('address').value
    };

    if (this.edit_Add_Data.type === 'edit') {
      try {
        await this.userService.editUsersList(id, data);
        this.activeModal.close('saved');
      } catch (error) {
        console.log('Failed to save user data');
      }
    } else {
      try {
        await this.userService.createUsersList(data);
        this.activeModal.close('added successfully');
      } catch (error) {
        console.log('Failed to add user data');
      }
    }
  }


}
