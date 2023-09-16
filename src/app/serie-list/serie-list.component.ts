import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie } from '../models/serie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serie-list',
  templateUrl: './serie-list.component.html',
  styleUrls: ['./serie-list.component.css'],
})
export class SerieListComponent implements OnInit {
  constructor(private serieService: SerieService, private router: Router) {}

  loading: boolean = true;
  series: Serie[] = [];

  ngOnInit(): void {
    this.getSerie();
  }

  getSerie() {
    this.serieService.search().subscribe((res) => {
      if (res != undefined) {
        this.series = res.tv_shows;
      }
      this.loading = false;
    });
  }

  toSerie(id: number) {
    this.router.navigate(['series/', id]);
  }
}
