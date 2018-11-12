import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-load',
    templateUrl: 'loadgame.html',

})
export class LoadGameComponent implements OnInit {

    loadedPath: mapboxgl.Marker[] = [];
    constructor(public navCtrl: NavController, public http: HttpClient) {
        this.getPath()
    }

    ngOnInit(): void { }

    getPath() {
        this.http.get('http://127.0.0.1:3456/').subscribe((x:any) => {
            console.log('X' ,x.example)
            this.loadedPath = x.example
            console.log(this.loadedPath)
        })
       
    }


}