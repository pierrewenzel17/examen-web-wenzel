import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import Musique from 'src/app/models/musique';
import { MusiqueService } from 'src/app/services/musique-service/musique.service';

@Component({
  selector: 'edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {

  musique: Musique;

  /**
   * Component constructor
   */
  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly musiqueService: MusiqueService
  ) {
    this.musique = {};
  }

  /**
   * OnInit implementation
   */
  ngOnInit() {
    this.route.data.subscribe(( musique: any) => (this.musique = musique.musique));
  }

  submit(musique: any) {
    this.musiqueService.update(musique).subscribe(() => {
      this.router.navigate(['/tableau']).then(r => null);
    });
  }

  cancel() {
    this.router.navigate(['/tableau']).then(r => null);
  }
}
