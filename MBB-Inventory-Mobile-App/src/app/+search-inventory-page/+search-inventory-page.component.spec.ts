import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { searchInventoryPageComponent } from './+search-inventory-page.component';

describe('searchInventoryPageComponent', () => {
  let component: searchInventoryPageComponent;
  let fixture: ComponentFixture<searchInventoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ searchInventoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(searchInventoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
