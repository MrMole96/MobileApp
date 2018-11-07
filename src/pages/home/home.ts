import { Component, ElementRef, ViewChild, OnInit, Injectable } from '@angular/core';
import { NavController, Config } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.min.js';
import { LatLng } from 'leaflet';

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
export class HomePage implements OnInit {
  @ViewChild('map') mapContainer: ElementRef;
  map: any;
  index = 0;
  distance: number;
  marker: mapboxgl.Marker;
  lat = 37.75;
  lng = -122.41;
  markersPath: mapboxgl.Marker[] = []
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



    // this.getRoute();
    //this.map.on('load', this.getRoute.bind(this));
    //this.map.addControl(this.directions, 'top-left');




    this.map.addControl(this.geocoder);
    // this.map.on('load', this.updateGeocoderProximity.bind(this)); // set proximity on map load
    //this.map.on('moveend', this.updateGeocoderProximity.bind(this)); // and then update proximity each time the map moves

  }
  addMarker(event: mapboxgl.MapMouseEvent) {
    //console.log(event.originalEvent.composedPath());
    if (event.originalEvent.composedPath().length != 13) {
      console.log(event);
      console.log('event stop')
      // console.log(this.directions.getWaypoints());
      // let arrayPoints = this.directions.getWaypoints();
      // let coordinates = arrayPoints[arrayPoints.length-1].geometry.coordinates;

      // console.log(coordinates);
      // this.directions.on('route', function(){
      //   console.log('event route');
      // })
      return false;
    }

    this.marker = new mapboxgl.Marker({
      draggable: true
    })
      .setLngLat([event.lngLat.lng, event.lngLat.lat])
      .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
        .setHTML('<h3>' + 'test' + '</h3><p>' + '<input/>' + '</p>'))
      .addTo(this.map);
    this.markersPath.push(this.marker);

    console.log(this.marker);
    console.log(this.marker.getLngLat().lng);
    this.getRoute();


    this.directions.addWaypoint(this.index, [event.lngLat.lng, event.lngLat.lat]);
    this.index++;
    console.log(this.directions.getWaypoints());
    // console.log( this.markersPath);
    console.log('event start')
    this.marker.on('dragend', this.onDragEnd.bind(this));
  }
  onDragEnd() {
    var lngLat = this.marker.getLngLat();
    //console.log(lngLat);
  }
  getRoute() {
    var start = [this.markersPath[0].getLngLat().lng, this.markersPath[0].getLngLat().lat];
    var end = [this.markersPath[this.markersPath.length - 1].getLngLat().lng, this.markersPath[this.markersPath.length - 1].getLngLat().lat];
    //this.markersPath[0].lng + ',' + this.markersPath[0].lat +
    console.log(this.markersPath);
    console.log('dlugosc start' + start.length);
    console.log('dlugosc end' + end.length);
    let element = "";
    for (let index = 0; index < this.markersPath.length; index++) {
      if (index != this.markersPath.length - 1) {
        element += this.markersPath[index].getLngLat().lng + ',' + this.markersPath[index].getLngLat().lat + ';';
      } else {
        element += this.markersPath[index].getLngLat().lng + ',' + this.markersPath[index].getLngLat().lat;
      }

      console.log('element array  :' + element);
    }
    if (start[0] == end[0]) {

      return false;
    }

    if (this.map.getLayer('route') != null) {
      this.map.removeLayer('route');
      this.map.removeLayer('end');
      this.map.removeSource('route');
      this.map.removeSource('end');
    }

    //start[0] + ',' + start[1] + ';' + end[0] + ',' + end[1]
    var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + element + '?geometries=geojson&access_token=' + mapboxgl.accessToken;
    this.http.get(directionsRequest).subscribe((data: any) => {
      var route = data.routes[0].geometry;
      this.map.addLayer({
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
      });
      // this is where the code from the next step will go
      this.map.addLayer({
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
      });
      this.map.addLayer({
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
      });
      this.distance = data.routes[0].distance;
      // this is where the JavaScript from the next step will go
      console.log("dystans " + data.routes[0].distance);
    })
    // this.directions.setOrigin(start); 
    // this.directions.addWaypoint(0, [-84.4974, 39.132070]);
    // this.directions.addWaypoint(1, [-84.508641, 39.1090]);
    // this.directions.setDestination(end); 
    //console.log(this.directions.getWaypoints());
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
    console.log('aa');
  }
  SendPath() {
    console.log('wysylanie');
    this.http.post('http://127.0.0.1:3456/', {
      info: 'sent request',
      totalDistance: this.distance,
      MarkersPath: this.markersPath.map(x=>x.getLngLat())
    }, { responseType: 'text' }).subscribe(res => {
      console.log(JSON.stringify(res));
    });



  }
}
