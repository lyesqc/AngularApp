import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let user;
      let userString = localStorage.getItem("user");
      if(userString!=null){
        user = JSON.parse(userString);
      }
      if(user){
        console.log('user name is :'+user.userName);
      }else{
        console.log('user is null');
        return true;
      }
      return true;
  }
  
}
