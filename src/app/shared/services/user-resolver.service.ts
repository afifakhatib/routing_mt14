import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Iuser } from '../model/user.interface';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class UserResolverService implements Resolve<Iuser[]> {
  constructor(private _userService : UserService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Iuser[] | Observable<Iuser[]> | Promise<Iuser[]> {
    return this._userService.fetchUsersInfo()
  }
}
