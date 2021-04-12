import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CosmicsComponent } from './cosmics.component';

describe('CosmicsComponent', () => {
  let component: CosmicsComponent;
  let fixture: ComponentFixture<CosmicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CosmicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CosmicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
