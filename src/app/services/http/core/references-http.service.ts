import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ServerResponse } from '@models/http-response';
import { MessageService } from '@servicesApp/core';
import { ReferenceModule } from '@models/core';

@Injectable({
  providedIn: 'root'
})
export class ReferenceHttpService {
  /* Services */
  private readonly httpClient = inject(HttpClient);
  private readonly messageService = inject(MessageService);

  /* API URL */
  private API_URL = `${environment.API_URL}/reference`;

  constructor() {}

  create(payload: ReferenceModule): Observable<ReferenceModule> {
    const url = this.API_URL;

    return this.httpClient.post<ServerResponse>(url, payload).pipe(
      map(response => {
        this.messageService.success(response);
        return response.data;
      })
    );
  }

  findAll(): Observable<ReferenceModule[]> {
    const url = this.API_URL;

    return this.httpClient.get<ServerResponse>(url).pipe(
      map(response => {
        return response.data;
      })
    );
  }

  findOne(id: string): Observable<ReferenceModule> {
    const url = `${this.API_URL}/${id}`;

    return this.httpClient.get<ServerResponse>(url).pipe(
      map(response => response.data)
    );
  }

  update(id: string, payload: ReferenceModule): Observable<ReferenceModule> {
    const url = `${this.API_URL}/${id}`;

    return this.httpClient.put<ServerResponse>(url, payload).pipe(
      map(response => {
        this.messageService.success(response);
        return response.data;
      })
    );
  }

  remove(id: string): Observable<boolean> {
    const url = `${this.API_URL}/${id}`;

    return this.httpClient.delete<ServerResponse>(url).pipe(
      map(response => {
        this.messageService.success(response);
        return response.data;
      })
    );
  }

  find(page: number = 1, search: string = ''): Observable<ServerResponse> {
    const url = this.API_URL;

    const headers = new HttpHeaders().append('pagination', 'true');
    const params = new HttpParams().append('page', page).append('search', search);

    return this.httpClient.get<ServerResponse>(url, { headers, params }).pipe(
      map(response => {
        return response;
      })
    );
  }
}
