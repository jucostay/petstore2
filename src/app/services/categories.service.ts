import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Category } from '../interfaces/category';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) {}   

  getCategories(): Observable<Category[]> {
    return new Observable<Category[]>(observer => {
        // Faça o importe do environment para poder adicionar a url da aplicação
        this.http.get<Category[]>(`${environment.apiUrl}v1/categories`).subscribe(
          categories => {
            observer.next(categories);
            observer.complete();
          },
          () => { // Se der algum erro na requisição ira ser chamado esse callback
            observer.error('error_on_get_categories');
            observer.complete();
          }
        )
    });
}

}