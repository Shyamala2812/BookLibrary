import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { TransactionService } from 'src/app/services/transaction/transaction.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-select-userslist',
  templateUrl: './select-userslist.component.html',
  styleUrls: ['./select-userslist.component.css']
})
export class SelectUserslistComponent implements OnInit {
  allUSers;
  selectUser;
  constructor(
    private activeModel: NgbActiveModal,
    private fb: FormBuilder,
    private transaction: TransactionService,
    private route: ActivatedRoute
  ) {
    this.selectUser = this.fb.group({
      select: ['', Validators.required]
    });

  }

  ngOnInit(): void {

  }
  async saveDataToTransation(): Promise<void> {
    const user = this.selectUser.get('select').value;
    const book = this.route.snapshot.queryParamMap.get('bookId');
    const data = {
      bookId: book,
      userId: user
    };
    try {
      await this.transaction.createTransaction(data);
      this.activeModel.close('saved');
    } catch (error) {
      console.log('Failed to create transaction');
    }

  }


}
