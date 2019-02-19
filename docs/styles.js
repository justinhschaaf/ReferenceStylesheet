(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "\n@import url(\"https://fonts.googleapis.com/css?family=Major+Mono+Display|Overpass|Rubik|Merriweather\");\n@import url(\"https://content.justinschaaf.com/common/fonts/fonts.css\");\n/* You can add global styles to this file, and also import other style files */\n/* https://stackoverflow.com/questions/5445491/height-equal-to-dynamic-width-css-fluid-layout#6615994 */\n/*#container {\r\n  display: inline-block;\r\n  position: relative;\r\n  width: 100%;\r\n}\r\n\r\n#dummy {\r\n  margin-top: 75%;\r\n}\r\n\r\n.colorbox {\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  background-color: silver\r\n}*/\n* {\n  margin: 0;\n  font-family: 'Overpass', 'Segoe UI Emoji', sans-serif; }\nh1, h2, h3, h4, h5, h6 {\n  font-family: 'Major Mono Display', 'Segoe UI Emoji', monospace; }\nbody {\n  margin: 0px;\n  padding: 0px;\n  background-color: #ffffff; }\n.logo {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 16pt 16pt 0pt 16pt; }\n.title {\n  text-align: center;\n  font-size: 48pt;\n  color: #111111; }\n.heading-desc {\n  text-align: center;\n  font-size: 14pt; }\n.buttons {\n  margin: 10pt; }\nbutton {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 10pt;\n  background-color: #111111;\n  color: #ffffff;\n  font-weight: bold;\n  border: 0;\n  box-shadow: 0pt 2pt 5pt rgba(20, 20, 20, 0.4); }\n.links {\n  display: flex;\n  flex-direction: row;\n  justify-content: center; }\n.link {\n  width: 200pt;\n  padding: 5pt;\n  color: #111111;\n  font-weight: bold;\n  text-align: center; }\n.footer-link {\n  text-decoration: none;\n  color: inherit; }\n.textbanner {\n  padding: 5pt 5%;\n  text-align: center; }\n.spoiler_container {\n  display: flex;\n  flex-wrap: wrap; }\n.spoiler_container h2 {\n    width: 60%; }\n.spoiler_container .spoilerbutton {\n    width: 30%;\n    background-color: #f2f2f2;\n    border: none; }\n.spoiler_container .spoiler {\n    width: 100%; }\n.spoilerbutton {\n  display: block; }\n.spoiler {\n  overflow: hidden;\n  background: #f2f2f2;\n  z-index: -1; }\n.spoiler > div {\n  transition: margin 0.2s ease; }\n.spoilerbutton[value=\"Show\"] + .spoiler > div {\n  margin-top: -1000%; }\n.spoilerbutton[value=\"Hide\"] + .spoiler {\n  padding: 8pt; }\n.spoilerbutton[value=\"Hide\"] + .spoiler h2 {\n    width: 90%; }\n.pt h3, .pt p {\n  font-family: 'Rubik', 'Segoe UI Emoji', sans-serif; }\n.tv h3 {\n  font-family: 'Vanilla', 'Segoe UI Emoji', sans-serif; }\n.tv p {\n  font-family: 'Merriweather', 'Segoe UI Emoji', sans-serif; }\n.generator_container {\n  margin: 0 0 16pt 0; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9DOlxcVXNlcnNcXGp1c3RpXFxQcm9ncmFtbWluZ1xcY29sb3JzLmp1c3RpbnNjaGFhZi5jb20vc3JjXFxzdHlsZXMuc2NzcyIsInNyYy9zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBc0JBLHFHQUFZO0FBQ1osc0VBQVk7QUF2QlosOEVBQUE7QUFFQSx1R0FBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztFQ2dCRTtBRE1GO0VBQ0UsU0FBUztFQUNULHFEQUFxRCxFQUFBO0FBR3ZEO0VBQ0UsOERBQThELEVBQUE7QUFHaEU7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QixFQUFBO0FBRzNCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUE7QUFHN0I7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixlQUFlLEVBQUE7QUFHakI7RUFDRSxZQUFZLEVBQUE7QUFHZDtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsNkNBQTZDLEVBQUE7QUFHL0M7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBO0FBR3pCO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3BCO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWMsRUFBQTtBQUdoQjtFQUNFLGVBQWU7RUFDZixrQkFBa0IsRUFBQTtBQUdwQjtFQUVFLGFBQWE7RUFDYixlQUFlLEVBQUE7QUFIakI7SUFNSSxVQUFVLEVBQUE7QUFOZDtJQVVJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsWUFBWSxFQUFBO0FBWmhCO0lBZ0JJLFdBQVcsRUFBQTtBQU1mO0VBQ0UsY0FBYyxFQUFBO0FBR2hCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXLEVBQUE7QUFHYjtFQUlFLDRCQUE0QixFQUFBO0FBRzlCO0VBQ0Usa0JBQWtCLEVBQUE7QUFHcEI7RUFFRSxZQUFZLEVBQUE7QUFGZDtJQUtJLFVBQVUsRUFBQTtBQU9kO0VBRUksa0RBQWtELEVBQUE7QUFJdEQ7RUFFSSxvREFBb0QsRUFBQTtBQUZ4RDtFQUtJLHlEQUF5RCxFQUFBO0FBSTdEO0VBQ0Usa0JBQWtCLEVBQUEiLCJmaWxlIjoic3JjL3N0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xyXG5cclxuLyogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTQ0NTQ5MS9oZWlnaHQtZXF1YWwtdG8tZHluYW1pYy13aWR0aC1jc3MtZmx1aWQtbGF5b3V0IzY2MTU5OTQgKi9cclxuLyojY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jZHVtbXkge1xyXG4gIG1hcmdpbi10b3A6IDc1JTtcclxufVxyXG5cclxuLmNvbG9yYm94IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlclxyXG59Ki9cclxuXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TWFqb3IrTW9ubytEaXNwbGF5fE92ZXJwYXNzfFJ1YmlrfE1lcnJpd2VhdGhlcicpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9jb250ZW50Lmp1c3RpbnNjaGFhZi5jb20vY29tbW9uL2ZvbnRzL2ZvbnRzLmNzcycpO1xyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3ZlcnBhc3MnLCAnU2Vnb2UgVUkgRW1vamknLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcclxuICBmb250LWZhbWlseTogJ01ham9yIE1vbm8gRGlzcGxheScsICdTZWdvZSBVSSBFbW9qaScsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZzogMTZwdCAxNnB0IDBwdCAxNnB0O1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDQ4cHQ7XHJcbiAgY29sb3I6ICMxMTExMTE7XHJcbn1cclxuXHJcbi5oZWFkaW5nLWRlc2Mge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHQ7XHJcbn1cclxuXHJcbi5idXR0b25zIHtcclxuICBtYXJnaW46IDEwcHQ7XHJcbn1cclxuXHJcbmJ1dHRvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmc6IDEwcHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzExMTExMTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogMHB0IDJwdCA1cHQgcmdiYSgyMCwgMjAsIDIwLCAwLjQpO1xyXG59XHJcblxyXG4ubGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmsge1xyXG4gIHdpZHRoOiAyMDBwdDtcclxuICBwYWRkaW5nOiA1cHQ7XHJcbiAgY29sb3I6ICMxMTExMTE7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmsge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLnRleHRiYW5uZXIge1xyXG4gIHBhZGRpbmc6IDVwdCA1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zcG9pbGVyX2NvbnRhaW5lciB7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICBoMiB7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gIH1cclxuXHJcbiAgLnNwb2lsZXJidXR0b24ge1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuc3BvaWxlciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBBbmltYXRlZCBzcG9pbGVyIENTUyBiYXNlZCBvbiBCbG9nZ2Vyc2VudHJhbC5jb20gLS0gaHR0cDovL3d3dy5ibG9nZ2Vyc2VudHJhbC5jb20vMjAxMy8wMy9jb250ZW50LXNwb2lsZXItd2l0aC1zaW1wbGUtY3NzMy5odG1sXHJcbi5zcG9pbGVyYnV0dG9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLnNwb2lsZXIge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYmFja2dyb3VuZDogI2YyZjJmMjtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuLnNwb2lsZXIgPiBkaXYge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAwLjJzIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuICB0cmFuc2l0aW9uOiBtYXJnaW4gMC4ycyBlYXNlO1xyXG59XHJcblxyXG4uc3BvaWxlcmJ1dHRvblt2YWx1ZT1cIlNob3dcIl0gKyAuc3BvaWxlciA+IGRpdiB7XHJcbiAgbWFyZ2luLXRvcDogLTEwMDAlO1xyXG59XHJcblxyXG4uc3BvaWxlcmJ1dHRvblt2YWx1ZT1cIkhpZGVcIl0gKyAuc3BvaWxlciB7XHJcblxyXG4gIHBhZGRpbmc6IDhwdDtcclxuXHJcbiAgaDIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vLyBFbmQgU3BvaWxlclxyXG5cclxuLnB0IHtcclxuICBoMywgcCB7XHJcbiAgICBmb250LWZhbWlseTogJ1J1YmlrJywgJ1NlZ29lIFVJIEVtb2ppJywgc2Fucy1zZXJpZjsgXHJcbiAgfVxyXG59XHJcblxyXG4udHYge1xyXG4gIGgzIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnVmFuaWxsYScsICdTZWdvZSBVSSBFbW9qaScsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNZXJyaXdlYXRoZXInLCAnU2Vnb2UgVUkgRW1vamknLCBzYW5zLXNlcmlmO1xyXG4gIH1cclxufVxyXG5cclxuLmdlbmVyYXRvcl9jb250YWluZXIge1xyXG4gIG1hcmdpbjogMCAwIDE2cHQgMDtcclxufVxyXG4iLCIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXG4vKiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NDQ1NDkxL2hlaWdodC1lcXVhbC10by1keW5hbWljLXdpZHRoLWNzcy1mbHVpZC1sYXlvdXQjNjYxNTk5NCAqL1xuLyojY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jZHVtbXkge1xyXG4gIG1hcmdpbi10b3A6IDc1JTtcclxufVxyXG5cclxuLmNvbG9yYm94IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNpbHZlclxyXG59Ki9cbkBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU1ham9yK01vbm8rRGlzcGxheXxPdmVycGFzc3xSdWJpa3xNZXJyaXdlYXRoZXJcIik7XG5AaW1wb3J0IHVybChcImh0dHBzOi8vY29udGVudC5qdXN0aW5zY2hhYWYuY29tL2NvbW1vbi9mb250cy9mb250cy5jc3NcIik7XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LWZhbWlseTogJ092ZXJwYXNzJywgJ1NlZ29lIFVJIEVtb2ppJywgc2Fucy1zZXJpZjsgfVxuXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2IHtcbiAgZm9udC1mYW1pbHk6ICdNYWpvciBNb25vIERpc3BsYXknLCAnU2Vnb2UgVUkgRW1vamknLCBtb25vc3BhY2U7IH1cblxuYm9keSB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cblxuLmxvZ28ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgcGFkZGluZzogMTZwdCAxNnB0IDBwdCAxNnB0OyB9XG5cbi50aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA0OHB0O1xuICBjb2xvcjogIzExMTExMTsgfVxuXG4uaGVhZGluZy1kZXNjIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHQ7IH1cblxuLmJ1dHRvbnMge1xuICBtYXJnaW46IDEwcHQ7IH1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIHBhZGRpbmc6IDEwcHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMTExMTE7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiAwO1xuICBib3gtc2hhZG93OiAwcHQgMnB0IDVwdCByZ2JhKDIwLCAyMCwgMjAsIDAuNCk7IH1cblxuLmxpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cblxuLmxpbmsge1xuICB3aWR0aDogMjAwcHQ7XG4gIHBhZGRpbmc6IDVwdDtcbiAgY29sb3I6ICMxMTExMTE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLmZvb3Rlci1saW5rIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogaW5oZXJpdDsgfVxuXG4udGV4dGJhbm5lciB7XG4gIHBhZGRpbmc6IDVwdCA1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5zcG9pbGVyX2NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDsgfVxuICAuc3BvaWxlcl9jb250YWluZXIgaDIge1xuICAgIHdpZHRoOiA2MCU7IH1cbiAgLnNwb2lsZXJfY29udGFpbmVyIC5zcG9pbGVyYnV0dG9uIHtcbiAgICB3aWR0aDogMzAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgYm9yZGVyOiBub25lOyB9XG4gIC5zcG9pbGVyX2NvbnRhaW5lciAuc3BvaWxlciB7XG4gICAgd2lkdGg6IDEwMCU7IH1cblxuLnNwb2lsZXJidXR0b24ge1xuICBkaXNwbGF5OiBibG9jazsgfVxuXG4uc3BvaWxlciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIHotaW5kZXg6IC0xOyB9XG5cbi5zcG9pbGVyID4gZGl2IHtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAtbW96LXRyYW5zaXRpb246IG1hcmdpbiAwLjJzIGVhc2U7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRyYW5zaXRpb246IG1hcmdpbiAwLjJzIGVhc2U7IH1cblxuLnNwb2lsZXJidXR0b25bdmFsdWU9XCJTaG93XCJdICsgLnNwb2lsZXIgPiBkaXYge1xuICBtYXJnaW4tdG9wOiAtMTAwMCU7IH1cblxuLnNwb2lsZXJidXR0b25bdmFsdWU9XCJIaWRlXCJdICsgLnNwb2lsZXIge1xuICBwYWRkaW5nOiA4cHQ7IH1cbiAgLnNwb2lsZXJidXR0b25bdmFsdWU9XCJIaWRlXCJdICsgLnNwb2lsZXIgaDIge1xuICAgIHdpZHRoOiA5MCU7IH1cblxuLnB0IGgzLCAucHQgcCB7XG4gIGZvbnQtZmFtaWx5OiAnUnViaWsnLCAnU2Vnb2UgVUkgRW1vamknLCBzYW5zLXNlcmlmOyB9XG5cbi50diBoMyB7XG4gIGZvbnQtZmFtaWx5OiAnVmFuaWxsYScsICdTZWdvZSBVSSBFbW9qaScsIHNhbnMtc2VyaWY7IH1cblxuLnR2IHAge1xuICBmb250LWZhbWlseTogJ01lcnJpd2VhdGhlcicsICdTZWdvZSBVSSBFbW9qaScsIHNhbnMtc2VyaWY7IH1cblxuLmdlbmVyYXRvcl9jb250YWluZXIge1xuICBtYXJnaW46IDAgMCAxNnB0IDA7IH1cbiJdfQ== */", '', '']]

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