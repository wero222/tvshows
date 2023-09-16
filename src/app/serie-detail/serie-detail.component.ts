import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SerieService } from '../serie.service';
import { SerieDetail } from '../models/serie';
import { AuthService } from '../auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css'],
})
export class SerieDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private serieService: SerieService,
    private authService: AuthService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  serie!: SerieDetail;
  errorMessage: string = '';
  logged!: boolean;
  highestSeason = 0;
  totalEpisodes = 0;

  ngOnInit(): void {
    if (this.authService.getLoggedUser() != null) {
      this.logged = true;
    } else {
      this.logged = false;
    }

    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    if (id != null) {
      this.serieService.getById(id).subscribe((res) => {
        this.serie = res.tvShow;
        this.errorMessage = '';
        this.sanitizeDescription(this.serie.description);
        this.calculateHighestSeason();
        this.calculateTotalEpisodes();
      });
    }
  }

  calculateHighestSeason() {
    for (const ep of this.serie.episodes) {
      if (ep.season > this.highestSeason) {
        this.highestSeason = ep.season;
      }
    }
  }

  calculateTotalEpisodes() {
    this.totalEpisodes = this.serie.episodes.length;
  }

  salva() {
    this.serieService.salva(this.serie)!.subscribe((res) => {
      this.router.navigate(['series', 'salvate']);
    });
  }

  sanitizeDescription(description: string): any {
    const sanitizedDescription = this.sanitizer.bypassSecurityTrustHtml(
      description.replace(/<br>/g, '<p>')
    );
    return sanitizedDescription;
  }
}
