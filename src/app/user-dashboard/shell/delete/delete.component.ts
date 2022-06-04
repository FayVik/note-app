import { Component, OnInit } from '@angular/core';
import { NewNote, ServiceService, Identify } from 'src/app/service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css'],
})
export class DeleteComponent implements OnInit {
  public note = {
    title: '',
    content: '',
  } as NewNote;

  public id?: Identify;

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

    this.id = noteId;

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

  public deleteN = () => {
    let id = this.id as Identify;

    this.http.deleteNote(id).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
