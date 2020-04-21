import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDividerModule} from '@angular/material/divider';
import { SidenavService } from 'src/app/services/sidenav.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';
import { PriceCalendarComponent } from 'src/app/modules/price-calendar/price-calendar.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import { ItemsComponent } from 'src/app/modules/items/items.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateItemComponent } from 'src/app/modules/items/create-item/create-item.component';
import { FormsModule } from '@angular/forms';
import { EditItemComponent } from 'src/app/modules/items/edit-item/edit-item.component';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    PriceCalendarComponent,
    ItemsComponent,
    CreateItemComponent,
    EditItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatNativeDateModule ,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatButtonModule,
    AgGridModule.withComponents([])
  ],
  providers: [ SidenavService],
})
export class DefaultModule { }
