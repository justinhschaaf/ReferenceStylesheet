(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url(\"https://fonts.googleapis.com/css?family=Major+Mono+Display|Overpass|Rubik|Merriweather\");\n@import url(\"https://content.justinschaaf.com/common/fonts/fonts.css\");\n/* You can add global styles to this file, and also import other style files */\n/* https://stackoverflow.com/questions/5445491/height-equal-to-dynamic-width-css-fluid-layout#6615994 */\n/*#container {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n#dummy {\r\n  margin-top: 75%;\r\n}\r\n\r\n.colorbox {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: silver\r\n}*/\n* {\n  margin: 0;\n  font-family: 'Overpass', 'Segoe UI Emoji', sans-serif; }\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Major Mono Display', 'Segoe UI Emoji', monospace; }\nbody {\n  margin: 0px;\n  padding: 0px;\n  background-color: #ffffff; }\n.logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 16pt 16pt 0pt 16pt; }\n.title {\n  text-align: center;\n  font-size: 48pt;\n  color: #111111; }\n.heading-desc {\n  text-align: center;\n  font-size: 14pt; }\n.buttons {\n  margin: 10pt; }\nbutton {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10pt;\n  background-color: #111111;\n  color: #ffffff;\n  font-weight: bold;\n  border: 0;\n  box-shadow: 0pt 2pt 5pt rgba(20, 20, 20, 0.4); }\n.links {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n.link {\n  width: 200pt;\n  padding: 5pt;\n  color: #111111;\n  font-weight: bold;\n  text-align: center; }\n.footer-link {\n  text-decoration: none;\n  color: inherit; }\n.spoiler_container {\n  display: flex;\n  flex-wrap: wrap; }\n.spoiler_container h2 {\n    width: 60%;\n    padding: 5pt 5%;\n    text-align: center; }\n.spoiler_container .spoilerbutton {\n    width: 30%;\n    background-color: #f2f2f2;\n    border: none; }\n.spoiler_container .spoiler {\n    width: 100%; }\n.spoilerbutton {\n  display: block; }\n.spoiler {\n  overflow: hidden;\n  background: #f2f2f2;\n  z-index: -1; }\n.spoiler > div {\n  transition: margin 0.2s ease; }\n.spoilerbutton[value=\"Show\"] + .spoiler > div {\n  margin-top: -1000%; }\n.spoilerbutton[value=\"Hide\"] + .spoiler {\n  padding: 8pt; }\n.spoilerbutton[value=\"Hide\"] + .spoiler h2 {\n    width: 90%; }\n.pt h3, .pt p {\n  font-family: 'Rubik', 'Segoe UI Emoji', sans-serif; }\n.tv h3 {\n  font-family: 'Vanilla', 'Segoe UI Emoji', sans-serif; }\n.tv p {\n  font-family: 'Merriweather', 'Segoe UI Emoji', sans-serif; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXGp1c3RpXFxQcm9ncmFtbWluZ1xcY29sb3JzLmp1c3RpbnNjaGFhZi5jb20vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBc0JBLHFHQUFZO0FBQ1osc0VBQVk7QUF2QlosOEVBQUE7QUFFQSx1R0FBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztFQ2dCRTtBRE1GO0VBQ0UsU0FBUztFQUNULHFEQUFxRCxFQUFBO0FBR3ZEO0VBQ0UsOERBQThELEVBQUE7QUFHaEU7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUE7QUFHN0I7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7QUFHakI7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsNkNBQTZDLEVBQUE7QUFHL0M7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBO0FBR3pCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTtBQUdoQjtFQUVFLGFBQWE7RUFDYixlQUFlLEVBQUE7QUFIakI7SUFNSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQixFQUFBO0FBUnRCO0lBWUksVUFBVTtJQUNWLHlCQUF5QjtJQUN6QixZQUFZLEVBQUE7QUFkaEI7SUFrQkksV0FBVyxFQUFBO0FBTWY7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFdBQVcsRUFBQTtBQUdiO0VBSUUsNEJBQTRCLEVBQUE7QUFHOUI7RUFDRSxrQkFBa0IsRUFBQTtBQUdwQjtFQUVFLFlBQVksRUFBQTtBQUZkO0lBS0ksVUFBVSxFQUFBO0FBT2Q7RUFFSSxrREFBa0QsRUFBQTtBQUl0RDtFQUVJLG9EQUFvRCxFQUFBO0FBRnhEO0VBS0kseURBQXlELEVBQUEiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuLyogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTQ0NTQ5MS9oZWlnaHQtZXF1YWwtdG8tZHluYW1pYy13aWR0aC1jc3MtZmx1aWQtbGF5b3V0IzY2MTU5OTQgKi9cclxuLyojY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jZHVtbXkge1xyXG4gIG1hcmdpbi10b3A6IDc1JTtcclxufVxyXG5cclxuLmNvbG9yYm94IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlclxyXG59Ki9cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWFqb3IrTW9ubytEaXNwbGF5fE92ZXJwYXNzfFJ1YmlrfE1lcnJpd2VhdGhlcicpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jb250ZW50Lmp1c3RpbnNjaGFhZi5jb20vY29tbW9uL2ZvbnRzL2ZvbnRzLmNzcycpO1xyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3ZlcnBhc3MnLCAnU2Vnb2UgVUkgRW1vamknLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICBmb250LWZhbWlseTogJ01ham9yIE1vbm8gRGlzcGxheScsICdTZWdvZSBVSSBFbW9qaScsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTZwdCAxNnB0IDBwdCAxNnB0O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQ4cHQ7XHJcbiAgY29sb3I6ICMxMTExMTE7XHJcbn1cclxuXHJcbi5oZWFkaW5nLWRlc2Mge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHQ7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBtYXJnaW46IDEwcHQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogMHB0IDJwdCA1cHQgcmdiYSgyMCwgMjAsIDIwLCAwLjQpO1xyXG59XHJcblxyXG4ubGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIHdpZHRoOiAyMDBwdDtcclxuICBwYWRkaW5nOiA1cHQ7XHJcbiAgY29sb3I6ICMxMTExMTE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmsge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLnNwb2lsZXJfY29udGFpbmVyIHtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIGgyIHtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBwYWRkaW5nOiA1cHQgNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuc3BvaWxlcmJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5zcG9pbGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIEFuaW1hdGVkIHNwb2lsZXIgQ1NTIGJhc2VkIG9uIEJsb2dnZXJzZW50cmFsLmNvbSAtLSBodHRwOi8vd3d3LmJsb2dnZXJzZW50cmFsLmNvbS8yMDEzLzAzL2NvbnRlbnQtc3BvaWxlci13aXRoLXNpbXBsZS1jc3MzLmh0bWxcclxuLnNwb2lsZXJidXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uc3BvaWxlciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xyXG4gIHotaW5kZXg6IC0xO1xyXG59XHJcblxyXG4uc3BvaWxlciA+IGRpdiB7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIDAuMnMgZWFzZTtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjJzIGVhc2U7XHJcbn1cclxuXHJcbi5zcG9pbGVyYnV0dG9uW3ZhbHVlPVwiU2hvd1wiXSArIC5zcG9pbGVyID4gZGl2IHtcclxuICBtYXJnaW4tdG9wOiAtMTAwMCU7XHJcbn1cclxuXHJcbi5zcG9pbGVyYnV0dG9uW3ZhbHVlPVwiSGlkZVwiXSArIC5zcG9pbGVyIHtcclxuXHJcbiAgcGFkZGluZzogOHB0O1xyXG5cclxuICBoMiB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8vIEVuZCBTcG9pbGVyXHJcblxyXG4ucHQge1xyXG4gIGgzLCBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnUnViaWsnLCAnU2Vnb2UgVUkgRW1vamknLCBzYW5zLXNlcmlmOyBcclxuICB9XHJcbn1cclxuXHJcbi50diB7XHJcbiAgaDMge1xyXG4gICAgZm9udC1mYW1pbHk6ICdWYW5pbGxhJywgJ1NlZ29lIFVJIEVtb2ppJywgc2Fucy1zZXJpZjtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsICdTZWdvZSBVSSBFbW9qaScsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG59XHJcbiIsIi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi9cbi8qIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU0NDU0OTEvaGVpZ2h0LWVxdWFsLXRvLWR5bmFtaWMtd2lkdGgtY3NzLWZsdWlkLWxheW91dCM2NjE1OTk0ICovXG4vKiNjb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNkdW1teSB7XHJcbiAgbWFyZ2luLXRvcDogNzUlO1xyXG59XHJcblxyXG4uY29sb3Jib3gge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogc2lsdmVyXHJcbn0qL1xuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWFqb3IrTW9ubytEaXNwbGF5fE92ZXJwYXNzfFJ1YmlrfE1lcnJpd2VhdGhlclwiKTtcbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9jb250ZW50Lmp1c3RpbnNjaGFhZi5jb20vY29tbW9uL2ZvbnRzL2ZvbnRzLmNzc1wiKTtcbioge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtZmFtaWx5OiAnT3ZlcnBhc3MnLCAnU2Vnb2UgVUkgRW1vamknLCBzYW5zLXNlcmlmOyB9XG5cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICBmb250LWZhbWlseTogJ01ham9yIE1vbm8gRGlzcGxheScsICdTZWdvZSBVSSBFbW9qaScsIG1vbm9zcGFjZTsgfVxuXG5ib2R5IHtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjsgfVxuXG4ubG9nbyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwYWRkaW5nOiAxNnB0IDE2cHQgMHB0IDE2cHQ7IH1cblxuLnRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDQ4cHQ7XG4gIGNvbG9yOiAjMTExMTExOyB9XG5cbi5oZWFkaW5nLWRlc2Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRwdDsgfVxuXG4uYnV0dG9ucyB7XG4gIG1hcmdpbjogMTBwdDsgfVxuXG5idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZzogMTBwdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IDA7XG4gIGJveC1zaGFkb3c6IDBwdCAycHQgNXB0IHJnYmEoMjAsIDIwLCAyMCwgMC40KTsgfVxuXG4ubGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4ubGluayB7XG4gIHdpZHRoOiAyMDBwdDtcbiAgcGFkZGluZzogNXB0O1xuICBjb2xvcjogIzExMTExMTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4uZm9vdGVyLWxpbmsge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0OyB9XG5cbi5zcG9pbGVyX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDsgfVxuICAuc3BvaWxlcl9jb250YWluZXIgaDIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgcGFkZGluZzogNXB0IDUlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuICAuc3BvaWxlcl9jb250YWluZXIgLnNwb2lsZXJidXR0b24ge1xuICAgIHdpZHRoOiAzMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBib3JkZXI6IG5vbmU7IH1cbiAgLnNwb2lsZXJfY29udGFpbmVyIC5zcG9pbGVyIHtcbiAgICB3aWR0aDogMTAwJTsgfVxuXG4uc3BvaWxlcmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi5zcG9pbGVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcbiAgei1pbmRleDogLTE7IH1cblxuLnNwb2lsZXIgPiBkaXYge1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIC1tb3otdHJhbnNpdGlvbjogbWFyZ2luIDAuMnMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogbWFyZ2luIDAuMnMgZWFzZTsgfVxuXG4uc3BvaWxlcmJ1dHRvblt2YWx1ZT1cIlNob3dcIl0gKyAuc3BvaWxlciA+IGRpdiB7XG4gIG1hcmdpbi10b3A6IC0xMDAwJTsgfVxuXG4uc3BvaWxlcmJ1dHRvblt2YWx1ZT1cIkhpZGVcIl0gKyAuc3BvaWxlciB7XG4gIHBhZGRpbmc6IDhwdDsgfVxuICAuc3BvaWxlcmJ1dHRvblt2YWx1ZT1cIkhpZGVcIl0gKyAuc3BvaWxlciBoMiB7XG4gICAgd2lkdGg6IDkwJTsgfVxuXG4ucHQgaDMsIC5wdCBwIHtcbiAgZm9udC1mYW1pbHk6ICdSdWJpaycsICdTZWdvZSBVSSBFbW9qaScsIHNhbnMtc2VyaWY7IH1cblxuLnR2IGgzIHtcbiAgZm9udC1mYW1pbHk6ICdWYW5pbGxhJywgJ1NlZ29lIFVJIEVtb2ppJywgc2Fucy1zZXJpZjsgfVxuXG4udHYgcCB7XG4gIGZvbnQtZmFtaWx5OiAnTWVycml3ZWF0aGVyJywgJ1NlZ29lIFVJIEVtb2ppJywgc2Fucy1zZXJpZjsgfVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\justi\Programming\colors.justinschaaf.com\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map