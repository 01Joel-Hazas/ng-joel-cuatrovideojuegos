import {Component, Input} from '@angular/core';
import {Videogame} from '../shared/videogame';

@Component({
  selector: 'app-videogame-item',
  templateUrl: './videogame-item.component.html',
  styleUrls: ['./videogame-item.component.css']
})
export class videogameItemComponent {

  @Input() videogame: Videogame;
}
