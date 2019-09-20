import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryDispatcherViewComponent } from './inventory-dispatcher-view.component';

describe('InventoryDispatcherViewComponent', () => {
  let component: InventoryDispatcherViewComponent;
  let fixture: ComponentFixture<InventoryDispatcherViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryDispatcherViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryDispatcherViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
