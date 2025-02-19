import { Component, OnInit} from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private UsersService: UsersService){}

  ngOnInit() {
    this.users = this.UsersService.inactiveUsers;
  }
  onSetToActive(id: number) {
    this.UsersService.setToActive(id);
  }
}
