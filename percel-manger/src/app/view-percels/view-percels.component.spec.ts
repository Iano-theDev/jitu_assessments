import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPercelsComponent } from './view-percels.component';

describe('ViewPercelsComponent', () => {
  let component: ViewPercelsComponent;
  let fixture: ComponentFixture<ViewPercelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPercelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewPercelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
