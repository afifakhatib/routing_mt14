import { Component, OnInit } from '@angular/core';
import { Iprod } from '../../model/prod.interface';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prod-dashboard',
  templateUrl: './prod-dashboard.component.html',
  styleUrls: ['./prod-dashboard.component.scss']
})
export class ProdDashboardComponent implements OnInit {

  
  selectedId !: string

 prodInfo !: Iprod[]

  prodId !: string;
  prodObj !: Iprod;
  canReturn !: string

  constructor(
    private _route : ActivatedRoute,
    private _router : Router,
    private _prodService : ProductService
  ) {
    this._route.data.subscribe((metaData) => {
      this.prodInfo = metaData['prodData'];
      if(this.prodInfo){
       this._router.navigate(['products' , this.prodInfo[0].pId] , {
          queryParams : {canReturn : this.prodInfo[0].canReturn},
          queryParamsHandling : 'merge'
       })
      }
    })
   }

  ngOnInit(): void { 

    // this.prodInfo = this._prodService.fetchProdInfo()
    //   this._router.navigate(['products' , this.prodInfo[0].pId] , {
    //     queryParams : {canReturn : this.prodInfo[0].canReturn},
    //     queryParamsHandling : 'merge'
    //   })
  }

  getSelectedId(id : string){
    this.selectedId = id
  }

}
