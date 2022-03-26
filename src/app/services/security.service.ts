import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserDto } from '../dto/user-dto';

@Injectable()
export class SecurityService {
   hideNavBar = new Subject<boolean>();
  constructor() { console.log("call constructor for SecurityService");}
  public isAuthenticated():boolean{

    let userString : string = localStorage.getItem("user")||'{}';
    let user: UserDto = JSON.parse(userString);
    if(userString == null || userString =='{}' ){
      console.log('user is not authenticatd');
      this.hideNavBar.next(true);
      return false;
    }
    else{
      console.log('user is authenticatd :'+userString);
      this.hideNavBar.next(false);
      return true;
    }
  }

  public authenticate(userName:string, password:string){
      if(userName!=null && userName.length>0 && password != null && password.length > 0){
         let user = new UserDto(userName, password, new Date());
         let userString = JSON.stringify(user);
        localStorage.setItem("user", userString);
        console.log("in securityService hideNavBar=> false");
        this.hideNavBar.next(false);
      }
  }
}
