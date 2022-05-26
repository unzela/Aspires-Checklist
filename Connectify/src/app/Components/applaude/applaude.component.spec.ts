import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplaudeComponent } from './applaude.component';

describe('ApplaudeComponent', () => {
  let component: ApplaudeComponent;
  let fixture: ComponentFixture<ApplaudeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplaudeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplaudeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
