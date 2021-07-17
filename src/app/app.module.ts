import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { PagesModule } from './pages/pages.module';
import { AuthModule } from './auth/auth.module';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, NoPageFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
