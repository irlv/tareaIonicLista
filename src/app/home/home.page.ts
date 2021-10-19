import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  user = {
    usario: '',
    contrasena: ''
  }

  constructor() {}

  onKeyUp(event: any){
    let newValue = event.target.value;
    console.log(newValue);
 
    let regExp = new RegExp('^[A-Za-z0-9? ]+$');
 
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
  }

  onKeyContra(event: any){
    let newValue = event.target.value;
    console.log(newValue);
    let regExp = new RegExp('^[A-Za-z0-9-*#&$%]+$');
    if(!regExp.test(newValue)){
      event.target.value = newValue.slice(0, -1);
    }
  }

  async onSubmit(_form: NgForm) {
    console.log(this.user);
 
    alert(this.user.usario + ' : ' + this.user.contrasena)
  }



}
