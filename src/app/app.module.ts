import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SerieListComponent } from './serie-list/serie-list.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SerieSalvateComponent } from './serie-salvate/serie-salvate.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ModificaSerieComponent } from './modifica-serie/modifica-serie.component';
import { MatSelectModule } from '@angular/material/select';
import { RatingComponent } from './rating/rating.component';
import { TextFieldModule } from '@angular/cdk/text-field';
import { LogoutComponent } from './logout/logout.component';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component';
import { SalvatedetailComponent } from './salvatedetail/salvatedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    SerieListComponent,
    SerieDetailComponent,
    MenuComponent,
    HomeComponent,
    SerieSalvateComponent,
    RegisterComponent,
    LoginComponent,
    ModificaSerieComponent,
    RatingComponent,
    LogoutComponent,
    SearchComponent,
    ResultsComponent,
    SalvatedetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    TextFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
