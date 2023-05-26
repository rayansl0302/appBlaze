import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { SegundaformaComponent } from './component/segundaforma/segundaforma.component';
import { TerceiraformaComponent } from './component/terceiraforma/terceiraforma.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'segundaforma', component: SegundaformaComponent },
  { path:'terceiraforma',component: TerceiraformaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
