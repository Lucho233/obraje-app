import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubContenidoComponent } from './sub-contenido.component';

describe('SubContenidoComponent', () => {
  let component: SubContenidoComponent;
  let fixture: ComponentFixture<SubContenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubContenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
