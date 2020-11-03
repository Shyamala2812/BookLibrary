import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoryService } from 'src/app/services/category/category.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  list: FormGroup;
  // tslint:disable-next-line: variable-name
  edit_Add_Data;
  constructor(
    private fb: FormBuilder,
    private categService: CategoryService,
    public activeModal: NgbActiveModal
  ) {
    // this.list = this.fb.group({
    //   categoryName: [this.editData?.name, Validators.required]
    // });
  }

  ngOnInit(): void {
    this.list = this.fb.group({
      categoryName: [this.edit_Add_Data?.event?.name, Validators.required]
    });
  }

  async saveData(): Promise<void> {
    if (this.edit_Add_Data.type === 'edit') {
      const id = this.edit_Add_Data.event._id;
      const a = {
        name: this.list.get('categoryName').value
      };

      try {
        await this.categService.editCategoryList(id, a);
        this.activeModal.close('saved successfully');
      } catch (error) {
        console.log('failed to save');
      }
    } else {
      const data = { name: this.list.get('categoryName').value };
      try {
        await this.categService.addCategoryToList(data);
        this.activeModal.close('Category added successfully');
      } catch (error) {
        console.log('Category failed to add');
      }
    }
  }

}
