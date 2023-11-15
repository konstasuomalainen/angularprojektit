import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtusivuComponent } from './etusivu.component';

describe('EtusivuComponent', () => {
  let component: EtusivuComponent;
  let fixture: ComponentFixture<EtusivuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtusivuComponent]
    });
    fixture = TestBed.createComponent(EtusivuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
