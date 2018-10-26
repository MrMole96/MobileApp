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
  distanceInt: number = 0;
  distanceString: string = "0";
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
  AddLineOfPath(e) {
    this.polyline.addLatLng(e.latlng);
    let cos = this.polyline.getLatLngs()
    let i = cos.length;
    console.log(cos.length);//lenght of array with markers position
    console.log(cos);
   // console.log(cos[0].lat);
    if (cos.length != 1) {
      console.log(cos[i-2].lat);
      console.log(cos[i-1].lat);
      this.distanceInt += this.GetDistanceOfTwoLastMarkers(cos[i - 2].lat, cos[i - 2].lng, cos[i-1].lat, cos[i-1].lng)
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

  BackToStart() {
    this.navCtrl.pop();
  }



}
