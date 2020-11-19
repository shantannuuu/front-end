import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users : any ;
  constructor(private usersService : UsersService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.usersService.getUsers().subscribe(
      result =>{
        this.users = result ;
      },

      err => console.log(err)
    )
  }
}
