import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaskinkomponenttiComponent } from './laskinkomponentti.component';

describe('LaskinkomponenttiComponent', () => {
  let component: LaskinkomponenttiComponent;
  let fixture: ComponentFixture<LaskinkomponenttiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LaskinkomponenttiComponent]
    });
    fixture = TestBed.createComponent(LaskinkomponenttiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
