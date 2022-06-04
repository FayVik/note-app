import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewNote, ServiceService } from 'src/app/service.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  public note = {
    title: '',
    content: '',
  } as NewNote;

  public updateForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
  });
  constructor(
    private http: ServiceService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getNote;
  }

  getNote = (): void => {
    let noteId = this.activeRoute.snapshot.params['id'];

    this.http.getNote(noteId).subscribe(
      (res) => {
        console.log(res);
        this.note = res as NewNote;
        this.updateForm.patchValue(this.note);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  UpdateNote(value: any): void {
    this.note.title = value.title;
    this.note.content = value.content;

    this.http.createNote(this.note).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
