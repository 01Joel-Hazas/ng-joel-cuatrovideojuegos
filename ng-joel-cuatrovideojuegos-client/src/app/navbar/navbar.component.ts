import { Component, OnInit } from '@angular/core';
import { videogameService } from '../shared/videogame.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id : any;

  constructor(private videogameService: videogameService, private router: Router) { }

  ngOnInit() {
  }

  newvideogame(){
      // Get max videogame Id from the videogame list
      this.videogameService.getMaxVideogameId().subscribe(
        data => this.id = data
      );
      this.router.navigate(['/videogames', this.id, 'new'])

  }

}
