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


    data = JSON.parse(localStorage.getItem('loadedPath'));
    numberPath = JSON.parse(localStorage.getItem('index'))
    index = 0;
    counter = 0;
    buttonsArray: Array<any> = [];
    uniqueArray: Array<any> = [];
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

        let pathArray = [];



        let last = pathArray.length - 1;
        let start = pathArray[0];
        let end = pathArray[last];
        let path = "";
        //this.addMarker(this.data[this.numberPath].array[index]);
        for (let index = 0; index <= this.counter; index++) {


            pathArray.push(this.data[this.numberPath].array[index]);
            console.log('index ', index)

            console.log(pathArray)

            if (index == pathArray.length || index == 0) {
                path += pathArray[index].lng + ',' + pathArray[index].lat;
            } else if (index != pathArray.length) {
                path += ';' + pathArray[index].lng + ',' + pathArray[index].lat;
            }
            console.log('path ', path)
            if (this.counter == index) {
                this.addMarker(pathArray[index]);
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
                    if (this.map.getLayer('route') != null) {
                        this.map.removeLayer('start');
                        this.map.removeLayer('end');
                        this.map.removeLayer('route');
                        this.map.removeSource('start');
                        this.map.removeSource('end');
                        this.map.removeSource('route');
                    }
                    this.map.addLayer(this.pathLane);
                    this.map.addLayer(this.startLane);
                    this.map.addLayer(this.finishLane);
                })
            }

        }
    }
    addMarker(event) {
        var div = document.createElement('div')
        div.setAttribute("id", 'marker');
        var quest = document.createElement('h4')
        var answerA = document.createElement('input')
        var answerB = document.createElement('input')
        var answerC = document.createElement('input')

        var labelA = document.createElement('label')
        var labelB = document.createElement('label')
        var labelC = document.createElement('label')

        labelA.setAttribute('for', 'checkboxA')
        labelB.setAttribute('for', 'checkboxB')
        labelC.setAttribute('for', 'checkboxC')

        answerA.setAttribute('type', 'checkbox');
        answerA.setAttribute('name', 'checkboxA');
        answerA.setAttribute('id', 'checkboxA');

        answerB.setAttribute('type', 'checkbox');
        answerB.setAttribute('name', 'checkboxB');
        answerB.setAttribute('id', 'checkboxB');

        answerC.setAttribute('type', 'checkbox');
        answerC.setAttribute('name', 'checkboxC');
        answerC.setAttribute('id', 'checkboxC');



        var button = document.createElement('button');
        button.setAttribute('id', this.counter.toString());
        button.textContent = 'Zatwierdz';
        //
        quest.textContent = "to jest test"
        labelA.textContent = 'test'
        ///
        div.appendChild(quest);
        div.appendChild(answerA);
        div.appendChild(labelA);
        div.appendChild(answerB);
        div.appendChild(labelB);
        div.appendChild(answerC);
        div.appendChild(labelC);
        div.appendChild(button);

        let task = this.data[this.numberPath].tasks[this.index]
        quest.textContent = task.quest;
        //answerA.checked = task.checkboxA;
        labelA.textContent = task.answerA;
        //answerB.textContent = task.checkboxB;
        labelB.textContent = task.answerB;
        //answerC.textContent = task.checkboxC;
        labelC.textContent = task.answerC;

        let popup = new mapboxgl.Popup({ offset: 25 })
            .setDOMContent(div) // add popups
        let marker = new mapboxgl.Marker()
            .setLngLat([event.lng, event.lat])
            .setPopup(popup)
            .addTo(this.map);
        this.accept(button);


    }
    accept(button) {
        button.addEventListener('click', (e) => {
            if (this.buttonsArray.indexOf(button.id) == -1) {
                this.buttonsArray.push(button.id);
                //zrobic zabezpieczenie zeby nie wykraczac poza index tablicy na ostanim punkcie
                console.log('button ', button.id);

                if(this.counter != this.data[this.numberPath].array.length -1 ){
                    this.index++;
                    this.counter++;
    
                    this.loadData();
                }
             
            }
        })
    }
}