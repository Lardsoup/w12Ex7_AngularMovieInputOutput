import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../Shared/Movie';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.css']
})
export class PosterComponent implements OnInit 
{
  @Input() public movie : Movie;

  constructor() { }

  ngOnInit() 
  {
  }

}
