import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInventoryPageComponent } from './update-inventory-page.component';

describe('UpdateInventoryPageComponent', () => {
  let component: UpdateInventoryPageComponent;
  let fixture: ComponentFixture<UpdateInventoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateInventoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInventoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
