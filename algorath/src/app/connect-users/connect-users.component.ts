import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { user } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-connect-users',
  templateUrl: './connect-users.component.html',
  styleUrls: ['./connect-users.component.css']
})
export class ConnectUsersComponent implements OnInit {

  usuarioForm: FormGroup;
  titulo = 'Editar usuario';
  id: string | null;
  connReceiverId!: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _userService: UserService,
              private aRouter: ActivatedRoute) { 
    this.usuarioForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      connections: [[], Validators.required]

    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }
  ngOnInit(): void {
    this.esEditar();
  }

  

  esEditar(){
    if(this.id!==null){
      this._userService.obtenerUsuario(this.id).subscribe(data => {
        this.usuarioForm.setValue({
          id: data._id,
          name: data.name,
          connections: data.connections
        })
      })
    }
  }



  guardarUsuario(){
    var connSTR=this.usuarioForm.get('connections')?.value
    console.log(connSTR);
    var newConnections = String(connSTR).split(",");
    console.log(newConnections);

    var connReceiverId = newConnections[newConnections.length-1];
    console.log( connReceiverId)
    if(this.id!=null){
      const USUARIO: user = {
        _id: this.usuarioForm.get('id')?.value,
        name: this.usuarioForm.get('name')?.value,
        connections: newConnections
  
      }


    this._userService.obtenerUsuario(connReceiverId).subscribe(data2 =>{
      console.log(data2);
      var newConnections2 =data2.connections;
      console.log(newConnections2);
      if(data2.connections.length>1){
        newConnections2 = String(data2.connections).split(",");
        newConnections2.push(String(this.id));
      }else if (data2.connections.length ==0){
        newConnections2.push(String(this.id));
      }

      console.log(newConnections2);
      const USUARIO2: user = {
        _id: data2._id,
        name: data2.name,
        connections: newConnections2
  
      }
      this._userService.editarUsuario(data2._id, USUARIO2).subscribe(data =>{
        console.log(USUARIO2);
      })

    })
      
      this._userService.editarUsuario(this.id, USUARIO).subscribe( data => {
        console.log(USUARIO);
        this.toastr.info('El usuario ha sido actualizado', 'Usuario guardado')
        this.router.navigate(['/list-users']);
      })
    
  }

}


}
