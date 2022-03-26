import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Route, Router, Routes } from '@angular/router';
import { SecurityService } from '../services/security.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthenticationComponent implements OnInit {
 showAuthenticationError = true;
  constructor(private router:Router, private securityService : SecurityService) { 
    console.log("inside auth component");
    if( !this.securityService.isAuthenticated()){
      console.log("in App component , navigate to auth");
        this.router.navigate(['/auth']);
    }else{
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {
  }
   doAuthenticate(userName:string,password:string){
     if(userName == null || userName.length==0){
       console.log("userName is empty");
       this.showAuthenticationError = false;
       return;
     }
    console.log("username : "+userName+", password :"+password);
    this.securityService.authenticate(userName,password);
    this.router.navigate(['/dashboard']);
  }

}
