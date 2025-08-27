import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragNDropComponent } from './drag-n-drop.component';

describe('DragNDropComponent', () => {
  let component: DragNDropComponent;
  let fixture: ComponentFixture<DragNDropComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DragNDropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
