import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodySegmentationComponent } from './body-segmentation.component';

describe('BodySegmentationComponent', () => {
  let component: BodySegmentationComponent;
  let fixture: ComponentFixture<BodySegmentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodySegmentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BodySegmentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
