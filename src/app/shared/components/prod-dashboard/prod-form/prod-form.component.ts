import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { IcanDeactivateComp } from 'src/app/shared/model/deactivate.interface';
import { Iprod } from 'src/app/shared/model/prod.interface';
import { ProductService } from 'src/app/shared/services/product.service';
import { UuidService } from 'src/app/shared/services/uuid.service';

@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.scss']
})
export class ProdFormComponent implements OnInit,IcanDeactivateComp {

  canReturn !: string;
  isUpdated : boolean = false

  isInEditMode : boolean = false
  prodId !: string;
  prodObj !: Iprod

  prodForm !: FormGroup

  constructor(
    private _prodService : ProductService,
    private _route : ActivatedRoute,
    private _uuid : UuidService
  ) { }

  ngOnInit(): void {
    this.createprodForm();
    this.editModeHandling();
    this.disabledMode();
  }

  createprodForm(){
      this.prodForm = new FormGroup({
        pname : new FormControl(null , [Validators.required]),
        canReturn : new FormControl(null , [Validators.required]),
        productImg : new FormControl(null , [Validators.required]),
        pStatus : new FormControl(null , [Validators.required]),
        productDescription : new FormControl(null , [Validators.required]),
      })
  }

  editModeHandling(){
    this.prodId = this._route.snapshot.params['prodId']
     if(this.prodId){
      this.prodObj = this._prodService.getProdInfo(this.prodId)!
      this.prodForm.patchValue(this.prodObj)
      this.isInEditMode = true
     }else{
      this.isInEditMode = false
     }
  }

  disabledMode(){
    this._route.queryParams.subscribe((params : Params) => {
      this.canReturn = params['canReturn']
      if(this.canReturn === '0'){
       this.prodForm.disable()
      }
      else{
       this.prodForm.enable()
      }
 })
  }

  getControls(control : string){
    return this.prodForm.get(control) as FormControl
  }


  onProdAdd(){
     if(this.prodForm.valid){
      let newProd = {...this.prodForm.value , pId : this._uuid.uuid()}
      this._prodService.addProdInfo(newProd)
     }
  }

  onUpdateproduct(){
    if(this.prodForm.valid){
      let updatedProd = {...this.prodForm.value , pId : this.prodId}
      this.isUpdated = true
      this._prodService.addProdInfo(updatedProd)
     }
  }

  canDeactivate () :  boolean | Observable<boolean> | Promise<boolean> {
    //if the product is edited and not updated then only return false otherwise return true
     if(this.prodForm.dirty && !this.isUpdated){
      let getConfirm = confirm(`Are you sure ? you want to discard the changes?`)
      return getConfirm
     }
     return true
}

}
