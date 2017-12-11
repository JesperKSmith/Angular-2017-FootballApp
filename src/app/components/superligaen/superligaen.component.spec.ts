import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperligaenComponent } from './superligaen.component';

describe('SuperligaenComponent', () => {
  let component: SuperligaenComponent;
  let fixture: ComponentFixture<SuperligaenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperligaenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperligaenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
