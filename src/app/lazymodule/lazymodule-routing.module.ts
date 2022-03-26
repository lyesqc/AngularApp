import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Child1Component } from './child1/child1.component';
import { LazyitemComponent } from './lazyitem/lazyitem.component';
import { LazymoduleModule } from './lazymodule.module';

const routes: Routes = [
  {path: 'itemz', component: LazyitemComponent, children:[
    {path: 'child1', component: Child1Component}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazymoduleRoutingModule { }
