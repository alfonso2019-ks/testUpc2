(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-registrarse-registrarse-module"],{

/***/ "./src/app/pages/registrarse/registrarse.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/registrarse/registrarse.module.ts ***!
  \*********************************************************/
/*! exports provided: RegistrarsePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarsePageModule", function() { return RegistrarsePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _registrarse_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registrarse.page */ "./src/app/pages/registrarse/registrarse.page.ts");







var routes = [
    {
        path: '',
        component: _registrarse_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarsePage"]
    }
];
var RegistrarsePageModule = /** @class */ (function () {
    function RegistrarsePageModule() {
    }
    RegistrarsePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_registrarse_page__WEBPACK_IMPORTED_MODULE_6__["RegistrarsePage"]]
        })
    ], RegistrarsePageModule);
    return RegistrarsePageModule;
}());



/***/ }),

/***/ "./src/app/pages/registrarse/registrarse.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/registrarse/registrarse.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title color=\"primary\">registrarse</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\">Primer Nombre</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Segundo Nombre</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Primer Apellido</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Segundo Apellido</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Usuario</ion-label>\n      <ion-input type=\"text\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Contraseña</ion-label>\n      <ion-input type=\"password\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-button expand=\"block\" shape=\"round\">\n    Registrarse\n  </ion-button>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/registrarse/registrarse.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/registrarse/registrarse.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlZ2lzdHJhcnNlL3JlZ2lzdHJhcnNlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/registrarse/registrarse.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/registrarse/registrarse.page.ts ***!
  \*******************************************************/
/*! exports provided: RegistrarsePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrarsePage", function() { return RegistrarsePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RegistrarsePage = /** @class */ (function () {
    function RegistrarsePage() {
    }
    RegistrarsePage.prototype.ngOnInit = function () {
    };
    RegistrarsePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-registrarse',
            template: __webpack_require__(/*! ./registrarse.page.html */ "./src/app/pages/registrarse/registrarse.page.html"),
            styles: [__webpack_require__(/*! ./registrarse.page.scss */ "./src/app/pages/registrarse/registrarse.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RegistrarsePage);
    return RegistrarsePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-registrarse-registrarse-module.js.map