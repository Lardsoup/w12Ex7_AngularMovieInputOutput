import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService } from './movie.service';
import { PosterComponent } from './poster/poster.component';
import { MoviePlotComponent } from './movie-plot/movie-plot.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    PosterComponent,
    MoviePlotComponent,
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
