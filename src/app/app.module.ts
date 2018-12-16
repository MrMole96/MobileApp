import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MatListModule } from '@angular/material';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StartMenuComponent } from '../pages/startmenu/startMenu';
import { HttpClientModule} from '@angular/common/http';
import { LoadGameComponent } from '../pages/loadgame/loadgame';
import { GameComponent } from '../pages/game/game';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StartMenuComponent,
    GameComponent,
   LoadGameComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatListModule,
    MatInputModule,
    MatFormFieldModule,
    
    IonicModule.forRoot(MyApp),
  
 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StartMenuComponent,
    GameComponent,
    LoadGameComponent

  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpClientModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
