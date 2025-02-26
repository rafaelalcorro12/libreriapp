import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailBooksPage } from './detail-books.page';

describe('DetailBooksPage', () => {
  let component: DetailBooksPage;
  let fixture: ComponentFixture<DetailBooksPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
