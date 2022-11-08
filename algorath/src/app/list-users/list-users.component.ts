import { Component, OnInit } from '@angular/core';
import { user } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {
  listUsuarios: user[] = [];
  constructor( private _usuarioService : UserService) { }

  ngOnInit(): void {
  this.getUsuarios();
  }

  getUsuarios(){
    this._usuarioService.getUsuarios().subscribe(data => {
      console.log(data);
      this.listUsuarios=data;
    }, error => {
      console.log(error);
    })
  }

}
