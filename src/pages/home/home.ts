import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import L from 'leaflet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  openmap: any;
  map: any;
  FirstPosition: any;
  SecondPosition: any;
  PathArray: any[];
  polyline: any;
  distanceInt: number = 0;
  distanceString: string = "0";
  constructor(public navCtrl: NavController, public http: HttpClient) {

  }
  ionViewDidEnter() {
    this.loadmap();

  }
  loadmap() {
    this.openmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 30
    });
    this.map = L.map('map').setView([51.505, -0.09], 13).addLayer(this.openmap);
    this.map.locate({
      setView: true,
      maxZoom: 10
    }).on('locationfound', (e) => {
      let radius = e.accuracy / 2;
      let marker = L.marker([e.latitude, e.longitude]).addTo(this.map)
        .bindPopup('Jestes w okolicy ' + radius + ' metrow od tego punktu').openPopup();
      L.circle(e.latlng, radius).addTo(this.map);
      console.log('Jestes teraz tutaj');
      this.polyline = new L.Polyline([]).addTo(this.map);
    })
    this.map.on('click', this.AddMarker.bind(this));
    //this.openmap.on('click', this.onMapClick);
  }
  AddMarker(e) {
    this.FirstPosition = [e.latlng.lat, e.latlng.lng];
    console.log(this.FirstPosition);
    let marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(this.map);
    this.AddLineOfPath(e);


  }
  AddLineOfPath(e) {
    this.polyline.addLatLng(e.latlng);
    let markerPosition = this.polyline.getLatLngs()
    let lenght = markerPosition.length;
    console.log(markerPosition.length);//lenght of array with markers position
    console.log(markerPosition);
    // console.log(cos[0].lat);
    if (markerPosition.length != 1) {
      console.log(markerPosition[lenght - 2].lat);
      console.log(markerPosition[lenght - 1].lat);
      this.distanceInt += this.GetDistanceOfTwoLastMarkers(
        markerPosition[lenght - 2].lat, markerPosition[lenght - 2].lng,
        markerPosition[lenght - 1].lat, markerPosition[lenght - 1].lng)
      this.distanceString = (this.distanceInt).toFixed(2);
      //console.log(this.distance);
    }

  }
  GetDistanceOfTwoLastMarkers(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2 - lon1);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km

    return d;
  }
  deg2rad(deg) {
    return deg * (Math.PI / 180)
  }


  SendPath() {
    this.http.post('http://127.0.0.1:3456/', {
      info: 'sent request',
      totalDistance: this.distanceString

    }, { responseType: 'text' }).subscribe(res => {
      console.log(JSON.stringify(res));
    });

  }
  BackToStart() {
    this.navCtrl.pop();
  }



}
