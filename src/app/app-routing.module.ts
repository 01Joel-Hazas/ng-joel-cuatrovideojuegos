import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { videogameDetailComponent } from './videogame-detail/videogame-detail.component';
import { videogameEditComponent } from './videogame-edit/videogame-edit.component';
import { videogameNewComponent } from './videogame-new/videogame-new.component';

const routes: Routes = [
    {path: '',                    component: HomeComponent},
    {path: 'videogames/:id/new', component: videogameNewComponent},
    {path: 'videogames/:videogameId', component: videogameDetailComponent},
    {path: 'videogames/:id/edit', component: videogameEditComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], 
    exports: [ RouterModule ]
})
export class AppRoutingModule {

}
