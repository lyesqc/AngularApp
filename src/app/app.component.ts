import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecurityService } from './services/security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  hideNavBar : boolean = true;
  ngOnInit(): void {
    console.log("onint call in AppComponent");
    this.securityService.hideNavBar.subscribe(next => this.hideNavBar = next);
    console.log("in appComponent , hideNavBar : "+this.hideNavBar);
    if( !this.securityService.isAuthenticated()){
      console.log("in App component , navigate to auth");
      this.router.navigate(['/auth']);
    }else{
     
      console.log("user is authenticated, hideNavBar=>"+this.hideNavBar);  
      //this.router.navigate(['/dashboard']);
    }

  }
  constructor(private securityService : SecurityService, private router : Router){
          securityService.hideNavBar
  }
  title = 'AngularReprises';

}
