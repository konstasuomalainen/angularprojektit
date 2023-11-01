import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KomponentinnimiComponent } from './komponentinnimi.component';

describe('KomponentinnimiComponent', () => {
  let component: KomponentinnimiComponent;
  let fixture: ComponentFixture<KomponentinnimiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KomponentinnimiComponent]
    });
    fixture = TestBed.createComponent(KomponentinnimiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
