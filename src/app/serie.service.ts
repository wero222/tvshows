import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  Serie,
  SerieDetail,
  SerieDetailDTO,
  SerieDetailSearchResponse,
  SerieSalvata,
  SerieSalvataDTO,
  SerieSearchResponse,
} from './models/serie';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SerieService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  search(): Observable<SerieSearchResponse> {
    return this.http.get<SerieSearchResponse>(
      environment.SERIE_API_BASE_URL + '/most-popular?page=1'
    );
  }

  getById(id: number): Observable<SerieDetailSearchResponse> {
    return this.http.get<SerieDetailSearchResponse>(
      environment.SERIE_API_BASE_URL + '/show-details?q=' + id
    );
  }

  getSalvataById(id: number): Observable<SerieSalvata> {
    return this.http.get<SerieSalvata>(
      environment.AREAPERSONALE_API_BASE_URL + '/get/' + id
    );
  }

  getSalvataByUserIdAndId(
    userid: number,
    id: number
  ): Observable<SerieSalvata> {
    return this.http.get<SerieSalvata>(
      environment.AREAPERSONALE_API_BASE_URL + '/get/' + userid + id
    );
  }

  salva(serie: SerieDetail) {
    let loggedUser = this.authService.getLoggedUser();

    if (loggedUser != null) {
      let serieSalvata: SerieSalvata = {
        userId: loggedUser.user.id,
        serie: serie,
      };

      return this.http.post<SerieSalvata>(
        environment.AREAPERSONALE_API_BASE_URL + '/save',
        serieSalvata,
        {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + loggedUser.auth_token,
          }),
        }
      );
    } else {
      return null;
    }
  }

  getSalvate(): Observable<SerieSalvata[]> {
    let loggedUser = this.authService.getLoggedUser();

    return this.http.get<SerieSalvata[]>(
      environment.AREAPERSONALE_API_BASE_URL + '/get/' + loggedUser!.user.id,
      {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + loggedUser!.auth_token,
        }),
      }
    );
  }

  series!: SerieDetail;

  manda(serie: SerieSalvataDTO) {
    let loggedUser = this.authService.getLoggedUser();
    this.getById(serie.serie.id).subscribe((res) => {
      this.series = res.tvShow;
    });

    if (loggedUser != null) {
      let serieSalvata: SerieSalvataDTO = {
        userId: loggedUser.user.id,
        serie: this.series,
        status: serie.status,
        rating: serie.rating,
        review: serie.review,
        season: serie.season,
        episode: serie.episode,
      };

      return this.http.post<SerieSalvataDTO>(
        environment.AREAPERSONALE_API_BASE_URL + '/modify',
        serieSalvata,
        {
          headers: new HttpHeaders({
            Authorization: 'Bearer ' + loggedUser.auth_token,
          }),
        }
      );
    } else {
      return null;
    }
  }

  searchQ(query: String) {
    return this.http.get<SerieSearchResponse>(
      environment.SERIE_API_BASE_URL + '/search?q=' + query + '&page=1'
    );
  }
}
