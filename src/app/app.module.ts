import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { ProgressComponent } from './pages/progress/progress.component';
import { PagesComponent } from './pages/pages.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NotfoundComponent,
    DashboardComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    ProgressComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
