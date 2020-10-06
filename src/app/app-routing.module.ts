import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BoardCreateComponent } from './pages/board-create/board-create.component';
import { BoardDetailComponent } from './pages/board-detail/board-detail.component';
import { BoardEditComponent } from './pages/board-edit/board-edit.component';
import { BoardListComponent } from './pages/board-list/board-list.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignRePasswordComponent } from './pages/sign-re-password/sign-re-password.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'category/:boards', component: BoardListComponent},
  {path:'category/:boards/create', component: BoardCreateComponent},
  {path:'category/:boards/:id', component: BoardDetailComponent},
  {path:'category/:boards/:id/edit', component: BoardEditComponent},
  {path:'sign-in', component: SignInComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'sign-re-password', component: SignRePasswordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:false, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
