import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsLoginComponent } from './ms-login.component';

describe('MsLoginComponent', () => {
  let component: MsLoginComponent;
  let fixture: ComponentFixture<MsLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
