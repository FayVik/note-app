import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { ServiceService, AllNote, UserResponse } from 'src/app/service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private http: ServiceService, private router: Router) {}

  displayedColumns = ['Title', 'View', 'Update', 'Delete'];
  public dataSource = new MatTableDataSource<AllNote>();
  public isAuth: boolean = false;

  public logout() {
    window.localStorage.removeItem('auth.user');
    this.router.navigate(['']);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  public redirectToUpdate = (id: string) => {
    let url: string = `/user-dashboard/dashboard/update/${id}`;
    this.router.navigate([url]);
  };

  public redirectToViewNote = (id: string) => {
    let url: string = `/user-dashboard/dashboard/view-note/${id}`;
    this.router.navigate([url]);
  };

  public redirectToDelete = (id: string) => {
    let url: string = `/user-dashboard/dashboard/delete/${id}`;
    this.router.navigate([url]);
  };

  ngOnInit(): void {
    this.http.getAllNote().subscribe(
      (res) => {
        console.log(res.data);
        this.dataSource.data = res.data as AllNote[];
        console.log(this.dataSource.data);
      },
      (error) => {
        console.log(error);
      }
    );
    const userString =
      window.localStorage.getItem('auth.user') || '{"id": -1 }';
    const user = JSON.parse(userString) as UserResponse;
    this.isAuth = user.id !== -1;
  }
}
