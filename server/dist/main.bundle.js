webpackJsonp([0,3],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutmeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutmeService = (function () {
    function AboutmeService(http) {
        this.http = http;
    }
    AboutmeService.prototype.getAboutmeInfo = function () {
        return this.http.get('/api/aboutme')
            .map(function (res) { return res.json(); });
    };
    AboutmeService.prototype.editData = function (inputData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = inputData;
        var _id = body._id;
        //REMOVE _id FROM BODY
        delete body._id;
        this.http
            .put("/api/aboutme/" + _id, body, {
            headers: headers
        })
            .subscribe(function (data) {
            alert('About me section edited');
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    AboutmeService.prototype.newData = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http
            .post('/api/aboutme', body, {
            headers: headers
        })
            .subscribe(function (data) {
            alert('New about me section added');
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    AboutmeService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AboutmeService);
    return AboutmeService;
    var _a;
}());
//# sourceMappingURL=/Users/thomasearly/ymb2/src/aboutme.service.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(204);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreatmentsService = (function () {
    function TreatmentsService(http) {
        this.http = http;
    }
    // Get all treatments from the API
    TreatmentsService.prototype.getAllTreatments = function () {
        return this.http.get('/api/treatment')
            .map(function (res) { return res.json(); });
    };
    TreatmentsService.prototype.editData = function (inputData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = inputData;
        var _id = body._id;
        //REMOVE _id FROM BODY
        delete body._id;
        this.http
            .put("/api/treatment/" + _id, body, {
            headers: headers
        })
            .subscribe(function (data) {
            alert('Treatment edited');
        }, function (error) {
            alert('Could not edit treatment');
            console.log(JSON.stringify(error.json()));
        });
    };
    TreatmentsService.prototype.newData = function (body) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http
            .post('/api/treatment', body, {
            headers: headers
        })
            .subscribe(function (data) {
            alert('New treatment added');
        }, function (error) {
            alert('Could not save new treatment');
            console.log(JSON.stringify(error.json()));
        });
    };
    TreatmentsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], TreatmentsService);
    return TreatmentsService;
    var _a;
}());
//# sourceMappingURL=/Users/thomasearly/ymb2/src/treatments.service.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(684),
            styles: [__webpack_require__(671)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/thomasearly/ymb2/src/app.component.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 389;


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(510);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/thomasearly/ymb2/src/main.js.map

/***/ }),

/***/ 505:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutme_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutmeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutmeComponent = (function () {
    function AboutmeComponent(aboutmeService, fb) {
        this.aboutmeService = aboutmeService;
        this.fb = fb;
        this.aboutmelist = [];
        this.aboutmeForm = this.fb.group({
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    AboutmeComponent.prototype.newData = function () {
        this.aboutmeService.newData(this.aboutmeForm.value);
    };
    AboutmeComponent.prototype.editData = function () {
        this.aboutmeService.editData(this.aboutmeForm.value);
    };
    AboutmeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve Treatment from the API
        this.aboutmeService.getAboutmeInfo().subscribe(function (aboutmeInfo) {
            _this.aboutmelist = aboutmeInfo;
        });
    };
    AboutmeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aboutme',
            template: __webpack_require__(682),
            styles: [__webpack_require__(669)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__aboutme_service__["a" /* AboutmeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__aboutme_service__["a" /* AboutmeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object])
    ], AboutmeComponent);
    return AboutmeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/thomasearly/ymb2/src/aboutme.component.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutme_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutmeListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AboutmeListComponent = (function () {
    function AboutmeListComponent(aboutmeService, fb) {
        this.aboutmeService = aboutmeService;
        this.fb = fb;
        this.aboutmelist = [];
        this.aboutmeForm = this.fb.group({
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    AboutmeListComponent.prototype.newData = function () {
        this.aboutmeService.newData(this.aboutmeForm.value);
    };
    AboutmeListComponent.prototype.editData = function () {
        this.aboutmeService.editData(this.aboutmeForm.value);
    };
    AboutmeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve Treatment from the API
        this.aboutmeService.getAboutmeInfo().subscribe(function (aboutmeInfo) {
            _this.aboutmelist = aboutmeInfo;
        });
    };
    AboutmeListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aboutmelist',
            template: __webpack_require__(683),
            styles: [__webpack_require__(670)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__aboutme_service__["a" /* AboutmeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__aboutme_service__["a" /* AboutmeService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object])
    ], AboutmeListComponent);
    return AboutmeListComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/thomasearly/ymb2/src/aboutmelist.component.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(496);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__treatments_treatments_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(509);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__treatments_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aboutme_service__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__treatmentlist_treatmentlist_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aboutme_aboutme_component__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aboutmelist_aboutmelist_component__ = __webpack_require__(506);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__showcase_showcase_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pricelist_pricelist_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__photo_upload_photo_upload_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_file_upload__ = __webpack_require__(680);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__filterdata_pipe__ = __webpack_require__(508);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















// We need to import the ReactiveFormsModule and import it
// Define the routes
var ROUTES = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
        useAsDefault: true
    },
    {
        path: 'admin/treatments',
        component: __WEBPACK_IMPORTED_MODULE_6__treatments_treatments_component__["a" /* TreatmentsComponent */],
        pathMatch: 'full'
    },
    {
        path: 'treatments',
        component: __WEBPACK_IMPORTED_MODULE_10__treatmentlist_treatmentlist_component__["a" /* TreatmentlistComponent */],
        pathMatch: 'full'
    },
    {
        path: 'admin/aboutme',
        component: __WEBPACK_IMPORTED_MODULE_11__aboutme_aboutme_component__["a" /* AboutmeComponent */],
        pathMatch: 'full'
    },
    {
        path: 'showcase',
        component: __WEBPACK_IMPORTED_MODULE_13__showcase_showcase_component__["a" /* ShowcaseComponent */],
        pathMatch: 'full'
    },
    {
        path: 'aboutme',
        component: __WEBPACK_IMPORTED_MODULE_12__aboutmelist_aboutmelist_component__["a" /* AboutmeListComponent */],
        pathMatch: 'full'
    },
    {
        path: 'pricelist',
        component: __WEBPACK_IMPORTED_MODULE_14__pricelist_pricelist_component__["a" /* PriceListComponent */],
        pathMatch: 'full'
    },
    {
        path: 'admin/photo-upload',
        component: __WEBPACK_IMPORTED_MODULE_15__photo_upload_photo_upload_component__["a" /* PhotoUploadComponent */],
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__treatments_treatments_component__["a" /* TreatmentsComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__treatmentlist_treatmentlist_component__["a" /* TreatmentlistComponent */],
                __WEBPACK_IMPORTED_MODULE_11__aboutme_aboutme_component__["a" /* AboutmeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__aboutmelist_aboutmelist_component__["a" /* AboutmeListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__showcase_showcase_component__["a" /* ShowcaseComponent */],
                __WEBPACK_IMPORTED_MODULE_14__pricelist_pricelist_component__["a" /* PriceListComponent */],
                __WEBPACK_IMPORTED_MODULE_15__photo_upload_photo_upload_component__["a" /* PhotoUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_17__filterdata_pipe__["a" /* FilterDataPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_16_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(ROUTES) // Add routes to the app
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_8__treatments_service__["a" /* TreatmentsService */], __WEBPACK_IMPORTED_MODULE_9__aboutme_service__["a" /* AboutmeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/thomasearly/ymb2/src/app.module.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDataPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterDataPipe = (function () {
    function FilterDataPipe() {
    }
    FilterDataPipe.prototype.transform = function (items, args1, args2, args3) {
        return items;
    };
    FilterDataPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterDataPipe',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], FilterDataPipe);
    return FilterDataPipe;
}());
//# sourceMappingURL=/Users/thomasearly/ymb2/src/filterdata.pipe.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aboutme_service__ = __webpack_require__(152);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(aboutmeService) {
        this.aboutmeService = aboutmeService;
        this.aboutmeList = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.aboutmeService.getAboutmeInfo().subscribe(function (aboutmeInfo) {
            _this.aboutmeList = aboutmeInfo;
        });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(685),
            styles: [__webpack_require__(672)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__aboutme_service__["a" /* AboutmeService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__aboutme_service__["a" /* AboutmeService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=/Users/thomasearly/ymb2/src/home.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(329);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(507);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/thomasearly/ymb2/src/index.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoUploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PhotoUploadComponent = (function () {
    function PhotoUploadComponent() {
    }
    PhotoUploadComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'photo-list',
            template: __webpack_require__(686)
        }), 
        __metadata('design:paramtypes', [])
    ], PhotoUploadComponent);
    return PhotoUploadComponent;
}());
//# sourceMappingURL=/Users/thomasearly/ymb2/src/photo-upload.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__treatments_service__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PriceListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PriceListComponent = (function () {
    function PriceListComponent(treatmentsService) {
        this.treatmentsService = treatmentsService;
        this.prices = [];
    }
    PriceListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.treatmentsService.getAllTreatments().subscribe(function (treatmentData) {
            _this.prices = treatmentData;
        });
    };
    PriceListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pricelist',
            template: __webpack_require__(687),
            styles: [__webpack_require__(673)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__treatments_service__["a" /* TreatmentsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__treatments_service__["a" /* TreatmentsService */]) === 'function' && _a) || Object])
    ], PriceListComponent);
    return PriceListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/thomasearly/ymb2/src/pricelist.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowcaseComponent = (function () {
    function ShowcaseComponent() {
    }
    ShowcaseComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aboutme',
            template: __webpack_require__(688),
            styles: [__webpack_require__(674)]
        }), 
        __metadata('design:paramtypes', [])
    ], ShowcaseComponent);
    return ShowcaseComponent;
}());
//# sourceMappingURL=/Users/thomasearly/ymb2/src/showcase.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__treatments_service__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentlistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreatmentlistComponent = (function () {
    function TreatmentlistComponent(treatmentsService) {
        this.treatmentsService = treatmentsService;
        this.treatments = [];
    }
    TreatmentlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.treatmentsService.getAllTreatments().subscribe(function (treatmentData) {
            _this.treatments = treatmentData;
        });
    };
    TreatmentlistComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-treatmentlist',
            template: __webpack_require__(689),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__treatments_service__["a" /* TreatmentsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__treatments_service__["a" /* TreatmentsService */]) === 'function' && _a) || Object])
    ], TreatmentlistComponent);
    return TreatmentlistComponent;
    var _a;
}());
//# sourceMappingURL=/Users/thomasearly/ymb2/src/treatmentlist.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treatments_service__ = __webpack_require__(153);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TreatmentsComponent = (function () {
    function TreatmentsComponent(treatmentsService, fb) {
        this.treatmentsService = treatmentsService;
        this.fb = fb;
        this.treatments = [];
        this.showDialog = true;
        this.selectedTreatment = {
            _id: null
        };
        this.treatmentsForm = this.fb.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            products: [''],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            duration: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        this.treatmentsEditForm = this.fb.group({
            _id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            price: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            products: [''],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            duration: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    TreatmentsComponent.prototype.newData = function () {
        this.treatmentsService.newData(this.treatmentsForm.value);
    };
    TreatmentsComponent.prototype.editData = function () {
        this.treatmentsService.editData(this.treatmentsEditForm.value);
    };
    TreatmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve Treatment from the API
        this.treatmentsService.getAllTreatments().subscribe(function (treatmentData) {
            _this.treatments = treatmentData;
        });
    };
    TreatmentsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-treatments',
            template: __webpack_require__(690),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__treatments_service__["a" /* TreatmentsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__treatments_service__["a" /* TreatmentsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === 'function' && _b) || Object])
    ], TreatmentsComponent);
    return TreatmentsComponent;
    var _a, _b;
}());
//# sourceMappingURL=/Users/thomasearly/ymb2/src/treatments.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/thomasearly/ymb2/src/environment.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(707);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/thomasearly/ymb2/src/polyfills.js.map

/***/ }),

/***/ 669:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 10px;\n}\n\nbody {\n  background: #fff !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 10px;\n}\n\nbody {\n  background: #fff !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 671:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "body {\n  background: #fff !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 672:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "body {\n  background: #fff !important;\n}\n\ndiv {\n  background:\n\turl(\"/assets/images/massage.jpg\") 50% 50% no-repeat;\n  background-size: cover;\n}\n\nh1 {\n  margin-top: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 673:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "body {\n  background: #fff !important;\n  height: calc(100vh);\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 1.75rem;\n}\n\n.list-group-item {\n  border: 0 !important;\n  padding: 7px 1px 0 1px !important;\n  font-size: 1.1rem;\n}\n\n.price-pill-color {\n  background: #59b9b5;\n}\n\n.treatment-male-pill {\n  background-color: lightblue;\n  color: white;\n}\n\n.treatment-female-pill {\n  background-color: lightpink;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 674:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "h3 {\n  text-align: left;\n  font-size: 1.65em;\n  margin: 0 0 30px;\n}\n\ndiv {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\na {\n  display: inline-block;\n  margin-bottom: 8px;\n  width: calc(50% - 4px);\n  margin-right: 8px;\n  text-decoration: none;\n  color: black;\n}\n\na:nth-of-type(2n) {\n  margin-right: 0;\n}\n\n@media screen and (min-width: 50em) {\n  a {\n    width: calc(25% - 6px);\n  }\n\n  a:nth-of-type(2n) {\n    margin-right: 8px;\n  }\n\n  a:nth-of-type(4n) {\n    margin-right: 0;\n  }\n}\n\na:hover img {\n  -webkit-transform: scale(1.15);\n          transform: scale(1.15);\n}\n\nfigure {\n  margin: 0;\n  overflow: hidden;\n}\n\nfigcaption {\n  margin-top: 15px;\n  font-size: .8rem;\n}\n\nimg {\n  border: none;\n  max-width: 100%;\n  height: auto;\n  display: block;\n  background: #ccc;\n  -webkit-transition: -webkit-transform .2s ease-in-out;\n  transition: -webkit-transform .2s ease-in-out;\n  transition: transform .2s ease-in-out;\n  transition: transform .2s ease-in-out, -webkit-transform .2s ease-in-out;\n}\n\n.p a {\n  display: inline;\n  font-size: 13px;\n  margin: 0;\n  text-decoration: underline;\n  color: blue;\n}\n\n.p {\n  text-align: center;\n  font-size: 13px;\n  padding-top: 100px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 675:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "body {\n  background: #fff !important;\n  height: calc(100vh);\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 1.75rem;\n}\n\n.list-group-item {\n  border: 0 !important;\n  padding: 7px 1px 0 1px !important;\n  font-size: 1.1rem;\n}\n\n.price-pill-color {\n  background: #59b9b5;\n}\n\n.treatment-header {\n  font-weight: bold;\n  margin-top: 20px;\n}\n\n.treatment-male-pill {\n  background-color: lightblue;\n  color: white;\n}\n\n.treatment-female-pill {\n  background-color: lightpink;\n  color: white;\n}\n\n.treatment-description, .treatment-footer {\n  margin-top: 20px;\n}\n\n.treatment-outer {\n    border: 1px solid #c1c1c1;\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n    text-align: center;\n    padding: 0 25px 25px;\n    margin-bottom: 25px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(40)();
// imports


// module
exports.push([module.i, "body {\n  background: #fff !important;\n}\n\n.container {\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-block\">\n    <h4 class=\"card-title\">Add a new about me paragraph</h4>\n    <form [formGroup]=\"aboutmeForm\" novalidate action=\"api/aboutme\" (ngSubmit)=\"newData()\">\n      <label for=\"description\">About me section</label>\n      <input type=\"text\" formControlName=\"description\" name=\"description\" placeholder=\"About me paragraph\"><br>\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\" *ngFor=\"let aboutme of aboutmelist\">\n    <div class=\"card card-block\">\n      About me: <input type=\"text\" [(ngModel)]=\"aboutme.description\">\n      <a href=\"#\" (click)=\"editData()\" class=\"card-link\">Save</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "This is a test\n<div class=\"container\">\n  <div class=\"col-md-8 offset-md-2\">\n    <h1>About Me</h1>\n        <p *ngFor=\"let aboutme of aboutmelist\">\n          {{aboutme.description}}\n        </p>\n  </div>\n</div>\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!--<cl-image\n           quality=\"auto\"\n           fetch_format=\"auto\"\n           public-id=\"ymb_gjwjhm\"\n           type=\"upload\">\n   </cl-image>\n-->\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "Home Page\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "This will be something...\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3\">\n  <h1>Price List</h1>\n    <ul class=\"list-group\" *ngFor=\"let price of prices\">\n      <li class=\"list-group-item justify-content-between\">\n        {{price.name}}\n                   <!--       <span *ngIf=\"price.gender == 'male' || price.gender == 'both'\" class=\"badge badge-default badge-pill treatment-male-pill\">Male</span>\n                          <span *ngIf=\"price.gender == 'both'\">&nbsp;<img src=\"assets/images/ampersand.png\">&nbsp;</span>\n                          <span *ngIf=\"price.gender == 'female' || price.gender == 'both'\" class=\"badge badge-default badge-pill treatment-female-pill\">Female</span>-->\n\n        <span class=\"badge badge-default badge-pill price-pill-color\">{{price.price | currency:'GBP':true:'1.2-2'}}</span>\n      </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<h3>showcase</h3>\n\n\n<div>\n  <a href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg01.jpg\">\n    <figure>\n      <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg01.jpg\" alt=\"\">\n      <figcaption>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg02.jpg\">\n    <figure>\n      <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg02.jpg\" alt=\"\">\n      <figcaption>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg03.jpg\">\n    <figure>\n      <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg03.jpg\" alt=\"\">\n      <figcaption>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg04.jpg\">\n    <figure>\n      <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg04.jpg\" alt=\"\">\n      <figcaption>\n        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg05.jpg\">\n    <figure>\n      <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg05.jpg\" alt=\"\">\n      <figcaption>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg06.jpg\">\n    <figure>\n      <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg06.jpg\" alt=\"\">\n      <figcaption>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg07.jpg\">\n    <figure>\n      <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg07.jpg\" alt=\"\">\n       <figcaption>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, ut labore et dolore magna aliqua\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg08.jpg\">\n    <figure>\n      <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg08.jpg\" alt=\"\">\n      <figcaption>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg09.jpg\">\n    <figure>\n      <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg09.jpg\" alt=\"\">\n      <figcaption>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg10.jpg\">\n    <figure>\n      <img src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/123941/placeimg10.jpg\" alt=\"\">\n      <figcaption>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua\n      </figcaption>\n    </figure>\n  </a>\n</div>\n"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3\">\n  <h1>Treatments</h1>\n\n    <div *ngFor=\"let treatment of treatments\">\n      <div class=\"treatment-outer\">\n        <div class=\"treatment-header\">{{treatment.name}} using {{treatment.products}}</div>\n        <div class=\"treatment-description\">{{treatment.description}}</div>\n        <br>\n        <span *ngIf=\"treatment.gender == 'male' || treatment.gender == 'both'\" class=\"badge badge-default badge-pill treatment-male-pill\">Male</span>\n        <span *ngIf=\"treatment.gender == 'both'\">&nbsp;&&nbsp;</span>\n        <span *ngIf=\"treatment.gender == 'female' || treatment.gender == 'both'\" class=\"badge badge-default badge-pill treatment-female-pill\">Female</span>\n        <br>\n        <div class=\"treatment-footer\">{{treatment.duration}} minutes for <span class=\"badge badge-default price-pill-color grad\">{{treatment.price | currency:'GBP':true:'1.2-2'}}</span></div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-block\">\n    <h4 class=\"card-title\">Add a new treatment</h4>\n    <form [formGroup]=\"treatmentsForm\" novalidate action=\"api/treatment\" (ngSubmit)=\"newData()\">\n      <label for=\"name\">Treatment</label>\n      <input formControlName=\"name\" type=\"text\" name=\"name\" placeholder=\"Treatment Name\" id=\"name\"><br>\n      <label for=\"id\">ID</label>\n      <input formControlName=\"id\" type=\"text\" name=\"id\" placeholder=\"ID\" id=\"id\"><br>\n      <label for=\"price\">Price £</label>\n      <input formControlName=\"price\" type=\"price\" name=\"price\" placeholder=\"£0.00\" id=\"price\"><br>\n      <label for=\"products\">Products used</label>\n      <input formControlName=\"products\" type=\"products\" name=\"products\" placeholder=\"e.g. leg wax...\" id=\"products\"><br>\n      <label for=\"description\">Products used</label>\n      <input formControlName=\"description\" type=\"description\" name=\"description\" placeholder=\"e.g. luxury leg wax with ...\" id=\"description\"><br>\n      <label for=\"duration\">Durations in minutes</label>\n      <input formControlName=\"duration\" type=\"duration\" name=\"duration\" placeholder=\"e.g. 20 minutes\" id=\"duration\"><br>\n      <label for=\"gender\">Gender</label>\n      <select formControlName=\"gender\" name=\"gender\" id=\"gender\">\n        <option value=\"female\">Female</option>\n        <option value=\"male\">Male</option>\n        <option value=\"both\">Both</option>\n      </select>\n      <br>\n      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!treatmentsForm.valid\">Submit</button>\n    </form>\n  </div>\n</div>\n\n\n<h4 class=\"card-title\">Edit existing treatments</h4>\n\n<div *ngFor=\"let treatment of treatments\">\n  <div class=\"treatment-outer\" *ngIf=\"treatment._id\">\n    <div class=\"treatment-header\">{{treatment.name}} -\n      <button (click)=\"showDialog = !showDialog; selectedTreatment = treatment\" class=\"btn\">Edit</button>\n    </div>\n  </div>\n</div>\n\n<div [(hidden)]=\"showDialog\">\n  <div class=\"container\">\n    <div class=\"card card-block\">\n      <h4>Editing {{selectedTreatment.name}}</h4>\n      <form [formGroup]=\"treatmentsEditForm\" novalidate action=\"api/treatment\" (ngSubmit)=\"editData()\">\n        <label for=\"name\">Treatment</label>\n        <input formControlName=\"_id\" type=\"text\" name=\"_id\" readonly [(ngModel)]=\"selectedTreatment._id\"><br>\n        <input formControlName=\"name\" type=\"text\" name=\"name\" [(ngModel)]=\"selectedTreatment.name\"\n               placeholder=\"Treatment Name\"><span class=\"required-field\" *ngIf=\"!treatmentsEditForm.controls.name.valid\">Required</span><br>\n        <label for=\"id\">ID</label>\n        <input formControlName=\"id\" type=\"text\" name=\"id\" [(ngModel)]=\"selectedTreatment.id\"><span class=\"required-field\" *ngIf=\"!treatmentsEditForm.controls.id.valid\">Required</span><br>\n        <label for=\"price\">Price £</label>\n        <input formControlName=\"price\" type=\"price\" name=\"price\" [(ngModel)]=\"selectedTreatment.price\"><span class=\"required-field\" *ngIf=\"!treatmentsEditForm.controls.price.valid\">Required</span><br>\n        <label for=\"products\">Products used</label>\n        <input formControlName=\"products\" type=\"products\" name=\"products\" [(ngModel)]=\"selectedTreatment.products\"><span class=\"required-field\" *ngIf=\"!treatmentsEditForm.controls.products.valid\">Required</span><br>\n        <label for=\"duration\">Duration in minutes</label>\n        <input formControlName=\"duration\" type=\"duration\" name=\"duration\"\n               [(ngModel)]=\"selectedTreatment.duration\"><span class=\"required-field\" *ngIf=\"!treatmentsEditForm.controls.duration.valid\">Required</span><br>\n        <label for=\"description\">Description</label>\n        <input formControlName=\"description\" type=\"description\" name=\"description\" [(ngModel)]=\"selectedTreatment.description\"><span class=\"required-field\" *ngIf=\"!treatmentsEditForm.controls.description.valid\">Required</span><br>\n        <label for=\"gender\">Gender</label>\n        <select formControlName=\"gender\" name=\"gender\" [(ngModel)]=\"selectedTreatment.gender\">\n          <option value=\"female\">Female</option>\n          <option value=\"male\">Male</option>\n          <option value=\"both\">Both</option>\n        </select><span class=\"required-field\" *ngIf=\"!treatmentsEditForm.controls.gender.valid\">Required</span><br>\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!treatmentsEditForm.valid\">Submit</button>\n      </form><br>\n      <button (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 708:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ })

},[708]);
//# sourceMappingURL=main.bundle.js.map