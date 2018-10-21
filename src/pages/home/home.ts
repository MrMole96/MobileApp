import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import leaflet from 'leaflet';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  marker: any;

  position: any;

  constructor(public navCtrl: NavController) {

  }
  ionViewDidEnter() {
    this.loadmap();
 
  }
  loadmap() {
    this.map = leaflet.map('map').setView([51.505, -0.09], 13);
    leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 30,
      id: 'mapbox.streets',
      accessToken: 'pk.eyJ1Ijoicmlja2NhcmRkZGQiLCJhIjoiY2puYWd5YmFjMHhpOTNrcDY0c3p4eGs3dyJ9.2QR4wWu81nM2RjFw94OhNg'
    }).addTo(this.map);
  this.map.locate({
    setView: true,
    maxZoom: 10
  }).on('locationfound', (e) =>{
    let radius = e.accuracy / 2;
    this.marker = leaflet.marker([e.latitude, e.longitude]).addTo(this.map)
    .bindPopup('Jestes w okolicy '+ radius + ' metrow od tego punktu').openPopup();
    leaflet.circle(e.latlng, radius).addTo(this.map);
    console.log('Jestes teraz tutaj');
  })

  
  }
  
 

}
