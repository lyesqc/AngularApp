import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-lazyitem',
  templateUrl: './lazyitem.component.html',
  styleUrls: ['./lazyitem.component.css']
})
export class LazyitemComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  go(routeName){
    console.log("go to :"+routeName);
    this.router.navigate([routeName],{relativeTo:this.route});
  }
}
