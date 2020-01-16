import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { TimeZoneService } from './services/time-zone.service';
import { AddNewZoneComponent } from './components/AddNewZone/add-new-zone.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZoneListComponent } from './components/ZoneList/zone-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EditZoneComponent } from './components/EditZone/edit-zone.component';
import { ZoneManageComponent } from './components/ZoneManage/zone-manage.component';





@NgModule({
  declarations: [
    AppComponent,
    AddNewZoneComponent,
    ZoneListComponent,
    EditZoneComponent,
    ZoneManageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [TimeZoneService],
  bootstrap: [AppComponent]
})
export class AppModule { }
