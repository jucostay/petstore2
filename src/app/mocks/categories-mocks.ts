import { category } from '../interfaces/category';
import { Observable } from 'rxjs';

export class CategoriesServiceMock {

    getCategories(): Observable<category[]> {
        return new Observable<category[]>(observer => {
            observer.next([
                { id: 'dasdasd', name: 'Ração', description: '', subcategories: ['ração seca'], url: '' },
                { id: 'dasdasd', name: 'Brinquedos', description: '', subcategories: ['pelucia'], url: '' }
            ]);
            observer.complete();
        });
    }
}