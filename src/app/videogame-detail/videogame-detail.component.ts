import {Component, OnInit} from '@angular/core';
import {videogameService} from '../shared/videogame.service';
import {Videogame} from '../shared/videogame';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-videogame-detail',
  templateUrl: './videogame-detail.component.html',
  styleUrls: ['./videogame-detail.component.css']
})
export class videogameDetailComponent implements OnInit {

  videogame: Videogame;
  videogameId: number;

  constructor(private activatedroute: ActivatedRoute, private router: Router, private videogameService: videogameService) {}

  ngOnInit() {
    this.videogameId = parseInt(this.activatedroute.snapshot.params['videogameId']);
    this.videogameService.getvideogameById(this.videogameId).subscribe(
      (data: Videogame) => this.videogame = data
    );
  }
  goEdit():void{
    this.router.navigate(['/videogames', this.videogameId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }

}
