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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/collections/collections.component */ "./src/app/components/collections/collections.component.ts");
/* harmony import */ var _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/collection/collection.component */ "./src/app/components/collection/collection.component.ts");






const routes = [
    {
        path: "g/:color",
        redirectTo: "generator/:color",
        pathMatch: "full"
    },
    {
        path: "g",
        redirectTo: "generator",
        pathMatch: "full"
    },
    {
        path: ":collection/:color",
        component: _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_3__["CollectionComponent"]
    },
    {
        path: ":collection",
        component: _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_3__["CollectionComponent"]
    },
    {
        path: "",
        component: _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_2__["CollectionsComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() {
        var colors = this;
        // Demonstrates getting query params -- keep for future reference
        /*this.route.queryParamMap.subscribe(params => {
            var colorgen = params['params']['colorgen'];
            if (colorgen != undefined) colors.generator_default = '#' + colorgen;
        });*/
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["jss-root"]], decls: 22, vars: 0, consts: [["id", "header", 1, "header"], ["src", "https://content.justinschaaf.com/common/logos/js-stylesheet512.png", "height", "128", "width", "128", "routerLink", "/", 1, "logo"], [1, "title"], [1, "heading-desc"], [1, "content"], ["id", "footer", 1, "footer"], [1, "links"], [1, "link"], ["href", "https://www.github.com/justinhschaaf/ReferenceStylesheet", 1, "footer-link"], ["href", "https://justinschaaf.com", 1, "footer-link"], ["href", "https://liberapay.com/justinhschaaf", 1, "footer-link"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Justin's Reference Stylesheet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " This is a color palette with a wide range of different colors from my various projects or just colors that look nice. Feel free to use any of them. A link back here would be appreciated \uD83D\uDE0A. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "main", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Source");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Main Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Donate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".logo[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 16pt 16pt 0pt 16pt;\n  cursor: pointer;\n}\n\n.title[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.heading-desc[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 14pt;\n  max-width: 720pt;\n  margin: auto;\n}\n\n.content[_ngcontent-%COMP%] {\n  max-width: 720pt;\n  margin: auto;\n  padding: 8pt 5%;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  margin: 10pt;\n}\n\n.textbanner[_ngcontent-%COMP%] {\n  padding: 5pt 5%;\n  text-align: center;\n}\n\n.links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  max-width: 720pt;\n  margin: auto;\n  padding: 8pt 5%;\n}\n\n.links[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  max-width: 200pt;\n  padding: 8pt;\n  margin: auto;\n  color: #000000;\n  font-weight: bold;\n  text-align: center;\n}\n\n.links[_ngcontent-%COMP%]   .footer-link[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtBO0VBQ0ksa0JBQUE7QUFGSjs7QUFLQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUZKOztBQU9BO0VBRUksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUxKOztBQVNBO0VBQ0ksWUFBQTtBQU5KOztBQVNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0FBTko7O0FBV0E7RUFFSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUVBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFWSjs7QUFZSTtFQUVJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFFQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVpSOztBQWdCSTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQWRSIiwiZmlsZSI6InNyYy9hcHAvYXBwLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gSGVhZGluZ1xyXG5cclxuLmxvZ28ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6IDE2cHQgMTZwdCAwcHQgMTZwdDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmhlYWRpbmctZGVzYyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICBtYXgtd2lkdGg6IDcyMHB0O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4vLyBHZW5lcmFsXHJcblxyXG4uY29udGVudCB7XHJcblxyXG4gICAgbWF4LXdpZHRoOiA3MjBwdDsgLy8gNzIwcHRcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBhZGRpbmc6IDhwdCA1JTtcclxuXHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICAgIG1hcmdpbjogMTBwdDtcclxufVxyXG5cclxuLnRleHRiYW5uZXIge1xyXG4gICAgcGFkZGluZzogNXB0IDUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vLyBGb290ZXJcclxuXHJcbi5saW5rcyB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICBtYXgtd2lkdGg6IDcyMHB0O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogOHB0IDUlO1xyXG5cclxuICAgIC5saW5rIHtcclxuXHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBwdDtcclxuICAgICAgICBwYWRkaW5nOiA4cHQ7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItbGluayB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'jss-root',
                templateUrl: './app.html',
                styleUrls: ['./app.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_swatch_swatch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/swatch/swatch.component */ "./src/app/components/swatch/swatch.component.ts");
/* harmony import */ var _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/collections/collections.component */ "./src/app/components/collections/collections.component.ts");
/* harmony import */ var _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/collection/collection.component */ "./src/app/components/collection/collection.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
    /*{
        provide: HTTP_INTERCEPTORS,
        useClass: BackendService,
        multi: true
    }*/
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_swatch_swatch_component__WEBPACK_IMPORTED_MODULE_7__["SwatchComponent"],
        _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_8__["CollectionsComponent"],
        _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_9__["CollectionComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_swatch_swatch_component__WEBPACK_IMPORTED_MODULE_7__["SwatchComponent"],
                    _components_collections_collections_component__WEBPACK_IMPORTED_MODULE_8__["CollectionsComponent"],
                    _components_collection_collection_component__WEBPACK_IMPORTED_MODULE_9__["CollectionComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    ngx_color_picker__WEBPACK_IMPORTED_MODULE_4__["ColorPickerModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [
                /*{
                    provide: HTTP_INTERCEPTORS,
                    useClass: BackendService,
                    multi: true
                }*/
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/collection/collection.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/collection/collection.component.ts ***!
  \***************************************************************/
/*! exports provided: CollectionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionComponent", function() { return CollectionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util */ "./src/app/services/util.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_color_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/color.service */ "./src/app/services/color.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-color-picker */ "./node_modules/ngx-color-picker/__ivy_ngcc__/fesm2015/ngx-color-picker.js");
/* harmony import */ var _swatch_swatch_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../swatch/swatch.component */ "./src/app/components/swatch/swatch.component.ts");













function CollectionComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("colorPickerChange", function CollectionComponent_div_3_Template_span_colorPickerChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onColorPickerChange($event); })("colorPickerChange", function CollectionComponent_div_3_Template_span_colorPickerChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.genColor = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", ctx_r0.genColor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cpToggle", true)("cpDialogDisplay", "inline")("cpCancelButton", true)("cpCancelButtonClass", "hoverable")("cpAlphaChannel", "disabled")("colorPicker", ctx_r0.genColor);
} }
function CollectionComponent_jss_swatch_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "jss-swatch", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", ctx_r1.genColor);
} }
function CollectionComponent_jss_swatch_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "jss-swatch", 8);
} if (rf & 2) {
    const key_r6 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", key_r6)("color", ctx_r2.colors[key_r6]);
} }
class CollectionComponent {
    constructor(route, cs, ds, util) {
        this.route = route;
        this.cs = cs;
        this.ds = ds;
        this.util = util;
    }
    ngOnInit() {
        var cc = this;
        this.id = this.route.snapshot.paramMap.get("collection");
        this.genColor = this.route.snapshot.paramMap.get("color");
        if ((this.genColor != null && this.genColor != undefined) && (this.genColor.length == 6 || this.genColor.length == 3))
            this.genColor = "#" + this.genColor;
        this.ds.getData(this.cs.colorLoc).then((data) => {
            cc.collection = data[cc.id];
            cc.colors = (cc.collection["colors"] != undefined) ? cc.collection["colors"] : {};
            cc.colorKeys = Object.keys(cc.colors);
            cc.name = (cc.collection["name"] != undefined) ? cc.collection["name"] : cc.util.idToName(cc.id);
            if (cc.genColor == undefined && cc.collection['generator'] == true)
                cc.genColor = (cc.collection['start_color'] != undefined) ? cc.collection['start_color'] : "#66cc88";
            console.log(cc.genColor);
        });
    }
    onColorPickerChange(color) {
        this.genColor = color;
    }
}
CollectionComponent.ɵfac = function CollectionComponent_Factory(t) { return new (t || CollectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_color_service__WEBPACK_IMPORTED_MODULE_4__["ColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util__WEBPACK_IMPORTED_MODULE_2__["Util"])); };
CollectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollectionComponent, selectors: [["jss-collection"]], decls: 6, vars: 4, consts: [[1, "collection-header"], [1, "colors"], ["class", "card hoverable color-swatch generator", 4, "ngIf"], ["class", "color-swatch", "id", "custom_color", 3, "color", 4, "ngIf"], ["class", "color-swatch", 3, "id", "color", 4, "ngFor", "ngForOf"], [1, "card", "hoverable", "color-swatch", "generator"], [3, "cpToggle", "cpDialogDisplay", "cpCancelButton", "cpCancelButtonClass", "cpAlphaChannel", "colorPicker", "colorPickerChange"], ["id", "custom_color", 1, "color-swatch", 3, "color"], [1, "color-swatch", 3, "id", "color"]], template: function CollectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CollectionComponent_div_3_Template, 2, 8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CollectionComponent_jss_swatch_4_Template, 1, 1, "jss-swatch", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CollectionComponent_jss_swatch_5_Template, 1, 2, "jss-swatch", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collection["generator"] == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.collection["generator"] == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colorKeys);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], ngx_color_picker__WEBPACK_IMPORTED_MODULE_6__["ColorPickerDirective"], _swatch_swatch_component__WEBPACK_IMPORTED_MODULE_7__["SwatchComponent"]], styles: [".collection-header[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 16pt;\n}\n\n.colors[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: auto;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.colors[_ngcontent-%COMP%]   color-picker[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  z-index: 1;\n}\n\n.colors[_ngcontent-%COMP%]   .generator[_ngcontent-%COMP%] {\n  max-width: 480pt;\n  width: 45%;\n  min-width: 180pt;\n  padding: 12pt;\n  margin: 16pt auto;\n  display: flex;\n  flex-direction: row;\n  text-align: center;\n  justify-content: center;\n  align-self: center;\n  flex-wrap: wrap;\n}\n\n.colors[_ngcontent-%COMP%]   .color-swatch[_ngcontent-%COMP%] {\n  max-width: 480pt;\n  width: 45%;\n  min-width: 180pt;\n  margin: 16pt auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUFESjs7QUFJQTtFQUVJLFdBQUE7RUFDQSxZQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUhKOztBQUtJO0VBRUksY0FBQTtFQUNBLFVBQUE7QUFKUjs7QUFRSTtFQUVJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBRUEsYUFBQTtFQUNBLGlCQUFBO0VBR0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQVZSOztBQWNJO0VBRUksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQWJSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWN0aW9uL2NvbGxlY3Rpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi92YXJzJztcclxuXHJcbi5jb2xsZWN0aW9uLWhlYWRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNnB0O1xyXG59XHJcblxyXG4uY29sb3JzIHtcclxuXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICBjb2xvci1waWNrZXIge1xyXG5cclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuZ2VuZXJhdG9yIHtcclxuXHJcbiAgICAgICAgbWF4LXdpZHRoOiA0ODBwdDtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTgwcHQ7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDEycHQ7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB0IGF1dG87XHJcblxyXG4gICAgICAgIC8vIEZsZXhib3ggZml4ZXMgYWxsLCBleGNlcHQgd2hlbiBpdCBkb2Vzbid0XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuY29sb3Itc3dhdGNoIHtcclxuXHJcbiAgICAgICAgbWF4LXdpZHRoOiA0ODBwdDtcclxuICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTgwcHQ7XHJcbiAgICAgICAgbWFyZ2luOiAxNnB0IGF1dG87XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'jss-collection',
                templateUrl: './collection.component.html',
                styleUrls: ['./collection.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _services_color_service__WEBPACK_IMPORTED_MODULE_4__["ColorService"] }, { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: src_app_services_util__WEBPACK_IMPORTED_MODULE_2__["Util"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/collections/collections.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/collections/collections.component.ts ***!
  \*****************************************************************/
/*! exports provided: CollectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollectionsComponent", function() { return CollectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var src_app_services_color_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/color.service */ "./src/app/services/color.service.ts");
/* harmony import */ var src_app_services_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util */ "./src/app/services/util.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










function CollectionsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx_r0.util.getFeaturedColor(ctx_r0.colors[id_r1]))("color", ctx_r0.cs.getContrastColor(ctx_r0.util.getFeaturedColor(ctx_r0.colors[id_r1])));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", id_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.colors[id_r1]["name"] != undefined ? ctx_r0.colors[id_r1]["name"] : ctx_r0.util.idToName(id_r1));
} }
class CollectionsComponent {
    constructor(ds, cs, util) {
        this.ds = ds;
        this.cs = cs;
        this.util = util;
    }
    ngOnInit() {
        var cc = this;
        this.ds.getData(this.cs.colorLoc).then((data) => {
            cc.colors = data;
            cc.colorIds = Object.keys(data);
        });
    }
}
CollectionsComponent.ɵfac = function CollectionsComponent_Factory(t) { return new (t || CollectionsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_util__WEBPACK_IMPORTED_MODULE_3__["Util"])); };
CollectionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CollectionsComponent, selectors: [["app-collections"]], decls: 2, vars: 1, consts: [[1, "collections"], ["class", "card hoverable collection", 3, "background-color", "color", "routerLink", 4, "ngFor", "ngForOf"], [1, "card", "hoverable", "collection", 3, "routerLink"]], template: function CollectionsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CollectionsComponent_div_1_Template, 3, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.colorIds);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], styles: [".collections[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: left;\n  justify-items: left;\n}\n.collections[_ngcontent-%COMP%]   .collection[_ngcontent-%COMP%] {\n  width: 40%;\n  max-width: 320pt;\n  min-height: 96pt;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb2xsZWN0aW9ucy9jb2xsZWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFdBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQURKO0FBR0k7RUFFSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFGUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29sbGVjdGlvbnMvY29sbGVjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sbGVjdGlvbnMge1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gICAganVzdGlmeS1pdGVtczogbGVmdDtcclxuXHJcbiAgICAuY29sbGVjdGlvbiB7XHJcblxyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzMjBwdDtcclxuICAgICAgICBtaW4taGVpZ2h0OiA5NnB0O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICB9XHJcblxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CollectionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-collections',
                templateUrl: './collections.component.html',
                styleUrls: ['./collections.component.scss']
            }]
    }], function () { return [{ type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }, { type: src_app_services_color_service__WEBPACK_IMPORTED_MODULE_2__["ColorService"] }, { type: src_app_services_util__WEBPACK_IMPORTED_MODULE_3__["Util"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/swatch/swatch.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/swatch/swatch.component.ts ***!
  \*******************************************************/
/*! exports provided: SwatchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwatchComponent", function() { return SwatchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_color_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/color.service */ "./src/app/services/color.service.ts");
/* harmony import */ var _services_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/util */ "./src/app/services/util.ts");






class SwatchComponent {
    constructor(cs, util) {
        this.cs = cs;
        this.util = util;
        this.objectColor = false; // If the color is in object notation
    }
    ngOnInit() { }
    ngOnChanges() {
        if (typeof this.color == "object")
            this.objectColor = true;
        // Generate colors beforehand
        this.base = this.objectColor ? this.color["base"] : this.color;
        this.light = this.objectColor ? (this.color["light"] != undefined ? this.color["light"] : this.cs.brightenColor(this.base, 1)) : this.cs.brightenColor(this.base, 1);
        this.dark = this.objectColor ? (this.color["dark"] != undefined ? this.color["dark"] : this.cs.darkenColor(this.base, 1)) : this.cs.darkenColor(this.base, 1);
    }
}
SwatchComponent.ɵfac = function SwatchComponent_Factory(t) { return new (t || SwatchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_color_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_util__WEBPACK_IMPORTED_MODULE_2__["Util"])); };
SwatchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwatchComponent, selectors: [["jss-swatch"]], inputs: { id: "id", color: "color" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 30, vars: 23, consts: [[1, "hoverable", "swatch", 3, "id"], [1, "swatch-header"], [1, "card", "swatch-sample"]], template: function SwatchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.objectColor ? ctx.color["name"] != undefined ? ctx.color["name"] : ctx.util.idToName(ctx.id) : ctx.util.idToName(ctx.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.light)("color", ctx.cs.getContrastColor(ctx.light));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.light.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cs.convertToRGB(ctx.light));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cs.convertToCMYK(ctx.light));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.base)("color", ctx.cs.getContrastColor(ctx.base));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.base.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cs.convertToRGB(ctx.base));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cs.convertToCMYK(ctx.base));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", ctx.dark)("color", ctx.cs.getContrastColor(ctx.dark));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dark.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cs.convertToRGB(ctx.dark));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.cs.convertToCMYK(ctx.dark));
    } }, styles: [".swatch[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  text-align: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  padding: 12pt;\n  margin: auto;\n  background-color: #fff;\n  box-shadow: 0pt 3pt 8pt rgba(0, 0, 0, 0.2);\n}\n.swatch[_ngcontent-%COMP%]   .swatch-header[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0 0 12pt 0;\n  text-align: center;\n}\n.swatch[_ngcontent-%COMP%]   .swatch-sample[_ngcontent-%COMP%] {\n  padding: 4pt;\n  margin: 4pt auto;\n  min-width: 80pt;\n  width: 28%;\n  min-height: 120pt;\n  font-size: 10pt;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zd2F0Y2gvc3dhdGNoLmNvbXBvbmVudC5zY3NzIiwic3JjL3ZhcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBR0EsYUFBQTtFQUNBLFlBQUE7RUFNQSxzQkNqQlU7RURrQlYsMENDZEs7QURLVDtBQVdJO0VBRUksV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFWUjtBQWNJO0VBRUksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUVBLGVBQUE7QUFkUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3dhdGNoL3N3YXRjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcnMnO1xyXG5cclxuLnN3YXRjaCB7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAvL3dpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTJwdDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIC8vbWF4LXdpZHRoOiA0ODBwdDtcclxuXHJcbiAgICAvL21hcmdpbi10b3A6IDhwdDtcclxuICAgIC8vbWFyZ2luLWJvdHRvbTogOHB0O1xyXG5cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1saWdodDtcclxuICAgIGJveC1zaGFkb3c6ICRzaGFkb3c7XHJcblxyXG4gICAgLnN3YXRjaC1oZWFkZXIge1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAwIDAgMTJwdCAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnN3YXRjaC1zYW1wbGUge1xyXG5cclxuICAgICAgICBwYWRkaW5nOiA0cHQ7XHJcbiAgICAgICAgbWFyZ2luOiA0cHQgYXV0bztcclxuICAgICAgICBtaW4td2lkdGg6IDgwcHQ7XHJcbiAgICAgICAgd2lkdGg6IDI4JTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMjBwdDtcclxuXHJcbiAgICAgICAgZm9udC1zaXplOiAxMHB0O1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuIiwiXHJcbiRjb2xvci1saWdodDogI2ZmZjtcclxuJGNvbG9yLW1lZGl1bTogIzc3NztcclxuJGNvbG9yLWRhcms6ICMxMTE7XHJcblxyXG4kc2hhZG93OiAwcHQgM3B0IDhwdCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiRzaGFkb3ctaG92ZXI6IDBwdCA2cHQgMTZwdCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcblxyXG4kdHJhbnNpdGlvbi10aW1lOiAwLjI1cztcclxuXHJcbiRob3Zlci1jb2xvci1kYXJrOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SwatchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'jss-swatch',
                templateUrl: './swatch.component.html',
                styleUrls: ['./swatch.component.scss']
            }]
    }], function () { return [{ type: _services_color_service__WEBPACK_IMPORTED_MODULE_1__["ColorService"] }, { type: _services_util__WEBPACK_IMPORTED_MODULE_2__["Util"] }]; }, { id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], color: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/services/color.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/color.service.ts ***!
  \*******************************************/
/*! exports provided: ColorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorService", function() { return ColorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ColorService {
    constructor() {
        this.colorLoc = "https://content.justinschaaf.com/common/colors/colors.json"; // /assets/colors.json
    }
    /*
     * Color Changing (Brighten/Darken)
     */
    brightenColor(color, weight) {
        var h = (color.charAt(0) == "#") ? color.substring(1, 7) : color;
        var r = parseInt(h.substring(0, 2), 16);
        var g = parseInt(h.substring(2, 4), 16);
        var b = parseInt(h.substring(4, 6), 16);
        for (var i = 0; i < weight; i++) {
            // Test method
            /*r *= 1.15;
            g *= 1.15;
            b *= 1.15;

            var br = r * 1.15;
            var bg = g * 1.15;
            var bb = b * 1.15;

            var avgChange = ((br - r) + (bg - g) + (bb - b)) / 3;

            r += avgChange;
            g += avgChange;
            b += avgChange;*/
            // New method
            r = 255 * this.compostColor(r, 255, 1, .62); // .58
            g = 255 * this.compostColor(g, 255, 1, .62); // .58
            b = 255 * this.compostColor(b, 255, 1, .62); // .58
        }
        return "#" + this.convertToHex(r) + this.convertToHex(g) + this.convertToHex(b);
    }
    darkenColor(color, weight) {
        var h = (color.charAt(0) == "#") ? color.substring(1, 7) : color;
        var r = parseInt(h.substring(0, 2), 16);
        var g = parseInt(h.substring(2, 4), 16);
        var b = parseInt(h.substring(4, 6), 16);
        for (var i = 0; i < weight; i++) {
            // Test method
            /*r *= .75; // .25
            g *= .75;
            b *= .75;

            var dr = r * .75;
            var dg = g * .75;
            var db = b * .75;

            var avgChange = ((dr - r) + (dg - g) + (db - b)) / 3;

            r += avgChange;
            g += avgChange;
            b += avgChange;*/
            // New method
            r = 255 * this.compostColor(r, 255, 1, .38); // .38
            g = 255 * this.compostColor(g, 255, 1, .38); // .38
            b = 255 * this.compostColor(b, 255, 1, .38); // .38
        }
        return "#" + this.convertToHex(r) + this.convertToHex(g) + this.convertToHex(b);
    }
    compostColor(baseColor, topColor, baseAlpha, topAlpha) {
        /*
         * Sources:
         * https://en.wikipedia.org/wiki/Alpha_compositing
         * https://en.wikipedia.org/wiki/Blend_modes
         * (both as of 2019-10-14)
         *
         * Also thanks to https://www.adobe.com/content/dam/acom/en/devnet/acrobat/pdfs/PDF32000_2008.pdf for
         * expanding my understanding of blend modes and alpha composting
         *
         */
        // Use premultiplied alpha
        var bC = (baseColor / 255) * baseAlpha;
        var tC = (topColor / 255) * topAlpha;
        // Overlay blend mode from Wikipedia, linked above
        if (bC < 0.5) {
            // 2 * Multiply blend mode
            return 2 * bC * tC;
        }
        else { // bC > 0.5
            // Screen blend mode
            return 1 - (2 * (1 - bC) * (1 - tC));
        }
    }
    /*
     * Contrast Color
     */
    getContrastColor(color) {
        var h = (color.charAt(0) == "#") ? color.substring(1, 7) : color;
        var r = parseInt(h.substring(0, 2), 16);
        var g = parseInt(h.substring(2, 4), 16);
        var b = parseInt(h.substring(4, 6), 16);
        var avg = (r + g + b) / 3;
        if (avg <= 191)
            return "#ffffff";
        else
            return "#000000";
    }
    /*
     * Convert Colors
     */
    // Credit to http://www.javascripter.net/faq/rgbtohex.htm
    convertToHex(n) {
        n = parseInt(n, 10);
        if (isNaN(n))
            return "00";
        n = Math.max(0, Math.min(n, 255));
        return "0123456789ABCDEF".charAt((n - n % 16) / 16)
            + "0123456789ABCDEF".charAt(n % 16);
    }
    // Credit to http://www.javascripter.net/faq/hextorgb.htm
    convertToRGB(hex) {
        var h = (hex.charAt(0) == "#") ? hex.substring(1, 7) : hex;
        var r = parseInt(h.substring(0, 2), 16);
        var g = parseInt(h.substring(2, 4), 16);
        var b = parseInt(h.substring(4, 6), 16);
        var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
        return rgb;
    }
    // Credit to http://www.javascripter.net/faq/hex2cmyk.htm
    convertToCMYK(hex) {
        var computedC = 0;
        var computedM = 0;
        var computedY = 0;
        var computedK = 0;
        hex = (hex.charAt(0) == "#") ? hex.substring(1, 7) : hex;
        if (hex.length != 6) {
            console.log('Invalid length of the input hex value!');
            return;
        }
        if (/[0-9a-f]{6}/i.test(hex) != true) {
            console.log('Invalid digits in the input hex value!');
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
    }
}
ColorService.ɵfac = function ColorService_Factory(t) { return new (t || ColorService)(); };
ColorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ColorService, factory: ColorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class DataService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Get data from the specified URL, as an object
     *
     * @param url The url to access the data
     * @returns The requested data, as an object
     */
    getData(url) {
        return new Promise((resolve, reject) => {
            this.http.get(url, { responseType: 'text' })
                .subscribe(data => {
                // Fulfill the promise
                resolve(JSON.parse(data));
            });
        });
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/services/util.ts":
/*!**********************************!*\
  !*** ./src/app/services/util.ts ***!
  \**********************************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Util", function() { return Util; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Util {
    // Convert an internal ID to a localized name
    idToName(id) {
        var idWords = id.split("_");
        var name = "";
        for (var i = 0; i < idWords.length; i++) {
            name += idWords[i].substr(0, 1).toLocaleUpperCase() + idWords[i].substr(1);
            name += i + 1 < idWords.length ? " " : "";
        }
        return name;
    }
    getFeaturedColor(collection) {
        // If a featured color is defined (which it should be)
        if (collection["featured_color"] != undefined) {
            // If the featured color is predefined, return the color
            if (Object.keys(collection["colors"]).includes(collection["featured_color"])) {
                var color = collection["colors"][collection["featured_color"]];
                return (typeof color == "object") ? color["base"] : color;
            }
            else
                return collection["featured_color"]; // Else it should be a hex color
        }
        else if (collection["start_color"] != undefined)
            return collection["start_color"]; // Else if a start color is defined, for the generator
        else
            return "#ffffff"; // Else return white
    }
}
Util.ɵfac = function Util_Factory(t) { return new (t || Util)(); };
Util.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: Util, factory: Util.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Util, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\justi\Programming\justinschaaf.com\colors.justinschaaf.com\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map