import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empresa } from 'app/model/empresa-model';
import { environment } from 'environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private httpClient: HttpClient) { }
  
  private apiServer = environment.apiUrl;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
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

salvar(novaEmpresa: object): Observable<object> {
  return this.httpClient.post(`${this.apiServer}`+'/empresa/', novaEmpresa);
}  

getById(id): Observable<Empresa> {
  return this.httpClient.get<Empresa>(this.apiServer + '/empresa/' + id)
  .pipe(
    catchError(this.errorHandler)
  )
}

getAll(): Observable<Empresa[]> {
  return this.httpClient.get<Empresa[]>(this.apiServer + '/empresa/')
  .pipe(
    catchError(this.errorHandler)
  )
}

update(id, empresa): Observable<Empresa> {
  return this.httpClient.put<Empresa>(this.apiServer + '/empresa/' + id, JSON.stringify(empresa), this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}

delete(id: number){
  return this.httpClient.delete<Empresa>(this.apiServer + '/empresa/' + id, this.httpOptions)
  .pipe(
    catchError(this.errorHandler)
  )
}
}