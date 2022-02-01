import { Component } from '@angular/core';
import Musique from 'src/app/models/musique';
import { MusiqueService } from 'src/app/services/musique-service/musique.service';

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  musique: Musique = {};

  constructor(private readonly musiqueService:MusiqueService) {
    this.random();
  }


  /**
   * Returns random people
   */
  random() {
    this.musiqueService.fetchRandom().subscribe(musique => {
      this.musique = musique;
    });
  }

  delete(musique: Musique){
    this.musiqueService.delete(musique.id!).subscribe(() => {
      this.random();
    });
  }

}
