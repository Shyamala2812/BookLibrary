import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddBookComponent } from './edit-add-book.component';

describe('EditAddBookComponent', () => {
  let component: EditAddBookComponent;
  let fixture: ComponentFixture<EditAddBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
