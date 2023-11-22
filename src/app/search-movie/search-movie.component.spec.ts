import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchMovieComponent } from './search-movie.component';

describe('SearchMovieComponent', () => {
  let component: SearchMovieComponent;
  let fixture: ComponentFixture<SearchMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchMovieComponent]
    });
    fixture = TestBed.createComponent(SearchMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
