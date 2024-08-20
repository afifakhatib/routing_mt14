import { Component, OnInit } from '@angular/core';
import { FairsService } from '../../services/fairs.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ifair } from '../../model/fairs.interface';

@Component({
  selector: 'app-fair-dashboard',
  templateUrl: './fair-dashboard.component.html',
  styleUrls: ['./fair-dashboard.component.scss']
})
export class FairDashboardComponent implements OnInit {

  fairId !: string;
  fairObj !: Ifair;
  fairInfo !: Ifair[];

  constructor(
    private _fairService : FairsService,
    private _route  : ActivatedRoute,
    private _router : Router
  ) {
    this._route.data.subscribe((metaData) => {
      this.fairInfo = metaData['fairData'];
      if(this.fairInfo){
       this._router.navigate(['fairs' , this.fairInfo[0].fairId])
      }
    })
   }

  ngOnInit(): void {
    this.getFairObj()
  }

  getFairObj(){
    this._route.params.subscribe((params : Params) => {
      this.fairId = params['fairId']
      if(this.fairId){
        this.fairObj = this._fairService.getFairsObj(this.fairId)!
      }
     })
  }


}
