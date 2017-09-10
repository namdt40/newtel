import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { HeroesComponent }      from './components/heroes/heroes.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { HeroDetailComponent }  from './components/heroDetail/hero-detail.component';
import { ServiceDetailComponent } from './components/serviceDetail/service-detail.component';
import { ClinicDetailComponent } from './components/clinicDetail/clinic-detail.component';

import { HeroService }  from './services/hero.service';
import { ServiceService } from './services/service.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
      MaterialModule,
      BrowserAnimationsModule
    ],

  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    ServiceDetailComponent,
    ClinicDetailComponent
  ],
  providers: [
    HeroService,
      ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }