import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Iprod } from 'src/app/shared/model/prod.interface';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-prod-info',
  templateUrl: './prod-info.component.html',
  styleUrls: ['./prod-info.component.scss']
})
export class ProdInfoComponent implements OnInit {

  prodId !: string;
  prodObj !: Iprod;


  constructor(
    private _prodService : ProductService,
    private _route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProdObj()
  }
 
  getProdObj(){
    this._route.params.subscribe((params : Params) => {
       this.prodId = params['prodId']
       if(this.prodId){
         this.prodObj = this._prodService.getProdInfo(this.prodId)!
       }
    })
  }

  onRemoveProd(){
    let confirmation = confirm(`Are you sure ? Do you Want to remove prod ${this.prodObj.pname}`)
     if(confirmation){
      this._prodService.removeProdInfo(this.prodObj)
     }
  }
}
