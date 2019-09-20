import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateBarcodeModuleComponent } from './generate-barcode-module.component';

describe('GenerateBarcodeModuleComponent', () => {
  let component: GenerateBarcodeModuleComponent;
  let fixture: ComponentFixture<GenerateBarcodeModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateBarcodeModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateBarcodeModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
