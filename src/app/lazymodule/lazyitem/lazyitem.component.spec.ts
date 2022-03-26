import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyitemComponent } from './lazyitem.component';

describe('LazyitemComponent', () => {
  let component: LazyitemComponent;
  let fixture: ComponentFixture<LazyitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LazyitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LazyitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
