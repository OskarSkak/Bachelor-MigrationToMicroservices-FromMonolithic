import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { PostsComponent } from './modules/posts/posts.component';

import { PriceCalendarComponent } from './modules/price-calendar/price-calendar.component';
import { ItemsComponent } from './modules/items/items.component';
import { SignalRComponent } from './modules/signalR/signalR.component';
import { SilentRefreshComponent } from './silent-refresh/silent-refresh.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth/auth-guard.service';
import { AppstartComponent } from './appstart/appstart.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { PasswordComponent } from './modules/profile/password/password.component';
import { EmailComponent } from './modules/profile/email/email.component';
import { DetailProfileComponent } from './modules/profile/detail-profile/detail-profile.component';
import { CreateUserComponent } from './modules/profile/create-user/create-user.component';
import { UsersComponent } from './modules/profile/users/users.component';
import { CustomerComponent } from './modules/Customer/Customer.component';
import { DetailCustomerComponent } from './modules/Customer/detail-customer/detail-customer.component';
import { CreateCustomerComponent } from './modules/Customer/create-customer/create-customer.component';
import { BookingComponent } from './modules/Booking/Booking.component';
import { BookingsComponent } from './modules/Booking/bookings/bookings.component';
import { DetailBookingComponent } from './modules/Booking/bookings/detail-booking/detail-booking.component';



const routes: Routes = [{
  path: 'app',
  component: DefaultComponent,
  canActivate: [AuthGuard],
  children: [
    {
      path: 'dashboard',
    component: DashboardComponent
    },
  {
    path: 'pricecalendar',
  component: PriceCalendarComponent
  },
  {
    path: 'items',
    component: ItemsComponent
  },
  {
    path: 'book',
    component: BookingComponent
  },
  {
    path: 'bookings',
    component: BookingsComponent
  },
  {
    path: 'bookings/:id' ,
   component: DetailBookingComponent},
  {
    path: 'customers',
    component: CustomerComponent
  }, 
  {
    path: 'customers/:id',
    component: DetailCustomerComponent
  }, 
  {
    path: 'customer/new',
    component: CreateCustomerComponent
  }, 
  {
    path: 'profile',
    component: ProfileComponent,
    children: 
    [
      {
      path: 'detail',
      component: DetailProfileComponent
      },
      {
        path: 'password',
        component: PasswordComponent
      },
    
      {
        path: 'email',
        component: EmailComponent
      },
      {
        path: 'create',
        component: CreateUserComponent
      },
      {
        path: 'users',
        component: UsersComponent
      }
    ]
  },
  {
    path: 'signal',
    component: SignalRComponent
  },
  { path: '**', redirectTo: '' },
]
},
{
  path: '',
  pathMatch: 'full',
  component: HomeComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
