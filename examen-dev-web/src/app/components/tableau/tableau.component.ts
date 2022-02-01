import {  Component, Input} from '@angular/core';
import Musique from 'src/app/models/musique';
import { MusiqueService } from 'src/app/services/musique-service/musique.service';
import * as moment from 'moment';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AjoutPopupComponent } from './ajout-popup/ajout-popup.component';
import { mergeMap } from 'rxjs';



@Component({
  selector: 'tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent {

  @Input() musiques!: Musique[]

  moment = moment

  faPlus = faPlus

  dialogStatus: string = "inactive";
  private addDialog: MatDialogRef<AjoutPopupComponent> | any;

  constructor(private readonly musiqueService:MusiqueService, public dialog: MatDialog) {
    this.getall();
  }

  getall(): void {
    this.musiqueService.fetch().subscribe(musiques => {this.musiques = musiques || []})
  }

  delete(musique: Musique){
    this.musiqueService.delete(musique.id!).subscribe(() => {
      this.getall();
    });
  }

  add(musique: Musique) {
    this.musiqueService
      .create(musique)
      .pipe(mergeMap(() => this.musiqueService.fetch()))
      .subscribe(musiques => {
        this.musiques = musiques;
        this.hideDialog();
      });
  }

  update(musique: Musique) {
    this.musiqueService
      .update(musique)
      .pipe(mergeMap(() => this.musiqueService.fetch()))
      .subscribe(musiques => {
        this.musiques = musiques;
        this.hideDialog();
      });
  }

  showDialog() {
    debugger;
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(AjoutPopupComponent, {
      width: '600px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe((musique:any)=> {
      this.dialogStatus = 'inactive';
      if (musique) {
        this.add(musique);
      }
    });
  }

  hideDialog() {
    this.dialogStatus = 'inactive';
    if(this.addDialog != undefined){
      this.addDialog.close();
    }
  }
}
