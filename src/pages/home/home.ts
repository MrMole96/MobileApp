import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController) {

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
AddLineOfPath(e){
  this.polyline.addLatLng(e.latlng);
}
  BackToStart() {
    this.navCtrl.pop();
  }



}
