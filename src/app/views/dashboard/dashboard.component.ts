import { Component, OnInit } from '@angular/core';
import { UserDetails, UserDetailsService } from '../../shared';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userDetailsService: UserDetailsService) { }

  ngOnInit() {
    this.userDetailsService.getUserDetails().subscribe(
      userData => console.log(JSON.stringify(userData)),
      error => console.log(JSON.stringify(error))
    );
  }

}
