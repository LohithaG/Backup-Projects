import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSkuManagementComponent } from './add-sku-management.component';

describe('AddSkuManagementComponent', () => {
  let component: AddSkuManagementComponent;
  let fixture: ComponentFixture<AddSkuManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSkuManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSkuManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
