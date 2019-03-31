import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerModule } from './banner/banner.module';
import { IconboxModule } from './iconbox/iconbox.module';
import { ProcessbarModule } from './processbar/processbar.module';
import { LoaderModule } from './loader/loader.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BannerModule,
    IconboxModule,
    FooterModule,
    ProcessbarModule,
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
