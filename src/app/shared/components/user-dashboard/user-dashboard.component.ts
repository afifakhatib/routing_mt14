import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../model/user.interface';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  selectedId !: string

  userInfo !: Iuser[]

  userId !: string;
  userObj !: Iuser;
  userRole !: string

  constructor(
    private _userService : UserService,
    private _route : ActivatedRoute,
    private _router : Router
  ) {
         this._route.data.subscribe((metaData) => {
           this.userInfo = metaData['userData'];
           if(this.userInfo){
            this._router.navigate(['users' , this.userInfo[0].userId] , {
               queryParams : {userRole : this.userInfo[0].userRole},
               queryParamsHandling : 'merge'
            })
           }
         })
   }

  ngOnInit(): void { 
      // this.userInfo  = this._userService.fetchUsersInfo();
      // this._router.navigate(['users' , this.userInfo[0].userId] , {
      //   queryParams : {userRole : this.userInfo[0].userRole},
      //   queryParamsHandling : 'merge'
      // })
  }

  getSelectedId(id : string){
    this.selectedId = id
  }

}
