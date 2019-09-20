import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryViewPageComponent } from './inventory-view-page.component';

describe('InventoryViewPageComponent', () => {
  let component: InventoryViewPageComponent;
  let fixture: ComponentFixture<InventoryViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryViewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
