import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WorkerClass } from './Worker';
import { WorkerVM } from './workerVM';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  private baseUrl = "http://localhost:8080/api/Worker";
  headers = { 'Content-Type': 'application/json' };

  constructor(private http: HttpClient) { }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/addUser', JSON.stringify(data), { headers : this.headers });
  }

  getAll(): Observable<WorkerClass[]> {
    return this.http.get<WorkerClass[]>(this.baseUrl + '/get');
  }

  getById(id: number): Observable<WorkerClass> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

}
