import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }
  user = {
    usuario: '',
    email : '',
    contrasena: '',
    contrasenaVerif : ''
  }

  ngOnInit() {
  }

  onKeyContra(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp('^[A-Za-z0-9@,._*-]+$');
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
  }

  onKeyUp(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp('^[A-Za-z0-9? ]+$');
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
  }


  onKeyPassword(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp('^[A-Za-z0-9-*#&$%]+$');
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
  }


  async guardar(_form: NgForm){
    if(this.user.contrasena == this.user.contrasenaVerif){
      console.log(this.user)
    }else{
      alert("las contraseñas no concuerda")
    }
  } 

}
