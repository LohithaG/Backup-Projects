import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductDisplayComponent } from './add-product-display.component';

describe('AddProductDisplayComponent', () => {
  let component: AddProductDisplayComponent;
  let fixture: ComponentFixture<AddProductDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProductDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
