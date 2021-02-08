import { Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Videogame } from '../shared/videogame';
import { videogameService } from '../shared/videogame.service';

@Component({
  templateUrl: './videogame-edit.component.html'
})
export class videogameEditComponent implements OnInit{

  pageTitle = 'Editar videojuego: ';
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
    this.videogameId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getvideogame(this.videogameId);
  }

  getvideogame(id: number): void {
    this.videogameService.getvideogameById(id)
      .subscribe(
        (videogame: Videogame) => this.displayvideogame(videogame),
        (error: any) => this.errorMessage = <any>error
      );
  }

  displayvideogame(videogame: Videogame): void {
    if (this.videogameForm) {
      this.videogameForm.reset();
    }
    this.videogame = videogame;
    this.pageTitle = `Editar videojuego: ${this.videogame.title}`;

    // Update the data on the form
    this.videogameForm.patchValue({
      title: this.videogame.title,
      price: this.videogame.price,
      rating: this.videogame.rating,
      description: this.videogame.description,
      shortDescription: this.videogame.shortDescription,
      image: this.videogame.image
    });
  }

  deletevideogame(): void {
    if (this.videogame.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Realmente deseas borrar el videojuego: ${this.videogame.title}?`)) {
        this.videogameService.deletevideogame(this.videogame.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }


  savevideogame(): void {
    if (this.videogameForm.valid) {
      if (this.videogameForm.dirty) {
        this.videogame = this.videogameForm.value;
        this.videogame.id = this.videogameId;
        
        this.videogameService.updatevideogame(this.videogame)
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
