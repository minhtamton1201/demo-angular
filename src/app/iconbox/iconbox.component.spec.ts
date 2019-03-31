import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconboxComponent } from './iconbox.component';

describe('IconboxComponent', () => {
  let component: IconboxComponent;
  let fixture: ComponentFixture<IconboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should info has defined', () => {
    expect(component.listiconbox).toBeDefined();
  });

  it('should info not empty', () => {
    expect(component.listiconbox).not.toEqual([]);
  });
});
