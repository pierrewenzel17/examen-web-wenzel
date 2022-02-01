import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import Musique from 'src/app/models/musique';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MusiqueService {

  private musiques = new BehaviorSubject<string>('');

  private urlServer:any = {};

  constructor(private readonly http: HttpClient) {

    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls

    Object.keys(environment.backend.endpoints).forEach(
      // @ts-ignore
      k => (this.urlServer[k] = `${baseUrl}${environment.backend.endpoints[k]}`)
    );
    console.log(this.urlServer);

  }

  get musiques$(): Observable<string> {
    return this.musiques.asObservable();
  }

  updatedEmployeeList(data: string){
    this.musiques.next(data);
  }

  fetch(): Observable<Musique[]> {
    return this.http.get<Musique[]>(this.urlServer.toutesLesMusique);
  }

  search(name: string): Observable<Musique[]> {
    return this.http.get<Musique[]>(this.urlServer.filterByName.replace(':name', name));
  }

  fetchRandom(): Observable<Musique> {
    return this.http.get<Musique>(this.urlServer.musiqueAleatoire);
  }

  delete(id: string): Observable<any> {
    return this.http.delete(this.urlServer.uneMusique.replace(':id', id));
  }

  create(employe: Musique): Observable<Musique> {
    return this.http.post<Musique>(this.urlServer.toutesLesMusique, employe);
  }

  fetchOne(id: string): Observable<Musique> {
    return this.http.get<Musique>(this.urlServer.uneMusique.replace(':id', id));
  }

  update(employe: Musique): Observable<Musique> {
    return this.http.put<Musique>(this.urlServer.uneMusique.replace(':id', employe.id), employe);
  }
}
