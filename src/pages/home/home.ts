import { Component, ElementRef, ViewChild, OnInit, Injectable, Input } from '@angular/core';
import { NavController, Config } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js';
import { LatLng } from 'leaflet';
import { HtmlParser } from '@angular/compiler';
import * as $ from 'jquery';
// interface markersType
// {
//   lng: number,
//   lat: number
// }
@Component({
  selector: 'page-home',
  templateUrl: './home.html',
})
@Injectable()
@Input()
export class HomePage implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  index = 0;
  distance: number;
  marker: mapboxgl.Marker;
  lat = 37.75;
  lng = -122.41;
  markersPath: mapboxgl.Marker[] = []
  gameName: any;
  startLane: any;
  pathLane: any;
  finishLane: any;
  directions = new MapboxDirections({
    accessToken: 'pk.eyJ1Ijoicmlja2NhcmRkZGQiLCJhIjoiY2puYWd4cTU3MGc3azNycDh3dnllNWNtZyJ9.MTH5zn5hLiXz9jBvGadOVQ',
    unit: 'metric',
    profile: 'mapbox/walking',
    controls: ({
      inputs: false,
      instructions: false,
    })
  });
  geocoder = new MapboxGeocoder({
    accessToken: 'pk.eyJ1Ijoicmlja2NhcmRkZGQiLCJhIjoiY2puYWd4cTU3MGc3azNycDh3dnllNWNtZyJ9.MTH5zn5hLiXz9jBvGadOVQ'
  });


  buttonsArray: Array<any> = [];
  questsArray: Array<any> = [];
  counter = 0
  constructor(public navCtrl: NavController, public http: HttpClient) {
    //mapboxgl.accessToken = 'pk.eyJ1Ijoicmlja2NhcmRkZGQiLCJhIjoiY2puYWd4cTU3MGc3azNycDh3dnllNWNtZyJ9.MTH5zn5hLiXz9jBvGadOVQ'
    Object.getOwnPropertyDescriptor(mapboxgl, "accessToken").set('pk.eyJ1Ijoicmlja2NhcmRkZGQiLCJhIjoiY2puYWd4cTU3MGc3azNycDh3dnllNWNtZyJ9.MTH5zn5hLiXz9jBvGadOVQ');
   

  }

  ngOnInit() {
    // this.markers = this.mapService.getMarkers()
    this.initializeMap()
  }

  private initializeMap() {
    /// locate the usern
    this.buildMap()
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(position => {
    //     this.lat = position.coords.latitude;
    //     this.lng = position.coords.longitude;
    //     this.map.flyTo({
    //       center: [this.lng, this.lat]
    //     })
    //   });
    // }



  }

  buildMap() {

    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/outdoors-v10',
      zoom: 13,
      doubleClickZoom: false,
      center: [this.lng, this.lat]
    });
    var nav = new mapboxgl.NavigationControl();
    // this.map.addControl(nav, 'top-left');
    // this.map.on('click', (event) => {
    //   //event.preventDefault();
    //   //const coordinates = [event.lngLat.lng, event.lngLat.lat];
    //   console.log(event);
    //   this.index++;
    //   this.directions.addWaypoint(this.index, [event.lngLat.lng, event.lngLat.lat]);
    //   this.addMarker(event);
    //   console.log(this.directions.getWaypoints());
    // })

    this.map.on('click', this.addMarker.bind(this));
    //this.getRoute();
    //this.map.on('load', this.getRoute.bind(this));
    //this.map.addControl(this.directions, 'top-left');
    this.map.addControl(this.geocoder);
    // this.map.on('load', this.updateGeocoderProximity.bind(this)); // set proximity on map load
    //this.map.on('moveend', this.updateGeocoderProximity.bind(this)); // and then update proximity each time the map moves

  }
  createPopUp(event: any) {
    var div = document.createElement('div')
    div.setAttribute("id", 'marker');
    var title = document.createElement('h2');
    title.textContent = 'Punkt';
    var div2 = document.createElement('div');
    div2.setAttribute("id", "task")

    var quest = document.createElement('input')
    var answerA = document.createElement('input')
    var answerB = document.createElement('input')
    var answerC = document.createElement('input')
    quest.setAttribute('id', 'quest');
    quest.placeholder = 'zadanie';
    answerA.setAttribute('id', 'answerA')
    answerB.setAttribute('id', 'answerB')
    answerC.setAttribute('id', 'answerC')
    answerA.placeholder = 'odpowiedz A';
    answerB.placeholder = 'odpowiedz B';
    answerC.placeholder = 'odpowiedz C';

    var button1 = document.createElement('button');
    button1.setAttribute('ion-button', '');
    button1.textContent = 'Zatwierdz';

    var radio1 = document.createElement('input');
    var radio2 = document.createElement('input');
    var radio3 = document.createElement('input');


    radio1.setAttribute('type', 'checkbox');
    radio1.setAttribute('name', 'answer');
    radio1.setAttribute('id', 'checkboxA');

    radio2.setAttribute('type', 'checkbox');
    radio2.setAttribute('name', 'answer');
    radio2.setAttribute('id', 'checkboxB');

    radio3.setAttribute('type', 'checkbox');
    radio3.setAttribute('name', 'answer');
    radio3.setAttribute('id', 'checkboxC');

    var button2 = document.createElement('button')
    button2.setAttribute("id", this.counter.toString())
    button2.textContent = 'kasuj ' + this.counter.toString()





    div.appendChild(title);
    div.appendChild(div2);


    div2.appendChild(quest);

    div2.appendChild(answerA);
    div2.appendChild(radio1);
    div2.appendChild(answerB);
    div2.appendChild(radio2);
    div2.appendChild(answerC);
    div2.appendChild(radio3);

    div2.appendChild(button1);


    div2.appendChild(button2);

   
    let popup = new mapboxgl.Popup({ offset: 25 })
      .setDOMContent(div) // add popups
    this.marker = new mapboxgl.Marker({ draggable: true })
      .setLngLat([event.lngLat.lng, event.lngLat.lat])
      .setPopup(popup)
      .addTo(this.map);
    this.delete(button2);
    //wartosci z inputow sa w divie, zrobic funkcje ktora bedzie przechowywac te wartosci
    this.buttonsArray.push(button2);
    this.questsArray.push(div2.childNodes);
    this.markersPath.push(this.marker);
    this.counter = this.markersPath.length

   
  }
  addMarker(event: any) {
    //if (event.originalEvent.composedPath().length != 13) {


    if (event.originalEvent.composedPath().length != 13) {
      return false;
    }
    this.createPopUp(event);
    this.marker.on('dragend', this.onDragEnd.bind(this));
    this.getRoute();
  
  }
  delete(button) {
    button.addEventListener('click', (e) => {


      var targetButton = e.target || e.srcElement || e.currentTarget;
      var idAttr = targetButton.attributes.id;
      var value = idAttr.nodeValue;

      //fakemarker = this.markersPath.find(x=>x.getLngLat().lat==event.lngLat.lat)
      let index = this.buttonsArray.indexOf(targetButton)
      this.markersPath[index].remove();
      this.buttonsArray.splice(index, 1);
      this.markersPath.splice(index, 1);

      this.getRoute();
    })
  }


  onDragEnd() {

    var lngLat = this.marker.getLngLat();
    console.log(this.questsArray);
    this.getRoute();
  }
  getRoute() {

    var start = [this.markersPath[0].getLngLat().lng, this.markersPath[0].getLngLat().lat];
    var end = [this.markersPath[this.markersPath.length - 1].getLngLat().lng, this.markersPath[this.markersPath.length - 1].getLngLat().lat];
    //this.markersPath[0].lng + ',' + this.markersPath[0].lat +
    // console.log(this.markersPath[0]);
    // console.log('dlugosc start' + start.length);
    // console.log('dlugosc end' + end.length);
    let element = "";
    for (let index = 0; index < this.markersPath.length; index++) {
      if (index != this.markersPath.length - 1) {
        element += this.markersPath[index].getLngLat().lng + ',' + this.markersPath[index].getLngLat().lat + ';';
      } else {
        element += this.markersPath[index].getLngLat().lng + ',' + this.markersPath[index].getLngLat().lat;
      }

      // console.log('element array  :' + element);
    }
    if (start[0] == end[0]) {

      return false;
    }

    if (this.map.getLayer('route') != null) {
      this.map.removeLayer('start');
      this.map.removeLayer('end');
      this.map.removeLayer('route');
      this.map.removeSource('start');
      this.map.removeSource('end');
      this.map.removeSource('route');
    }

    //start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1]
    var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + element + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
    this.http.get(directionsRequest).subscribe((data: any) => {
      var route = data.routes[0].geometry;
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
            geometry: route
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

      this.distance = data.routes[0].distance;
    })
  }

  updateGeocoderProximity() {
    // proximity is designed for local scale, if the user is looking at the whole world,
    // it doesn't make sense to factor in the arbitrary centre of the map
    if (this.map.getZoom() > 9) {
      var center = this.map.getCenter().wrap(); // ensures the longitude falls within -180 to 180 as the Geocoding API doesn't accept values outside this range
      this.geocoder.setProximity({ longitude: center.lng, latitude: center.lat });
    } else {
      this.geocoder.setProximity(null);
    }
  }
  BackToStart() {
    this.navCtrl.pop();
  }
  RemoveNav() {
    this.directions.onRemove(this.map);
  }
  ClearMap() {
    //this.directions.removeRoutes();
    this.map.removeLayer('start');
    this.map.removeLayer('route');
    this.map.removeLayer('end');
    this.map.removeSource('start');
    this.map.removeSource('route');
    this.map.removeSource('end');

    this.markersPath.map(x => x.remove());
    this.markersPath = [];
    this.buttonsArray = [];
    this.questsArray = [];
  }
  changeTextColor() {
    $('#myButton').text('white');
  }

  SendPath() {
    console.log(this.questsArray);
    console.log(this.questsArray[0].input)
let tasks = Array<Task>();
this.questsArray.forEach(element => {
  tasks.push(new Task(element[0].value,element[1].value,element[2].checked,element[3].value,element[4].checked,element[5].value,element[6].checked)) ;
});
console.log(tasks);
    this.http.post('http://127.0.0.1:3456/', {
      info: 'sent request',
      Tasks: tasks,
      totalDistance: this.distance,
      gameName: this.gameName,
      MarkersPath: this.markersPath.map(x => x.getLngLat())
    }, { responseType: 'text' }).subscribe(res => {
      console.log(JSON.stringify(res));
    });



  }

}
class Task{
  quest: string;
  answerA: string;
  answerB: string;
  answerC: string;
  checkboxA: boolean;
  checkboxB: boolean;
  checkboxC: boolean;
  /**
   *
   */
  constructor(quest,answerA,checkboxA,answerB,checkboxB,answerC,checkboxC) {
    this.quest = quest;
    this.answerA = answerA;
    this.answerB = answerB;
    this.answerC = answerC;
    this.checkboxA = checkboxA;
    this.checkboxB = checkboxB;
    this.checkboxC = checkboxC;
    
  }
}

