import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { SerieService } from '../serie.service';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchQuery: string = '';
  searchResults: any[] = [];

  constructor(
    private http: HttpClient,
    private serieService: SerieService,
    private searchService: SearchService,
    private router: Router
  ) {}

  onSearch() {
    if (this.searchQuery.trim() === '') {
      return;
    }

    this.serieService.searchQ(this.searchQuery).subscribe((res) => {
      this.searchResults = res.tv_shows;
      this.searchService.setSearchResults(this.searchResults);
      this.router.navigate(['results/', this.searchQuery]);
    });
  }
}
