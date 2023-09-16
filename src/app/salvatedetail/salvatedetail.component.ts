import { Component, OnInit } from '@angular/core';
import { SerieSalvata } from '../models/serie';
import { SerieService } from '../serie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-salvatedetail',
  templateUrl: './salvatedetail.component.html',
  styleUrls: ['./salvatedetail.component.css'],
})
export class SalvatedetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private serieService: SerieService,
    private authService: AuthService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  serie!: SerieSalvata;
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
    const userid = parseInt(this.route.snapshot.paramMap.get('userid')!);

    if (id != null) {
      this.serieService.getSalvataByUserIdAndId(userid, id).subscribe(
        (res) => {
          this.serie = res;
        },
        (error) => {
          console.error('Error fetching SerieSalvata:', error);
        }
      );
    }
  }

  modifica(id: number) {
    this.router.navigate(['modifica', id]);
  }
}
