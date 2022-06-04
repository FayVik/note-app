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
  public id = -1;
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
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getNote();
  }

  getNote(): void {
    this.id = this.activeRoute.snapshot.params['id'];

    this.http.getNote(this.id).subscribe(
      (res) => {
        this.note = res.data as NewNote;
        this.updateForm.patchValue(this.note);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  UpdateNote(value: any): void {
    console.log(value);
    this.note.title = value.title;
    this.note.content = value.content;

    console.log(this.note);

    this.http.updateNote(this.id, this.note).subscribe(
      (res) => {
        this.router.navigate(['/user-dashboard/dashboard']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
