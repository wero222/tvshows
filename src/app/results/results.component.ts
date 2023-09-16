import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
})
export class ResultsComponent implements OnInit {
  constructor(private searchService: SearchService, private router: Router) {}

  appSearchResults: any[] = [];

  ngOnInit() {
    this.searchService.searchResults$.subscribe((results: any[]) => {
      this.appSearchResults = results;
    });
  }

  toSerie(id: number) {
    this.router.navigate(['series/', id]);
  }
}
