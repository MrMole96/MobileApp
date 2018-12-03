import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { HttpClient } from '@angular/common/http';

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
    constructor(public http: HttpClient) {
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

        let data = JSON.parse(localStorage.getItem('loadedPath'));
        let numberPath = JSON.parse(localStorage.getItem('index'))
        let last = data[numberPath].array.length - 1;
        let start = data[numberPath].array[0];
        let end = data[numberPath].array[last];
        let path = "";
        for (let index = 0; index < data[numberPath].array.length; index++) {
            if (index != data[numberPath].array.length - 1) {
                path += data[numberPath].array[index].lng + ',' + data[numberPath].array[index].lat + ';';
            } else {
                path += data[numberPath].array[index].lng + ',' + data[numberPath].array[index].lat;
            }
            this.addMarker(data[numberPath].array[index]);
        }
        console.log('array path', path);
        var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + path + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
        this.http.get(directionsRequest).subscribe((data: any) => {
            var route = data.routes[0].geometry.coordinates;

            this.startLane = {
                id: 'start',
                type: 'circle',
                source: {
                    type: 'geojson',
                    data: {
                        type: 'Feature',
                        geometry: {
                            type: 'Point',
                            coordinates: start
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
                            coordinates: route
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
                            coordinates: end
                        }
                    }
                }
            }

            this.map.addLayer(this.pathLane);
            this.map.addLayer(this.startLane);
            this.map.addLayer(this.finishLane);
        })

        console.log(path);
    }
    addMarker(event) {
        let marker = new mapboxgl.Marker()
            .setLngLat([event.lng, event.lat])
            .addTo(this.map);
    }



}