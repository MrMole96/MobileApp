webpackJsonp([0],{

/***/ 145:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 145;

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loadgame_loadgame__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartMenuComponent = /** @class */ (function () {
    function StartMenuComponent(navCtrl) {
        this.navCtrl = navCtrl;
    }
    StartMenuComponent.prototype.ngOnInit = function () { };
    StartMenuComponent.prototype.GoToCreateGame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    StartMenuComponent.prototype.GoToLoadGame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__loadgame_loadgame__["a" /* LoadGameComponent */]);
    };
    StartMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-start',template:/*ion-inline-start:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\pages\startmenu\startMenu.html"*/'<div class="container">\n    <button (click)="GoToCreateGame()" ion-button icon-start>\n        <ion-icon name=\'home\' ></ion-icon>\n        Stworz gre\n      </button>\n      <button (click)="GoToLoadGame()" ion-button outline icon-start>\n        <ion-icon name=\'briefcase\' is-active="false"></ion-icon>\n        Wczytaj gre\n      </button>\n</div>'/*ion-inline-end:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\pages\startmenu\startMenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], StartMenuComponent);
    return StartMenuComponent;
}());

//# sourceMappingURL=startMenu.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadGameComponent = /** @class */ (function () {
    function LoadGameComponent(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.loadedPath = [];
        this.getPath();
    }
    LoadGameComponent.prototype.ngOnInit = function () { };
    LoadGameComponent.prototype.getPath = function () {
        var _this = this;
        this.http.get('http://127.0.0.1:3456/').subscribe(function (x) {
            console.log('X', x.example);
            _this.loadedPath = x.example;
            console.log(_this.loadedPath);
        });
    };
    LoadGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-load',template:/*ion-inline-start:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\pages\loadgame\loadgame.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Wczytaj gre</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <mat-list>\n\n    <mat-list-item> Pepper </mat-list-item>\n\n    <mat-list-item> Salt </mat-list-item>\n\n    <mat-list-item> Paprika </mat-list-item>\n\n  </mat-list>\n\n<mat-list *ngFor="let path of loadedPath">\n\n<mat-list-item >{{path.distance}}</mat-list-item>\n\n<mat-list-item >{{path.name}}</mat-list-item>\n\n</mat-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\pages\loadgame\loadgame.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LoadGameComponent);
    return LoadGameComponent;
}());

//# sourceMappingURL=loadgame.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mapbox_gl__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapbox_mapbox_gl_directions_dist_mapbox_gl_directions__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapbox_mapbox_gl_directions_dist_mapbox_gl_directions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__mapbox_mapbox_gl_directions_dist_mapbox_gl_directions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mapbox_mapbox_gl_geocoder_dist_mapbox_gl_geocoder_min_js__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mapbox_mapbox_gl_geocoder_dist_mapbox_gl_geocoder_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__mapbox_mapbox_gl_geocoder_dist_mapbox_gl_geocoder_min_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// interface markersType
// {
//   lng: number,
//   lat: number
// }
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.index = 0;
        this.lat = 37.75;
        this.lng = -122.41;
        this.markersPath = [];
        this.directions = new __WEBPACK_IMPORTED_MODULE_4__mapbox_mapbox_gl_directions_dist_mapbox_gl_directions__({
            accessToken: 'pk.eyJ1Ijoicmlja2NhcmRkZGQiLCJhIjoiY2puYWd4cTU3MGc3azNycDh3dnllNWNtZyJ9.MTH5zn5hLiXz9jBvGadOVQ',
            unit: 'metric',
            profile: 'mapbox/walking',
            controls: ({
                inputs: false,
                instructions: false,
            })
        });
        this.geocoder = new __WEBPACK_IMPORTED_MODULE_5__mapbox_mapbox_gl_geocoder_dist_mapbox_gl_geocoder_min_js__({
            accessToken: 'pk.eyJ1Ijoicmlja2NhcmRkZGQiLCJhIjoiY2puYWd4cTU3MGc3azNycDh3dnllNWNtZyJ9.MTH5zn5hLiXz9jBvGadOVQ'
        });
        //mapboxgl.accessToken = 'pk.eyJ1Ijoicmlja2NhcmRkZGQiLCJhIjoiY2puYWd4cTU3MGc3azNycDh3dnllNWNtZyJ9.MTH5zn5hLiXz9jBvGadOVQ'
        Object.getOwnPropertyDescriptor(__WEBPACK_IMPORTED_MODULE_3_mapbox_gl__, "accessToken").set('pk.eyJ1Ijoicmlja2NhcmRkZGQiLCJhIjoiY2puYWd4cTU3MGc3azNycDh3dnllNWNtZyJ9.MTH5zn5hLiXz9jBvGadOVQ');
    }
    HomePage.prototype.ngOnInit = function () {
        // this.markers = this.mapService.getMarkers()
        this.initializeMap();
    };
    HomePage.prototype.initializeMap = function () {
        /// locate the usern
        this.buildMap();
        // if (navigator.geolocation) {
        //   navigator.geolocation.getCurrentPosition(position => {
        //     this.lat = position.coords.latitude;
        //     this.lng = position.coords.longitude;
        //     this.map.flyTo({
        //       center: [this.lng, this.lat]
        //     })
        //   });
        // }
    };
    HomePage.prototype.buildMap = function () {
        this.map = new __WEBPACK_IMPORTED_MODULE_3_mapbox_gl__["Map"]({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v10',
            zoom: 13,
            doubleClickZoom: false,
            center: [this.lng, this.lat]
        });
        var nav = new __WEBPACK_IMPORTED_MODULE_3_mapbox_gl__["NavigationControl"]();
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
    };
    HomePage.prototype.addMarker = function (event) {
        //if (event.originalEvent.composedPath().length != 13) {
        if (event.originalEvent.composedPath().length != 13) {
            console.log('event stop');
            return false;
        }
        console.log('aasda');
        this.marker = new __WEBPACK_IMPORTED_MODULE_3_mapbox_gl__["Marker"]({
            draggable: true
        })
            .setLngLat([event.lngLat.lng, event.lngLat.lat])
            .setPopup(new __WEBPACK_IMPORTED_MODULE_3_mapbox_gl__["Popup"]({ offset: 25 }) // add popups
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
        console.log('event start');
        this.marker.on('dragend', this.onDragEnd.bind(this));
    };
    HomePage.prototype.onDragEnd = function () {
        var lngLat = this.marker.getLngLat();
        //console.log(lngLat);
    };
    HomePage.prototype.getRoute = function () {
        var _this = this;
        var start = [this.markersPath[0].getLngLat().lng, this.markersPath[0].getLngLat().lat];
        var end = [this.markersPath[this.markersPath.length - 1].getLngLat().lng, this.markersPath[this.markersPath.length - 1].getLngLat().lat];
        //this.markersPath[0].lng + ',' + this.markersPath[0].lat +
        console.log(this.markersPath);
        console.log('dlugosc start' + start.length);
        console.log('dlugosc end' + end.length);
        var element = "";
        for (var index = 0; index < this.markersPath.length; index++) {
            if (index != this.markersPath.length - 1) {
                element += this.markersPath[index].getLngLat().lng + ',' + this.markersPath[index].getLngLat().lat + ';';
            }
            else {
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
        var directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + element + '?geometries=geojson&access_token=' + __WEBPACK_IMPORTED_MODULE_3_mapbox_gl__["accessToken"];
        this.http.get(directionsRequest).subscribe(function (data) {
            var route = data.routes[0].geometry;
            _this.startLane = {
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
            };
            _this.pathLane = {
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
            };
            _this.finishLane = {
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
            };
            _this.map.addLayer(_this.pathLane);
            _this.map.addLayer(_this.startLane);
            _this.map.addLayer(_this.finishLane);
            _this.distance = data.routes[0].distance;
            // this is where the JavaScript from the next step will go
            console.log("dystans " + data.routes[0].distance);
        });
    };
    HomePage.prototype.updateGeocoderProximity = function () {
        // proximity is designed for local scale, if the user is looking at the whole world,
        // it doesn't make sense to factor in the arbitrary centre of the map
        if (this.map.getZoom() > 9) {
            var center = this.map.getCenter().wrap(); // ensures the longitude falls within -180 to 180 as the Geocoding API doesn't accept values outside this range
            this.geocoder.setProximity({ longitude: center.lng, latitude: center.lat });
        }
        else {
            this.geocoder.setProximity(null);
        }
    };
    HomePage.prototype.BackToStart = function () {
        this.navCtrl.pop();
    };
    HomePage.prototype.RemoveNav = function () {
        this.directions.onRemove(this.map);
    };
    HomePage.prototype.ClearMap = function () {
        //this.directions.removeRoutes();
        this.map.removeLayer('start');
        this.map.removeLayer('route');
        this.map.removeLayer('end');
        this.map.removeSource('start');
        this.map.removeSource('route');
        this.map.removeSource('end');
        this.markersPath.map(function (x) { return x.remove(); });
        this.markersPath = [];
        console.log('aa');
    };
    HomePage.prototype.SendPath = function () {
        console.log(this.markersPath.map(function (x) { return x.getLngLat(); }));
        this.http.post('http://127.0.0.1:3456/', {
            info: 'sent request',
            totalDistance: this.distance,
            // start: this.startLane,
            // pathLane: this.pathLane,
            // finish: this.finishLane,
            MarkersPath: this.markersPath.map(function (x) { return x.getLngLat(); })
        }, { responseType: 'text' }).subscribe(function (res) {
            console.log(JSON.stringify(res));
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapContainer", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Stworz gre</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <h4>Ogolny dystans trasy to około {{distanceString}}</h4>\n  <div id="map" ></div>\n\n\n  <button (click)="SendPath()">Wyślij</button>\n  <button (click)="BackToStart()">Toggle Menu</button>\n  <button (click)="ClearMap()">Clear Map</button>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\pages\home\home.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(263);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_startmenu_startMenu__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_loadgame_loadgame__ = __webpack_require__(235);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_startmenu_startMenu__["a" /* StartMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_loadgame_loadgame__["a" /* LoadGameComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_startmenu_startMenu__["a" /* StartMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_loadgame_loadgame__["a" /* LoadGameComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_startmenu_startMenu__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_startmenu_startMenu__["a" /* StartMenuComponent */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[250]);
//# sourceMappingURL=main.js.map