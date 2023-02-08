import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTheDevComponent } from './about-the-dev.component';

describe('AboutTheDevComponent', () => {
  let component: AboutTheDevComponent;
  let fixture: ComponentFixture<AboutTheDevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTheDevComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutTheDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
