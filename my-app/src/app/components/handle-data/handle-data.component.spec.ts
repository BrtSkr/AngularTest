import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleDataComponent } from './handle-data.component';

describe('HandleDataComponent', () => {
  let component: HandleDataComponent;
  let fixture: ComponentFixture<HandleDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandleDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HandleDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
