import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StartMenuComponent } from '../pages/startmenu/startMenu';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StartMenuComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StartMenuComponent,
  

  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
