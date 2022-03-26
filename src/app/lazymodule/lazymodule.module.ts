import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazymoduleRoutingModule } from './lazymodule-routing.module';
import { LazyitemComponent } from './lazyitem/lazyitem.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';



@NgModule({
  declarations: [
        LazyitemComponent,
        Child1Component,
        Child2Component
  ],
  imports: [
    CommonModule,
    LazymoduleRoutingModule
  ],
  exports : [LazyitemComponent],
  providers:[]
})
export class LazymoduleModule { }
