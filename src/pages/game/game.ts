import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
    selector: 'app-game',
    templateUrl: './game.html',

})
export class GameComponent implements OnInit {

    @ViewChild('map') mapContainer: ElementRef;
    map: mapboxgl.Map;
    lat = 37.75;
    lng = -122.41;
    name: string = "cos";
    distance: any;
    startLane: any;
    pathLane: any;
    finishLane: any;
    constructor() {
        Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1Ijoicmlja2NhcmRkZGQiLCJhIjoiY2puYWd4cTU3MGc3azNycDh3dnllNWNtZyJ9.MTH5zn5hLiXz9jBvGadOVQ');
    }

    ngOnInit(): void {
        this.buildMap();
    }
    buildMap() {

        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v10',
            zoom: 13,
            doubleClickZoom: false,
            center: [this.lng, this.lat]
        });


        this.loadData()
    }
     sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    async loadData() {

     await this.sleep(2000)

            let start = JSON.parse(localStorage.getItem('loadedPath'))
            let route = JSON.parse(localStorage.getItem('loadedPath'))
            let end = JSON.parse(localStorage.getItem('loadedPath'))
            console.log(start[0].start);
            console.log(route[0].route);
            console.log(end[0].end);
            this.startLane = {
                id: 'start',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: start[0].start
                        }
                    }
                }
            }
            this.pathLane = {
                id: 'route',
                type: 'line',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        geometry: {
                            type: 'LineString',
                            coordinates: route[0].route
                        }
                        
                    }
                },
                paint: {
                    'line-width': 3
                }
            }
            this.finishLane = {
                id: 'end',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: end[0].end
                        }
                    }
                }
            }
            
            this.map.addLayer(this.pathLane);
            this.map.addLayer(this.startLane);
            this.map.addLayer(this.finishLane);
     
    }
}