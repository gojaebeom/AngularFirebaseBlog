import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignRePasswordComponent } from './sign-re-password.component';

describe('SignRePasswordComponent', () => {
  let component: SignRePasswordComponent;
  let fixture: ComponentFixture<SignRePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignRePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignRePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
