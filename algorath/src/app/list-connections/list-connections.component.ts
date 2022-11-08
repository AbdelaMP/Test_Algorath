import { Component, OnInit } from '@angular/core';
import { user } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list-connections',
  templateUrl: './list-connections.component.html',
  styleUrls: ['./list-connections.component.css']
})
export class ListConnectionsComponent implements OnInit {
  listUsuarios: user[] = [];
  usuarioMaxCon = '';
  contConexiones = 0;

  constructor(private _usuarioService: UserService) { }

  ngOnInit(): void {
    this.calcularStats();
  }


  calcularStats() {
    let max =0;
    this._usuarioService.getUsuarios().subscribe(data => {
       data.forEach((usuario: { connections: string | any[]; name: string; }) =>{
        console.log(usuario);
        if (usuario.connections.length > max) {
          max = usuario.connections.length;
          console.log(max);
          this.usuarioMaxCon = usuario.name;
        }
        this.contConexiones +=usuario.connections.length;
        console.log(this.contConexiones);
       });
       this.contConexiones = this.contConexiones/2;

    }, error => {
      console.log(error);
    }) 

  }

}
