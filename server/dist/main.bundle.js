webpackJsonp([0,3],{

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 146;


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app___ = __webpack_require__(155);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app___["a" /* AppModule */]);
//# sourceMappingURL=/Users/thomasearly/ymb2/src/main.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pricelist_pricelist_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__treatments_treatments_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__treatmentlist_treatmentlist_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__aboutme_aboutme_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__aboutmelist_aboutmelist_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__showcase_showcase_component__ = __webpack_require__(95);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//const routes: Routes = [
//  { path: '',  component:  HomeComponent },
//  { path: 'pricelist', component: PriceListComponent }
//];
// Define the routes
var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'admin/treatments',
        component: __WEBPACK_IMPORTED_MODULE_4__treatments_treatments_component__["a" /* TreatmentsComponent */],
        pathMatch: 'full'
    },
    {
        path: 'treatments',
        component: __WEBPACK_IMPORTED_MODULE_5__treatmentlist_treatmentlist_component__["a" /* TreatmentListComponent */],
        pathMatch: 'full'
    },
    {
        path: 'admin/aboutme',
        component: __WEBPACK_IMPORTED_MODULE_6__aboutme_aboutme_component__["a" /* AboutmeComponent */],
        pathMatch: 'full'
    },
    {
        path: 'showcase',
        component: __WEBPACK_IMPORTED_MODULE_8__showcase_showcase_component__["a" /* ShowcaseComponent */],
        pathMatch: 'full'
    },
    {
        path: 'aboutme',
        component: __WEBPACK_IMPORTED_MODULE_7__aboutmelist_aboutmelist_component__["a" /* AboutmeListComponent */],
        pathMatch: 'full'
    },
    {
        path: 'pricelist',
        component: __WEBPACK_IMPORTED_MODULE_3__pricelist_pricelist_component__["a" /* PriceListComponent */],
        pathMatch: 'full'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=/Users/thomasearly/ymb2/src/app-routing.module.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_routing_app_routing_module__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__treatments_treatments_component__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__treatments_service__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__aboutme_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__treatmentlist_treatmentlist_component__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__aboutme_aboutme_component__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__aboutmelist_aboutmelist_component__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__showcase_showcase_component__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pricelist_pricelist_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__photo_upload_photo_upload_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__filterdata_pipe__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__topnav_topnav_component__ = __webpack_require__(157);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















// We need to import the ReactiveFormsModule and import it
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__treatments_treatments_component__["a" /* TreatmentsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_10__treatmentlist_treatmentlist_component__["a" /* TreatmentListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__aboutme_aboutme_component__["a" /* AboutmeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__aboutmelist_aboutmelist_component__["a" /* AboutmeListComponent */],
            __WEBPACK_IMPORTED_MODULE_13__showcase_showcase_component__["a" /* ShowcaseComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pricelist_pricelist_component__["a" /* PriceListComponent */],
            __WEBPACK_IMPORTED_MODULE_15__photo_upload_photo_upload_component__["a" /* PhotoUploadComponent */],
            __WEBPACK_IMPORTED_MODULE_16__filterdata_pipe__["a" /* FilterDataPipe */],
            __WEBPACK_IMPORTED_MODULE_17__topnav_topnav_component__["a" /* TopnavComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__app_routing_app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_8__treatments_service__["a" /* TreatmentsService */], __WEBPACK_IMPORTED_MODULE_9__aboutme_service__["a" /* AboutmeService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=/Users/thomasearly/ymb2/src/app.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterDataPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterDataPipe = (function () {
    function FilterDataPipe() {
    }
    FilterDataPipe.prototype.transform = function (items, args1, args2, args3) {
        return items;
    };
    return FilterDataPipe;
}());
FilterDataPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'filterDataPipe',
        pure: false
    })
], FilterDataPipe);

//# sourceMappingURL=/Users/thomasearly/ymb2/src/filterdata.pipe.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component__ = __webpack_require__(92);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(153);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__app_module__["a"]; });


//# sourceMappingURL=/Users/thomasearly/ymb2/src/index.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoUploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PhotoUploadComponent = (function () {
    function PhotoUploadComponent() {
    }
    return PhotoUploadComponent;
}());
PhotoUploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'photo-list',
        template: __webpack_require__(325)
    })
], PhotoUploadComponent);

//# sourceMappingURL=/Users/thomasearly/ymb2/src/photo-upload.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TopnavComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopnavComponent = (function () {
    function TopnavComponent() {
    }
    TopnavComponent.prototype.ngOnInit = function () {
    };
    return TopnavComponent;
}());
TopnavComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-topnav',
        template: __webpack_require__(328),
        styles: [__webpack_require__(317)]
    }),
    __metadata("design:paramtypes", [])
], TopnavComponent);

//# sourceMappingURL=/Users/thomasearly/ymb2/src/topnav.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/thomasearly/ymb2/src/environment.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
// This file includes polyfills needed by Angular 2 and is loaded before
// the app. You can add your own extra polyfills to this file.
















//# sourceMappingURL=/Users/thomasearly/ymb2/src/polyfills.js.map

/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, ".container {\n  margin-top: 10px;\n}\n\nbody {\n  background: #fff !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "h1 {\n  margin-top: 20px;\n  font-size: 1.75rem;\n}\n\n@media (max-width: 700px) {\n  .aboutme-container {\n    margin-top: 110px; /*85 for home page*/\n  }\n}\n\n@media (min-width: 701px) {\n  .aboutme-container  {\n    margin-top: 175px; /* 146 for home page*/\n  }\n}\n\nbody {\n  background: #fff !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "body {\n  background: #fff !important;\n}\n\npicture {\n  float: left;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "body {\n  background: #fff !important;\n}\n\n@media (max-width: 700px) {\n  body {\n    margin-top: 85px !important; /*85 for home page*/\n  }\n  .banner-container {\n    height: calc(100vh - 86px);\n  }\n}\n\n@media (min-width: 701px) {\n  body {\n    margin-top: 146px !important; /* 146 for home page*/\n  }\n  .banner-container {\n    height: calc(100vh - 147px);\n  }\n}\n\n._2zfs {\n  background: none !important;\n}\n\n.banner1 {\n  background:\turl(\"http://res.cloudinary.com/ymb/image/upload/v1492425831/Capture0030-Facebook-size_qe6pcu.jpg\") 50% 50% no-repeat;\n  background-size: cover;\n  height: calc(100%);\n  -webkit-filter: gray;\n          filter: gray;\n  -webkit-filter: grayscale(75%);\n          filter: grayscale(75%);\n  background-blend-mode: screen;\n /** background-color: darkturquoise;**/\n  padding: 20px;\n}\n\nh1 {\n  margin-top: 20px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "@media (max-width: 700px) {\n  .price-list-container {\n    margin-top: 110px; /*85 for home page*/\n  }\n}\n\n@media (min-width: 701px) {\n  .price-list-container {\n    margin-top: 175px; /* 146 for home page*/\n  }\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 1.7rem;\n}\n\n.list-group-item {\n  border: 0 !important;\n  padding: 7px 1px 0 1px !important;\n  font-size: 1.4rem;\n}\n\n.price-pill-color {\n  background: #59b9b5;\n}\n\n.treatment-male-pill {\n  background-color: lightblue;\n  color: white;\n}\n\n.treatment-female-pill {\n  background-color: lightpink;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "h3 {\n  text-align: left;\n  font-size: 1.7rem;\n  margin-left: 20px;\n}\n\ndiv {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\na {\n  display: inline-block;\n  margin-bottom: 8px;\n  width: calc(50% - 4px);\n  margin-right: 8px;\n  text-decoration: none;\n  color: black;\n}\n\na:nth-of-type(2n) {\n  margin-right: 0;\n}\n\n@media (max-width: 700px) {\n  h3 {\n    margin-top: 100px; /*85 for home page*/\n  }\n}\n\n@media (min-width: 701px) {\n  h3 {\n    margin-top: 168px; /* 146 for home page*/\n  }\n}\n\n@media screen and (min-width: 50em) {\n  a {\n    width: calc(25% - 6px);\n  }\n\n  a:nth-of-type(2n) {\n    margin-right: 8px;\n  }\n\n  a:nth-of-type(4n) {\n    margin-right: 0;\n  }\n}\n\na:hover img {\n  -webkit-transform: scale(1.15);\n          transform: scale(1.15);\n}\n\nfigure {\n  margin: 0;\n  overflow: hidden;\n}\n\nfigcaption {\n  margin-top: 15px;\n  font-size: 1.4rem;\n}\n\nimg {\n  border: none;\n  width: auto;\n  height: 214px;\n  display: block;\n  background: #ccc;\n  transition: -webkit-transform .5s ease-in-out;\n  transition: transform .5s ease-in-out;\n  transition: transform .5s ease-in-out, -webkit-transform .5s ease-in-out;\n}\n\n.p a {\n  display: inline;\n  font-size: 13px;\n  margin: 0;\n  text-decoration: underline;\n  color: blue;\n}\n\n.p {\n  text-align: center;\n  font-size: 13px;\n  padding-top: 100px;\n}\n\n.showcase {\n  padding: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "body {\n  background: #fff !important;\n  height: calc(100vh);\n}\n\nh1 {\n  margin-top: 20px;\n  font-size: 1.75rem;\n}\n\n.list-group-item {\n  border: 0 !important;\n  padding: 7px 1px 0 1px !important;\n  font-size: 1.1rem;\n}\n\n.price-pill-color {\n  background: #59b9b5;\n}\n\n.treatment-header {\n  font-weight: bold;\n  margin-top: 20px;\n}\n\n.treatment-male-pill {\n  background-color: lightblue;\n  color: white;\n}\n\n.treatment-female-pill {\n  background-color: lightpink;\n  color: white;\n}\n\n.treatment-description, .treatment-footer {\n  margin-top: 20px;\n}\n\n.treatment-outer {\n  border: 1px solid #c1c1c1;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  text-align: center;\n  padding: 0 25px 25px;\n  margin-bottom: 25px;\n}\n\n.treatment-description {\n  font-style: italic;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)();
// imports


// module
exports.push([module.i, "body {\n  background: #fff !important;\n}\n\n.container {\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 321:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-block\">\n    <h4 class=\"card-title\">Add a new about me paragraph</h4>\n    <form [formGroup]=\"aboutmeForm\" novalidate action=\"api/aboutme\" (ngSubmit)=\"newData()\">\n      <label for=\"description\">About me section</label>\n      <input type=\"text\" formControlName=\"description\" name=\"description\" placeholder=\"About me paragraph\"><br>\n      <button type=\"submit\" class=\"btn btn-default\">Submit</button>\n    </form>\n  </div>\n</div>\n\n<div [(hidden)]=\"showDialog\">\n  <div class=\"container\">\n    <div class=\"card card-block\">\n      <h4>Editing {{selectedAboutMe.description}}</h4>\n      <form [formGroup]=\"aboutmeEditForm\" novalidate action=\"api/aboutme\" (ngSubmit)=\"editData()\">\n        <label for=\"_id\">ID</label>\n        <input formControlName=\"_id\" type=\"text\" name=\"_id\" readonly [(ngModel)]=\"selectedAboutMe._id\"><br>\n        <label for=\"description\">Description</label>\n        <input formControlName=\"description\" type=\"text\" name=\"description\" [(ngModel)]=\"selectedAboutMe.description\" placeholder=\"Description\"><!--<span class=\"required-field\" *ngIf=\"!aboutmeEditForm.controls.description.valid\">Required</span>--><br>\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!aboutmeEditForm.valid\">Submit</button>\n        <button type=\"button\" (click)=\"deleteData(selectedAboutMe._id)\" class=\"btn btn-default\">Delete</button>\n      </form><br>\n      <button (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\n    </div>\n  </div>\n</div>\n\n<div *ngFor=\"let aboutme of aboutmelist\">\n  <div class=\"aboutme-container\" *ngIf=\"aboutme._id\">\n    <div class=\"aboutme-header\">{{aboutme.description}} -\n      <button (click)=\"showDialog = !showDialog; selectedAboutMe = aboutme\" class=\"btn\">Edit</button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 322:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 aboutme-container\">\n  <h1>About Me</h1>\n  <ul>\n    <li *ngFor=\"let aboutme of aboutmelist\">\n      {{aboutme.description}}\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ 323:
/***/ (function(module, exports) {

module.exports = "<nav id=\"menubar\" class=\"navbar navbar-toggleable-md navbar-light home-navbar-top fixed-top\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo02\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"/\">\n    <picture>\n      <source srcset=\"assets/images/ymb_small.png\" media=\"(max-width: 700px)\">\n      <source srcset=\"assets/images/ymb.png\">\n      <img src=\"/assets/images/ymb.png\" alt=\"you, me and beauty\" style=\"width:auto;\">\n    </picture>\n\n  </a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n  <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/\">home</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/pricelist\">pricelist</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/showcase\">showcase</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/aboutme\">about me</a>\n    </li>\n  </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 324:
/***/ (function(module, exports) {

module.exports = "<div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n  <ul class=\"navbar-nav mr-auto mt-2 mt-md-0\">\n    <li class=\"nav-item active\">\n      <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/\">home<span class=\"sr-only\">(current)</span></a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/pricelist\">pricelist<span class=\"sr-only\">(current)</span></a>\n    </li>\n  </ul>\n</div>\n\n<div class=\"banner-container\">\n<div class=\"banner1\">\n\n</div>\n</div>\n\n\n"

/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "This will be something...\n"

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3 price-list-container\">\n  <h1>Price List</h1>\n    <ul class=\"list-group\" *ngFor=\"let price of prices\">\n      <li class=\"list-group-item justify-content-between\">\n        {{price.name}}\n                   <!--       <span *ngIf=\"price.gender == 'male' || price.gender == 'both'\" class=\"badge badge-default badge-pill treatment-male-pill\">Male</span>\n                          <span *ngIf=\"price.gender == 'both'\">&nbsp;<img src=\"assets/images/ampersand.png\">&nbsp;</span>\n                          <span *ngIf=\"price.gender == 'female' || price.gender == 'both'\" class=\"badge badge-default badge-pill treatment-female-pill\">Female</span>-->\n\n        <span *ngIf=\"price.price\" class=\"badge badge-default badge-pill price-pill-color\">{{price.price | currency:'GBP':true:'1.2-2'}}</span>\n      </li>\n    </ul>\n</div>\n"

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = "<h3>showcase</h3>\n\n<div class=\"showcase\">\n  <a href=\"#\">\n    <figure>\n      <img src=\"https://res.cloudinary.com/ymb/image/upload/v1488637428/gel_manicure_m8gtu7.jpg\" alt=\"\">\n      <figcaption>\n        Gel manicure\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"#\">\n    <figure>\n      <img src=\"https://res.cloudinary.com/ymb/image/upload/v1488638656/pedicure_b3zals.jpg\" alt=\"\">\n      <figcaption>\n        Pedicure\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"#\">\n    <figure>\n      <img src=\"https://res.cloudinary.com/ymb/image/upload/v1488638789/eyebrow_shape_ejhdkl.jpg\" alt=\"\">\n      <figcaption>\n        Eyebrow Shape\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"#\">\n    <figure>\n      <img src=\"https://res.cloudinary.com/ymb/image/upload/v1488640245/wedding1_nmypav.jpg\" alt=\"\">\n      <figcaption>\n         Wedding #1\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"#\">\n    <figure>\n      <img src=\"https://res.cloudinary.com/ymb/image/upload/v1488640245/wedding2_yxylal.jpg\" alt=\"\">\n      <figcaption>\n        Wedding #2\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"#\">\n    <figure>\n      <img src=\"https://res.cloudinary.com/ymb/image/upload/v1488640245/wedding3_m9jy15.jpg\" alt=\"\">\n      <figcaption>\n        Wedding #3\n      </figcaption>\n    </figure>\n  </a>\n  <a href=\"#\">\n    <figure>\n      <img src=\"https://res.cloudinary.com/ymb/image/upload/v1488640245/wedding4_yaonjw.jpg\" alt=\"\">\n      <figcaption>\n        Wedding #4\n      </figcaption>\n    </figure>\n  </a>\n</div>\n"

/***/ }),

/***/ 328:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 329:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 offset-md-3\">\n  <h1>Treatments</h1>\n\n  <div>\n    <div>Filter by:</div>\n    <div>Price:    </div>\n    <div>Gender:   </div>\n  </div>\n\n    <div *ngFor=\"let treatment of treatments\">\n      <div class=\"treatment-outer\">\n        <div class=\"treatment-header\">{{treatment.name}} using {{treatment.products}}</div>\n        <div class=\"treatment-description\">{{treatment.description}}</div>\n        <br>\n        <span *ngIf=\"treatment.gender == 'male' || treatment.gender == 'both'\" class=\"badge badge-default badge-pill treatment-male-pill\">Male</span>\n        <span *ngIf=\"treatment.gender == 'both'\">&nbsp;&&nbsp;</span>\n        <span *ngIf=\"treatment.gender == 'female' || treatment.gender == 'both'\" class=\"badge badge-default badge-pill treatment-female-pill\">Female</span>\n        <br>\n        <div class=\"treatment-footer\">{{treatment.duration}} minutes for <span class=\"badge badge-default price-pill-color grad\">{{treatment.price | currency:'GBP':true:'1.2-2'}}</span></div>\n      </div>\n    </div>\n</div>\n"

/***/ }),

/***/ 330:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card card-block\">\n    <h4 class=\"card-title\">Add a new treatment</h4>\n    <form [formGroup]=\"treatmentsForm\" novalidate action=\"api/treatment\" (ngSubmit)=\"newData()\">\n      <label for=\"name\">Treatment</label>\n      <input formControlName=\"name\" type=\"text\" name=\"name\" placeholder=\"Treatment Name\" id=\"name\"><br>\n      <label for=\"id\">ID</label>\n      <input formControlName=\"id\" type=\"text\" name=\"id\" placeholder=\"ID\" id=\"id\"><br>\n      <label for=\"price\">Price £</label>\n      <input formControlName=\"price\" type=\"price\" name=\"price\" placeholder=\"£0.00\" id=\"price\"><br>\n      <label for=\"products\">Products used</label>\n      <input formControlName=\"products\" type=\"products\" name=\"products\" placeholder=\"e.g. leg wax...\" id=\"products\"><br>\n      <label for=\"description\">Products used</label>\n      <input formControlName=\"description\" type=\"description\" name=\"description\" placeholder=\"e.g. luxury leg wax with ...\" id=\"description\"><br>\n      <label for=\"duration\">Durations in minutes</label>\n      <input formControlName=\"duration\" type=\"duration\" name=\"duration\" placeholder=\"e.g. 20 minutes\" id=\"duration\"><br>\n      <label for=\"gender\">Gender</label>\n      <select formControlName=\"gender\" name=\"gender\" id=\"gender\">\n        <option value=\"female\">Female</option>\n        <option value=\"male\">Male</option>\n        <option value=\"both\">Both</option>\n      </select>\n      <br>\n      <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!treatmentsForm.valid\">Submit</button>\n    </form>\n  </div>\n</div>\n\n<div [(hidden)]=\"showDialog\">\n  <div class=\"container\">\n    <div class=\"card card-block\">\n      <h4>Editing {{selectedTreatment.name}}</h4>\n      <form [formGroup]=\"treatmentsEditForm\" novalidate action=\"api/treatment\" (ngSubmit)=\"editData()\">\n        <label for=\"name\">Treatment</label>\n        <input formControlName=\"_id\" type=\"text\" name=\"_id\" readonly [(ngModel)]=\"selectedTreatment._id\"><br>\n        <input formControlName=\"name\" type=\"text\" name=\"name\" [(ngModel)]=\"selectedTreatment.name\"\n               placeholder=\"Treatment Name\"><span class=\"required-field\" *ngIf=\"!treatmentsEditForm.controls.name.valid\">Required</span><br>\n        <label for=\"id\">ID</label>\n        <input formControlName=\"id\" type=\"text\" name=\"id\" [(ngModel)]=\"selectedTreatment.id\"><span class=\"required-field\" *ngIf=\"!treatmentsEditForm.controls.id.valid\">Required</span><br>\n        <label for=\"price\">Price £</label>\n        <input formControlName=\"price\" type=\"price\" name=\"price\" [(ngModel)]=\"selectedTreatment.price\"><span class=\"required-field\" *ngIf=\"!treatmentsEditForm.controls.price.valid\">Required</span><br>\n        <label for=\"products\">Products used</label>\n        <input formControlName=\"products\" type=\"products\" name=\"products\" [(ngModel)]=\"selectedTreatment.products\"><span class=\"required-field\" *ngIf=\"!treatmentsEditForm.controls.products.valid\">Required</span><br>\n        <label for=\"duration\">Duration in minutes</label>\n        <input formControlName=\"duration\" type=\"duration\" name=\"duration\"\n               [(ngModel)]=\"selectedTreatment.duration\"><span class=\"required-field\" *ngIf=\"!treatmentsEditForm.controls.duration.valid\">Required</span><br>\n        <label for=\"description\">Description</label>\n        <input formControlName=\"description\" type=\"description\" name=\"description\" [(ngModel)]=\"selectedTreatment.description\"><span class=\"required-field\" *ngIf=\"!treatmentsEditForm.controls.description.valid\">Required</span><br>\n        <label for=\"gender\">Gender</label>\n        <select formControlName=\"gender\" name=\"gender\" [(ngModel)]=\"selectedTreatment.gender\">\n          <option value=\"female\">Female</option>\n          <option value=\"male\">Male</option>\n          <option value=\"both\">Both</option>\n        </select><span class=\"required-field\" *ngIf=\"!treatmentsEditForm.controls.gender.valid\">Required</span><br>\n        <button type=\"submit\" class=\"btn btn-default\" [disabled]=\"!treatmentsEditForm.valid\">Submit</button>\n        <button type=\"button\" (click)=\"deleteData(selectedTreatment._id)\" class=\"btn btn-default\">Delete</button>\n      </form><br>\n      <button (click)=\"showDialog = !showDialog\" class=\"btn\">Close</button>\n    </div>\n  </div>\n</div>\n\n<h4 class=\"card-title\">Edit existing treatments</h4>\n\n<div *ngFor=\"let treatment of treatments\">\n  <div class=\"treatment-outer\" *ngIf=\"treatment._id\">\n    <div class=\"treatment-header\">{{treatment.name}} -\n      <button (click)=\"showDialog = !showDialog; selectedTreatment = treatment\" class=\"btn\">Edit</button>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(147);


/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(62);
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
    AboutmeService.prototype.deleteData = function (_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http
            .delete("/api/aboutme/" + _id, {
            headers: headers
        })
            .subscribe(function (data) {
            alert('About me section deleted');
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
    };
    AboutmeService.prototype.editData = function (inputData) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        var body = inputData;
        console.log("This is the ID - " + body._id);
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
    return AboutmeService;
}());
AboutmeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AboutmeService);

var _a;
//# sourceMappingURL=/Users/thomasearly/ymb2/src/aboutme.service.js.map

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(62);
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
    TreatmentsService.prototype.deleteData = function (_id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        this.http
            .delete("/api/treatments/" + _id, {
            headers: headers
        })
            .subscribe(function (data) {
            alert('Treatment deleted');
        }, function (error) {
            console.log(JSON.stringify(error.json()));
        });
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
    return TreatmentsService;
}());
TreatmentsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */]) === "function" && _a || Object])
], TreatmentsService);

var _a;
//# sourceMappingURL=/Users/thomasearly/ymb2/src/treatments.service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutme_service__ = __webpack_require__(46);
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
        this.showDialog = true;
        this.selectedAboutMe = {
            _id: null
        };
        this.aboutmeForm = this.fb.group({
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
        this.aboutmeEditForm = this.fb.group({
            _id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            description: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]
        });
    }
    AboutmeComponent.prototype.deleteData = function (_id) {
        console.log(_id);
        this.aboutmeService.deleteData(_id);
    };
    AboutmeComponent.prototype.newData = function () {
        this.aboutmeService.newData(this.aboutmeForm.value);
    };
    AboutmeComponent.prototype.editData = function () {
        this.aboutmeService.editData(this.aboutmeEditForm.value);
    };
    AboutmeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Retrieve Treatment from the API
        this.aboutmeService.getAboutmeInfo().subscribe(function (aboutmeInfo) {
            _this.aboutmelist = aboutmeInfo;
        });
    };
    return AboutmeComponent;
}());
AboutmeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-aboutme',
        template: __webpack_require__(321),
        styles: [__webpack_require__(311)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__aboutme_service__["a" /* AboutmeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__aboutme_service__["a" /* AboutmeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object])
], AboutmeComponent);

var _a, _b;
//# sourceMappingURL=/Users/thomasearly/ymb2/src/aboutme.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aboutme_service__ = __webpack_require__(46);
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
    return AboutmeListComponent;
}());
AboutmeListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-aboutmelist',
        template: __webpack_require__(322),
        styles: [__webpack_require__(312)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__aboutme_service__["a" /* AboutmeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__aboutme_service__["a" /* AboutmeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object])
], AboutmeListComponent);

var _a, _b;
//# sourceMappingURL=/Users/thomasearly/ymb2/src/aboutmelist.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(323),
        styles: [__webpack_require__(313)]
    })
], AppComponent);

//# sourceMappingURL=/Users/thomasearly/ymb2/src/app.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__aboutme_service__ = __webpack_require__(46);
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
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(324),
        styles: [__webpack_require__(314)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__aboutme_service__["a" /* AboutmeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__aboutme_service__["a" /* AboutmeService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=/Users/thomasearly/ymb2/src/home.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__treatments_service__ = __webpack_require__(47);
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
    return PriceListComponent;
}());
PriceListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-pricelist',
        template: __webpack_require__(326),
        styles: [__webpack_require__(315)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__treatments_service__["a" /* TreatmentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__treatments_service__["a" /* TreatmentsService */]) === "function" && _a || Object])
], PriceListComponent);

var _a;
//# sourceMappingURL=/Users/thomasearly/ymb2/src/pricelist.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ShowcaseComponent = (function () {
    function ShowcaseComponent() {
    }
    return ShowcaseComponent;
}());
ShowcaseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-aboutme',
        template: __webpack_require__(327),
        styles: [__webpack_require__(316)]
    })
], ShowcaseComponent);

//# sourceMappingURL=/Users/thomasearly/ymb2/src/showcase.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__treatments_service__ = __webpack_require__(47);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreatmentListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { FilterDataPipe } from '../filterdata.pipe';
var TreatmentListComponent = (function () {
    function TreatmentListComponent(treatmentsService) {
        this.treatmentsService = treatmentsService;
        this.treatments = [];
    }
    TreatmentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.treatmentsService.getAllTreatments().subscribe(function (treatmentData) {
            _this.treatments = treatmentData;
        });
    };
    return TreatmentListComponent;
}());
TreatmentListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-treatmentlist',
        template: __webpack_require__(329),
        styles: [__webpack_require__(318)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__treatments_service__["a" /* TreatmentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__treatments_service__["a" /* TreatmentsService */]) === "function" && _a || Object])
], TreatmentListComponent);

var _a;
//# sourceMappingURL=/Users/thomasearly/ymb2/src/treatmentlist.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__treatments_service__ = __webpack_require__(47);
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
            price: [''],
            id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            products: [''],
            description: [''],
            duration: ['']
        });
        this.treatmentsEditForm = this.fb.group({
            _id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            price: [''],
            id: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            gender: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            products: [''],
            description: [''],
            duration: ['']
        });
    }
    TreatmentsComponent.prototype.deleteData = function (_id) {
        this.treatmentsService.deleteData(_id);
    };
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
    return TreatmentsComponent;
}());
TreatmentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-treatments',
        template: __webpack_require__(330),
        styles: [__webpack_require__(319)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__treatments_service__["a" /* TreatmentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__treatments_service__["a" /* TreatmentsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _b || Object])
], TreatmentsComponent);

var _a, _b;
//# sourceMappingURL=/Users/thomasearly/ymb2/src/treatments.component.js.map

/***/ })

},[363]);
//# sourceMappingURL=main.bundle.js.map