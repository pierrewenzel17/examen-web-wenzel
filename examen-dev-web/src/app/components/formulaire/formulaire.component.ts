import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import Musique from 'src/app/models/musique';
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: 'formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  form: FormGroup;
  @Input() musiqueModel: Musique;
  @ViewChild("fileInput") fileInput!: ElementRef;

  @Output('cancel') cancelEvent$: EventEmitter<any>;
  @Output('submit') submitEvent$: EventEmitter<any>;

  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor() {
    this.submitEvent$ = new EventEmitter();
    this.cancelEvent$ = new EventEmitter();
    this.form = FormulaireComponent.buildForm();
    this.musiqueModel = {
      styles: []
    };
  }

  ngOnInit(): void {
    this.form.patchValue({
      id: this.musiqueModel.id,
      title: this.musiqueModel.title,
      description: this.musiqueModel.description,
      album: this.musiqueModel.album,
      styles: this.musiqueModel.styles || [],
      date: this.musiqueModel.date,
      picture: this.musiqueModel.picture,
      duration: this.musiqueModel.duration,
      artist: this.musiqueModel.artist
    });
  }

  cancel() {
    this.cancelEvent$.emit();
  }

  submit(musique: Musique) { //Formulaire
    musique.picture = this.musiqueModel.picture;
    this.submitEvent$.emit(musique);
  }


  addChipset(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.musiqueModel.styles!.push(value);
    }
    event.chipInput!.clear();
  }

  removeChipset(style: any): void {
    const index = this.musiqueModel.styles!.indexOf(style);
    this.musiqueModel.styles!.splice(index, 1);
  }

  onFileSelected(event:Event | null) {
    const files = (<HTMLInputElement>event?.currentTarget).files;
    const file:File | null = files!.item(0);

    if (file) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (_event) => {
          this.musiqueModel.picture = reader.result;
        }
    }
  }

  private static buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      album: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      date: new FormControl('', Validators.required),
      description: new FormControl(''),
      artist: new FormControl(''),
      styles: new FormControl(''),
      duration: new FormControl('', Validators.required),
    });
  }

}
