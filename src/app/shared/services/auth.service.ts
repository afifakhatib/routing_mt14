import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, flatMap, Subject } from 'rxjs';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  logInState$ : Subject<boolean> = new BehaviorSubject<boolean>(false)

  userLoginState  : boolean = false 

  constructor(
    private _router : Router,
    private _snackBar : SnackbarService,
  ){}

  isAuthenticatedUser(){
    return new Promise<boolean>((res , rej) => {
       setTimeout(() => {
         if(localStorage.getItem('token')){
          this.userLoginState = true
          // this.logInState$.next(true)
         }
         else{
          this.userLoginState = false
          // this.logInState$.next(false)
          this._router.navigate([''])
         }
         this.logInState$.next(this.userLoginState)
          res(this.userLoginState)
       },500)
    })
  }

  logInApp(email : string , pass : string){
    if(email === 'jhondoe@gmail.com' && pass === 'zaq1ZAQ!'){
      localStorage.setItem('userRole' , 'buyer')
      this.commonSetItem()
    }
    else if(email === 'junedoe@gmail.com' && pass === 'zaq1ZAQ!'){
      localStorage.setItem('userRole' , 'admin')
      this.commonSetItem()
    }
    else if(email === 'maydoe@gmail.com' && pass === 'zaq1ZAQ!'){
      localStorage.setItem('userRole' , 'sa')
      this.commonSetItem()
    }
    else{
       this._snackBar.openSnackBar(`INVALID EMAIL ID OR PASSWORD ! PLEASE ENTER CORRECT ONE`)
    }
    
  }

  logOutApp(){
    this.userLoginState = false
    localStorage.removeItem('token')
    localStorage.removeItem('userRole')
    this.logInState$.next(false)
    this._router.navigate([''])
  }

  commonSetItem(){
    this.userLoginState = true
    localStorage.setItem('token' , 'JWT Token stores in LS')
    this.logInState$.next(true)
    this._router.navigate(['home'])
  }

}

// jhondoe@gmail.com >> buyer
// junedoe@gmail.com >> admin
// maydoe@gmail.com >> super_admin

// home >> to all [buyer , admin , super_admin]
// users >> [admin , super_admin]
//product >> to all [buyer , admin , super_admin]
//fairs >> only to super_admin
