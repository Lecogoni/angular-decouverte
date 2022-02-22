import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentzoneComponent } from './contentzone.component';

describe('ContentzoneComponent', () => {
  let component: ContentzoneComponent;
  let fixture: ComponentFixture<ContentzoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentzoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentzoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
