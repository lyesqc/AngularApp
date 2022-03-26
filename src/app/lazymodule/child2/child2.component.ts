import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, OnChanges {

  @Input()
  componentName : string="";
  
  constructor() { }
  ngOnChanges(): void {
    console.log("changes :"+this.componentName);
  }

  ngOnInit(): void {
  }

}
