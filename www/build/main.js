webpackJsonp([0],{

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 152:
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
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(197);
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    StartMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-start',template:/*ion-inline-start:"C:\Users\Ja\Desktop\Test\mapbox\myApp\src\pages\startmenu\startMenu.html"*/'<div class="container">\n    <button (click)="GoToCreateGame()" ion-button icon-start>\n        <ion-icon name=\'home\' ></ion-icon>\n        Stworz gre\n      </button>\n      <button ion-button outline icon-start>\n        <ion-icon name=\'briefcase\' is-active="false"></ion-icon>\n        Wczytaj gre\n      </button>\n</div>'/*ion-inline-end:"C:\Users\Ja\Desktop\Test\mapbox\myApp\src\pages\startmenu\startMenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
    ], StartMenuComponent);
    return StartMenuComponent;
}());

//# sourceMappingURL=startMenu.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mapbox_gl__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapbox_mapbox_gl_directions_dist_mapbox_gl_directions__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapbox_mapbox_gl_directions_dist_mapbox_gl_directions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__mapbox_mapbox_gl_directions_dist_mapbox_gl_directions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mapbox_mapbox_gl_geocoder_dist_mapbox_gl_geocoder_min_js__ = __webpack_require__(277);
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
        //console.log(event.originalEvent.composedPath());
        if (event.originalEvent.composedPath().length != 13) {
            console.log(event);
            console.log('event stop');
            // console.log(this.directions.getWaypoints());
            // let arrayPoints = this.directions.getWaypoints();
            // let coordinates = arrayPoints[arrayPoints.length-1].geometry.coordinates;
            // console.log(coordinates);
            // this.directions.on('route', function(){
            //   console.log('event route');
            // })
            return false;
        }
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
            _this.map.addLayer({
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
            _this.map.addLayer({
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
            _this.map.addLayer({
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
            // this is where the JavaScript from the next step will go
            console.log("dystans " + data.routes[0].distance);
        });
        // this.directions.setOrigin(start); 
        // this.directions.addWaypoint(0, [-84.4974, 39.132070]);
        // this.directions.addWaypoint(1, [-84.508641, 39.1090]);
        // this.directions.setDestination(end); 
        //console.log(this.directions.getWaypoints());
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], HomePage.prototype, "mapContainer", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Ja\Desktop\Test\mapbox\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Stworz gre</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <h4>Ogolny dystans trasy to około {{distanceString}}</h4>\n  <div id="map" ></div>\n\n\n  <button (click)="SendPath()">Wyślij</button>\n  <button (click)="BackToStart()">Toggle Menu</button>\n  <button (click)="RemoveNav()">Clear Map</button>\n  <button (click)="ClearMap()">Clear Map</button>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ja\Desktop\Test\mapbox\myApp\src\pages\home\home.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_startmenu_startMenu__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(198);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_startmenu_startMenu__["a" /* StartMenuComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_startmenu_startMenu__["a" /* StartMenuComponent */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_startmenu_startMenu__ = __webpack_require__(196);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Ja\Desktop\Test\mapbox\myApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>'/*ion-inline-end:"C:\Users\Ja\Desktop\Test\mapbox\myApp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map