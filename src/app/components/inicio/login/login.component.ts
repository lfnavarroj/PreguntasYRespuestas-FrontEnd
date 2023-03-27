import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from "../../../models/usuario";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loading:boolean=false;
  login:FormGroup;

  constructor(private fb: FormBuilder,
              private toastr: ToastrService,
              private router:Router){
    this.login=this.fb.group({
      usuario:['', Validators.required ],
      password:['', Validators.required]
    });
  }

  log():void{

    console.log(this.login);

    const usuario:Usuario={
      nombreUsuario:this.login.value.usuario,
      password:this.login.value.password
    }

    this.loading=true;
    setTimeout(()=>{

    if (usuario.nombreUsuario==="Luis" && usuario.password==="123456"){
      this.login.reset();
      this.router.navigate(['/dashboard'])
    }else {
      this.toastr.error('Usuario o contraseña errado','Error');
      this.login.reset();
    }
    this.loading=false;
    } ,3000);



  }

}
