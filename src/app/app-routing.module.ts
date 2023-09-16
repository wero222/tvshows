import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SerieListComponent } from './serie-list/serie-list.component';
import { HomeComponent } from './home/home.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { SerieSalvateComponent } from './serie-salvate/serie-salvate.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ModificaSerieComponent } from './modifica-serie/modifica-serie.component';
import { LogoutComponent } from './logout/logout.component';
import { ResultsComponent } from './results/results.component';
import { SalvatedetailComponent } from './salvatedetail/salvatedetail.component';

const routes: Routes = [
  { path: 'results/:query', component: ResultsComponent },
  { path: 'modifica/:id', component: ModificaSerieComponent },
  { path: 'salvate/:id', component: SalvatedetailComponent },
  { path: 'series/salvate', component: SerieSalvateComponent },
  { path: 'series/:id', component: SerieDetailComponent },
  { path: 'series', component: SerieListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'logout/:tkn', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
