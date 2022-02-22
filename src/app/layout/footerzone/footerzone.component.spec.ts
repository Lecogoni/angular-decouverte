import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterzoneComponent } from './footerzone.component';

describe('FooterzoneComponent', () => {
  let component: FooterzoneComponent;
  let fixture: ComponentFixture<FooterzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
