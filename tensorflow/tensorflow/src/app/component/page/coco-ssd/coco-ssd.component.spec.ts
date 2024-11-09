import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CocoSsdComponent } from './coco-ssd.component';

describe('CocoSsdComponent', () => {
  let component: CocoSsdComponent;
  let fixture: ComponentFixture<CocoSsdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CocoSsdComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CocoSsdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
