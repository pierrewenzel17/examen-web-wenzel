import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import Musique from 'src/app/models/musique';
import { MusiqueService } from 'src/app/services/musique-service/musique.service';

@Injectable({
  providedIn: 'root'
})
export class MusiqueDetailResolver implements Resolve<Musique> {
  
  constructor(private readonly musiqueService: MusiqueService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Musique> {
    const musiqueId: string | null = route.paramMap.get('id');
    if(musiqueId != null){
      return this.musiqueService.fetchOne(musiqueId);
    }
    else
      return new Observable<Musique>();
  }
}
