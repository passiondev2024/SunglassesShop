import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './home/home.component';
import { RouterOutlet } from '@angular/router';
import { SunglassesModule } from './sunglasses/sunglasses.module';
import { HttpClientModule } from '@angular/common/http';
import { SendMessageComponent } from './send-message/send-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SendMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    RouterOutlet,
    SunglassesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
