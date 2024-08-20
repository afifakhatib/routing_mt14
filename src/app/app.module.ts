import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { HomeComponent } from './shared/components/home/home.component';
import { UserDashboardComponent } from './shared/components/user-dashboard/user-dashboard.component';
import { ProdDashboardComponent } from './shared/components/prod-dashboard/prod-dashboard.component';
import { FairDashboardComponent } from './shared/components/fair-dashboard/fair-dashboard.component';
import { DialogBoxComponent } from './shared/components/dialog-box/dialog-box.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { FairCardComponent } from './shared/components/fair-dashboard/fair-card/fair-card.component';
import { FairDetailsComponent } from './shared/components/fair-dashboard/fair-details/fair-details.component';
import { ProdInfoComponent } from './shared/components/prod-dashboard/prod-info/prod-info.component';
import { ProdFormComponent } from './shared/components/prod-dashboard/prod-form/prod-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material/material.module';
import { UserFormComponent } from './shared/components/user-dashboard/user-form/user-form.component';
import { UserInfoComponent } from './shared/components/user-dashboard/user-info/user-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthComponent,
    HomeComponent,
    UserDashboardComponent,
    ProdDashboardComponent,
    FairDashboardComponent,
    DialogBoxComponent,
    PageNotFoundComponent,
    FairCardComponent,
    FairDetailsComponent,
    ProdInfoComponent,
    ProdFormComponent,
    UserFormComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
