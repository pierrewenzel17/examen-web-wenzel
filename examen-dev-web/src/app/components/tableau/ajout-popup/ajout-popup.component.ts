import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import Musique from 'src/app/models/musique';

export type PopupAction = Musique & {mode: string};

@Component({
  selector: 'ajout-popup',
  templateUrl: './ajout-popup.component.html',
  styleUrls: ['./ajout-popup.component.scss']
})
export class AjoutPopupComponent {

  constructor(public dialogRef: MatDialogRef<AjoutPopupComponent>) {}

  closeDialog(result: Musique & {mode?: string} | null = null) {
    this.dialogRef.close(result);
  }

  onCancel() {
    this.closeDialog();
  }

  onCreate(person: Musique) {
    this.closeDialog({...person, mode: 'create'});
  }

  onUpdate(person: Musique) {
    this.closeDialog({...person, mode: 'update'});
  }

}
