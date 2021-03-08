import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/model/user-model';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiServer = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
  
  errorHandler(error) {
      let errorMessage = '';
      if(error.error instanceof ErrorEvent) {
        errorMessage = error.error.message;
      } else {
        errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errorMessage);
      return throwError(errorMessage);
  }

  salvar(novoUser: User): Observable<User> {
    
    return this.httpClient.post<User>(`${this.apiServer}`+'/usuario/', JSON.stringify(novoUser), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    );
  }  
  getById(id): Observable<User> {
    return this.httpClient.get<User>(this.apiServer + '/usuario/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  getAll(): Observable<User[]> {
    console.log(this.apiServer + '/usuario');
    return this.httpClient.get<User[]>(this.apiServer + '/usuario/')
    .pipe(
      catchError(this.errorHandler)
    )
  }

  update(id, user): Observable<User> {
    return this.httpClient.put<User>(this.apiServer + '/usuario/' + id, JSON.stringify(user), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  delete(id: number){
    return this.httpClient.delete<User>(this.apiServer + '/usuario/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
}
