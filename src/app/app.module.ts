import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './core/layout/header/header.component';

import { MovieCardComponent } from './shared/components/movie-card/movie-card.component';
import { CreateCastComponent } from './admin/create-cast/create-cast.component';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { UpdateMovieComponent } from './admin/update-movie/update-movie.component';
import { UpdateCastComponent } from './admin/update-cast/update-cast.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PurchasedMovieComponent } from './user/purchased-movie/purchased-movie.component';
import { FavoritedMovieComponent } from './user/favorited-movie/favorited-movie.component';
import { ReviewedMovieComponent } from './user/reviewed-movie/reviewed-movie.component';
import { ProfileComponent } from './user/profile/profile.component';
import { EditProfileComponent } from './user/edit-profile/edit-profile.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { NotAuthorizedComponent } from './shared/components/not-authorized/not-authorized.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MovieCardComponent,
    CreateCastComponent,
    CreateMovieComponent,
    UpdateMovieComponent,
    UpdateCastComponent,
    LoginComponent,
    RegisterComponent,
    PurchasedMovieComponent,
    FavoritedMovieComponent,
    ReviewedMovieComponent,
    ProfileComponent,
    EditProfileComponent,
    MovieDetailsComponent,
    NotFoundComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
