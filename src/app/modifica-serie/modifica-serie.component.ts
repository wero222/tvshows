import { Component, OnInit } from '@angular/core';
import { SerieService } from '../serie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieDetail, SerieSalvataDTO } from '../models/serie';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-modifica-serie',
  templateUrl: './modifica-serie.component.html',
  styleUrls: ['./modifica-serie.component.css'],
})
export class ModificaSerieComponent implements OnInit {
  constructor(
    private serieService: SerieService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService
  ) {}

  id = parseInt(this.route.snapshot.paramMap.get('id')!);

  rating: number = 5;
  numStelle: number = 10;

  onRatingCambiato(rating: number) {
    this.rating = rating;
  }

  serie!: SerieDetail;

  model = new SerieSalvataDTO(this.id!, this.serie!);

  ngOnInit(): void {
    if (this.id != null) {
      this.serieService.getById(this.id).subscribe((res) => {
        this.serie = res.tvShow;
      });
    }
  }

  manda() {
    this.serieService.manda(this.model)?.subscribe((u) => {
      this.router.navigate(['series', 'salvate']);
    });
  }
}
