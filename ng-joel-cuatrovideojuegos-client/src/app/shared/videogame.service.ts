import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { Videogame } from './videogame';

@Injectable({
  providedIn: 'root'
})
export class videogameService {

  private videogamesUrl = 'http://localhost:8000/videogames';

  constructor(private http: HttpClient) { }

  getvideogames(): Observable<Videogame[]> {
    return this.http.get<Videogame[]>(this.videogamesUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getMaxVideogameId(): Observable<Videogame> {
    return this.http.get<Videogame[]>(this.videogamesUrl)
    .pipe(
      // Get max value from an array
      map(data => Math.max.apply(Math, data.map(function(o) { return o.id; }))   ),
      catchError(this.handleError)
    );
  }

  getvideogameById(id: number): Observable<Videogame> {
    const url = `${this.videogamesUrl}/${id}`;
    return this.http.get<Videogame>(url)
      .pipe(
        tap(data => console.log('getvideogame: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  createvideogame(videogame: Videogame): Observable<Videogame> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    videogame.id = null;
    return this.http.post<Videogame>(this.videogamesUrl, videogame, { headers: headers })
      .pipe(
        tap(data => console.log('createvideogame: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  deletevideogame(id: number): Observable<{}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.videogamesUrl}/${id}`;
    return this.http.delete<Videogame>(url, { headers: headers })
      .pipe(
        tap(data => console.log('deletevideogame: ' + id)),
        catchError(this.handleError)
      );
  }

  updatevideogame(videogame: Videogame): Observable<Videogame> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const url = `${this.videogamesUrl}/${videogame.id}`;
    return this.http.put<Videogame>(url, videogame, { headers: headers })
      .pipe(
        tap(() => console.log('updatevideogame: ' + videogame.id)),
        // Return the videogame on an update
        map(() => videogame),
        catchError(this.handleError)
      );
  }

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `A ocurrido un error: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
  
    return throwError(errorMessage);
  }

}
