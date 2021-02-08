import {Component, OnInit} from '@angular/core';
import {Videogame} from '../shared/videogame';
import {videogameService} from '../shared/videogame.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videogames: Videogame[]=[];
  constructor(private videogameService: videogameService) { }

  ngOnInit() {
   this.videogameService.getvideogames().subscribe(
    (data: Videogame[]) => this.videogames = data
   );
  }
}
