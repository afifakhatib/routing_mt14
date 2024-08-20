import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Ifair } from '../model/fairs.interface';
import { Observable } from 'rxjs';
import { FairsService } from './fairs.service';

@Injectable({
  providedIn: 'root'
})
export class FairsResolverService implements Resolve<Ifair[]> {

  constructor(private _fairService : FairsService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Ifair[] | Observable<Ifair[]> | Promise<Ifair[]> {
    return this._fairService.fetchFairsInfo()
  }
}
