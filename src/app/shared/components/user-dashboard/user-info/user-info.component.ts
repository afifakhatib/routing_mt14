import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iuser } from 'src/app/shared/model/user.interface';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  userObj !: Iuser;
  userId !: string;

  constructor(
    private _userService : UserService,
    private _route : ActivatedRoute
  ) { }

  ngOnInit(): void {
      this.getUserObj()
  }

  getUserObj(){
       this._route.params.subscribe((params : Params) => {
        this.userId = params['userId'];
        if(this.userId){
          this.userObj = this._userService.getUserInfo(this.userId)!
        }
       })
  }

  onRemoveUser(){
    let confirmation = confirm(`Are you sure ? Do you want to remove user ${this.userObj.userName} ?`)
    if(confirmation){
      this._userService.removeUserInfo(this.userObj)
    }
  }
}
