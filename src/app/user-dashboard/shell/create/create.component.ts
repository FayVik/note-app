import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewNote, ServiceService } from 'src/app/service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  public createForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    content: new FormControl('', [Validators.required]),
  });
  constructor(private http: ServiceService, private router: Router) {}

  ngOnInit(): void {}

  createNewNote = (): void => {
    const createForm = {
      title: this.createForm.get('title')?.value,
      content: this.createForm.get('content')?.value,
    } as NewNote;

    this.http.createNote(createForm).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  };
}
