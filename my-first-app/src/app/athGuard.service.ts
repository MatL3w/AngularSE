import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AthGuard implements CanActivate{
  constructor(){}
  canActivate(route:ActivatedRouteSnapshot,state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean{
    return true;
  }
}
