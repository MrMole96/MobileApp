webpackJsonp([0],{

/***/ 221:
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
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 263:
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
webpackEmptyAsyncContext.id = 263;

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loadgame_loadgame__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(316);
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
            selector: 'app-start',template:/*ion-inline-start:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\pages\startmenu\startMenu.html"*/'<div class="container">\n    <button class="button-start" (click)="GoToCreateGame()" ion-button icon-start>\n        <ion-icon name=\'home\' ></ion-icon>\n        Stworz gre\n      </button>\n      <button class="button-start" (click)="GoToLoadGame()" ion-button outline icon-start>\n        <ion-icon name=\'briefcase\' is-active="false"></ion-icon>\n        Wczytaj gre\n      </button>\n</div>'/*ion-inline-end:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\pages\startmenu\startMenu.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], StartMenuComponent);
    return StartMenuComponent;
}());

//# sourceMappingURL=startMenu.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadGameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__game_game__ = __webpack_require__(314);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Path = /** @class */ (function () {
    /**
     *
     */
    function Path(distance, name, start, route, end) {
        this.distance = 0;
        this.name = "";
        this.start = [];
        this.route = [];
        this.end = [];
        this.distance = distance,
            this.name = name,
            this.start = start;
        this.route = route;
        this.end = end;
    }
    return Path;
}());
var LoadGameComponent = /** @class */ (function () {
    function LoadGameComponent(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.start = [-122.41798225403234, 37.748303344788994];
        this.route = [[-122.417936, 37.748297],
            [-122.417943, 37.748218],
            [-122.411714, 37.74835],
            [-122.411509, 37.748355],
            [-122.412057, 37.754067]];
        this.end = [-122.41197410584037, 37.75407181379808];
        this.loadedPath = [];
        this.getPath();
    }
    LoadGameComponent.prototype.ngOnInit = function () {
    };
    LoadGameComponent.prototype.getPath = function () {
        var _this = this;
        this.http.get('http://127.0.0.1:3456/').subscribe(function (x) {
            _this.loadedPath = x.example;
            console.log(_this.loadedPath);
            localStorage.setItem("loadedPath", JSON.stringify(_this.loadedPath));
            console.log('json parser local online', JSON.parse(localStorage.getItem('loadedPath')));
        }, function (error) {
            _this.loadedPath.push(new Path(1212, 'offlineGame', _this.start, _this.route, _this.end));
            _this.information = 'brak internetu';
            localStorage.setItem("loadedPath", JSON.stringify(_this.loadedPath));
            console.log('json parser local offiline', JSON.parse(localStorage.getItem('loadedPath')));
        });
    };
    LoadGameComponent.prototype.loadPath = function (i) {
        console.log('index ' + i);
        localStorage.setItem('index', i);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__game_game__["a" /* GameComponent */]);
    };
    LoadGameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-load',template:/*ion-inline-start:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\pages\loadgame\loadgame.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Wczytaj gre</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n  <h2>{{information}}</h2>\n\n<ul class="games" *ngFor="let path of loadedPath; let i = index" (click)="loadPath(i)">\n\n    \n\n    \n\n<li>{{path.name}}</li>    \n\n<li ><ion-icon name="walk"></ion-icon>{{path.distance}}</li>\n\n\n\n<li><ion-icon name="trophy"></ion-icon>{{tasks}}</li>\n\n</ul>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\pages\loadgame\loadgame.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], LoadGameComponent);
    return LoadGameComponent;
}());

//# sourceMappingURL=loadgame.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var GameComponent = /** @class */ (function () {
    function GameComponent(http) {
        this.http = http;
        this.lat = 37.75;
        this.lng = -122.41;
        this.name = "cos";
        this.data = JSON.parse(localStorage.getItem('loadedPath'));
        this.numberPath = JSON.parse(localStorage.getItem('index'));
        this.index = 0;
        this.counter = 0;
        this.buttonsArray = [];
        this.uniqueArray = [];
        Object.getOwnPropertyDescriptor(__WEBPACK_IMPORTED_MODULE_1_mapbox_gl__, "accessToken").set('pk.eyJ1Ijoicmlja2NhcmRkZGQiLCJhIjoiY2puYWd4cTU3MGc3azNycDh3dnllNWNtZyJ9.MTH5zn5hLiXz9jBvGadOVQ');
    }
    GameComponent.prototype.ngOnInit = function () {
        this.buildMap();
    };
    GameComponent.prototype.buildMap = function () {
        this.map = new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["Map"]({
            container: 'map',
            style: 'mapbox://styles/mapbox/outdoors-v10',
            zoom: 13,
            doubleClickZoom: false,
            center: [this.lng, this.lat]
        });
        this.loadData();
    };
    GameComponent.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    GameComponent.prototype.loadData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var pathArray, last, start, end, path, index, directionsRequest;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.sleep(2000)];
                    case 1:
                        _a.sent();
                        pathArray = [];
                        last = pathArray.length - 1;
                        start = pathArray[0];
                        end = pathArray[last];
                        path = "";
                        //this.addMarker(this.data[this.numberPath].array[index]);
                        for (index = 0; index <= this.counter; index++) {
                            pathArray.push(this.data[this.numberPath].array[index]);
                            console.log('index ', index);
                            console.log(pathArray);
                            if (index == pathArray.length || index == 0) {
                                path += pathArray[index].lng + ',' + pathArray[index].lat;
                            }
                            else if (index != pathArray.length) {
                                path += ';' + pathArray[index].lng + ',' + pathArray[index].lat;
                            }
                            console.log('path ', path);
                            if (this.counter == index) {
                                this.addMarker(pathArray[index]);
                                directionsRequest = 'https://api.mapbox.com/directions/v5/mapbox/walking/' + path + '?geometries=geojson&access_token=' + __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["accessToken"];
                                this.http.get(directionsRequest).subscribe(function (data) {
                                    var route = data.routes[0].geometry.coordinates;
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
                                                geometry: {
                                                    type: 'LineString',
                                                    coordinates: route
                                                }
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
                                    if (_this.map.getLayer('route') != null) {
                                        _this.map.removeLayer('start');
                                        _this.map.removeLayer('end');
                                        _this.map.removeLayer('route');
                                        _this.map.removeSource('start');
                                        _this.map.removeSource('end');
                                        _this.map.removeSource('route');
                                    }
                                    _this.map.addLayer(_this.pathLane);
                                    _this.map.addLayer(_this.startLane);
                                    _this.map.addLayer(_this.finishLane);
                                });
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    GameComponent.prototype.addMarker = function (event) {
        var div = document.createElement('div');
        div.setAttribute("id", 'marker');
        var quest = document.createElement('h4');
        var answerA = document.createElement('input');
        var answerB = document.createElement('input');
        var answerC = document.createElement('input');
        var labelA = document.createElement('label');
        var labelB = document.createElement('label');
        var labelC = document.createElement('label');
        labelA.setAttribute('for', 'checkboxA');
        labelB.setAttribute('for', 'checkboxB');
        labelC.setAttribute('for', 'checkboxC');
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
        quest.textContent = "to jest test";
        labelA.textContent = 'test';
        ///
        div.appendChild(quest);
        div.appendChild(answerA);
        div.appendChild(labelA);
        div.appendChild(answerB);
        div.appendChild(labelB);
        div.appendChild(answerC);
        div.appendChild(labelC);
        div.appendChild(button);
        var task = this.data[this.numberPath].tasks[this.index];
        quest.textContent = task.quest;
        //answerA.checked = task.checkboxA;
        labelA.textContent = task.answerA;
        //answerB.textContent = task.checkboxB;
        labelB.textContent = task.answerB;
        //answerC.textContent = task.checkboxC;
        labelC.textContent = task.answerC;
        var popup = new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["Popup"]({ offset: 25 })
            .setDOMContent(div); // add popups
        var marker = new __WEBPACK_IMPORTED_MODULE_1_mapbox_gl__["Marker"]()
            .setLngLat([event.lng, event.lat])
            .setPopup(popup)
            .addTo(this.map);
        this.accept(button);
    };
    GameComponent.prototype.accept = function (button) {
        var _this = this;
        button.addEventListener('click', function (e) {
            if (_this.buttonsArray.indexOf(button.id) == -1) {
                _this.buttonsArray.push(button.id);
                if (_this.counter != _this.data[_this.numberPath].array.length - 1) {
                    _this.index++;
                    _this.counter++;
                    _this.loadData();
                }
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], GameComponent.prototype, "mapContainer", void 0);
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-game',template:/*ion-inline-start:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\pages\game\game.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>{{name}}</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  <h4>Dystans trasy: {{distance}}</h4>\n\n  <ion-content padding>\n\n    <div id="map"></div>\n\n  </ion-content>\n\n'/*ion-inline-end:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\pages\game\game.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], GameComponent);
    return GameComponent;
}());

//# sourceMappingURL=game.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mapbox_gl__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mapbox_gl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mapbox_gl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapbox_mapbox_gl_directions_dist_mapbox_gl_directions__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapbox_mapbox_gl_directions_dist_mapbox_gl_directions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__mapbox_mapbox_gl_directions_dist_mapbox_gl_directions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mapbox_mapbox_gl_geocoder_dist_mapbox_gl_geocoder_min_js__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mapbox_mapbox_gl_geocoder_dist_mapbox_gl_geocoder_min_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__mapbox_mapbox_gl_geocoder_dist_mapbox_gl_geocoder_min_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
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
    function HomePage(navCtrl, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.index = 0;
        this.lat = 49.86;
        this.lng = 19.35;
        this.markersPath = [];
        this.gameName = "";
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
        this.buttonsArray = [];
        this.questsArray = [];
        this.counter = 0;
        //mapboxgl.accessToken = 'pk.eyJ1Ijoicmlja2NhcmRkZGQiLCJhIjoiY2puYWd4cTU3MGc3azNycDh3dnllNWNtZyJ9.MTH5zn5hLiXz9jBvGadOVQ'
        Object.getOwnPropertyDescriptor(__WEBPACK_IMPORTED_MODULE_3_mapbox_gl__, "accessToken").set('pk.eyJ1Ijoicmlja2NhcmRkZGQiLCJhIjoiY2puYWd4cTU3MGc3azNycDh3dnllNWNtZyJ9.MTH5zn5hLiXz9jBvGadOVQ');
    }
    HomePage.prototype.ngOnInit = function () {
        //this.markers = this.mapService.getMarkers()
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
        this.map.on('click', this.addMarker.bind(this));
        this.map.addControl(new __WEBPACK_IMPORTED_MODULE_3_mapbox_gl__["GeolocateControl"]({
            positionOptions: {
                enableHighAccuracy: true
            },
            trackUserLocation: true
        }));
    };
    HomePage.prototype.createPopUp = function (event) {
        var div = document.createElement('div');
        div.setAttribute("id", 'marker');
        var title = document.createElement('h2');
        title.textContent = 'Punkt';
        var div2 = document.createElement('div');
        div2.setAttribute("id", "task");
        var quest = document.createElement('input');
        var answerA = document.createElement('input');
        var answerB = document.createElement('input');
        var answerC = document.createElement('input');
        quest.setAttribute('id', 'quest');
        quest.placeholder = 'zadanie';
        answerA.setAttribute('id', 'answerA');
        answerB.setAttribute('id', 'answerB');
        answerC.setAttribute('id', 'answerC');
        answerA.placeholder = 'odpowiedz A';
        answerB.placeholder = 'odpowiedz B';
        answerC.placeholder = 'odpowiedz C';
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
        var button2 = document.createElement('button');
        button2.setAttribute("id", this.counter.toString());
        button2.textContent = 'kasuj ';
        div.appendChild(title);
        div.appendChild(div2);
        div2.appendChild(quest);
        div2.appendChild(answerA);
        div2.appendChild(radio1);
        div2.appendChild(answerB);
        div2.appendChild(radio2);
        div2.appendChild(answerC);
        div2.appendChild(radio3);
        div2.appendChild(button2);
        var popup = new __WEBPACK_IMPORTED_MODULE_3_mapbox_gl__["Popup"]({ offset: 25 })
            .setDOMContent(div); // add popups
        this.marker = new __WEBPACK_IMPORTED_MODULE_3_mapbox_gl__["Marker"]({ draggable: true })
            .setLngLat([event.lngLat.lng, event.lngLat.lat])
            .setPopup(popup)
            .addTo(this.map);
        this.delete(button2);
        //wartosci z inputow sa w divie, zrobic funkcje ktora bedzie przechowywac te wartosci
        this.buttonsArray.push(button2);
        this.questsArray.push(div2.childNodes);
        this.markersPath.push(this.marker);
        this.counter = this.markersPath.length;
    };
    HomePage.prototype.addMarker = function (event) {
        //if (event.originalEvent.composedPath().length != 13) {
        if (event.originalEvent.composedPath().length != 13) {
            return false;
        }
        this.createPopUp(event);
        this.marker.on('dragend', this.onDragEnd.bind(this));
        this.getRoute();
    };
    HomePage.prototype.delete = function (button) {
        var _this = this;
        button.addEventListener('click', function (e) {
            var targetButton = e.target || e.srcElement || e.currentTarget;
            var idAttr = targetButton.attributes.id;
            var value = idAttr.nodeValue;
            //fakemarker = this.markersPath.find(x=>x.getLngLat().lat==event.lngLat.lat)
            var index = _this.buttonsArray.indexOf(targetButton);
            _this.markersPath[index].remove();
            _this.buttonsArray.splice(index, 1);
            _this.markersPath.splice(index, 1);
            _this.getRoute();
        });
    };
    HomePage.prototype.onDragEnd = function () {
        var lngLat = this.marker.getLngLat();
        console.log(this.questsArray);
        this.getRoute();
    };
    HomePage.prototype.getRoute = function () {
        var _this = this;
        var start = [this.markersPath[0].getLngLat().lng, this.markersPath[0].getLngLat().lat];
        var end = [this.markersPath[this.markersPath.length - 1].getLngLat().lng, this.markersPath[this.markersPath.length - 1].getLngLat().lat];
        //this.markersPath[0].lng + ',' + this.markersPath[0].lat +
        // console.log(this.markersPath[0]);
        // console.log('dlugosc start' + start.length);
        // console.log('dlugosc end' + end.length);
        var element = "";
        for (var index = 0; index < this.markersPath.length; index++) {
            if (index != this.markersPath.length - 1) {
                element += this.markersPath[index].getLngLat().lng + ',' + this.markersPath[index].getLngLat().lat + ';';
            }
            else {
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
        if (this.markersPath.length > 1) {
            this.map.removeLayer('start');
            this.map.removeLayer('route');
            this.map.removeLayer('end');
            this.map.removeSource('start');
            this.map.removeSource('route');
            this.map.removeSource('end');
            this.markersPath.map(function (x) { return x.remove(); });
            this.markersPath = [];
            this.buttonsArray = [];
            this.questsArray = [];
        }
    };
    HomePage.prototype.changeTextColor = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__('#myButton').text('white');
    };
    HomePage.prototype.SendPath = function () {
        console.log(this.gameName);
        if (this.gameName.trim().length != 0) {
            var tasks_1 = Array();
            this.questsArray.forEach(function (element) {
                tasks_1.push(new Task(element[0].value, element[1].value, element[2].checked, element[3].value, element[4].checked, element[5].value, element[6].checked));
            });
            console.log(tasks_1);
            this.http.post('http://127.0.0.1:3456/', {
                info: 'sent request',
                Tasks: tasks_1,
                totalDistance: this.distance,
                gameName: this.gameName,
                MarkersPath: this.markersPath.map(function (x) { return x.getLngLat(); })
            }, { responseType: 'text' }).subscribe(function (res) {
                console.log(JSON.stringify(res));
            });
            this.ClearMap();
        }
        else
            this.warningAlert();
    };
    HomePage.prototype.warningAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Uwaga!',
            subTitle: 'Podaj nazwe gry!',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('map'),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]) === "function" && _a || Object)
    ], HomePage.prototype, "mapContainer", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Stworz gre</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="no-scroll" padding>\n<!--Dodac gdzies dystans zeby sie pokazywal-->\n <ion-item>\n  <!-- <ion-label color="primary">Nazwa gry</ion-label> -->\n  <ion-input class="nameGame" [(ngModel)]="gameName" placeholder="Nazwa gry"></ion-input>\n</ion-item>\n\n \n  <div id="map" ></div>\n\n  <div class="container-button">\n  <button ion-button color="secondary" (click)="SendPath()"  round>Wyslij</button>\n  <button ion-button color="warning" (click)="ClearMap()" round>Wyczysc</button>\n</div>\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Ja\Dysk Google\Aplikacje Mobilne\mapbox\myApp\src\pages\home\home.html"*/,
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

var Task = /** @class */ (function () {
    /**
     *
     */
    function Task(quest, answerA, checkboxA, answerB, checkboxB, answerC, checkboxC) {
        this.quest = quest;
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.checkboxA = checkboxA;
        this.checkboxB = checkboxB;
        this.checkboxC = checkboxC;
    }
    return Task;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(461);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(498);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_input__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_startmenu_startMenu__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_common_http__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_loadgame_loadgame__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_game_game__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ng_bootstrap_ng_bootstrap__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap__ = __webpack_require__(814);
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
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_startmenu_startMenu__["a" /* StartMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_game_game__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_loadgame_loadgame__["a" /* LoadGameComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_16_ngx_bootstrap__["a" /* AlertModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_input__["b" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material_form_field__["c" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_15__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_startmenu_startMenu__["a" /* StartMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pages_game_game__["a" /* GameComponent */],
                __WEBPACK_IMPORTED_MODULE_13__pages_loadgame_loadgame__["a" /* LoadGameComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__angular_common_http__["b" /* HttpClientModule */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_startmenu_startMenu__ = __webpack_require__(310);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[456]);
//# sourceMappingURL=main.js.map