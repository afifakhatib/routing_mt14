import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { IcanDeactivateComp } from 'src/app/shared/model/deactivate.interface';
import { Iuser } from 'src/app/shared/model/user.interface';
import { UserService } from 'src/app/shared/services/user.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit,IcanDeactivateComp {

  isUpdated : boolean = false
  isInEditMode : boolean = false

  userForm !: FormGroup
  userId !: string;
  userObj !: Iuser;
  userRole !: string;

  constructor(
    private _userService : UserService,
    private _uuid : UuidService,
    private _route : ActivatedRoute
  ) { }



  ngOnInit(): void {
     this.createUserForm();
     this.EditModeHandling();
     this.disableMode();
  }

  createUserForm(){
      this.userForm = new FormGroup({
          userName : new FormControl(null , [Validators.required]),
          userRole : new FormControl(null , [Validators.required]),
          personImg : new FormControl(null , [Validators.required]),
          userDetails : new FormControl(null , [Validators.required]),
      })
  }

  EditModeHandling(){
     this.userId = this._route.snapshot.params['userId']
     if(this.userId){
      this.userObj = this._userService.getUserInfo(this.userId)!
      this.userForm.patchValue(this.userObj)
      this.isInEditMode = true
     }
     else{
      this.isInEditMode = false
     }
  }

  disableMode(){
    this._route.queryParams.subscribe((params : Params) => {
        this.userRole = params['userRole']
          if(this.userRole === 'buyer'){
            this.userForm.disable()
          }
          else{
            this.userForm.enable()
          }
    })
     
  }

  getControls(control : string){
    return this.userForm.get(control) as FormControl
  }


  onUserAdd(){
     if(this.userForm.valid){
       let newUser = {...this.userForm.value , userId : this._uuid.uuid()}
       this._userService.addUserInfo(newUser)
     }
  }

  onUpdateUser(){
    if(this.userForm.valid){
        let updatedUser = {...this.userForm.value , userId : this.userId}
        this.isUpdated = true
        this._userService.updateUserInfo(updatedUser)
    }
  }

  canDeactivate () :  boolean | Observable<boolean> | Promise<boolean> {
      //if the product is edited and not updated then only return false otherwise return true
       if(this.userForm.dirty && !this.isUpdated){
        let getConfirm = confirm(`Are you sure ? you want to discard the changes?`)
        return getConfirm
       }
       return true
  }


}
