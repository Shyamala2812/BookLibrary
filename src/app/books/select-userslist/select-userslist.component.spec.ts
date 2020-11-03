import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUserslistComponent } from './select-userslist.component';

describe('SelectUserslistComponent', () => {
  let component: SelectUserslistComponent;
  let fixture: ComponentFixture<SelectUserslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUserslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUserslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
