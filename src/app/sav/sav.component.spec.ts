import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavComponent } from './sav.component';

describe('SavComponent', () => {
  let component: SavComponent;
  let fixture: ComponentFixture<SavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
