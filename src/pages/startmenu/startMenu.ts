import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { LoadGameComponent } from '../loadgame/loadgame';
import { HomePage } from '../home/home';


@Component({
    selector: 'app-start',
    templateUrl: 'startMenu.html',
    
})
export class StartMenuComponent implements OnInit {
    constructor(public navCtrl: NavController) { }

    ngOnInit(): void { }


    GoToCreateGame(){
        this.navCtrl.push(HomePage);
    }
    
    GoToLoadGame(){
        this.navCtrl.push(LoadGameComponent);
    }
    
}
