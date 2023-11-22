import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component'; 
import { UserLoginComponent } from './user-login/user-login.component';
import { UserPageComponent } from './user-page/user-page.component';
import { TicketsComponent } from './tickets/tickets.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent }, 
  { path: 'welcome', component: WelcomeComponent }, 
  { path: 'user/login', component: UserLoginComponent } ,
  { path: 'admin/login', component: AdminLoginComponent } ,
  {path: 'user/page', component: UserPageComponent},
  {path: 'admin/page', component: AdminPageComponent},
  {path: 'user/tickets', component: TicketsComponent},
  {path: 'user/new', component: NewUserComponent},
  {path: 'add/movie', component:AddMovieComponent},
  {path: 'add/admin', component:AddAdminComponent},
  {path: 'update/movie/:movieId',component:UpdateMovieComponent},
  {path: 'search/movie/:searchMovie',component:SearchMovieComponent}
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
