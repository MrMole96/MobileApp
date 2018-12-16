import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HttpClient } from '@angular/common/http';
import { GameComponent } from '../game/game';

class Path {
    distance: number = 0
    name: string = ""
    start: any[] = []
    route: any[] = []
    end: any[] = []

    /**
     *
     */
    constructor(distance, name, start, route,end) {
        this.distance = distance,
            this.name = name,
            this.start = start
            this.route = route
            this.end = end
    }
}
@Component({
    selector: 'app-load',
    templateUrl: 'loadgame.html',

})

export class LoadGameComponent implements OnInit {
    start: any[] = [-122.41798225403234, 37.748303344788994]
    route: any[] = [[-122.417936, 37.748297],
    [-122.417943, 37.748218],
    [-122.411714, 37.74835],
    [-122.411509, 37.748355],
    [-122.412057, 37.754067]]
    end: any[] = [-122.41197410584037, 37.75407181379808]
    loadedPath: any[] = [];
    information: string;
    constructor(public navCtrl: NavController, public http: HttpClient) {
        this.getPath()
    }

    ngOnInit(): void {

    }

    getPath() {

        this.http.get('http://127.0.0.1:3456/').subscribe(
            (x: any) => {
                this.loadedPath = x.example
                console.log(this.loadedPath)

                localStorage.setItem("loadedPath", JSON.stringify(this.loadedPath));
                console.log('json parser local online', JSON.parse(localStorage.getItem('loadedPath')));
            },
            error => {
                this.loadedPath.push(new Path(1212, 'offlineGame',this.start,this.route,this.end))
                this.information = 'brak internetu'
                localStorage.setItem("loadedPath", JSON.stringify(this.loadedPath));
                console.log('json parser local offiline', JSON.parse(localStorage.getItem('loadedPath')));
            }

        );



    }
    loadPath(i) {
        console.log('index ' + i)
        localStorage.setItem('index', i);
        this.navCtrl.push(GameComponent);
    }


}