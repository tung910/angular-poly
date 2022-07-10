import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoFeatureComponent } from './todo-feature.component';

describe('TodoFeatureComponent', () => {
  let component: TodoFeatureComponent;
  let fixture: ComponentFixture<TodoFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoFeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
