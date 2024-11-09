import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilenetComponent } from './mobilenet.component';

describe('MobilenetComponent', () => {
  let component: MobilenetComponent;
  let fixture: ComponentFixture<MobilenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilenetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MobilenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
