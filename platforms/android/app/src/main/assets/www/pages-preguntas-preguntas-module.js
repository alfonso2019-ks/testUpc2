(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-preguntas-preguntas-module"],{

/***/ "./src/app/pages/preguntas/preguntas.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/preguntas/preguntas.module.ts ***!
  \*****************************************************/
/*! exports provided: PreguntasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasPageModule", function() { return PreguntasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _preguntas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./preguntas.page */ "./src/app/pages/preguntas/preguntas.page.ts");







var routes = [
    {
        path: '',
        component: _preguntas_page__WEBPACK_IMPORTED_MODULE_6__["PreguntasPage"]
    }
];
var PreguntasPageModule = /** @class */ (function () {
    function PreguntasPageModule() {
    }
    PreguntasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_preguntas_page__WEBPACK_IMPORTED_MODULE_6__["PreguntasPage"]]
        })
    ], PreguntasPageModule);
    return PreguntasPageModule;
}());



/***/ }),

/***/ "./src/app/pages/preguntas/preguntas.page.html":
/*!*****************************************************!*\
  !*** ./src/app/pages/preguntas/preguntas.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>preguntas</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div [ngSwitch]=\"segment\">\n      <ion-card *ngSwitchCase=\"'add'\">\n          <ion-card-content>\n            <ion-list>\n              <ion-item>\n                <ion-label>Tipo de pregunta</ion-label>\n                <ion-select interface=\"popover\" placeholder=\"Seleccionar tipo\" (ionChange)=\"getTipo($event)\">\n                  <ion-select-option value=\"1\">Verbadero y falso</ion-select-option>\n                  <ion-select-option value=\"2\" selected>Selección multiple unica respuesta</ion-select-option>\n                </ion-select>\n              </ion-item>\n              <ion-item>\n                <ion-label position=\"floating\">Pregunta: </ion-label>\n                <ion-textarea [(ngModel)]=\"pregunta.descipcion\"></ion-textarea>\n              </ion-item>\n              <ng-container *ngIf=\"tipo == 2\">\n                <ion-radio-group name=\"auto\" (ionChange)=\"show($event)\">\n                  <ion-list id=\"radiOpcion\">\n                      <ion-item *ngFor=\"let item of arregloRadio; let i = index\">\n                          <ion-input type=\"text\" placeholder=\"Opción {{i+1}}\" [(ngModel)]=\"opciones[i]\"></ion-input>\n                          <ion-radio value=\"{{i+1}}\" slot=\"start\"></ion-radio>\n                          <ion-icon slot=\"end\" name=\"close\" (click)=\"borrarOpc(i)\"></ion-icon>\n                      </ion-item>\n                  </ion-list>\n                </ion-radio-group>\n                <ion-item (click)=\"addOpcion()\">\n                    <ion-label>Agregar Otra opción</ion-label>\n                    <ion-icon name=\"radio-button-off\" slot=\"start\"></ion-icon>\n                </ion-item>\n              </ng-container>\n              <ng-container *ngIf=\"tipo == 1\">\n                  <ion-radio-group name=\"auto\" (ionChange)=\"show($event)\">\n                    <ion-list id=\"radioVF\">\n                        <ion-item>\n                            <ion-label>Verdadeo</ion-label>\n                            <ion-radio value=\"1\" slot=\"start\"></ion-radio>\n                        </ion-item>\n                        <ion-item>\n                          <ion-label>Falso</ion-label>\n                          <ion-radio value=\"0\" slot=\"start\"></ion-radio>\n                      </ion-item>\n                    </ion-list>\n                  </ion-radio-group>\n              </ng-container>\n            </ion-list>\n          </ion-card-content>\n        </ion-card>\n\n      <ng-container *ngSwitchCase=\"'show'\">\n          <ion-list>\n            <ion-item *ngFor=\"let pre of arrayPreguntas; let i = index\">\n                <ion-badge slot=\"start\">{{i+1}}</ion-badge>\n              <ion-label>{{pre.descipcion}}</ion-label>\n            </ion-item>\n          </ion-list>\n      </ng-container>\n    </div>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" *ngIf=\"segment=='add'\">\n    <ion-fab-button (click)=\"add()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n<ion-footer no-border>\n  <ion-toolbar>\n      <ion-segment (ionChange)=\"selectSement($event)\" value=\"add\">\n        <ion-segment-button value=\"add\">\n          <ion-label>Agregar Preguntas</ion-label>\n        </ion-segment-button>\n        <ion-segment-button value=\"show\">\n          <ion-label>Preguntas</ion-label>\n        </ion-segment-button>\n      </ion-segment>\n  </ion-toolbar>\n</ion-footer>"

/***/ }),

/***/ "./src/app/pages/preguntas/preguntas.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/preguntas/preguntas.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZWd1bnRhcy9wcmVndW50YXMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/preguntas/preguntas.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/preguntas/preguntas.page.ts ***!
  \***************************************************/
/*! exports provided: PreguntasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreguntasPage", function() { return PreguntasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var src_app_services_bd_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/bd.service */ "./src/app/services/bd.service.ts");




var PreguntasPage = /** @class */ (function () {
    function PreguntasPage(toast, bd) {
        this.bd = bd;
        this.tipo = 2;
        this.arregloRadio = [];
        this.segment = 'add';
        this.preguntas = { pregunta: '', respuesta: '' };
        this.arrayPreguntas = [];
        this.pregunta = {};
        this.opciones = [];
    }
    PreguntasPage.prototype.ngOnInit = function () {
    };
    PreguntasPage.prototype.show = function (e) {
        console.log(e.detail.value);
        this.pregunta.respuesta = e.detail.value;
        this.preguntas.respuesta = e.detail.value;
    };
    PreguntasPage.prototype.getTipo = function (e) {
        console.log(e.detail.value);
        this.tipo = e.detail.value;
    };
    PreguntasPage.prototype.addOpcion = function () {
        // let grupoRadio = document.getElementById('radiOpcion');
        this.arregloRadio.push(+1);
        // this.arregloRadio++;
        console.log(this.arregloRadio);
    };
    PreguntasPage.prototype.selectSement = function (e) {
        this.segment = e.detail.value.toString();
    };
    PreguntasPage.prototype.add = function () {
        if (this.tipo == 1) {
            this.opciones[0] = "falso";
            this.opciones[1] = "verdadero";
            this.pregunta.opciones = this.opciones;
        }
        else {
            this.pregunta.opciones = this.opciones;
        }
        this.bd.add('preguntas', this.pregunta);
        this.arrayPreguntas.push(this.pregunta);
        this.pregunta = {};
        this.opciones = [];
        this.arregloRadio = [];
        console.log(this.arrayPreguntas);
    };
    PreguntasPage.prototype.borrarOpc = function (i) {
        this.arregloRadio.splice(i, 1);
    };
    PreguntasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-preguntas',
            template: __webpack_require__(/*! ./preguntas.page.html */ "./src/app/pages/preguntas/preguntas.page.html"),
            styles: [__webpack_require__(/*! ./preguntas.page.scss */ "./src/app/pages/preguntas/preguntas.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], src_app_services_bd_service__WEBPACK_IMPORTED_MODULE_3__["BdService"]])
    ], PreguntasPage);
    return PreguntasPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-preguntas-preguntas-module.js.map