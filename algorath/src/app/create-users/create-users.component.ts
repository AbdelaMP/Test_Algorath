import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators , ReactiveFormsModule} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent implements OnInit {

  usuarioForm: FormGroup;
  titulo = 'Crear usuario';
  id: string | null;
  constructor(private fb: FormBuilder,
              private router: Router,
              private toastr: ToastrService,
              private _userService: UserService,
              private aRouter: ActivatedRoute) { 
    this.usuarioForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }

  agregarUsuario() {

    const USUARIO: user = {
      _id: this.usuarioForm.get('id')?.value,
      name: this.usuarioForm.get('name')?.value,
      connections: []

    }

    console.log(USUARIO);
    this._userService.guardarUsuario(USUARIO).subscribe(data => {
      this.toastr.success('El usuario fue registrado con exito!', 'Usuario Registrado!');
      this.router.navigate(['/list-users']);
    }, error => {
      console.log(error);
      this.usuarioForm.reset();
    })

  
  }

}