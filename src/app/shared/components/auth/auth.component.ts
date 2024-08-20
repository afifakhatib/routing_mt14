import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isHasAccount : boolean = false

  authForm !: FormGroup

  constructor(
    private _auth : AuthService
  ) { }

  ngOnInit(): void {
     this.createAuthForm()
  }

  createAuthForm(){
      this.authForm = new FormGroup({
        email : new FormControl(null , [Validators.required]),
        password : new FormControl(null , [Validators.required])
      })
  }

  getControls(control : string){
    return this.authForm.get(control) as FormControl
  }
  
  onLogIn(){
    if(this.authForm.valid){
        this._auth.logInApp(this.authForm.value.email , this.authForm.value.password)
    }
  }
}
