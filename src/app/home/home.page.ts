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
    let regExp = new RegExp('^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@*#$%^&+=]).*$');
    
    if(!regExp.test(newValue)){
      
      event.target.value = newValue.slice(0, -1);
      
    }
  }

  async onSubmit(_form: NgForm) {
    console.log(this.user);
    console.log(this.user.usario.length)
    if(this.user.usario.length<8 && this.user.contrasena.length<8){
      alert("Compor no cumple")
      console.log("entre 2")
    }else{
      alert(this.user.usario + ' : ' + this.user.contrasena)
      console.log("entre 2")
    }
 
    
   
  }



}
