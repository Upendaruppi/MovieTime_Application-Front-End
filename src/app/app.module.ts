import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserPageComponent} from './user-page/user-page.component'
import { HttpClientModule } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';
import { TicketsComponent } from './tickets/tickets.component';
import { NewUserComponent } from './new-user/new-user.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { AddAdminComponent } from './add-admin/add-admin.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { SearchMovieComponent } from './search-movie/search-movie.component'; 

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    UserLoginComponent,
    UserPageComponent,
    TicketsComponent,
    NewUserComponent,
    AdminLoginComponent,
    AdminPageComponent,
    AddMovieComponent,
    AddAdminComponent,
    UpdateMovieComponent,
    SearchMovieComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
