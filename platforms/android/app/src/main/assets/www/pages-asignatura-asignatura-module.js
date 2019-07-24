(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-asignatura-asignatura-module"],{

/***/ "./src/app/pages/asignatura/asignatura.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/asignatura/asignatura.module.ts ***!
  \*******************************************************/
/*! exports provided: AsignaturaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturaPageModule", function() { return AsignaturaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _asignatura_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./asignatura.page */ "./src/app/pages/asignatura/asignatura.page.ts");
/* harmony import */ var _tema_tema_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../tema/tema.page */ "./src/app/pages/tema/tema.page.ts");
/* harmony import */ var _tema_tema_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../tema/tema.module */ "./src/app/pages/tema/tema.module.ts");









var routes = [
    {
        path: '',
        component: _asignatura_page__WEBPACK_IMPORTED_MODULE_6__["AsignaturaPage"]
    }
];
var AsignaturaPageModule = /** @class */ (function () {
    function AsignaturaPageModule() {
    }
    AsignaturaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            entryComponents: [_tema_tema_page__WEBPACK_IMPORTED_MODULE_7__["TemaPage"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _tema_tema_module__WEBPACK_IMPORTED_MODULE_8__["TemaPageModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_asignatura_page__WEBPACK_IMPORTED_MODULE_6__["AsignaturaPage"]]
        })
    ], AsignaturaPageModule);
    return AsignaturaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/asignatura/asignatura.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pages/asignatura/asignatura.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<<<<<<< HEAD\r\n<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title color=\"primary\" >Registrar asignatura</ion-title>\r\n=======\r\n<ion-header no-border>\r\n  <ion-toolbar mode=\"ios\">\r\n    <ion-title color=\"primary\">Registrar asignatura</ion-title>\r\n>>>>>>> 67c1fb8dfaf7a060cf702f6e05e9903d3da364ad\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- MK -->\r\n    <form [formGroup]=\"formAsignatura\">\r\n      <ion-list>\r\n        <ion-item>  \r\n            <ion-label position=\"floating\">Nombre de la asignatura</ion-label>\r\n            <ion-input type=\"text\" formControlName=\"nombre\"></ion-input>\r\n          </ion-item>\r\n          <ion-button expand=\"block\" shape=\"round\" (click)=\"agregarAsignatura()\">\r\n              Agregar asignatura\r\n            </ion-button>\r\n      </ion-list>\r\n    </form>\r\n  <br>\r\n  <div>\r\n    <ion-list>\r\n        <ion-item>\r\n            <ion-title>Consultar asignatura :</ion-title>\r\n            <ion-input type=\"text\"></ion-input>\r\n        </ion-item>\r\n<<<<<<< HEAD\r\n=======\r\n\r\n    </ion-list>\r\n    <ion-list>\r\n        <ion-item *ngFor=\"let asignatura of asignaturas\">\r\n          <ion-label ion-text >{{asignatura.nombre}}</ion-label>\r\n          <ion-button shape=\"round\"(click)=\"presentModal()\" mode=\"ios\" text-center>\r\n              Temas\r\n              <ion-icon slot=\"start\" name=\"add\"></ion-icon>\r\n          </ion-button>\r\n        </ion-item>\r\n>>>>>>> 67c1fb8dfaf7a060cf702f6e05e9903d3da364ad\r\n    </ion-list>\r\n    <ion-list>\r\n        <ion-item *ngFor=\"let asignatura of asignaturas\">\r\n            <ion-label ion-text >{{asignatura.nombre}}</ion-label>\r\n            <ion-button shape=\"round\" (click)=\"presentModal(asignatura.codigo_Asignatura)\">\r\n                + Temas\r\n              </ion-button>\r\n        </ion-item>\r\n      </ion-list>\r\n  </div>\r\n \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/asignatura/asignatura.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/asignatura/asignatura.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FzaWduYXR1cmEvYXNpZ25hdHVyYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/asignatura/asignatura.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/asignatura/asignatura.page.ts ***!
  \*****************************************************/
/*! exports provided: AsignaturaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsignaturaPage", function() { return AsignaturaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tema_tema_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tema/tema.page */ "./src/app/pages/tema/tema.page.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_bd_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/bd.service */ "./src/app/services/bd.service.ts");






var AsignaturaPage = /** @class */ (function () {
    function AsignaturaPage(modalController, Build, toast, bd) {
        this.modalController = modalController;
        this.Build = Build;
        this.toast = toast;
        this.bd = bd;
        this.asignatura = {};
        this.asignaturas = [];
        this.formAsignatura = this.crearFormulario();
        this.listaAsignatura();
    }
    AsignaturaPage.prototype.crearFormulario = function () {
        return this.Build.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    AsignaturaPage.prototype.ngOnInit = function () {
        this.loadAsignatura();
    };
    AsignaturaPage.prototype.loadAsignatura = function () {
        var _this = this;
        this.bd.getList('asignatura').subscribe(function (listAsig) {
            var asign = [];
            listAsig.forEach(function (asig) {
                asign.push(asig);
            });
            _this.asignaturas = asign;
        });
    };
    AsignaturaPage.prototype.asignaturaJSON = function (formTema) {
        return {
            nombre: formTema.get('nombre').value
        };
    };
    //juepa
    AsignaturaPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _tema_tema_page__WEBPACK_IMPORTED_MODULE_3__["TemaPage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AsignaturaPage.prototype.agregarAsignatura = function () {
        var _this = this;
        this.asignatura = this.asignaturaJSON(this.formAsignatura);
        this.bd.add('asignatura', this.asignatura).then(function () {
            _this.mensaje('Asignatura guardada correctamente', 3000);
            _this.limpiar();
            _this.asignatura = null;
        }).catch(function () {
            _this.mensaje('No se pudo guardar la asignatura', 3000);
        });
    };
    AsignaturaPage.prototype.listaAsignatura = function () {
        var _this = this;
        this.bd.getList("asignatura").subscribe(function (listAsig) {
            var asign = [];
            listAsig.forEach(function (element) {
                asign.push(element);
            });
            _this.asignaturas = asign;
        });
    };
    AsignaturaPage.prototype.mensaje = function (mensaje, time) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var to;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: mensaje,
                            duration: time
                        })];
                    case 1:
                        to = _a.sent();
                        return [2 /*return*/, to.present()];
                }
            });
        });
    };
    AsignaturaPage.prototype.limpiar = function () {
        this.formAsignatura.get('nombre').reset();
    };
    AsignaturaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-asignatura',
            template: __webpack_require__(/*! ./asignatura.page.html */ "./src/app/pages/asignatura/asignatura.page.html"),
            styles: [__webpack_require__(/*! ./asignatura.page.scss */ "./src/app/pages/asignatura/asignatura.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_bd_service__WEBPACK_IMPORTED_MODULE_5__["BdService"]])
    ], AsignaturaPage);
    return AsignaturaPage;
}());



/***/ }),

/***/ "./src/app/pages/tema/tema.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tema/tema.module.ts ***!
  \*******************************************/
/*! exports provided: TemaPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemaPageModule", function() { return TemaPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tema_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tema.page */ "./src/app/pages/tema/tema.page.ts");






var TemaPageModule = /** @class */ (function () {
    function TemaPageModule() {
    }
    TemaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ],
            declarations: [_tema_page__WEBPACK_IMPORTED_MODULE_5__["TemaPage"]]
        })
    ], TemaPageModule);
    return TemaPageModule;
}());



/***/ }),

/***/ "./src/app/pages/tema/tema.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/tema/tema.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>TEMA</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n        <ion-button  color=\"danger\" (click)=\"dismiss()\" shape=\"round\">\r\n            <ion-icon name=\"close\" slot=\"icon-only\"></ion-icon>\r\n         </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar> \r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form [formGroup]=\"formTema\">\r\n    <ion-list>\r\n      <ion-item>\r\n          <ion-text color = \"primary\">\r\n              <h1>Registrar tema</h1>\r\n            </ion-text>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-label position=\"floating\">Nombre del tema</ion-label>\r\n          <ion-input type=\"text\" formControlName=\"nombre\"></ion-input>\r\n      </ion-item>\r\n      <ion-item>\r\n          <ion-label position=\"floating\">Descripción del tema</ion-label>\r\n          <ion-textarea type=\"text\" formControlName=\"descripcion\"></ion-textarea>\r\n      </ion-item>\r\n      <ion-button expand=\"block\">\r\n          Agregar tema\r\n        </ion-button>\r\n    </ion-list>\r\n  </form>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/pages/tema/tema.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tema/tema.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RlbWEvdGVtYS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/tema/tema.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tema/tema.page.ts ***!
  \*****************************************/
/*! exports provided: TemaPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemaPage", function() { return TemaPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_bd_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/bd.service */ "./src/app/services/bd.service.ts");





var TemaPage = /** @class */ (function () {
    function TemaPage(modalController, Build, bd, toast) {
        this.modalController = modalController;
        this.Build = Build;
        this.bd = bd;
        this.toast = toast;
        this.formTema = this.crearFormulario();
    }
    TemaPage.prototype.crearFormulario = function () {
        return this.Build.group({
            nombre: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            descripcion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    TemaPage.prototype.temaJSON = function (formTema) {
        return {
            nombre: formTema.get('nombre').value,
            descripcion: formTema.get('descripcion').value
        };
    };
    TemaPage.prototype.ngOnInit = function () {
    };
    TemaPage.prototype.dismiss = function () {
        this.modalController.dismiss({
            'dismissed': true
        });
    };
    //nuevo pruebas
    TemaPage.prototype.agregarTema = function (id) {
        var _this = this;
        this.tema = this.temaJSON(this.formTema);
        this.bd.add('tema', this.tema).then(function () {
            _this.mensaje('tema guardada correctamente', 3000);
            _this.limpiar();
            _this.tema = null;
        }).catch(function () {
            _this.mensaje('No se pudo guardar el tema', 3000);
        });
    };
    TemaPage.prototype.mensaje = function (mensaje, time) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var to;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toast.create({
                            message: mensaje,
                            duration: time
                        })];
                    case 1:
                        to = _a.sent();
                        return [2 /*return*/, to.present()];
                }
            });
        });
    };
    TemaPage.prototype.limpiar = function () {
        this.formTema.get('nombre').reset();
        this.formTema.get('descripcion').reset();
    };
    TemaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tema',
            template: __webpack_require__(/*! ./tema.page.html */ "./src/app/pages/tema/tema.page.html"),
            styles: [__webpack_require__(/*! ./tema.page.scss */ "./src/app/pages/tema/tema.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_bd_service__WEBPACK_IMPORTED_MODULE_4__["BdService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], TemaPage);
    return TemaPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-asignatura-asignatura-module.js.map