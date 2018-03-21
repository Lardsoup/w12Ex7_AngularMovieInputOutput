import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './movie.service';
//import { MoviePosterComponent } from './movie-poster/movie-poster.component';
//import { MoviePlotComponent } from './movie-plot/movie-plot.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
 //   MoviePosterComponent,
 //   MoviePlotComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
