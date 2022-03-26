import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemComponent } from './item/item.component';
import { LazymoduleModule } from './lazymodule/lazymodule.module';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth.guard';

const routes : Routes=[

  {path:'item/:itemId', component: ItemComponent},
  {path:'auth', component: AuthenticationComponent},
  {path:'dashboard', component: DashboardComponent,canActivate:[AuthGuard]},
  {path:'lazyM', loadChildren:()=>import('./lazymodule/lazymodule.module').then(m =>m.LazymoduleModule)},
  {path:'profile', component:ProfileComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
