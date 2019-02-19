(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _colorutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./colorutil */ "./src/app/colorutil.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.ptcolors = _colorutil__WEBPACK_IMPORTED_MODULE_1__["ptcolors"];
        this.jscolors = _colorutil__WEBPACK_IMPORTED_MODULE_1__["jscolors"];
        this.othercolors = _colorutil__WEBPACK_IMPORTED_MODULE_1__["othercolors"];
        this.greycolors = _colorutil__WEBPACK_IMPORTED_MODULE_1__["greycolors"];
        this.brightcolors = _colorutil__WEBPACK_IMPORTED_MODULE_1__["brightcolors"];
        this.darkcolors = _colorutil__WEBPACK_IMPORTED_MODULE_1__["darkcolors"];
        this.generator_default = _colorutil__WEBPACK_IMPORTED_MODULE_1__["generator_default"];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.html */ "./src/app/app.html"),
            styles: [__webpack_require__(/*! ./app.scss */ "./src/app/app.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.html":
/*!**************************!*\
  !*** ./src/app/app.html ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"header\" id=\"header\">\r\n\r\n  <img class=\"logo\" src=\"https://content.justinschaaf.com/common/logos/js-stylesheet512.png\" height=\"128\" width=\"128\">\r\n\r\n  <h1 class=\"title\">Justin's Reference Stylesheet</h1>\r\n  <p class=\"heading-desc\">\r\n    This is a color palette with 300+ different colors and a few fonts from my various projects or\r\n    just colors that look nice. Feel free to use any of them. A link back here would be appreciated 😊.\r\n  </p>\r\n\r\n  <br>\r\n  \r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n\r\n<div class=\"spoiler_container\">\r\n  <h2 class=\"textbanner\" [style.background-color]=\"ptcolors[0].C500\" [style.color]=\"ptcolors[0].contrast.C500\">Pinetree</h2>\r\n  <input class=\"spoilerbutton\" type=\"button\" value=\"Show\" onclick=\"this.value=this.value=='Show'?'Hide':'Show';\">\r\n  <div class=\"spoiler\">\r\n    <div>\r\n\r\n        <h2>Font - Rubik</h2>\r\n  \r\n        <font-specimen class=\"pt\"></font-specimen>\r\n  \r\n        <h2>Colors</h2>\r\n  \r\n        <br>\r\n  \r\n      <swatch-row *ngFor=\"let ptcolor of ptcolors; index as i\" [color]=\"ptcolor\"></swatch-row>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"spoiler_container\">\r\n  <h2 class=\"textbanner\" [style.background-color]=\"jscolors[0].C500\" [style.color]=\"jscolors[0].contrast.C500\">Js</h2>\r\n  <input class=\"spoilerbutton\" type=\"button\" value=\"Show\" onclick=\"this.value=this.value=='Show'?'Hide':'Show';\">\r\n  <div class=\"spoiler\">\r\n    <div>\r\n\r\n      <h2>Fonts - Major Mono Display / Overpass</h2>\r\n\r\n      <font-specimen class=\"js\"></font-specimen>\r\n\r\n      <h2>Colors</h2>\r\n\r\n      <br>\r\n\r\n      <swatch-row *ngFor=\"let jscolor of jscolors; index as i\" [color]=\"jscolor\"></swatch-row>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"spoiler_container\">\r\n  <h2 class=\"textbanner\" [style.background-color]=\"othercolors[0].C500\" [style.color]=\"othercolors[0].contrast.C500\">Retired Projects</h2>\r\n  <input class=\"spoilerbutton\" type=\"button\" value=\"Show\" onclick=\"this.value=this.value=='Show'?'Hide':'Show';\">\r\n  <div class=\"spoiler\">\r\n    <div>\r\n\r\n      <h2>TV Fonts - Vanilla / Merriweather</h2>\r\n\r\n      <font-specimen class=\"tv\"></font-specimen>\r\n\r\n      <h2>Colors</h2>\r\n\r\n      <br>\r\n      \r\n      <swatch-row *ngFor=\"let othercolor of othercolors; index as i\" [color]=\"othercolor\"></swatch-row>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"spoiler_container\">\r\n  <h2 class=\"textbanner\" [style.background-color]=\"greycolors[0].C500\" [style.color]=\"greycolors[0].contrast.C500\">Greyscale Colors</h2>\r\n  <input class=\"spoilerbutton\" type=\"button\" value=\"Show\" onclick=\"this.value=this.value=='Show'?'Hide':'Show';\">\r\n  <div class=\"spoiler\">\r\n    <div>\r\n      <swatch-row *ngFor=\"let greycolor of greycolors; index as i\" [color]=\"greycolor\"></swatch-row>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"spoiler_container\">\r\n  <h2 class=\"textbanner\" [style.background-color]=\"brightcolors[0].C500\" [style.color]=\"brightcolors[0].contrast.C500\">Bright Colors</h2>\r\n  <input class=\"spoilerbutton\" type=\"button\" value=\"Show\" onclick=\"this.value=this.value=='Show'?'Hide':'Show';\">\r\n  <div class=\"spoiler\">\r\n    <div>\r\n      <swatch-row *ngFor=\"let brightcolor of brightcolors; index as i\" [color]=\"brightcolor\"></swatch-row>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"spoiler_container\">\r\n  <h2 class=\"textbanner\" [style.background-color]=\"darkcolors[0].C500\" [style.color]=\"darkcolors[0].contrast.C500\">Dark Colors</h2>\r\n  <input class=\"spoilerbutton\" type=\"button\" value=\"Show\" onclick=\"this.value=this.value=='Show'?'Hide':'Show';\">\r\n  <div class=\"spoiler\">\r\n    <div>\r\n      <swatch-row *ngFor=\"let darkcolor of darkcolors; index as i\" [color]=\"darkcolor\"></swatch-row>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"generator_container\">\r\n\r\n  <h2 class=\"textbanner\" [style.background-color]=\"generator_default\" style.color=\"#ffffff\">Swatch Generator</h2>\r\n  \r\n  <app-generator></app-generator>\r\n  \r\n</div>\r\n\r\n<div class=\"footer\" id=\"footer\">\r\n\r\n  <br>\r\n\r\n  <div class=\"links\">\r\n    \r\n    <div class=\"link\">\r\n      <a href=\"https://www.github.com/justinhschaaf/ColorFormatter\" class=\"footer-link\">Color Formatting Tool</a>\r\n    </div>\r\n\r\n    <div class=\"link\">\r\n      <a href=\"https://www.github.com/justinhschaaf/ReferenceStylesheet\" class=\"footer-link\">Source</a>\r\n    </div>\r\n\r\n    <div class=\"link\">\r\n      <a href=\"#header\" class=\"footer-link\">TOP</a>\r\n    </div>\r\n\r\n    <div class=\"link\">\r\n      <a href=\"https://justinschaaf.com\" class=\"footer-link\">Main Site</a>\r\n    </div>\r\n\r\n    <div class=\"link\">\r\n      <a href=\"https://liberapay.com/justinhschaaf\" class=\"footer-link\">Donate</a>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <br>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _swatch_swatch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./swatch/swatch.component */ "./src/app/swatch/swatch.component.ts");
/* harmony import */ var _swatch_row_swatch_row_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./swatch-row/swatch-row.component */ "./src/app/swatch-row/swatch-row.component.ts");
/* harmony import */ var _font_specimen_font_specimen_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./font-specimen/font-specimen.component */ "./src/app/font-specimen/font-specimen.component.ts");
/* harmony import */ var _generator_generator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./generator/generator.component */ "./src/app/generator/generator.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _swatch_swatch_component__WEBPACK_IMPORTED_MODULE_6__["SwatchComponent"],
                _swatch_row_swatch_row_component__WEBPACK_IMPORTED_MODULE_7__["SwatchRowComponent"],
                _font_specimen_font_specimen_component__WEBPACK_IMPORTED_MODULE_8__["FontSpecimenComponent"],
                _generator_generator_component__WEBPACK_IMPORTED_MODULE_9__["GeneratorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_3__["ColorPickerModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.scss":
/*!**************************!*\
  !*** ./src/app/app.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/colorutil.ts":
/*!******************************!*\
  !*** ./src/app/colorutil.ts ***!
  \******************************/
/*! exports provided: colortypes, dark_primary_text, light_primary_text, contrast_default, ptcolors, jscolors, othercolors, greycolors, brightcolors, darkcolors, generator_default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colortypes", function() { return colortypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dark_primary_text", function() { return dark_primary_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "light_primary_text", function() { return light_primary_text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contrast_default", function() { return contrast_default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ptcolors", function() { return ptcolors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jscolors", function() { return jscolors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "othercolors", function() { return othercolors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greycolors", function() { return greycolors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brightcolors", function() { return brightcolors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darkcolors", function() { return darkcolors; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generator_default", function() { return generator_default; });
var colortypes = [
    "C50",
    "C100",
    "C200",
    "C300",
    "C400",
    "C500",
    "C600",
    "C700",
    "C800",
    "C900",
];
var dark_primary_text = "#111";
var light_primary_text = "#fff";
var contrast_default = {
    C50: dark_primary_text,
    C100: dark_primary_text,
    C200: dark_primary_text,
    C300: dark_primary_text,
    C400: dark_primary_text,
    C500: light_primary_text,
    C600: light_primary_text,
    C700: light_primary_text,
    C800: light_primary_text,
    C900: light_primary_text,
    A100: dark_primary_text,
    A200: light_primary_text,
    A400: light_primary_text,
    A700: light_primary_text
};
var ptcolors = [
    {
        metadata: {
            title: "Evergreen"
        },
        C50: "#00ce8b",
        C100: "#00c679",
        C200: "#00bc69",
        C300: "#00b05b",
        C400: "#00a24f",
        C500: "#009245",
        C600: "#007734",
        C700: "#005927",
        C800: "#00431d",
        C900: "#003216",
        A100: "#00ae58",
        A200: "#00a14e",
        A400: "#00823b",
        A700: "#006f32",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Fjord"
        },
        C50: "#c7dae1",
        C100: "#bdd3dc",
        C200: "#b1cbd6",
        C300: "#a3c2cf",
        C400: "#93b7c7",
        C500: "#80aabd",
        C600: "#6095ac",
        C700: "#487a97",
        C800: "#365b7d",
        C900: "#28445e",
        A100: "#a0bfce",
        A200: "#91b5c6",
        A400: "#6d9db3",
        A700: "#5d8ea8",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Rose"
        },
        C50: "#ea0000",
        C100: "#e60000",
        C200: "#e20000",
        C300: "#dd0000",
        C400: "#d70000",
        C500: "#d00000",
        C600: "#c40000",
        C700: "#b50000",
        C800: "#a20000",
        C900: "#8b0000",
        A100: "#dc0000",
        A200: "#d60000",
        A400: "#c90000",
        A700: "#c10000",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Irridium"
        },
        C50: "#f4f4f4",
        C100: "#f2f2f2",
        C200: "#f0f0f0",
        C300: "#ededed",
        C400: "#eaeaea",
        C500: "#e6e6e6",
        C600: "#e0e0e0",
        C700: "#d8d8d8",
        C800: "#cecece",
        C900: "#c2c2c2",
        A100: "#ececec",
        A200: "#e9e9e9",
        A400: "#e2e2e2",
        A700: "#dedede",
        contrast: {
            C50: dark_primary_text,
            C100: dark_primary_text,
            C200: dark_primary_text,
            C300: dark_primary_text,
            C400: dark_primary_text,
            C500: dark_primary_text,
            C600: dark_primary_text,
            C700: dark_primary_text,
            C800: dark_primary_text,
            C900: dark_primary_text,
            A100: dark_primary_text,
            A200: dark_primary_text,
            A400: dark_primary_text,
            A700: dark_primary_text,
        }
    },
    {
        metadata: {
            title: "Titanium"
        },
        C50: "#454545",
        C100: "#3c3c3c",
        C200: "#343434",
        C300: "#2d2d2d",
        C400: "#272727",
        C500: "#222222",
        C600: "#191919",
        C700: "#131313",
        C800: "#0e0e0e",
        C900: "#0a0a0a",
        A100: "#2a2a2a",
        A200: "#252525",
        A400: "#1c1c1c",
        A700: "#181818",
        contrast: {
            C50: light_primary_text,
            C100: light_primary_text,
            C200: light_primary_text,
            C300: light_primary_text,
            C400: light_primary_text,
            C500: light_primary_text,
            C600: light_primary_text,
            C700: light_primary_text,
            C800: light_primary_text,
            C900: light_primary_text,
            A100: light_primary_text,
            A200: light_primary_text,
            A400: light_primary_text,
            A700: light_primary_text,
        }
    }
];
var jscolors = [
    {
        metadata: {
            title: "Dark"
        },
        C50: "#222222",
        C100: "#1e1e1e",
        C200: "#1a1a1a",
        C300: "#171717",
        C400: "#141414",
        C500: "#111111",
        C600: "#0d0d0d",
        C700: "#0a0a0a",
        C800: "#070707",
        C900: "#050505",
        contrast: {
            C50: light_primary_text,
            C100: light_primary_text,
            C200: light_primary_text,
            C300: light_primary_text,
            C400: light_primary_text,
            C500: light_primary_text,
            C600: light_primary_text,
            C700: light_primary_text,
            C800: light_primary_text,
            C900: light_primary_text
        }
    },
    {
        metadata: {
            title: "Light"
        },
        C50: "#ffffff",
        C100: "#ffffff",
        C200: "#ffffff",
        C300: "#ffffff",
        C400: "#ffffff",
        C500: "#ffffff",
        C600: "#ffffff",
        C700: "#ffffff",
        C800: "#ffffff",
        C900: "#ffffff",
        contrast: {
            C50: dark_primary_text,
            C100: dark_primary_text,
            C200: dark_primary_text,
            C300: dark_primary_text,
            C400: dark_primary_text,
            C500: dark_primary_text,
            C600: dark_primary_text,
            C700: dark_primary_text,
            C800: dark_primary_text,
            C900: dark_primary_text
        }
    }
];
var othercolors = [
    {
        metadata: {
            title: "Moonlight"
        },
        C50: "#507d9d",
        C100: "#466d8c",
        C200: "#3d5f7a",
        C300: "#35536a",
        C400: "#2e485c",
        C500: "#283f50",
        C600: "#1e2f3c",
        C700: "#16232d",
        C800: "#101a22",
        C900: "#0c1319",
        A100: "#334f67",
        A200: "#2d465b",
        A400: "#223544",
        A700: "#1d2d3a",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "TV Grass Green"
        },
        C50: "#9fe9a5",
        C100: "#8ee595",
        C200: "#7ce082",
        C300: "#6cda71",
        C400: "#5ed462",
        C500: "#52cc55",
        C600: "#3dbf40",
        C700: "#2eaf30",
        C800: "#229b24",
        C900: "#19821b",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "TV High Blue"
        },
        C50: "#11dae4",
        C100: "#0fd3df",
        C200: "#0dcbd9",
        C300: "#0bc2d2",
        C400: "#0ab7ca",
        C500: "#09aac1",
        C600: "#0795b1",
        C700: "#057a9d",
        C800: "#045b84",
        C900: "#034465",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "TV S2"
        },
        C50: "#85c3d5",
        C100: "#74b8ce",
        C200: "#65acc5",
        C300: "#589dbb",
        C400: "#4d8caf",
        C500: "#437aa1",
        C600: "#325b89",
        C700: "#25446b",
        C800: "#1c3350",
        C900: "#15263c",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "TV S3"
        },
        C50: "#ffee00",
        C100: "#ffeb00",
        C200: "#ffe700",
        C300: "#ffe300",
        C400: "#ffde00",
        C500: "#ffd800",
        C600: "#ffce00",
        C700: "#ffc200",
        C800: "#ffb300",
        C900: "#ffa000",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "TV S6"
        },
        C50: "#ffb4bd",
        C100: "#ffa7b1",
        C200: "#ff98a3",
        C300: "#ff8693",
        C400: "#ff7580",
        C500: "#ff666f",
        C600: "#ff4c53",
        C700: "#ff393e",
        C800: "#ff2b2e",
        C900: "#ff2022",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "TV S8"
        },
        C50: "#efce7a",
        C100: "#ecc56a",
        C200: "#e9bb5c",
        C300: "#e5af50",
        C400: "#e1a146",
        C500: "#dc913d",
        C600: "#d3752e",
        C700: "#c85822",
        C800: "#ba4219",
        C900: "#a93113",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "TV SX"
        },
        C50: "#da0000",
        C100: "#d30000",
        C200: "#cb0000",
        C300: "#c20000",
        C400: "#b70000",
        C500: "#aa0000",
        C600: "#950000",
        C700: "#7a0000",
        C800: "#5b0000",
        C900: "#440000",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "TV Gold"
        },
        C50: "#f5dc71",
        C100: "#f3d662",
        C200: "#f1cf55",
        C300: "#efc74a",
        C400: "#ecbd40",
        C500: "#e9b138",
        C600: "#e39d2a",
        C700: "#dc841f",
        C800: "#d36517",
        C900: "#c84c11",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "TV Silver"
        },
        C50: "#dddddd",
        C100: "#d7d7d7",
        C200: "#d0d0d0",
        C300: "#c8c8c8",
        C400: "#bebebe",
        C500: "#b3b3b3",
        C600: "#a0a0a0",
        C700: "#888888",
        C800: "#6a6a6a",
        C900: "#4f4f4f",
        contrast: contrast_default
    }
];
var greycolors = [
    {
        metadata: {
            title: "Simply Grey"
        },
        C50: "#d1d1d1",
        C100: "#c9c9c9",
        C200: "#c0c0c0",
        C300: "#b5b5b5",
        C400: "#a8a8a8",
        C500: "#999999",
        C600: "#7f7f7f",
        C700: "#5f5f5f",
        C800: "#474747",
        C900: "#353535",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "(Almost) Full Greyscale"
        },
        C50: "#e5e5e5",
        C100: "#cccccc",
        C200: "#b2b2b2",
        C300: "#999999",
        C400: "#7f7f7f",
        C500: "#666666",
        C600: "#4c4c4c",
        C700: "#333333",
        C800: "#191919",
        C900: "#000000",
        contrast: contrast_default
    }
];
var brightcolors = [
    {
        metadata: {
            title: "Strawberry"
        },
        C50: "#f72245",
        C100: "#f61e3c",
        C200: "#f51a34",
        C300: "#f3172d",
        C400: "#f11427",
        C500: "#ee1122",
        C600: "#ea0d19",
        C700: "#e50a13",
        C800: "#de070e",
        C900: "#d6050a",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Tangelo"
        },
        C50: "#f7c146",
        C100: "#f6b63d",
        C200: "#f4a935",
        C300: "#f29a2e",
        C400: "#f08828",
        C500: "#ed7623",
        C600: "#e8581a",
        C700: "#e24213",
        C800: "#db310e",
        C900: "#d2250a",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Lemon"
        },
        C50: "#fbe97a",
        C100: "#fae56a",
        C200: "#f9e05c",
        C300: "#f8db50",
        C400: "#f7d546",
        C500: "#f6ce3d",
        C600: "#f4c22e",
        C700: "#f1b322",
        C800: "#eda019",
        C900: "#e88813",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Lime"
        },
        C50: "#67e967",
        C100: "#5ae55a",
        C200: "#4ee04e",
        C300: "#44da44",
        C400: "#3bd43b",
        C500: "#33cc33",
        C600: "#26bf26",
        C700: "#1caf1c",
        C800: "#159b15",
        C900: "#108210",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Turquoise"
        },
        C50: "#67e9e9",
        C100: "#5ae5e5",
        C200: "#4ee0e0",
        C300: "#44dada",
        C400: "#3bd4d4",
        C500: "#33cccc",
        C600: "#26bfbf",
        C700: "#1cafaf",
        C800: "#159b9b",
        C900: "#108282",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Sky Blue"
        },
        C50: "#b4e9ff",
        C100: "#a7e5ff",
        C200: "#98e0ff",
        C300: "#86daff",
        C400: "#75d4ff",
        C500: "#66ccff",
        C600: "#4cbfff",
        C700: "#39afff",
        C800: "#2b9bff",
        C900: "#2082ff",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Vibrant Sapphire"
        },
        C50: "#3333f2",
        C100: "#2c2cf0",
        C200: "#2626ed",
        C300: "#2121ea",
        C400: "#1d1de6",
        C500: "#1919e2",
        C600: "#1313db",
        C700: "#0e0ed2",
        C800: "#0a0ac7",
        C900: "#0707b9",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Blueberry"
        },
        C50: "#9318ec",
        C100: "#8015e9",
        C200: "#6f12e5",
        C300: "#6110e0",
        C400: "#540eda",
        C500: "#490cd3",
        C600: "#3709c8",
        C700: "#2907ba",
        C800: "#1f05a9",
        C900: "#170493",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Blackberry"
        },
        C50: "#d100e9",
        C100: "#c900e5",
        C200: "#c000e0",
        C300: "#b500da",
        C400: "#a800d4",
        C500: "#9900cc",
        C600: "#7f00bf",
        C700: "#5f00af",
        C800: "#47009b",
        C900: "#350082",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Grape"
        },
        C50: "#e967e9",
        C100: "#e55ae5",
        C200: "#e04ee0",
        C300: "#da44da",
        C400: "#d43bd4",
        C500: "#cc33cc",
        C600: "#bf26bf",
        C700: "#af1caf",
        C800: "#9b159b",
        C900: "#821082",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Lambo" // Image search "LTT Lambo" and you'll get the reference
        },
        C50: "#ffd1e9",
        C100: "#ffc9e5",
        C200: "#ffc0e0",
        C300: "#ffb5da",
        C400: "#ffa8d4",
        C500: "#ff99cc",
        C600: "#ff7fbf",
        C700: "#ff5faf",
        C800: "#ff479b",
        C900: "#ff3582",
        contrast: contrast_default
    }
];
var darkcolors = [
    {
        metadata: {
            title: "Redstone"
        },
        C50: "#dc6a6a",
        C100: "#d65c5c",
        C200: "#cf5050",
        C300: "#c74646",
        C400: "#bd3d3d",
        C500: "#b13535",
        C600: "#9d2828",
        C700: "#841e1e",
        C800: "#651616",
        C900: "#4c1010",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Rust"
        },
        C50: "#dcb66a",
        C100: "#d6a95c",
        C200: "#cf9a50",
        C300: "#c78846",
        C400: "#bd763d",
        C500: "#b16735",
        C600: "#9d4d28",
        C700: "#843a1e",
        C800: "#652b16",
        C900: "#4c2010",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Bronze"
        },
        C50: "#efca25",
        C100: "#ecc120",
        C200: "#e9b61c",
        C300: "#e5a918",
        C400: "#e09a15",
        C500: "#da8812",
        C600: "#d16a0d",
        C700: "#c54f0a",
        C800: "#b63b07",
        C900: "#a42c05",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Brass"
        },
        C50: "#ffd167",
        C100: "#ffc95a",
        C200: "#ffc04e",
        C300: "#ffb544",
        C400: "#ffa83b",
        C500: "#ff9933",
        C600: "#ff7f26",
        C700: "#ff5f1c",
        C800: "#ff4715",
        C900: "#ff3510",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Jalapeño"
        },
        C50: "#b4d167",
        C100: "#a7c95a",
        C200: "#98c04e",
        C300: "#86b544",
        C400: "#75a83b",
        C500: "#669933",
        C600: "#4c7f26",
        C700: "#395f1c",
        C800: "#2b4715",
        C900: "#203510",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Dusk"
        },
        C50: "#67d1d1",
        C100: "#5ac9c9",
        C200: "#4ec0c0",
        C300: "#44b5b5",
        C400: "#3ba8a8",
        C500: "#339999",
        C600: "#267f7f",
        C700: "#1c5f5f",
        C800: "#154747",
        C900: "#103535",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Ocean"
        },
        C50: "#67b4d1",
        C100: "#5aa7c9",
        C200: "#4e98c0",
        C300: "#4486b5",
        C400: "#3b75a8",
        C500: "#336699",
        C600: "#264c7f",
        C700: "#1c395f",
        C800: "#152b47",
        C900: "#102035",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Obsidian"
        },
        C50: "#b467d1",
        C100: "#a75ac9",
        C200: "#984ec0",
        C300: "#8644b5",
        C400: "#753ba8",
        C500: "#663399",
        C600: "#4c267f",
        C700: "#391c5f",
        C800: "#2b1547",
        C900: "#201035",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Eggplant"
        },
        C50: "#d167d1",
        C100: "#c95ac9",
        C200: "#c04ec0",
        C300: "#b544b5",
        C400: "#a83ba8",
        C500: "#993399",
        C600: "#7f267f",
        C700: "#5f1c5f",
        C800: "#471547",
        C900: "#351035",
        contrast: contrast_default
    },
    {
        metadata: {
            title: "Grapefruit"
        },
        C50: "#e967b4",
        C100: "#e55aa7",
        C200: "#e04e98",
        C300: "#da4486",
        C400: "#d43b75",
        C500: "#cc3366",
        C600: "#bf264c",
        C700: "#af1c39",
        C800: "#9b152b",
        C900: "#821020",
        contrast: contrast_default
    }
];
var generator_default = "#63BF80";


/***/ }),

/***/ "./src/app/convert.service.ts":
/*!************************************!*\
  !*** ./src/app/convert.service.ts ***!
  \************************************/
/*! exports provided: ConvertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertService", function() { return ConvertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConvertService = /** @class */ (function () {
    function ConvertService() {
    }
    // Credit to http://www.javascripter.net/faq/rgbtohex.htm
    ConvertService.prototype.convertToHex = function (n) {
        n = parseInt(n, 10);
        if (isNaN(n))
            return "00";
        n = Math.max(0, Math.min(n, 255));
        return "0123456789ABCDEF".charAt((n - n % 16) / 16)
            + "0123456789ABCDEF".charAt(n % 16);
    };
    // Credit to http://www.javascripter.net/faq/hextorgb.htm
    ConvertService.prototype.convertToRGB = function (hex) {
        var h = (hex.charAt(0) == "#") ? hex.substring(1, 7) : hex;
        var r = parseInt(h.substring(0, 2), 16);
        var g = parseInt(h.substring(2, 4), 16);
        var b = parseInt(h.substring(4, 6), 16);
        var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
        return rgb;
    };
    // Credit to http://www.javascripter.net/faq/hex2cmyk.htm
    ConvertService.prototype.convertToCMYK = function (hex) {
        var computedC = 0;
        var computedM = 0;
        var computedY = 0;
        var computedK = 0;
        hex = (hex.charAt(0) == "#") ? hex.substring(1, 7) : hex;
        if (hex.length != 6) {
            alert('Invalid length of the input hex value!');
            return;
        }
        if (/[0-9a-f]{6}/i.test(hex) != true) {
            alert('Invalid digits in the input hex value!');
            return;
        }
        var r = parseInt(hex.substring(0, 2), 16);
        var g = parseInt(hex.substring(2, 4), 16);
        var b = parseInt(hex.substring(4, 6), 16);
        // BLACK
        if (r == 0 && g == 0 && b == 0) {
            computedK = 1;
            return [0, 0, 0, 1];
        }
        computedC = 1 - (r / 255);
        computedM = 1 - (g / 255);
        computedY = 1 - (b / 255);
        var minCMY = Math.min(computedC, Math.min(computedM, computedY));
        computedC = (computedC - minCMY) / (1 - minCMY);
        computedM = (computedM - minCMY) / (1 - minCMY);
        computedY = (computedY - minCMY) / (1 - minCMY);
        computedK = minCMY;
        var cmyk = "cmyk(" + Math.round(computedC * 100) + ", " + Math.round(computedM * 100) + ", " + Math.round(computedY * 100) + ", " + Math.round(computedK * 100) + ")";
        return cmyk;
    };
    ConvertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ConvertService);
    return ConvertService;
}());



/***/ }),

/***/ "./src/app/font-specimen/font-specimen.component.html":
/*!************************************************************!*\
  !*** ./src/app/font-specimen/font-specimen.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"specimen-container\">\n\n  <h3>Heading</h3>\n\n  <br>\n\n  <p>\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur, mi in dictum auctor, \n    metus lorem lacinia dolor, a sagittis tellus nulla non sapien. Sed malesuada enim non diam cursus \n    consectetur. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec elementum, neque \n    at maximus placerat, massa nisl lobortis massa, ut ultricies lectus est et tellus. Vivamus vehicula \n    nisl in nulla vulputate consectetur. Praesent in felis quis enim dapibus viverra quis a orci. Quisque \n    sit amet egestas felis. Vestibulum id dui a risus consequat vulputate tristique nec neque. Aliquam erat \n    volutpat. Nunc aliquet ante sit amet tellus suscipit, id dictum lorem volutpat. In laoreet vitae \n    nibh in ornare. Quisque quis lacus dapibus, vulputate nisl vitae, elementum ligula. Aenean ut nibh \n    pellentesque tortor volutpat pulvinar. \n  </p>\n\n  <!--<br>\n\n  <p>\n    Sed feugiat egestas posuere. Ut id gravida urna. Maecenas dapibus tincidunt nisl quis ornare. Etiam \n    id sodales ligula, eget feugiat eros. Integer consequat et lectus quis ultricies. Nunc eu dui eros. \n    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum \n    hendrerit quam eros, tincidunt lobortis purus sodales eget. Donec a odio ac augue lacinia sagittis \n    nec rhoncus risus. Donec ex ligula, tempor nec faucibus sit amet, semper a eros. Aliquam iaculis ornare \n    dictum. Maecenas quis scelerisque odio. Etiam a suscipit velit, in elementum nisi. \n  </p>\n\n  <br>\n\n  <p>\n    Aenean faucibus urna ac venenatis tristique. Vivamus vitae erat tristique, pulvinar enim sit amet, \n    commodo eros. Nunc lorem leo, rhoncus id sem non, ullamcorper malesuada lectus. Maecenas lobortis \n    pellentesque sem, ac interdum odio porttitor sit amet. Vivamus suscipit sem justo, vulputate molestie \n    lorem egestas id. In hac habitasse platea dictumst. Nam vitae pretium eros. \n  </p>-->\n\n</div>\n"

/***/ }),

/***/ "./src/app/font-specimen/font-specimen.component.scss":
/*!************************************************************!*\
  !*** ./src/app/font-specimen/font-specimen.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".specimen-container {\n  width: 70%;\n  max-width: 720pt;\n  margin: auto;\n  padding: 10pt; }\n  .specimen-container h3 {\n    font-size: 18pt; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9udC1zcGVjaW1lbi9DOlxcVXNlcnNcXGp1c3RpXFxQcm9ncmFtbWluZ1xcY29sb3JzLmp1c3RpbnNjaGFhZi5jb20vc3JjXFxhcHBcXGZvbnQtc3BlY2ltZW5cXGZvbnQtc3BlY2ltZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixhQUFhLEVBQUE7RUFMakI7SUFRUSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mb250LXNwZWNpbWVuL2ZvbnQtc3BlY2ltZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BlY2ltZW4tY29udGFpbmVyIHtcclxuXHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWF4LXdpZHRoOiA3MjBwdDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDEwcHQ7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThwdDtcclxuICAgIH1cclxuXHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/font-specimen/font-specimen.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/font-specimen/font-specimen.component.ts ***!
  \**********************************************************/
/*! exports provided: FontSpecimenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSpecimenComponent", function() { return FontSpecimenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FontSpecimenComponent = /** @class */ (function () {
    function FontSpecimenComponent() {
    }
    FontSpecimenComponent.prototype.ngOnInit = function () {
    };
    FontSpecimenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'font-specimen',
            template: __webpack_require__(/*! ./font-specimen.component.html */ "./src/app/font-specimen/font-specimen.component.html"),
            styles: [__webpack_require__(/*! ./font-specimen.component.scss */ "./src/app/font-specimen/font-specimen.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FontSpecimenComponent);
    return FontSpecimenComponent;
}());



/***/ }),

/***/ "./src/app/generator/generator.component.html":
/*!****************************************************!*\
  !*** ./src/app/generator/generator.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"generator\">\n  <span \n    [style.background]=\"color\"\n    [cpToggle]=\"true\"\n    [cpDialogDisplay]=\"'inline'\"\n    [cpCancelButton]=\"true\"\n    [cpAlphaChannel]=\"'disabled'\"\n    (colorPickerChange)=\"onColorPickerChange($event)\"\n    [(colorPicker)]=\"color\"></span>\n  <swatch-row [color]=\"colorObject\"></swatch-row>\n</div>"

/***/ }),

/***/ "./src/app/generator/generator.component.scss":
/*!****************************************************!*\
  !*** ./src/app/generator/generator.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".generator {\n  display: flex;\n  width: 100%;\n  padding: 10pt; }\n\nswatch-row {\n  margin: auto;\n  width: 85%; }\n\ncolor-picker {\n  margin: 0 auto;\n  z-index: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhdG9yL0M6XFxVc2Vyc1xcanVzdGlcXFByb2dyYW1taW5nXFxjb2xvcnMuanVzdGluc2NoYWFmLmNvbS9zcmNcXGFwcFxcZ2VuZXJhdG9yXFxnZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZO0VBQ1osVUFBVSxFQUFBOztBQUdkO0VBQ0ksY0FBYztFQUNkLFVBQVUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXRvci9nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2VuZXJhdG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHQ7XHJcbn1cclxuXHJcbnN3YXRjaC1yb3cge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDg1JTtcclxufVxyXG5cclxuY29sb3ItcGlja2VyIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/generator/generator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/generator/generator.component.ts ***!
  \**************************************************/
/*! exports provided: GeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratorComponent", function() { return GeneratorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var _colorutil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../colorutil */ "./src/app/colorutil.ts");
/* harmony import */ var _convert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../convert.service */ "./src/app/convert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeneratorComponent = /** @class */ (function () {
    function GeneratorComponent(cp, cs) {
        this.cp = cp;
        this.cs = cs;
        this.dark_primary_text = _colorutil__WEBPACK_IMPORTED_MODULE_2__["dark_primary_text"];
        this.light_primary_text = _colorutil__WEBPACK_IMPORTED_MODULE_2__["light_primary_text"];
        this.contrast_default = _colorutil__WEBPACK_IMPORTED_MODULE_2__["contrast_default"];
        this.color = _colorutil__WEBPACK_IMPORTED_MODULE_2__["generator_default"];
        this.colorObject = {
            metadata: {
                title: 'Custom Color'
            },
            C50: this.brightenColor(this.color, 5),
            C100: this.brightenColor(this.color, 4),
            C200: this.brightenColor(this.color, 3),
            C300: this.brightenColor(this.color, 2),
            C400: this.brightenColor(this.color, 1),
            C500: this.color,
            C600: this.darkenColor(this.color, 1),
            C700: this.darkenColor(this.color, 2),
            C800: this.darkenColor(this.color, 3),
            C900: this.darkenColor(this.color, 4),
            contrast: this.contrast_default
        };
    }
    GeneratorComponent.prototype.ngOnInit = function () {
    };
    GeneratorComponent.prototype.onColorPickerChange = function (color) {
        var c50 = this.brightenColor(color, 5);
        var c100 = this.brightenColor(color, 4);
        var c200 = this.brightenColor(color, 3);
        var c300 = this.brightenColor(color, 2);
        var c400 = this.brightenColor(color, 1);
        var c500 = color;
        var c600 = this.darkenColor(color, 1);
        var c700 = this.darkenColor(color, 2);
        var c800 = this.darkenColor(color, 3);
        var c900 = this.darkenColor(color, 4);
        this.color = c500;
        this.colorObject = {
            metadata: {
                title: 'Custom Color'
            },
            C50: c50,
            C100: c100,
            C200: c200,
            C300: c300,
            C400: c400,
            C500: c500,
            C600: c600,
            C700: c700,
            C800: c800,
            C900: c900,
            contrast: this.generateContrast({
                C50: c50,
                C100: c100,
                C200: c200,
                C300: c300,
                C400: c400,
                C500: c500,
                C600: c600,
                C700: c700,
                C800: c800,
                C900: c900,
            })
        };
    };
    GeneratorComponent.prototype.generateContrast = function (color) {
        return {
            C50: this.getContrastColor(color["C50"]),
            C100: this.getContrastColor(color["C100"]),
            C200: this.getContrastColor(color["C200"]),
            C300: this.getContrastColor(color["C300"]),
            C400: this.getContrastColor(color["C400"]),
            C500: this.getContrastColor(color["C500"]),
            C600: this.getContrastColor(color["C600"]),
            C700: this.getContrastColor(color["C700"]),
            C800: this.getContrastColor(color["C800"]),
            C900: this.getContrastColor(color["C900"]),
        };
    };
    GeneratorComponent.prototype.getContrastColor = function (color) {
        var h = (color.charAt(0) == "#") ? color.substring(1, 7) : color;
        var r = parseInt(h.substring(0, 2), 16);
        var g = parseInt(h.substring(2, 4), 16);
        var b = parseInt(h.substring(4, 6), 16);
        var avg = (r + g + b) / 3;
        if (avg <= 127)
            return this.light_primary_text;
        else
            return this.dark_primary_text;
    };
    GeneratorComponent.prototype.brightenColor = function (color, weight) {
        var h = (color.charAt(0) == "#") ? color.substring(1, 7) : color;
        var r = parseInt(h.substring(0, 2), 16);
        var g = parseInt(h.substring(2, 4), 16);
        var b = parseInt(h.substring(4, 6), 16);
        for (var i = 0; i < weight; i++) {
            r += r * .15;
            g += g * .15;
            b += b * .15;
        }
        return "#" + this.cs.convertToHex(r) + this.cs.convertToHex(g) + this.cs.convertToHex(b);
    };
    GeneratorComponent.prototype.darkenColor = function (color, weight) {
        var h = (color.charAt(0) == "#") ? color.substring(1, 7) : color;
        var r = parseInt(h.substring(0, 2), 16);
        var g = parseInt(h.substring(2, 4), 16);
        var b = parseInt(h.substring(4, 6), 16);
        for (var i = 0; i < weight; i++) {
            r -= r * .20;
            g -= g * .20;
            b -= b * .20;
        }
        return "#" + this.cs.convertToHex(r) + this.cs.convertToHex(g) + this.cs.convertToHex(b);
    };
    GeneratorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-generator',
            template: __webpack_require__(/*! ./generator.component.html */ "./src/app/generator/generator.component.html"),
            styles: [__webpack_require__(/*! ./generator.component.scss */ "./src/app/generator/generator.component.scss")]
        }),
        __metadata("design:paramtypes", [ngx_color_picker__WEBPACK_IMPORTED_MODULE_1__["ColorPickerService"], _convert_service__WEBPACK_IMPORTED_MODULE_3__["ConvertService"]])
    ], GeneratorComponent);
    return GeneratorComponent;
}());



/***/ }),

/***/ "./src/app/swatch-row/swatch-row.component.html":
/*!******************************************************!*\
  !*** ./src/app/swatch-row/swatch-row.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"swatch-header\" [id]=\"(color.metadata.title).replace(' ', '').replace(' ', '').replace(' ', '')\" [style.background-color]=\"color.C500\">\n  <h1 [style.color]=\"color.contrast.C500\">{{ color.metadata.title }}</h1>\n</div>\n\n<div class=\"swatch-row\">\n  <swatch *ngFor=\"let type of colortypes\" [type]=\"type\" [color]=\"color[type]\" [contrast]=\"color.contrast[type]\"></swatch>\n</div>\n"

/***/ }),

/***/ "./src/app/swatch-row/swatch-row.component.scss":
/*!******************************************************!*\
  !*** ./src/app/swatch-row/swatch-row.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swatch-header {\n  box-shadow: 0pt 3pt 8pt rgba(0, 0, 0, 0.2);\n  margin: 0;\n  padding: 3pt 10pt;\n  z-index: 1; }\n\n.swatch-row {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\nswatch {\n  width: 10%;\n  min-width: 75pt;\n  z-index: -1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dhdGNoLXJvdy9DOlxcVXNlcnNcXGp1c3RpXFxQcm9ncmFtbWluZ1xcY29sb3JzLmp1c3RpbnNjaGFhZi5jb20vc3JjXFxhcHBcXHN3YXRjaC1yb3dcXHN3YXRjaC1yb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSwwQ0FBMEM7RUFDMUMsU0FBUztFQUNULGlCQUFpQjtFQUNqQixVQUFVLEVBQUE7O0FBR2Q7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVO0VBQ1YsZUFBZTtFQUNmLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N3YXRjaC1yb3cvc3dhdGNoLXJvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uc3dhdGNoLWhlYWRlciB7XHJcbiAgICBib3gtc2hhZG93OiAwcHQgM3B0IDhwdCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAzcHQgMTBwdDtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5zd2F0Y2gtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG5zd2F0Y2gge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1pbi13aWR0aDogNzVwdDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/swatch-row/swatch-row.component.ts":
/*!****************************************************!*\
  !*** ./src/app/swatch-row/swatch-row.component.ts ***!
  \****************************************************/
/*! exports provided: SwatchRowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwatchRowComponent", function() { return SwatchRowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _colorutil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../colorutil */ "./src/app/colorutil.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SwatchRowComponent = /** @class */ (function () {
    function SwatchRowComponent() {
        this.colortypes = _colorutil__WEBPACK_IMPORTED_MODULE_1__["colortypes"];
    }
    SwatchRowComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SwatchRowComponent.prototype, "color", void 0);
    SwatchRowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'swatch-row',
            template: __webpack_require__(/*! ./swatch-row.component.html */ "./src/app/swatch-row/swatch-row.component.html"),
            styles: [__webpack_require__(/*! ./swatch-row.component.scss */ "./src/app/swatch-row/swatch-row.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SwatchRowComponent);
    return SwatchRowComponent;
}());



/***/ }),

/***/ "./src/app/swatch/swatch.component.html":
/*!**********************************************!*\
  !*** ./src/app/swatch/swatch.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"swatch\" [style.background-color]=\"color\" [style.color]=\"contrast\">\n  <h3>{{ type.substring(1) }}</h3>\n  <p>{{ color }}</p>\n  <p>{{ cs.convertToRGB(color) }}</p>\n  <p>{{ cs.convertToCMYK(color) }}</p>\n</div>\n"

/***/ }),

/***/ "./src/app/swatch/swatch.component.scss":
/*!**********************************************!*\
  !*** ./src/app/swatch/swatch.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".swatch {\n  padding: 5pt;\n  height: 135pt;\n  min-width: 75pt;\n  z-index: -1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dhdGNoL0M6XFxVc2Vyc1xcanVzdGlcXFByb2dyYW1taW5nXFxjb2xvcnMuanVzdGluc2NoYWFmLmNvbS9zcmNcXGFwcFxcc3dhdGNoXFxzd2F0Y2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osYUFBYTtFQUViLGVBQWU7RUFDZixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zd2F0Y2gvc3dhdGNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3YXRjaCB7XHJcbiAgICBwYWRkaW5nOiA1cHQ7XHJcbiAgICBoZWlnaHQ6IDEzNXB0O1xyXG4gICAgLy93aWR0aDogMTAlO1xyXG4gICAgbWluLXdpZHRoOiA3NXB0O1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/swatch/swatch.component.ts":
/*!********************************************!*\
  !*** ./src/app/swatch/swatch.component.ts ***!
  \********************************************/
/*! exports provided: SwatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwatchComponent", function() { return SwatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _convert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../convert.service */ "./src/app/convert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SwatchComponent = /** @class */ (function () {
    function SwatchComponent(cs) {
        this.cs = cs;
    }
    SwatchComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SwatchComponent.prototype, "type", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SwatchComponent.prototype, "color", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SwatchComponent.prototype, "contrast", void 0);
    SwatchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'swatch',
            template: __webpack_require__(/*! ./swatch.component.html */ "./src/app/swatch/swatch.component.html"),
            styles: [__webpack_require__(/*! ./swatch.component.scss */ "./src/app/swatch/swatch.component.scss")]
        }),
        __metadata("design:paramtypes", [_convert_service__WEBPACK_IMPORTED_MODULE_1__["ConvertService"]])
    ], SwatchComponent);
    return SwatchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\justi\Programming\colors.justinschaaf.com\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map