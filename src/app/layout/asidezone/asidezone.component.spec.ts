import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsidezoneComponent } from './asidezone.component';

describe('AsidezoneComponent', () => {
  let component: AsidezoneComponent;
  let fixture: ComponentFixture<AsidezoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsidezoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsidezoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
