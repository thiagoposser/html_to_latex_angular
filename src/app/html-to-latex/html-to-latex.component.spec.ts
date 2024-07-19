import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlToLatexComponent } from './html-to-latex.component';

describe('HtmlToLatexComponent', () => {
  let component: HtmlToLatexComponent;
  let fixture: ComponentFixture<HtmlToLatexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlToLatexComponent]
    });
    fixture = TestBed.createComponent(HtmlToLatexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
