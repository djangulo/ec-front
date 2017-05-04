webpackJsonp([1,4],Array(22).concat([
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicationService = (function () {
    function PublicationService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.publicationsUrl = 'https://ec.djangulo.com/api/v1/publications/'; // currently on localhost:8000, change later to actual domain
        this.publicationCategoriesUrl = 'https://ec.djangulo.com/api/v1/publications/categories';
    }
    PublicationService.prototype.getPublications = function () {
        return this.http.get(this.publicationsUrl)
            .toPromise()
            .then(function (response) { return response.json().results; })
            .catch(this.handleError);
    };
    PublicationService.prototype.getPublication = function (id) {
        var url = this.publicationsUrl + "/" + id + "/";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    PublicationService.prototype.getPublicationCategories = function () {
        return this.http.get(this.publicationCategoriesUrl)
            .toPromise()
            .then(function (response) { return response.json().results; })
            .catch(this.handleError);
    };
    PublicationService.prototype.getPublicationsByCategory = function (slug) {
        var url = this.publicationCategoriesUrl + "/" + slug;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().results; })
            .catch(this.handleError);
    };
    PublicationService.prototype.delete = function (id) {
        var url = this.publicationsUrl + "/" + id + "/";
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    PublicationService.prototype.create = function (publication) {
        return this.http
            .post(this.publicationsUrl, JSON.stringify({ publication: publication }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    PublicationService.prototype.update = function (publication) {
        var url = this.publicationsUrl + "/" + publication.id;
        return this.http
            .put(url, JSON.stringify(publication), { headers: this.headers })
            .toPromise()
            .then(function () { return publication; })
            .catch(this.handleError);
    };
    PublicationService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return PublicationService;
}());
PublicationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], PublicationService);

var _a;
//# sourceMappingURL=publication.service.js.map

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorkService = (function () {
    function WorkService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.worksUrl = 'https://ec.djangulo.com/api/v1/works/'; // currently on localhost:8000, change later to actual domain
        this.workCategoriesUrl = 'https://ec.djangulo.com/api/v1/works/categories';
    }
    WorkService.prototype.getWorks = function () {
        return this.http.get(this.worksUrl)
            .toPromise()
            .then(function (response) { return response.json().results; })
            .catch(this.handleError);
    };
    WorkService.prototype.getWork = function (id) {
        var url = this.worksUrl + "/" + id + "/";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    WorkService.prototype.getWorkCategories = function () {
        return this.http.get(this.workCategoriesUrl)
            .toPromise()
            .then(function (response) { return response.json().results; })
            .catch(this.handleError);
    };
    WorkService.prototype.getWorksByCategory = function (slug) {
        var url = this.workCategoriesUrl + "/" + slug;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().results; })
            .catch(this.handleError);
    };
    WorkService.prototype.delete = function (id) {
        var url = this.worksUrl + "/" + id + "/";
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    WorkService.prototype.create = function (work) {
        return this.http
            .post(this.worksUrl, JSON.stringify({ work: work }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    WorkService.prototype.update = function (work) {
        var url = this.worksUrl + "/" + work.id;
        return this.http
            .put(url, JSON.stringify(work), { headers: this.headers })
            .toPromise()
            .then(function () { return work; })
            .catch(this.handleError);
    };
    WorkService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return WorkService;
}());
WorkService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], WorkService);

var _a;
//# sourceMappingURL=work.service.js.map

/***/ }),
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animations; });

var Animations = {
    flyNavIn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyNavIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('home', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(0,0,0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('other', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(340%, 0, 0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => home', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(0, 100%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => other', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(340%, 100%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    flyNavRight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyNavRight', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('home', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(0,0,0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('other', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(340%,0,0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('home <=> other', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in'))
    ]),
    flySecondIn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flySecondIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('noSelection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-98%, 0, 0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('selection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(135%, 0, 0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => selection', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(135%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => noSelection', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-98%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    flySecondRight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flySecondRight', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('selection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(135%,0,0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('noSelection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-98%, 0, 0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('selection <=> noSelection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in'))
    ]),
    flyThirdIn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyThirdIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-110%, 0, 0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-110%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    deOpacify: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('deOpacify', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 0
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 1
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('off <=> on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in'))
    ]),
    fade: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('fade', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('invisible <=> visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1000ms ease-in')),
    ]),
};
//# sourceMappingURL=animations.js.map

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffService = (function () {
    function StaffService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.staffUrl = 'https://ec.djangulo.com/api/v1/staff/'; // currently on localhost:8000, change later to actual domain
    }
    StaffService.prototype.getStaff = function () {
        return this.http.get(this.staffUrl)
            .toPromise()
            .then(function (response) { return response.json().results; })
            .catch(this.handleError);
    };
    StaffService.prototype.getStaffMember = function (username) {
        var url = this.staffUrl + "/" + username + "/";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    StaffService.prototype.delete = function (id) {
        var url = this.staffUrl + "/" + id + "/";
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    StaffService.prototype.create = function (staff) {
        return this.http
            .post(this.staffUrl, JSON.stringify({ staff: staff }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    StaffService.prototype.update = function (staff) {
        var url = this.staffUrl + "/" + staff.id;
        return this.http
            .put(url, JSON.stringify(staff), { headers: this.headers })
            .toPromise()
            .then(function () { return staff; })
            .catch(this.handleError);
    };
    StaffService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return StaffService;
}());
StaffService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], StaffService);

var _a;
//# sourceMappingURL=staff.service.js.map

/***/ }),
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staff_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_animations__ = __webpack_require__(130);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StaffListComponent = (function () {
    function StaffListComponent(staffService, router, route, location) {
        this.staffService = staffService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.staff = [];
        this.interns = [];
    }
    StaffListComponent.prototype.ngOnInit = function () {
        this.getStaffMembers();
    };
    StaffListComponent.prototype.getStaffMembers = function () {
        var _this = this;
        this.staffService
            .getStaff()
            .then(function (staff) {
            for (var i = 0; i < staff.length; i++) {
                if (staff[i].staff_or_intern === "Intern") {
                    _this.interns.push(staff[i]);
                }
                else if (staff[i].staff_or_intern === "Staff") {
                    _this.staff.push(staff[i]);
                }
                else if (staff[i].staff_or_intern === "Both") {
                    _this.interns.push(staff[i]);
                    _this.staff.push(staff[i]);
                }
            }
        });
        //   (staff) => {
        //   for(let s of staff){
        //     console.log(s.staff_of_intern)
        //     switch(s.staff_of_intern){
        //       case 'Staff': {
        //         this.staff.push(s);
        //         break;
        //       }
        //       case 'Intern': {
        //         this.interns.push(s);
        //         break;
        //       }
        //       case 'Both': {
        //         this.interns.push(s);
        //         this.staff.push(s);
        //         break;
        //       }
        //     }
        //     console.log(staff.length, s.staff_of_intern)
        //   }
        // });
    };
    StaffListComponent.prototype.onSelect = function (member) {
        this.selectedMember = member;
    };
    StaffListComponent.prototype.clearSelection = function () {
        this.selectedMember = null;
    };
    return StaffListComponent;
}());
StaffListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Z" /* Component */])({
        template: __webpack_require__(207),
        styles: [__webpack_require__(197)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_4__staff_animations__["a" /* Animations */].flyStaffIn
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__staff_service__["a" /* StaffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__staff_service__["a" /* StaffService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* Location */]) === "function" && _d || Object])
], StaffListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=staff-list.component.js.map

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".btn{\n  display: block;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  font-size: 0;\n  box-shadow: none;\n  border-radius: none;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.btn-scroll {\n    display: inline-block;\n    width: 2.5%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    background: #777;\n    line-height: center;\n}\n\n.close-icon {\n  display: block;\n  position: absolute;\n  top: 45.83333333%;\n  left: 18.75%;\n  right: 18.75%;\n  height: 8.33333333%;\n  background: #000;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n\n.close-icon:focus {\n  outline: none;\n}\n\n.close-icon::after {\n  position: absolute;\n  display: block;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  content: \"\";\n}", ""]);

// exports


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\nbody {\n    font-family: 'Helvetica Neue', Helvetica, 'Open Sans', sans-serif, Arial;\n    font-weight: 300;\n    font-size: 12px;\n    list-style: none;\n    text-decoration: none;\n    background-color: #eee;\n}\n\nheader {\n    float: left;\n    margin: 0 0 30px 0;\n    padding: 5px 0 0 0 ;\n    width: 100%;\n    height: 120px;\n}\n\nheader a img {\n    margin: 45px 0 0 45px;\n}\n\n::-webkit-scrollbar {\n    display: none;\n}\n\n.noscroll {\n    overflow: hidden;\n}\n\n.content {\n    max-width: 990px;\n    margin: 0 auto;\n    padding: 0 1.5%;\n}\n\n.menu {\n    width: 24%;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    font-weight: inherit;\n    font-style: inherit;\n    vertical-align: baseline;\n    float: left;\n}\n\n.home-menu {\n        background: rgba(255,255,255,0.7);\n}\n\n.menu-item {\n    cursor: pointer;\n    width: 100%;\n    color: #444;\n    font-size: 1.8em;\n    display: block;\n    margin: 10% 0;\n    text-decoration: none;\n    list-style: inherit;\n}\n\n.active {\n    color: #6d456d;\n}", ""]);

// exports


/***/ }),
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.categoriesUrl = 'https://ec.djangulo.com/api/v1/categories'; // currently on localhost:8000, change later to actual domain
        this.worksUrl = 'https://ec.djangulo.com/api/v1/works'; // currently on localhost:8000, change later to actual domain
        this.publicationsUrl = 'https://ec.djangulo.com/api/v1/publications'; // currently on localhost:8000, change later to actual domain
        this.pressUrl = 'https://ec.djangulo.com/api/v1/press'; // currently on localhost:8000, change later to actual domain
    }
    CategoryService.prototype.getCategories = function () {
        return this.http.get(this.categoriesUrl)
            .toPromise()
            .then(function (response) { return response.json().data.results; })
            .catch(this.handleError);
    };
    CategoryService.prototype.getCategory = function (slug) {
        var url = this.categoriesUrl + "/" + slug + "/";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    CategoryService.prototype.delete = function (id) {
        var url = this.categoriesUrl + "/" + id + "/";
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    CategoryService.prototype.create = function (category) {
        return this.http
            .post(this.categoriesUrl, JSON.stringify({ category: category }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    CategoryService.prototype.update = function (category) {
        var url = this.categoriesUrl + "/" + category.id;
        return this.http
            .put(url, JSON.stringify(category), { headers: this.headers })
            .toPromise()
            .then(function () { return category; })
            .catch(this.handleError);
    };
    CategoryService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return CategoryService;
}());
CategoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], CategoryService);

var _a;
//# sourceMappingURL=category.service.js.map

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactFormComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactFormComponent = (function () {
    function ContactFormComponent(route, fb) {
        this.route = route;
        this.fb = fb;
        this.formErrors = {
            'name': '',
            'email': '',
            'subject': '',
            'message': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long.',
                'maxlength': 'Name cannot be more than 24 characters long.',
                'forbiddenName': 'Someone named "Bob" cannot be a hero.'
            },
            'power': {
                'required': 'Power is required.'
            }
        };
        this.createForm();
    }
    ContactFormComponent.prototype.createForm = function () {
        this.contactForm = this.fb.group({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };
    ContactFormComponent.prototype.ngOnInit = function () {
    };
    ContactFormComponent.prototype.ifDisplay = function (arg) { return arg.length > 0; };
    return ContactFormComponent;
}());
ContactFormComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        selector: 'app-contact-form',
        template: __webpack_require__(202),
        styles: [__webpack_require__(192)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object])
], ContactFormComponent);

var _a, _b;
//# sourceMappingURL=contact-form.component.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        template: __webpack_require__(203),
        styles: [__webpack_require__(193)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_image_service__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__(33);
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
    function HomeComponent(homeImageService, sanitizer) {
        this.homeImageService = homeImageService;
        this.sanitizer = sanitizer;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.fadeState = 'invisible';
        this.getHomeImages();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
        //Called once, before the instance is destroyed.
        //Add 'implements OnDestroy' to the class.
        this.fadeState = 'invisible';
    };
    HomeComponent.prototype.getHomeImages = function () {
        var _this = this;
        this.homeImageService
            .getImages()
            .then(function (images) {
            _this.images = images;
            _this.index = 0;
            _this.currentImage = images[_this.index];
            _this.updateBackground();
            _this.fadeState = 'visible';
        });
    };
    HomeComponent.prototype.increaseIndex = function () {
        var i = this.images.length - 1;
        while (this.currentImage.order === 0) {
            switch (this.index) {
                case i: {
                    this.index = 0;
                }
                default: {
                    this.index++;
                }
            }
        }
        return this.index;
    };
    HomeComponent.prototype.rotateImages = function () {
        this.currentImage = this.images[this.increaseIndex()];
    };
    HomeComponent.prototype.updateBackground = function () {
        this.div.nativeElement.style.backgroundImage = "url(" + this.currentImage.image + ")";
    };
    HomeComponent.prototype.getBackground = function (image) {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    return HomeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ViewChild */])('theDiv'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* ElementRef */]) === "function" && _a || Object)
], HomeComponent.prototype, "div", void 0);
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        template: __webpack_require__(204),
        styles: [__webpack_require__(194)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__home_image_service__["a" /* HomeImageService */]],
        animations: [
            __WEBPACK_IMPORTED_MODULE_3__animations__["a" /* Animations */].fade
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__home_image_service__["a" /* HomeImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__home_image_service__["a" /* HomeImageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageNotFoundComponent = (function () {
    function PageNotFoundComponent(location) {
        this.location = location;
    }
    PageNotFoundComponent.prototype.goBack = function () {
        this.location.back();
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        template: "\n    <h2>Page not found</h2>\n    <a routerLink=\"/\">Home</a>\n    <a (click)=\"goBack()\">Go Back</a>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* Location */]) === "function" && _a || Object])
], PageNotFoundComponent);

var _a;
//# sourceMappingURL=page-not-found.component.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publication_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationCategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublicationCategoriesComponent = (function () {
    function PublicationCategoriesComponent(publicationService, router, route, location) {
        this.publicationService = publicationService;
        this.router = router;
        this.route = route;
        this.location = location;
    }
    PublicationCategoriesComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    PublicationCategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.publicationService
            .getPublicationCategories()
            .then(function (categories) { return _this.categories = categories; });
    };
    PublicationCategoriesComponent.prototype.onSelect = function (category) {
        this.selectedCategory = category;
        this.router.navigate([category.slug], { relativeTo: this.route });
    };
    return PublicationCategoriesComponent;
}());
PublicationCategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Z" /* Component */])({
        template: __webpack_require__(205),
        styles: [__webpack_require__(195)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__publication_service__["a" /* PublicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__publication_service__["a" /* PublicationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* Location */]) === "function" && _d || Object])
], PublicationCategoriesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=publication-categories.component.js.map

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__categories__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__publication_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PublicationListComponent = (function () {
    function PublicationListComponent(publicationService, route, router) {
        this.publicationService = publicationService;
        this.route = route;
        this.router = router;
    }
    PublicationListComponent.prototype.ngOnInit = function () {
        this.getPublications();
    };
    PublicationListComponent.prototype.getPublications = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.publicationService.
            getPublicationsByCategory(params['slug']); })
            .subscribe(function (publications) { return _this.publications = publications; });
    };
    PublicationListComponent.prototype.onSelect = function (publication) {
        this.selectedPublication = publication;
    };
    PublicationListComponent.prototype.deSelect = function () {
        this.selectedPublication = null;
    };
    return PublicationListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__categories__["a" /* Category */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__categories__["a" /* Category */]) === "function" && _a || Object)
], PublicationListComponent.prototype, "category", void 0);
PublicationListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        template: __webpack_require__(206),
        styles: [__webpack_require__(196)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__publication_service__["a" /* PublicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__publication_service__["a" /* PublicationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], PublicationListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=publication-list.component.js.map

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publication_categories_publication_categories_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publication_list_publication_list_component__ = __webpack_require__(79);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core


// Components


var publicationRoutes = [{
        path: 'publications/categories',
        component: __WEBPACK_IMPORTED_MODULE_2__publication_categories_publication_categories_component__["a" /* PublicationCategoriesComponent */],
        children: [{
                path: ':slug',
                component: __WEBPACK_IMPORTED_MODULE_3__publication_list_publication_list_component__["a" /* PublicationListComponent */]
            }]
    }];
var PublicationRoutingModule = (function () {
    function PublicationRoutingModule() {
    }
    return PublicationRoutingModule;
}());
PublicationRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(publicationRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], PublicationRoutingModule);

//# sourceMappingURL=publications-routing.module.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animations__ = __webpack_require__(33);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkCategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorkCategoriesComponent = (function () {
    function WorkCategoriesComponent(workService, router, route, location) {
        this.workService = workService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.hoverState = 'off';
    }
    WorkCategoriesComponent.prototype.ngOnInit = function () {
        this.determineSelectionState();
        this.getCategories();
        console.log(JSON.stringify(this.router.url).split('/')[3] === undefined);
    };
    WorkCategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.workService
            .getWorkCategories()
            .then(function (categories) { return _this.categories = categories; });
    };
    WorkCategoriesComponent.prototype.onSelect = function (category) {
        this.selectedCategory = category;
        this.router.navigate([category.slug], { relativeTo: this.route });
        this.selectionState = 'selection';
    };
    WorkCategoriesComponent.prototype.determineSelectionState = function () {
        if (JSON.stringify(this.router.url).split('/')[3] === undefined) {
            this.selectionState = 'noSelection';
        }
        else {
            this.selectionState = 'selection';
        }
    };
    WorkCategoriesComponent.prototype.onHover = function (category) {
        this.hoveredCategory = category;
        this.hoverState = 'on';
    };
    WorkCategoriesComponent.prototype.offHover = function () {
        this.hoverState = 'off';
    };
    return WorkCategoriesComponent;
}());
WorkCategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Z" /* Component */])({
        template: __webpack_require__(208),
        styles: [__webpack_require__(198)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_4__animations__["a" /* Animations */].deOpacify,
            __WEBPACK_IMPORTED_MODULE_4__animations__["a" /* Animations */].flySecondIn,
            __WEBPACK_IMPORTED_MODULE_4__animations__["a" /* Animations */].flySecondRight,
            __WEBPACK_IMPORTED_MODULE_4__animations__["a" /* Animations */].flyThirdIn
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__work_service__["a" /* WorkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__work_service__["a" /* WorkService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* Location */]) === "function" && _d || Object])
], WorkCategoriesComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=work-categories.component.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WorkListComponent = (function () {
    function WorkListComponent(workService, route, router) {
        this.workService = workService;
        this.route = route;
        this.router = router;
    }
    WorkListComponent.prototype.ngOnInit = function () {
        this.getWorks();
    };
    WorkListComponent.prototype.getWorks = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.workService.getWorksByCategory(params['slug']); })
            .subscribe(function (works) { return _this.works = works; });
    };
    WorkListComponent.prototype.onSelect = function (work) {
        this.selectedWork = work;
        this.setInitialStage();
    };
    WorkListComponent.prototype.deSelect = function () {
        this.selectedWork = null;
    };
    WorkListComponent.prototype.setInitialStage = function () {
        this.pictures = [];
        this.pictures = this.pictures.concat(this.selectedWork.cover, this.selectedWork.pictures);
        this.i = this.pictures.length;
        switch (this.i) {
            case 0: {
                return null;
            }
            case 1: {
                this.c = 0;
                this.l = 0;
                this.r = 0;
                break;
            }
            case 2: {
                this.c = 0;
                this.r = 1;
                this.l = 1;
                break;
            }
            default: {
                this.c = 0;
                this.r = 1;
                this.l = this.i - 1;
            }
        }
        this.stageCenter = this.pictures[this.c];
        this.stageRight = this.pictures[this.r];
        this.stageLeft = this.pictures[this.l];
    };
    // on lcick left, select left image
    // rotate 3  stages to match new center
    //on click right, select right image
    //deal with less than 3 image cases
    //  single image case
    //  two image case
    WorkListComponent.prototype.prevPic = function () {
        switch (this.i) {
            case 0: {
                return null;
            }
            case 1: {
                this.c = 0;
                this.l = 0;
                this.r = 0;
                break;
            }
            case 2: {
                if (this.c === 0) {
                    this.c = 1;
                }
                else {
                    this.c = 0;
                }
                if (this.c === 0) {
                    this.r = 1;
                    this.l = 1;
                }
                else {
                    this.r = 0;
                    this.l = 0;
                }
                break;
            }
            default:
                {
                    if (this.c === 1) {
                        this.c = this.c - 1;
                        this.r = this.c + 1;
                        this.l = this.i - 1;
                    }
                    else if (this.c === 0) {
                        this.c = this.i - 1;
                        this.r = 0;
                        this.l = this.i - 2;
                    }
                    else {
                        this.c = this.c - 1;
                        this.r = this.c + 1;
                        this.l = this.c - 1;
                    }
                }
                break;
        }
        this.stageCenter = this.pictures[this.c];
        this.stageRight = this.pictures[this.r];
        this.stageLeft = this.pictures[this.l];
    };
    WorkListComponent.prototype.nextPic = function () {
        switch (this.i) {
            case 0: {
                return null;
            }
            case 1: {
                this.c = 0;
                this.l = 0;
                this.r = 0;
                break;
            }
            case 2: {
                if (this.c === (this.i - 1)) {
                    this.c = 0;
                }
                else {
                    this.c = 1;
                }
                if (this.c === 0) {
                    this.r = 1;
                    this.l = 1;
                }
                else {
                    this.r = 0;
                    this.l = 0;
                }
                break;
            }
            default: {
                if (this.c === (this.i - 2)) {
                    this.c = this.c + 1;
                    this.r = 0;
                    this.l = this.c - 1;
                }
                else if (this.c === (this.i - 1)) {
                    this.c = 0;
                    this.r = 1;
                    this.l = this.i - 1;
                }
                else {
                    this.c = this.c + 1;
                    this.r = this.c + 1;
                    this.l = this.c - 1;
                }
                break;
            }
        }
        this.stageCenter = this.pictures[this.c];
        this.stageRight = this.pictures[this.r];
        this.stageLeft = this.pictures[this.l];
    };
    WorkListComponent.prototype.scroll = function (event) {
        event.preventDefault();
        if (event.keyCode === 37) {
            this.prevPic();
        }
        else if (event.keyCode === 39) {
            this.nextPic();
        }
        else
            return;
    };
    WorkListComponent.prototype.escape = function (event) {
        event.preventDefault();
        if (event.keyCode === 27) {
            this.deSelect();
        }
        else
            return;
    };
    return WorkListComponent;
}());
WorkListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Z" /* Component */])({
        template: __webpack_require__(209),
        styles: [__webpack_require__(199)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_3__animations__["a" /* Animations */].flyThirdIn
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__work_service__["a" /* WorkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__work_service__["a" /* WorkService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], WorkListComponent);

var _a, _b, _c;
//# sourceMappingURL=work-list.component.js.map

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_categories_work_categories_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_list_work_list_component__ = __webpack_require__(82);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core


// Components


var workRoutes = [{
        path: 'works/categories',
        component: __WEBPACK_IMPORTED_MODULE_2__work_categories_work_categories_component__["a" /* WorkCategoriesComponent */],
        children: [{
                path: ':slug',
                component: __WEBPACK_IMPORTED_MODULE_3__work_list_work_list_component__["a" /* WorkListComponent */]
            }]
    }];
var WorkRoutingModule = (function () {
    function WorkRoutingModule() {
    }
    return WorkRoutingModule;
}());
WorkRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(workRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], WorkRoutingModule);

//# sourceMappingURL=works-routing.module.js.map

/***/ }),
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 109;


/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(137);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
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
    function AppComponent(route, router, location) {
        this.route = route;
        this.router = router;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.location.isCurrentPathEqualTo('/')) {
            this.homeState = 'home';
        }
        else {
            this.homeState = 'other';
        }
    };
    AppComponent.prototype.changeState = function (arg) {
        this.homeState = arg;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Z" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(201),
        styles: [__webpack_require__(191)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_0__animations__["a" /* Animations */].flyNavIn,
            __WEBPACK_IMPORTED_MODULE_0__animations__["a" /* Animations */].flyNavRight,
            __WEBPACK_IMPORTED_MODULE_0__animations__["a" /* Animations */].flySecondIn
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* Location */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__publications__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__staff__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__works__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__categories_category_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__publications_publication_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__staff_staff_service__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__works_work_service__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__(76);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core





// Components


// Modules




// Routing

// Services





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__contact__["a" /* ContactModule */],
            __WEBPACK_IMPORTED_MODULE_8__publications__["a" /* PublicationsModule */],
            __WEBPACK_IMPORTED_MODULE_10__works__["a" /* WorksModule */],
            __WEBPACK_IMPORTED_MODULE_9__staff__["a" /* StaffModule */],
            __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__categories_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_13__publications_publication_service__["a" /* PublicationService */],
            __WEBPACK_IMPORTED_MODULE_14__staff_staff_service__["a" /* StaffService */],
            __WEBPACK_IMPORTED_MODULE_15__works_work_service__["a" /* WorkService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category(state) {
        if (state === void 0) { state = 'inactive'; }
        this.state = state;
    }
    Category.prototype.toggleState = function () {
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    };
    return Category;
}());

//# sourceMappingURL=category.model.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_model__ = __webpack_require__(120);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__category_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__(73);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_component__ = __webpack_require__(75);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core


// Components

var contactRoutes = [
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_2__contact_component__["a" /* ContactComponent */] },
];
var ContactRoutingModule = (function () {
    function ContactRoutingModule() {
    }
    return ContactRoutingModule;
}());
ContactRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(contactRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], ContactRoutingModule);

//# sourceMappingURL=contact-routing.module.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_component__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_form_contact_form_component__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_routing_module__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core



// Vendor
// ...
// Components


// Routing

// Services
var ContactModule = (function () {
    function ContactModule() {
    }
    return ContactModule;
}());
ContactModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__contact_routing_module__["a" /* ContactRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_4__contact_form_contact_form_component__["a" /* ContactFormComponent */]
        ]
    })
], ContactModule);

//# sourceMappingURL=contact.module.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_module__ = __webpack_require__(123);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_form_contact_form_component__ = __webpack_require__(74);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeImageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeImageService = (function () {
    function HomeImageService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.url = 'https://ec.djangulo.com/api/v1/home-images/';
    }
    HomeImageService.prototype.getImages = function () {
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.json().results; })
            .catch(this.handleError);
    };
    HomeImageService.prototype.getImage = function (id) {
        var url = this.url + "/" + id + "/";
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    HomeImageService.prototype.delete = function (id) {
        var url = this.url + "/" + id + "/";
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    HomeImageService.prototype.create = function (image) {
        return this.http
            .post(this.url, JSON.stringify({ image: image }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HomeImageService.prototype.update = function (image) {
        var url = this.url + "/" + image.id;
        return this.http
            .put(url, JSON.stringify(image), { headers: this.headers })
            .toPromise()
            .then(function () { return image; })
            .catch(this.handleError);
    };
    HomeImageService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return HomeImageService;
}());
HomeImageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], HomeImageService);

var _a;
//# sourceMappingURL=home-image.service.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__publication_model__ = __webpack_require__(127);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__publication_service__ = __webpack_require__(22);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publications_module__ = __webpack_require__(128);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__publications_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publications_routing_module__ = __webpack_require__(80);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Publication */
var Publication = (function () {
    function Publication() {
    }
    return Publication;
}());

//# sourceMappingURL=publication.model.js.map

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publication_categories_publication_categories_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__publication_list_publication_list_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__publications_routing_module__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__publication_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core



// Components


// Routing

// Services

var PublicationsModule = (function () {
    function PublicationsModule() {
    }
    return PublicationsModule;
}());
PublicationsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__publications_routing_module__["a" /* PublicationRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__publication_categories_publication_categories_component__["a" /* PublicationCategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_4__publication_list_publication_list_component__["a" /* PublicationListComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__publication_service__["a" /* PublicationService */]
        ]
    })
], PublicationsModule);

//# sourceMappingURL=publications.module.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__staff_list_staff_list_component__ = __webpack_require__(42);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__staff_model__ = __webpack_require__(132);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_service__ = __webpack_require__(34);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staff_module__ = __webpack_require__(133);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__staff_module__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(41);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animations; });

var Animations = {
    flyStaffIn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyStaffIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-48%,0,0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-48%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    flyNavRight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyNavRight', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('home', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(0,0,0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('other', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(340%,0,0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('home <=> other', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in'))
    ]),
    flySecondIn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flySecondIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('noSelection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-98%, 0, 0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('selection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(135%, 0, 0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => selection', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(135%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => noSelection', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-98%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    flySecondRight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flySecondRight', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('selection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(135%,0,0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('noSelection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-98%, 0, 0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('selection <=> noSelection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in'))
    ]),
    flyThirdIn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyThirdIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-110%, 0, 0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-110%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    deOpacify: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('deOpacify', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('off', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 0
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: 1
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('off <=> on', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in'))
    ]),
    fade: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('fade', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('invisible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('invisible <=> visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1000ms ease-in')),
    ]),
};
//# sourceMappingURL=staff-animations.js.map

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_list_staff_list_component__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core


// Components

var staffRoutes = [
    { path: 'staff', component: __WEBPACK_IMPORTED_MODULE_2__staff_list_staff_list_component__["a" /* StaffListComponent */] },
];
var StaffRoutingModule = (function () {
    function StaffRoutingModule() {
    }
    return StaffRoutingModule;
}());
StaffRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(staffRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], StaffRoutingModule);

//# sourceMappingURL=staff-routing.module.js.map

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Staff */
var Staff = (function () {
    function Staff() {
    }
    return Staff;
}());

//# sourceMappingURL=staff.model.js.map

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_list_staff_list_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staff_routing_module__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_service__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaffModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core


// Vendor
// ...
// Components

// Routing

// Services

var StaffModule = (function () {
    function StaffModule() {
    }
    return StaffModule;
}());
StaffModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__staff_routing_module__["a" /* StaffRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__staff_list_staff_list_component__["a" /* StaffListComponent */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__staff_service__["a" /* StaffService */]]
    })
], StaffModule);

//# sourceMappingURL=staff.module.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__work_model__ = __webpack_require__(135);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__work_service__ = __webpack_require__(23);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__works_module__ = __webpack_require__(136);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__works_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__works_routing_module__ = __webpack_require__(83);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WorkPicture */
/* unused harmony export WorkShort */
/* unused harmony export Work */
/* unused harmony export Pics */
var WorkPicture = (function () {
    function WorkPicture() {
    }
    return WorkPicture;
}());

var WorkShort = (function () {
    function WorkShort() {
    }
    return WorkShort;
}());

var Work = (function () {
    function Work() {
    }
    return Work;
}());

var Pics = (function () {
    function Pics() {
    }
    return Pics;
}());

;
//# sourceMappingURL=work.model.js.map

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_categories_work_categories_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_list_work_list_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__works_routing_module__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__work_service__ = __webpack_require__(23);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorksModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Core



// Components


// Routing

// Services

var WorksModule = (function () {
    function WorksModule() {
    }
    return WorksModule;
}());
WorksModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["c" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__works_routing_module__["a" /* WorkRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__work_categories_work_categories_component__["a" /* WorkCategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_4__work_list_work_list_component__["a" /* WorkListComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__work_service__["a" /* WorkService */]
        ]
    })
], WorksModule);

//# sourceMappingURL=works.module.js.map

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "/** {\n    box-sizing: border-box;\n}*/\n\n.slide {\n    margin: 0;\n}\n\n.lightbox-outer {\n    background: rgba(0, 0, 0, .7);\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    text-align: left;\n}\n\n.lightbox-inner {\n    position: relative;\n    margin: 5% auto;\n    width: 75%;\n    height: 75%;\n    padding: 0;\n    max-width: 990px;\n    background-color: #282625;\n    overflow: hidden;\n}\n\n.lightbox-title {\n    color: #eee;\n    font-size: 1.6em;\n    margin-left: 2%;\n    margin-top: 2%;\n}\n\n.lightbox-image {\n    position: absolute;\n    display: inline-block;\n    text-align: center;\n    padding: 0;\n    border: none;\n    margin: auto;\n    width: 100%;\n}\n\n.lightbox-caption {\n    background: rgba(0,0,0,.6);\n    color: #eee;\n    width: 100%;\n}\n\n.lightbox-inner .btn-scroll {\n    display: inline-block;\n    width: 4%;\n    height: 46px;\n    margin-top: 25%;\n    padding: 0;\n    background-color: rgba(0,0,0,0.1);\n    line-height: center;\n    z-index: 10;\n    border: none;\n    transition: background-color 200ms;\n}\n\n.lightbox-inner .btn-scroll:hover {\n    background-color:  rgba(0,0,0,0.5);\n}\n.lightbox-inner .btn-scroll span {\n    margin: 0 auto;\n}\n\n.btn-close {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    width: 20px;\n    height: 20px;\n    border-radius: 8px;\n}\n\n.prev-pic {\n    position: absolute;\n    left: 0;\n}\n\n.next-pic {\n    position: absolute;\n    right: 0;\n}\n\n.chevron {\n    margin: 0 auto;\n    vertical-align: center;\n}\n\n.chevron::before {\n    color: #eee;\n\tborder-style: solid;\n\tborder-width: 0.25em 0.25em 0 0;\n\tcontent: '';\n\tdisplay: block;\n\theight: 0.45em;\n\t-webkit-transform: rotate(-45deg);\n\t        transform: rotate(-45deg);\n\twidth: 0.45em;\n}\n\n.chevron.right-chevron:before {\n\t/*left: 10%;*/\n\t-webkit-transform: rotate(45deg);\n\t        transform: rotate(45deg);\n}\n\n.chevron.left-chevron:before {\n\t/*left: 0.25em;*/\n\t-webkit-transform: rotate(-135deg);\n\t        transform: rotate(-135deg);\n}\n\n.stage {\n    overflow: hidden;\n    width: 80%;\n    height: 80%;\n    margin: 0 auto;\n}\n\n.stage-center {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n\n.stage-left {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n}\n\n.stage-right {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n}\n\n@media screen and (max-width: 480px) {\n    .lightbox-inner {\n        width: 100%;\n    }\n}\n", ""]);

// exports


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports
exports.i(__webpack_require__(61), "");

// module
exports.push([module.i, ".background {\n    position: fixed;\n    top: 15%;\n    left: 0;\n    height: 75vh;\n    width: 100vw;\n    z-index: -99;\n    margin: 0 auto;\n    overflow: hidden;\n}\n\n.background-image {\n    /*transform: scale(1.4);*/\n    z-index: -100;\n    -webkit-animation: bg-move 15s ease-in;\n    animation: bg-move 30s ease-out;\n    -webkit-transform-origin: 800px 800px;\n            transform-origin: 800px 800px;\n}\n\n/*.router {\n    z-index: -1;\n}*/\n@-webkit-keyframes bg-move {\n\t0%   { background-position:  0 0; }\n\t100% { background-position: -5% -5%; -webkit-transform: scale(1.2); transform: scale(1.2); }\n}\n\n@keyframes bg-move {\n\t0%   { background-position:  0 0; }\n\t100% { background-position: -5% -5%; -webkit-transform: scale(1.2); transform: scale(1.2); }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports
exports.i(__webpack_require__(61), "");

// module
exports.push([module.i, ":host {\n    width: 100%;\n}\n\n.background {\n    position: fixed;\n    top: 150px;\n    left: 0;\n    height: 90vh;\n    width: 100vw;\n    z-index: -99;\n    margin: 0 auto;\n    overflow: hidden;\n}\n\n.background-image {\n    z-index: 100;\n    -webkit-animation: bg-move 30s linear;\n    animation: bg-move 30s linear;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    background-color: #eee;\n    -webkit-transform-origin: 1000px 1200px;\n            transform-origin: 1000px 1200px;\n    background-size: cover;\n    background-repeat: no-repeat;\n    height: 140%;\n\n}\n\n@-webkit-keyframes bg-move {\n\t0%   { background-position:  0 0; }\n\t100% { background-position: -50px -50px; -webkit-transform: scale(1.1); transform: scale(1.1); }\n}\n\n@keyframes bg-move {\n\t0%   { background-position:  0 0; }\n\t100% { background-position: -50px -50px; -webkit-transform: scale(1.1); transform: scale(1.1); }\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".staff {\n    margin: 0;\n    padding: 0;\n    width: 60%;\n    overflow-y: scroll;\n}\n\n.staff li {\n    float: left;\n    width: 25.3333333333%;\n    margin: 3% 4%;\n    padding: 0;\n    background-color: #eee;\n    list-style: none;\n}\n\n.staff li img {\n    margin: 0 auto;\n    width: 100%;\n}\n\n.staff li p {\n    width: 100%;\n    padding: 5%;\n    margin: 0;\n    font-size: 1.2em;\n}\n\n.interns {\n    float: left;\n    width: 16%;\n}\n\n.interns li {\n    list-style: none;\n}\n\n.interns li p {\n    width: 100%;\n    padding: 2%;\n    margin: 0;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports
exports.i(__webpack_require__(62), "");

// module
exports.push([module.i, "/*:host {\n    display: inline-block;\n    width: \n}*/\n\n.category-description {\n    width: 48%;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    float: left;\n    -webkit-transform: translate3d(-50%, 0, 0);\n            transform: translate3d(-50%, 0, 0);\n}\n\n.category-description p {\n    font-size: 1.4em;\n    color: #444;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports
exports.i(__webpack_require__(190), "");
exports.i(__webpack_require__(61), "");

// module
exports.push([module.i, ".works {\n    width: 48%;\n    max-height: 80vh;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    float: right;\n    overflow-y: auto;\n}\n\n.work {\n    width: 90%;\n    margin: 2% auto;\n    padding: 0 2%;\n    float: none;\n    clear: both;\n}\n\np {\n    margin: 2px 0;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 200 */,
/* 201 */
/***/ (function(module, exports) {

module.exports = "<nav \n[@flyNavIn]=\"homeState\" [@flyNavRight]=\"homeState\" class=\"menu nav-menu\">\n\n    <a class=\"menu-item nav-menu-item\"\n    routerLink=\"works/categories\"\n    routerLinkActive=\"active\"\n    (click)=\"changeState('other')\">works</a>\n    \n    <a \n    class=\"menu-item nav-menu-item\" \n    routerLink=\"publications/categories\" \n    routerLinkActive=\"active\"\n    (click)=\"changeState('other')\">publications</a>\n\n    <a \n    class=\"menu-item nav-menu-item\" \n    routerLink=\"press\" \n    routerLinkActive=\"active\"\n    (click)=\"changeState('other')\">press</a>\n\n    <a \n    class=\"menu-item nav-menu-item\" \n    routerLink=\"staff\" \n    routerLinkActive=\"active\"\n    (click)=\"changeState('other')\">staff</a>\n\n    <a \n    class=\"menu-item nav-menu-item\" \n    routerLink=\"contact\" \n    routerLinkActive=\"active\"\n    (click)=\"changeState('other')\">contact</a>\n\n    <a \n    class=\"menu-item nav-menu-item\" \n    routerLink=\"/\"\n    (click)=\"changeState('home')\">home</a>\n\n</nav>\n\n<router-outlet [@flySecondIn]=\"in\" class=\"router\"></router-outlet>\n\n\n"

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"contactForm\" novalidate>\n  <div class=\"form-group\">\n    <div class=\"contact-form contact-form-name\">\n      <label for=\"name\">Name</label>\n      <input formControlName=\"name\">\n    </div>\n    <div class=\"contact-form contact-form-email\">\n      <label for=\"email\">Email</label>\n      <input formControlName=\"email\">\n    </div>\n    <div class=\"contact-form contact-form-subject\">\n      <label for=\"subject\">Subject</label>\n      <input formControlName=\"subject\">\n    </div>\n    <div class=\"contact-form contact-form-message\">\n      <label for=\"message\">Message</label>\n      <textarea formControlName=\"message\"></textarea>\n    </div>    \n    <div>\n      <button>Submit</button>\n    </div>\n  </div>\n</form>\n<div class=\"message-preview\">\n  <div *ngIf=\"contactForm.get('subject').value != null\">\n    <h3>{{ contactForm.get('subject').value }}</h3>\n  </div>\n  <div *ngIf=\"contactForm.get('message').value != null\">\n  <p>{{contactForm.get('message').value}}</p>\n  </div>\n  <div *ngIf=\"contactForm.get('name').value != null\">\n  <p><strong>{{contactForm.get('name').value}}</strong></p>\n  </div>\n  <div *ngIf=\"contactForm.get('email').value != null\">\n  <p>{{contactForm.get('email').value}}</p>\n  </div>\n</div>"

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = "\n<app-contact-form></app-contact-form>\n<div class=\"contact-details\">\n  <p>C/ Armando Oscar Pacheco #&lt;no&gt;,<br>\n    Paraiso, Sto. Dgo. DN,<br>\n    Republica Dominicana\n    </p>\n    <p>T-809.567.4364</p>\n\n  <div class=\"social-ribbon\">\n    Social Ribbon here\n  </div>\n<div>"

/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = "  <div class=\"background\">\n    <div class=\"background-image\" [@fade]=\"fadeState\" #theDiv >\n    </div>\n  </div>"

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<div class=\"categories\">\n  <ul class *ngFor=\"let category of categories\" (click)=\"onSelect(category)\">\n    <li>{{category.name}}</li>\n  </ul>\n</div>\n\n<div class=\"publications\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<div class=\"publications\">\n  <div class=\"publication\" *ngFor=\"let publication of publications\" (click)=\"onSelect(publication)\">\n    <h4>{{publication.title}}</h4>\n    <p>{{publication.description}}</p>\n  </div>\n</div>\n<div *ngIf=\"selectedPublication\">\n  <span (click)=\"deSelect()\">Close</span>\n  <h4>{{selectedPublication.title}}</h4>\n  <p>{{selectedPublication.description}}</p>\n</div>"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "<div [@flyStaffIn]=\"in\" class=\"staff\">\n  <ul>\n    <li class=\"staff-member card\" *ngFor=\"let member of staff\" (click)=\"onSelect(member)\">\n        <img src=\"{{member.photo}}\" alt=\"{{member.username}}'s photo'\">\n        <p>{{member.first_name}} {{member.last_name}}</p>\n    </li>\n  </ul>\n</div>\n<div class=\"interns\">\n  <h4>Interns</h4>\n  <ul>\n    <li class=\"intern\" *ngFor=\"let member of interns\" (click)=\"onSelect(member)\">\n      <p>{{member.first_name}} {{member.last_name}}</p>\n    </li>\n  </ul>\n</div>\n<div class=\"member-details\" *ngIf=\"selectedMember\">\n  <span (click)=\"clearSelection()\">Close</span>\n  <h3>{{selectedMember.first_name}} {{selectedMember.last_name}}</h3>\n  <img src=\"{{selectedMember.photo}}\" *ngIf=\"selectedMember.photo !== null\">\n  <h5>Bio</h5>\n  <p>{{selectedMember.bio}}</p>\n  \n</div>"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "<div [@flySecondIn]=\"selectionState\" [@flySecondRight]=\"selectionState\" class=\"categories menu\">\n  <ul class=\"category menu-item\"\n  *ngFor=\"let category of categories\"\n  (click)=\"onSelect(category)\"\n  (mouseenter)=\"onHover(category)\"\n  (mouseleave)=\"offHover()\">\n    <li>{{category.name}}</li>\n  </ul>\n</div>\n\n<div [@deOpacify]=\"hoverState\" class=\"category-description\">\n  <p *ngIf=\"hoveredCategory && !selectedCategory\">{{hoveredCategory.description}}</p>\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "<div class=\"works\"  [@flyThirdIn]=\"in\">\n  <div class=\"work\" *ngFor=\"let work of works\" (click)=\"onSelect(work)\">\n    <img src=\"{{work.cover.image}}\">\n    <p><strong>Project: </strong>{{work.title}}</p>\n    <p><strong>Program: </strong>{{work.program}}</p>\n    <p><strong>Status: </strong>{{work.status}}</p>\n    <p><strong>Team: </strong>{{work.team}}</p>\n  </div>\n</div>\n<div class=\"lightbox-outer s-work\" *ngIf=\"selectedWork\">\n  <div class=\"lightbox-inner\" (keydown)=\"escape($event)\">\n    <!--<button (click)=\"nextItem()\">Next</button>-->\n    <!--<button (click)=\"prevItem()\">Previous</button>-->\n    <h2 class=\"lightbox-title\">{{selectedWork.title}}</h2>\n    <button class=\"btn-close btn\" (click)=\"deSelect()\">\n      <span class=\"close-icon\"></span>\n    </button>\n\n    <div class=\"stage\">\n      <button class=\"btn-scroll prev-pic\" (click)=\"prevPic()\" (keydown)=\"scroll($event)\">\n        <span class=\"chevron left-chevron\"></span>\n      </button>\n      <div class=\"slide stage-left\">\n        <img class=\"lightbox-image\" src=\"{{stageLeft.image}}\">\n        <div class=\"lightbox-caption\">{{stageLeft.caption}}</div>\n      </div>\n      <div class=\"slide stage-center\">\n        <img class=\"lightbox-image\" src=\"{{stageCenter.image}}\">\n        <div class=\"lightbox-caption\">{{stageCenter.caption}}</div>\n      </div>\n      <div class=\"slide stage-right\">\n        <img class=\"lightbox-image\" src=\"{{stageRight.image}}\">\n        <div class=\"lightbox-caption\">{{stageRight.caption}}</div>\n      </div>\n      <button class=\"btn-scroll next-pic\" (click)=\"nextPic()\" (keydown)=\"scroll($event)\">\n        <span class=\"chevron right-chevron\"></span>\n      </button>\n    </div>\n  </div>\n</div>"

/***/ }),
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(110);


/***/ })
]),[243]);
//# sourceMappingURL=main.bundle.js.map