import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoinsvalueComponent } from './coinsvalue.component';

describe('CoinsvalueComponent', () => {
  let component: CoinsvalueComponent;
  let fixture: ComponentFixture<CoinsvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoinsvalueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoinsvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
