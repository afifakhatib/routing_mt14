import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Iprod } from '../model/prod.interface';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProdResolverService implements Resolve<Iprod[]> {
  constructor(private _prodService : ProductService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Iprod[] | Observable<Iprod[]> | Promise<Iprod[]> {
      return this._prodService.fetchProdInfo()
  }
}
