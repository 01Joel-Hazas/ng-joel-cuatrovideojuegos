import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Videogame } from '../shared/videogame';
import { ActivatedRoute, Router } from '@angular/router';
import { videogameService } from '../shared/videogame.service';

@Component({
  selector: 'app-videogame-new',
  templateUrl: './videogame-new.component.html',
  styleUrls: ['./videogame-new.component.css']
})
export class videogameNewComponent implements OnInit {

  pageTitle = 'Nuevo Videojuego:';
  errorMessage: string;
  videogameForm: FormGroup;

  videogameId:number;
  videogame: Videogame;

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private videogameService: videogameService) {  }

  ngOnInit(): void {
    this.videogameForm = this.fb.group({
      title: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],
      categories: '',
      rating: '',
      price: '',
      description: '',
      shortDescription: '',
      image: ''
    });

    // Read the videogame Id from the route parameter
    this.videogameId = parseInt(this.activatedroute.snapshot.params['videogameId']);
  }

  savevideogame(): void {
    if (this.videogameForm.valid) {
      if (this.videogameForm.dirty) {
        this.videogame = this.videogameForm.value;
        this.videogame.id = this.videogameId;
        
        this.videogameService.createvideogame(this.videogame)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
        
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Por favor, corrige los errores de validación.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.videogameForm.reset();
    this.router.navigate(['']);
  }
  
}
