import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarzoneComponent } from './navbarzone.component';

describe('NavbarzoneComponent', () => {
  let component: NavbarzoneComponent;
  let fixture: ComponentFixture<NavbarzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
