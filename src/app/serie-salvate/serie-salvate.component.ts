import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { Serie, SerieSalvata } from '../models/serie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serie-salvate',
  templateUrl: './serie-salvate.component.html',
  styleUrls: ['./serie-salvate.component.css'],
})
export class SerieSalvateComponent implements OnInit {
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

  toSerieSalvata(id: number) {
    this.router.navigate(['series/', id]);
  }
}
