import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'routing_mt14';

  loginState : boolean = false

  constructor(
    private _auth : AuthService
  ){}

  ngOnInit(): void {
     this._auth.logInState$.subscribe((res : boolean) => {

      this.loginState = res;
        //  if(res){
        //   this.loginState = true
        //  }
        //  else{
        //   this.loginState = false
        //  }
     })
  }


}
