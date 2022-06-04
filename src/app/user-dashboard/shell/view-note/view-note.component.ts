import { Component, OnInit } from '@angular/core';
import { NewNote, ServiceService } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-view-note',
  templateUrl: './view-note.component.html',
  styleUrls: ['./view-note.component.css'],
})
export class ViewNoteComponent implements OnInit {
  public note = {
    title: '',
    content: '',
  } as NewNote;

  constructor(
    private http: ServiceService,
    private activeRoute: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getNote();
  }
  public onCancel = () => {
    this.location.back();
  };

  getNote = (): void => {
    let noteId = this.activeRoute.snapshot.params['id'];

    this.http.getNote(noteId).subscribe(
      (res) => {
        console.log(res);
        this.note = res as NewNote;
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
