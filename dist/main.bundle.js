webpackJsonp([1,4],Array(24).concat([
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AnimationService = (function () {
    function AnimationService() {
        // Observable string sources
        this.categorySelectedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.categorySwitchedSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // Observable string streams
        this.categorySelected$ = this.categorySelectedSource.asObservable();
        this.categorySwitched$ = this.categorySwitchedSource.asObservable();
    }
    // Service message commands
    AnimationService.prototype.categorySelected = function (level) {
        this.categorySelectedSource.next(level);
    };
    AnimationService.prototype.categorySwitched = function (state) {
        this.categorySwitchedSource.next(state);
    };
    return AnimationService;
}());
AnimationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], AnimationService);

//# sourceMappingURL=animation.service.js.map

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(33);
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
        this.publicationsUrl = 'https://ec.djangulo.com/api/v1/publications/';
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
            .then(function (response) { return response.json(); })
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(33);
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
        this.worksUrl = 'https://ec.djangulo.com/api/v1/works/';
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
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(33);
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
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".btn{\n  display: block;\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  font-size: 0;\n  box-shadow: none;\n  border-radius: none;\n  border: 1px solid black;\n  cursor: pointer;\n}\n\n.btn-scroll {\n    display: inline-block;\n    width: 2.5%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    background: #777;\n    line-height: center;\n}\n\n.close-icon {\n  display: block;\n  position: absolute;\n  top: 45.83333333%;\n  left: 18.75%;\n  right: 18.75%;\n  height: 8.33333333%;\n  background: #000;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n\n\n.close-icon:focus {\n  outline: none;\n}\n\n.close-icon::after {\n  position: absolute;\n  display: block;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #000;\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n  content: \"\";\n}", ""]);

// exports


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "html {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    font-weight: inherit;\n    font-style: inherit;\n    font-size: 100%;\n    font-family: inherit;\n    vertical-align: baseline;\n}\n\nbody {\n    font-family: 'Helvetica Neue', Helvetica, 'Open Sans', sans-serif, Arial;\n    font-weight: 300;\n    font-size: 12px;\n    list-style: none;\n    text-decoration: none;\n    margin: 0;\n    padding: 0;\n}\n\nheader {\n    height: 120px;\n    z-index: 2;\n    margin: 0;\n    padding: 0;\n}\n\nheader h1 {\n    text-indent: -9999px;\n    margin: 0;\n    padding: 0;\n}\n\nheader h1 a {\n    display: block;\n    width: 250px;\n    height: 36px;\n    float: left;\n    margin-top: 60px;\n    background: url(" + __webpack_require__(73) + ") no-repeat;\n}\n\n::-webkit-scrollbar {\n    display: none;\n}\n\n.noscroll {\n    overflow: hidden;\n}\n\n.content {\n    max-width: 990px;\n    margin: 0 auto;\n    padding: 0;\n}\n\n.menu {\n    width: 200px;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    vertical-align: baseline;\n    float: left;\n    margin-top: 30px;\n}\n\n.home-menu {\n    background: rgba(255,255,255,0.7);\n}\n\n.menu-item {\n    width: 100%;\n    color: #444;\n    display: block;\n    list-style: inherit;\n    margin-bottom: 20px;\n}\n\n.menu-item a {\n    cursor: pointer;\n    color: #444;\n    text-decoration: underline;\n    list-style: inherit;\n    font-size: 24px;\n    font-weight: 300;\n}\n\n.menu-item a:hover {\n    color: #b72175;\n}\n\n.active {\n    color: #b72175;\n}", ""]);

// exports


/***/ }),
/* 43 */,
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staff_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_animations__ = __webpack_require__(134);
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
        template: __webpack_require__(211),
        styles: [__webpack_require__(201)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_4__staff_animations__["a" /* Animations */].flyStaffIn,
            __WEBPACK_IMPORTED_MODULE_4__staff_animations__["a" /* Animations */].flyInternsIn
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__staff_service__["a" /* StaffService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__staff_service__["a" /* StaffService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* Location */]) === "function" && _d || Object])
], StaffListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=staff-list.component.js.map

/***/ }),
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
/* 61 */,
/* 62 */,
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
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAAkCAYAAACg2CdiAAAUBUlEQVR4nO1debQcRb3+kpCwBMKOCVEhIawJW9gekMgecEGeB1ke+xLZEWSJTwNkECEERVnU9y5bgAeC/TCXy9zpqd9SbPoQEUGQhAAagiAgKgJhTSDjH1Wd7unbM9N9b26u72S+c/okd6rqV9U19dXyW2qANtpoo4022mijjTYKosq8H4neT6K3VSq6RTKtVCoNNmynsugDRPLDcrm8xkC1cyXGeAB3ABAAn8tI3wLAbQAeAPDpFdiuNv4/wYgcxWIXM+s8Zt4hlTyIxF7GYpcQ24fCMBwxII1cubErgOcBfADg0Iz0HQDMA7AEjvRt9BdKpdLgMAxHBEEwDMCggW5PEbgV29ZY9HUimpBOJ9YrWGyNWee1iT4gmAjg7wBqAI7JSJ8A4HWfPn4FtmvlA5EeSaKPkOjdxphRA92eImC2Jzii24WZRCf5oZ8IXgpE1h6INq7k2BXAYjgin5iRPgHAQp++9Ypr1koIw/odT5b3jTHjBro9RdCK6Mbo/iR2pmF7WhiGqw5EG1dyjAZwIYDLAWybkd4m+ooCs05LkGXMQLenCFoRvY1/ebSJvqLQJnobA4iVg+hBEAwrlUqDl5O4QR0dHUOLyjOs57DYGrEuCMNww+XUluWGZkrC/iZ6R0fH0I6OjqHLW25BrAJgeY2RCEO93OWNIQXl5iX6sD60qRmGwrV5+aNctqON0X1I7HQS+xN3htRzjNHJXV36qSKywjBc1RizPbMeQyTfJdEfk9iZJHI6M08pl+3orHIdHR1Du7t1bBiGnyaxM73C6pWqyKSyyGeNMeMqlcrIVF0jiGiM/zyXdj4IgiFdzBuHoW5TLpc3yFlmTWPM9kR6CrNe6vvoMiL9UlqHYERObEL0QeVyeYMy8+ZdzBvnnQDLZTuamae4PpTrmeV6EjvdiBxORFvlkbEcsDWA/wAwHcB1AK4EcDKA3QFs3At5q8OdkQ8DMA3A9V7uNACfhzNtteqfwQBGAtgKQPK7XAPAZABnwp3Fd0/V+1kAmwEYniEzSfRtEp8P8vUcBqAE4Cf+36N9mb5YhzYCMAlOd3A9gO8BOB/AvnA6hb6BiIYbtqex6Fw/OHs8xPprw/a0IAhazjJEtBWx3tpIlpNnn8mSV61Wt2Sx77PYv7LYD3z+pST2HWL7prNNW62vT04iti+T6D15nU86OzvXIbF3EuuHhnVWq/zG6GRm+/Mm/fOuYb06IrxhPrYR0Uul0mASO51Y/86i3V1dXWs1q7urq2stZj2V2D7TpP6PmPXKfiT8BLiB9zHc4M96fgdgKtxqlAf7APhpE3k1AIsA/AjNB/paAO4B8C6Amf6zbQHclZJ1VKLMzgB+C2dC+3KD913oy0WT+I6+Lc3aex2c6a4IhgA4FsCjTeTOBXAesiel1jDGjCLRzgQBnyWxdxLZG4jsDcy2i1j/smxQsb2lu7t73SbyxpHY+Yn8DzLrjZE8Eq16EtdYbM2wzk6Svcy8ObP+mVmfZ9G3/CD+mMS+xmIXktjXiPW+ZJ1EcqFf+Z8golwd0dXVtRaxJd/G25v2kciJxPphglRPEuutrn/0RmY1y9LEzmfmPavMX25qXovs6KJzm9nR58zR9ZltJSa1vsJsf574fm4hto8nvr+Xq8z75emDAjgIsU25BuDXAG4CcIN/GMBHifS7ALSyJHwVzhklKmNTMgMAzyTSfwGg0bhbF8ATPt9V/u+XEmX/AuBpAAcnykwE8Dc0t6Mv9OmjABwI4E3/93sAKom23gXg94n6FsHtevJgBIBbEmUX+HePZP8vgD8l0jtRdOcUBMGaJCp+kCwh1mu7u3VsOh8R7ZZcoYnsDVnySqXSKsT2IT/gXzNGjssyHRHRHsy2K54M9NREm4aFoW7Txbwxkf2eJ9arVeb9urt1bEVk20qlskm9PPmGl/OrIkRn0W7XVr25UT4iezCxfhyRjEiPz7LpGyOHECv79r5NYn/QlOjOM67Gok80IjoRDSe2v4wnEb3NGNtjtQjDcEPDdiqxfcH3/TvVqu6eJbMX+ByA9+EG2atwNuf1MvJ9AcBjqF/ZGu3+9gTwoc/3K7gVNev8vAmAGQmZ1zSQt46XUwPwQwDf9v9/HMDZAHYDsDmA9RNlJgL4s8+XRcok0S+A2y3U4HYOe2fk/wzcNjuaPJbC7ViaYQiAOxPvNxvZzjnbw23lI7t/uYXcehjWqyOSG5GjWuVfRiixS5ntYen0kHmvaAVm1jObyQqCYPVokiGxr2XpAIzYsyJlXLNdRH8RvVy2o9322jm2ENEezWQ6Yup9vs0f9p3oclFiMry01TtVKroFsX3Ry32u1ZEgB9YD8CLc4FoI5xbaDKNQT/ZdM/IMB/CQT38S+c6ed/v8LyN7NUsS/RW4Ffe+BnkjFCH6B/7fG9H6WDIFbgdRA/As6ieXNC5A3FdfbyEXcHqA/PlLpdIqYSg7EutHnmgzWxbySGx3H0yfh0nsDD/I/5S1M0ijyrwfi13MYmvG6P7p9Lzmtf4guj9Hz4x3MXpEHrmByNrMOi9xfu4V0Y0x47yuokasc/LUDQBEekRUzog9K2+5BjgP8Vb0KznL7AXgH77cFeipSJuEmDgtFxePCT7/4gbtSBK9BmA+Wp9lixC9BuBB5NeCn54o1+g72AzAX32eW3LKBYDbEZ/Zs3ZWMcJQtyHRH/sz3YtdzLn3/My8px/Ai6sik5JphnVWYvVrqRQql+1oEr2XWBcw2x5f4EASnYg2YtGn/aRWySMz0e5jWOzSvhA9sZr/o1qVvQvWb3x/PN8HE9waiAf6fc2z9kCkYHsSwJqptNMQb203zylvJGLinJyRnib6cTlkFiH6J8iOcGuEEXDHhhrc7mWdjDzTffqbqNfqt8KWcBPeJ3CT3uoNcxrW86NBbFh/VKCSiABz/SpXt30gkdOjrbsR+VoOcYMCkbW7uvRTWdryASb6bsT6CYtdakSyfKEbIgzDESz6xz4QfRCL/sK37WEUNNkw65mRJj4U+bciZRM4GPEgn1qw7L4AZgG4BG7CSGIdAGMAbIr8NvgxyE/0hYi15M1QhOhPoRmhsnEu4v7bMZW2LtwOoQanbCsyGSePPrPQ7HhCrHcR67uOHLxngUoAAMz2p34g3ZT8vFtkaxa7yA/wRUTyjTAMN+yt480AEn1QrI/QV6pV3a5g0wcR63/3luh+onjLT8RXF6wbxuhkYn2PxS4lkpOKlve4BG4wvYHehWkORt8cPgbDkWtDAN9BTPSs90kSXZCPOEWIfgWK28cnA3jHl0+HwY5HfI4/vKBcALga8U7rSw1zJe2xRHp0hXnnIg+J3uEJ0um9w2LZpF+Pzt0+z1MkehWR/bwxZlxnZ2fWNiYTA0X0jo6OoSTa4Y82vytytFnWJpELek105r2I9WNi/YTZnlC07nLZjmbR173+5bqi5T1uRaxQ6m+sBWAsnHZ5MtzW+yq4I0DStJSH6DfmrLMI0YvuaAC3C5nny38T9RPFAYjf52w4m36R5xpf9uGmbauzi/flYZ1HRBv1kE9yEok+lVFmEYlWDessIj2gFekHkujM8l9epkEvvJ2MkeN6S3Qi+hyxfkKs7xmRLxatGwAi7TuxXtub8oidN/qL6EPgzFQzARBiBV36ecu3IS/Rb8pIz0IRoh+UU2YSYxG3+wbU7zK+guZON3mf1xE7CPVENNuz2A+I7aNOeaMPFHlI9GFivbZRLLUxZj0j9iwSvZtEf0tsX04Tn1iZSI9u2M5/AaITK+fxBkxj4ImuC/pI9GiQzutl+WbYAcD/oH7QLoRTYD0E4F44csyAU4JNxMASvTd6jiTRb0a9T/y/+8+XwL1zCHdlVZHnYThtfZazj0N8jta/RYMwCIJhBZ/VvUa35WpHRBuFoexIpEcw6+Uken9qZ3BNEAQ9lB0DRfQgCIYx642eKGEeeT3bpCf3gej7stilxPohkT04XbYV/Bn/Ff9uHb1pP5ynWmTGWZ7YFs7xpgbnTXcDgCPgFGjrA1gto8woDCzRe6Pn2BSu72oALkO9vuIwxObCyf6zYQWf1f2/jQN1mPU3y7Tjxqzwa3LCMBxhjB4UaZad0smehtSk0Z9EL5fLaxDrnCyiOxu6XuXP6I8aY5rbK7PaJPKfvVfGyY7eG28pkZxdtO5qVXch1rd9+W8ULe8RuWUuQE8TWW+xBpzraGRWymubH4uBJfr5OWUmsRmA53z5c1JpeyH2cjugF7LzwWmEnVa3ypzXJ7cpSqXSYB91tlneq5HCMNyQRR/zA/6x9IAvSnRi+3/5iW5HR44tWeY1F+Tj7NhEtFsemYn3WnWZY1HvVvTh0dab2QZF6gbcxZTeNLjEGDmkaHmPyFnmLRTfum4B59pZTpWdhDgo5pIC8j6LgSX6XShmAgOcb3ykd/hCKm0cYl/83kwi+cCs57HoE36Q35bWnDcDEY1x53P7eNLzioiGk+hvWfQlEjsjr7zEdVG1dOhqXqK797E1EvuHvG6fRHpAwjLQg+jVqu6eOFpMy/s+rmx1y766wDLb2/3k9WLat7/lu4ne5ndsf+lDHP+BcKvOUrizchFciJiYOyU+PznxeZZ7bCPsg4El+itwTjtFcLkvuwg9HYNGAFCfXoWzOuTF+nAT6ONw4bGNY+WJaKvIz51YP8oKlGiERPhljUi/Gn0+e/bs1RzR3cqaV17kNstia2EY1t2fnZfohvnYyByVlxTEem0zoodhuGEUFUaij+SNWQeAKBinj0Q/zJdfSqRn5K27wrxzZFXpgyIOcNFn8xE7jOQNj1wVwCOIbdpJ3cvXEJ9Ni/gm3ISBJXoNQJEj0Di4q6RrALqQTeTIz/1juEk1L5KmubPg/Ayy4bTKvGeklCPRarOgkQjd3To2ssGTqKQVaJHbJrG+a4xk3ZVdhyAIhhBr6CeHZ9NnYSL9lpe3ID0JJGGM3dWfSWtG7Lmt6q1WZW+/tW1IdCB5ZbOtMev3kUPxyMxT2MXRL+4L0QORtZ2Fw9ZY9I8V5p1b1e2+VxcVSKzvhaGkPbKKIvLuqsGtUHlwaqJM2pf9QP/5UjTTFtcjUlxFzwkZefqb6B/5vE2DmjxWReyPXoPTsGdhAmKl5K/hIvVaYX0Av/RlnkDzgJkYzHppPJDtz6rV6qaN8larul0iDPNDZp6SzkNEY4jtG54YzzfzugtE1q4LGhE7PW3Gis/e+ioRfab5u9gHo7zGaMPwQBdh5zTSy+LdGxHdmPVistkaib2s0bXTpVJpFWPkEPYXZpDozX0hunt/2i2aMEj0qWa6gkqlskkUv+CVm99slLcANkBMoPfhzpONbhoaDkeYt3x+Rc/48dGI47afRPNVfRScnuBjL3MRsicPoP+JfhHc5PQqnCKtWZs7EJN8Dppvy89I5GU0v7JqCwA/QzxRHtkkb08kBmSNWP/ErNOM0X2MMePdo/sz6/ejMyexftTM99sP9g+Wreyss4zRg4yxE4loQrWquxgjh9ZdpsBWswM76s7RPzbGTjTG7mqMTk77xjPznnVtZL2ESA8wxmwfhrqNv175B4l3vYlE72lGdNcG2m2ZYswTk1lPjfvITqyKHJjsRyNyIpEe2Veiu/rlJBb7j8hKwqxXMvMUZt6hWtXtqiKTiPSMODzV1ojs97D8fvBiPOodVh6DI8YuPm0nuFXrnkSeF+E8w7JwKOILJ/4Ad83TJDhiTYRb9b+FeOs7H8AX4W6DqcFZA/aF8x+PdEv9TfQxiF2Ca3BOKl/wMsbD6RDOg5u8ojxPI5/r8BWJMm8AuBTA/l5uJHsGgLcT+b6V8x3rQWIvi+Oulz1L4gsXInLYZ5o5uCyT5+zlz6fk1ZLb5YiQxHpro2NDV5d+ikQfSctxg7lndByRHk9i/5CRf3HiHd4gkpOCIFgzMjO2ik7z0X7VjPep7x/Rp5j1GCAOLPFt3SktM+GQ8/fWHoI8Jav+Hg/r84a1P7S4m6GeyNGTda3UvWj9yyZTEf9KSvQszfj7dsSKrI5U+guI74dbDzFpu3O+0x4JWadkpO+USI/e53TU31zTqA/ugFvd8+J8OIVfWu6S1GcL4CbG3qMqMolZLyW2D7lzuD7nroTSp4n1PmadVkT7W6noFu5eNGtZdK4zZelz7rfIrDLrNVXmtNmhB4hoArPtci61+hyx/T2zXN/IhOcVjbPcVl6fJrbPumOE/sawXp0g3SAiPZpISnlNUIb5WBK92U0Q+jSJnU+sC0i0SqRfT27rnYOQlIzYc7PdhGlfIikx66l5f8DBTWR6s7duRN/Pc8TWktjp6R9z7AccCndn2qNwNuL5/nkMzsc877kbcKv4dV7WXC/nBThF3tVwq1oSY+AuYuyG2xKfgnhFXw1u8igh+/63LIyCI1gJ2T/gsBGcjqKEeoXXNnAOMPfD7Ujmw63ev4HzgOutuXpHuNBV8fLmw/XxXAAGwMUoFs6ajdmzZ6/mTGdyOrNenHyMyOFFblgFnKKtXLajDdupzHopkVxkWC9h1ouJ9GQimpDH5t3R0THUiBzOrBeT2BmG9dvVquzdyC01CIIhxpjxhu1pUftJ7AwSucAYs33SlNjd3b1upVIZmdfu39nZuY6fEKcRyUVe9kwiPTqtlQ+CYPVKpTLSR+/18F4KgmDNSqUycs4cXR85+7Wzs3MdY3SyYftNEjvD13+ZYTu1XLaje+OqWxBrwW1Xz4fbYl4Mt628EG6FLPLTUqvBndHP93IuhotSOwfurJoObx0Ct8oeCeAQONt61G+D4Fb1kXCmqzwYCkfgkcj2xlslkb5K6vNN4CaW7/p2XwR3a+0kFOuDdHtGw1kVLkLcJzMAHA/3i679cQ12G2200UYbbbTRRhtttLHi8U8vJrDTXJxd/gAAAABJRU5ErkJggg=="

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animations; });

var Animations = {
    flyNavIn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyNavIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('lvl0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(0,0,0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('lvl1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(416%, 0, 0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => lvl0', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(0, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => lvl1', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(416%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('lvl0 <=> lvl1', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    flyNavRight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyNavRight', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('lvl0', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(0,0,0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('lvl1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translateX(416%,0,0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('lvl0 <=> lvl1', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in'))
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('invisible <=> visible', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('700ms ease-in')),
    ]),
    parallax: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('parallax', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('reset', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transformOrigin: "20% 20%", transform: "scale(1)" })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('do', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transformOrigin: "80% 80%", transform: "scale(1.1)" })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('reset => do', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('29s ease-out')),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('do => reset', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('0.1s linear'))
    ])
};
//# sourceMappingURL=animations.js.map

/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(33);
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
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(23);
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
        template: __webpack_require__(206),
        styles: [__webpack_require__(196)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormBuilder */]) === "function" && _b || Object])
], ContactFormComponent);

var _a, _b;
//# sourceMappingURL=contact-form.component.js.map

/***/ }),
/* 77 */
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
        template: __webpack_require__(207),
        styles: [__webpack_require__(197)]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_image_service__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animations__ = __webpack_require__(74);
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
        var _this = this;
        this.homeImageService = homeImageService;
        this.sanitizer = sanitizer;
        setInterval(function () { _this.fadeState = 'invisible'; }, 29000);
        setInterval(function () { _this.rotateImages(); _this.parallaxState = 'reset'; }, 29700);
        setInterval(function () { _this.fadeState = 'visible'; _this.parallaxState = 'do'; }, 30000);
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.fadeState = 'invisible';
        this.parallaxState = 'reset';
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
            _this.parallaxState = 'do';
        });
    };
    HomeComponent.prototype.increaseIndex = function () {
        var i = this.images.length - 1;
        if (this.index === i) {
            this.index = 0;
        }
        else {
            this.index++;
        }
        return this.index;
    };
    HomeComponent.prototype.rotateImages = function () {
        this.currentImage = this.images[this.increaseIndex()];
        this.updateBackground();
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
        template: __webpack_require__(208),
        styles: [__webpack_require__(198)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__home_image_service__["a" /* HomeImageService */]],
        animations: [
            __WEBPACK_IMPORTED_MODULE_3__animations__["a" /* Animations */].fade,
            __WEBPACK_IMPORTED_MODULE_3__animations__["a" /* Animations */].parallax
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__home_image_service__["a" /* HomeImageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__home_image_service__["a" /* HomeImageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),
/* 79 */
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
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animations; });

var Animations = {
    flySecondIn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flySecondIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('selection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(208%, 0, 0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('noSelection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(54%, 0, 0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => selection', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(208%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => noSelection', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(54%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    flySecondRight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flySecondRight', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('selection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(208%,0,0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('noSelection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(54%, 0, 0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('selection <=> noSelection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)'))
    ]),
    flyThirdIn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyThirdIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-68%, 0, 0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-68%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => void', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-68%, -200%, 0)', opacity: 0 }))
        ]),
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, backgroundColor: '#000' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, backgroundColor: 'none' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('in <=> out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in-out')),
    ]),
    shrinkContainer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('shrinkContainer', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            margin: '0 5%',
            width: '90%',
            heigth: '90%'
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            margin: '0 1%',
            width: '70%',
            height: '70%'
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('false => true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms ease-in-out')),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('true => false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms 200ms ease-in-out')),
    ]),
    dropCaption: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('dropCaption', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            bottom: 0,
            fontSize: '1em',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            bottom: '-20%',
            fontSize: '1.4em',
            backgroundColor: 'transparent',
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('true <=> false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in-out')),
    ]),
    showDeets: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('showDeets', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: '0',
            transform: "translate3d(200%, 0, 0)"
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: '1',
            transform: "translate3d(0, 0, 0)"
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('true <=> false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-in-out')),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: "translate3d(200%, 0, 0)" }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms 400ms ease-in-out')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => void', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: "translate3d(200%, 0, 0)" }))
        ]),
    ]),
};
//# sourceMappingURL=publication-animations.js.map

/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publication_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__publication_animations__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_service__ = __webpack_require__(24);
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
    function PublicationCategoriesComponent(animationService, service, router, route, location) {
        var _this = this;
        this.animationService = animationService;
        this.service = service;
        this.router = router;
        this.route = route;
        this.location = location;
        this.hoverState = 'off';
        this.subscription = animationService.categorySelected$.subscribe(function (level) {
            _this.categorySelected = 'lvl1';
        });
    }
    PublicationCategoriesComponent.prototype.ngOnInit = function () {
        this.determineSelectionState();
        this.getCategories();
        console.log(this.selectionState);
    };
    PublicationCategoriesComponent.prototype.getCategories = function () {
        var _this = this;
        this.service
            .getPublicationCategories()
            .then(function (categories) { return _this.categories = categories; });
    };
    PublicationCategoriesComponent.prototype.onSelect = function (category) {
        this.selectedCategory = category;
        this.router.navigate([category.slug], { relativeTo: this.route });
        this.selectionState = 'selection';
        this.animationService.categorySelected('lvl1');
    };
    PublicationCategoriesComponent.prototype.determineSelectionState = function () {
        if (JSON.stringify(this.router.url).split('/')[3] === undefined) {
            this.selectionState = 'noSelection';
            this.animationService.categorySelected('lvl0');
        }
        else {
            this.selectionState = 'selection';
            this.animationService.categorySelected('lvl1');
        }
    };
    PublicationCategoriesComponent.prototype.onHover = function (category) {
        this.hoveredCategory = category;
        this.hoverState = 'on';
    };
    PublicationCategoriesComponent.prototype.offHover = function () {
        this.hoverState = 'off';
    };
    return PublicationCategoriesComponent;
}());
PublicationCategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Z" /* Component */])({
        template: __webpack_require__(209),
        styles: [__webpack_require__(199)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_4__publication_animations__["a" /* Animations */].deOpacify,
            __WEBPACK_IMPORTED_MODULE_4__publication_animations__["a" /* Animations */].flySecondIn,
            __WEBPACK_IMPORTED_MODULE_4__publication_animations__["a" /* Animations */].flySecondRight,
            __WEBPACK_IMPORTED_MODULE_4__publication_animations__["a" /* Animations */].flyThirdIn
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__animation_service__["a" /* AnimationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__publication_service__["a" /* PublicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__publication_service__["a" /* PublicationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* Location */]) === "function" && _e || Object])
], PublicationCategoriesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=publication-categories.component.js.map

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__publication_animations__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categories__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__publication_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__animation_service__ = __webpack_require__(24);
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
    function PublicationListComponent(animationService, publicationService, route, router, sanitizer) {
        var _this = this;
        this.animationService = animationService;
        this.publicationService = publicationService;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.subscription = animationService.categorySwitched$.subscribe();
        animationService.categorySwitched$.subscribe(function (state) { _this.categorySwitched = state; });
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
    PublicationListComponent.prototype.getBackground = function (image) {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    PublicationListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return PublicationListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__categories__["a" /* Category */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__categories__["a" /* Category */]) === "function" && _a || Object)
], PublicationListComponent.prototype, "category", void 0);
PublicationListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Z" /* Component */])({
        template: __webpack_require__(210),
        styles: [__webpack_require__(200)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_4__publication_animations__["a" /* Animations */].flyThirdIn,
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__animation_service__["a" /* AnimationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__publication_service__["a" /* PublicationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__publication_service__["a" /* PublicationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _f || Object])
], PublicationListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=publication-list.component.js.map

/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publication_categories_publication_categories_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publication_list_publication_list_component__ = __webpack_require__(82);
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
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animations; });

var Animations = {
    flySecondIn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flySecondIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('selection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(208%, 0, 0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('noSelection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(54%, 0, 0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => selection', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(208%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => noSelection', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(54%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    flySecondRight: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flySecondRight', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('selection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(208%,0,0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('noSelection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(54%, 0, 0)' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('selection <=> noSelection', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)'))
    ]),
    flyThirdIn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyThirdIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-68%, 0, 0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-68%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => void', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-68%, -200%, 0)', opacity: 0 }))
        ]),
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, backgroundColor: '#000' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 1, backgroundColor: 'none' })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('in <=> out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('300ms ease-in-out')),
    ]),
    shrinkContainer: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('shrinkContainer', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            margin: '0 5%',
            width: '90%',
            heigth: '90%'
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            margin: '0 1%',
            width: '70%',
            height: '70%'
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('false => true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms ease-in-out')),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('true => false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms 200ms ease-in-out')),
    ]),
    dropCaption: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('dropCaption', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            bottom: 0,
            fontSize: '1em',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            bottom: '-20%',
            fontSize: '1.4em',
            backgroundColor: 'transparent',
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('true <=> false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms ease-in-out')),
    ]),
    showDeets: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('showDeets', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: '0',
            transform: "translate3d(200%, 0, 0)"
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('true', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({
            opacity: '1',
            transform: "translate3d(0, 0, 0)"
        })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('true <=> false', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-in-out')),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: "translate3d(200%, 0, 0)" }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms 400ms ease-in-out')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => void', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('200ms ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ opacity: 0, transform: "translate3d(200%, 0, 0)" }))
        ]),
    ]),
};
//# sourceMappingURL=work-animations.js.map

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_animations__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_service__ = __webpack_require__(24);
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
    function WorkCategoriesComponent(animationService, workService, router, route, location) {
        var _this = this;
        this.animationService = animationService;
        this.workService = workService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.hoverState = 'off';
        this.subscription = animationService.categorySelected$.subscribe(function (level) {
            _this.categorySelected = 'lvl1';
        });
    }
    WorkCategoriesComponent.prototype.ngOnInit = function () {
        this.determineSelectionState();
        this.getCategories();
        console.log(this.selectionState);
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
        this.animationService.categorySelected('lvl1');
    };
    WorkCategoriesComponent.prototype.determineSelectionState = function () {
        if (JSON.stringify(this.router.url).split('/')[3] === undefined) {
            this.selectionState = 'noSelection';
            this.animationService.categorySelected('lvl0');
        }
        else {
            this.selectionState = 'selection';
            this.animationService.categorySelected('lvl1');
        }
    };
    WorkCategoriesComponent.prototype.onHover = function (category) {
        this.hoveredCategory = category;
        this.hoverState = 'on';
    };
    WorkCategoriesComponent.prototype.offHover = function () {
        this.hoverState = 'off';
    };
    WorkCategoriesComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return WorkCategoriesComponent;
}());
WorkCategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Z" /* Component */])({
        template: __webpack_require__(212),
        styles: [__webpack_require__(202)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_4__work_animations__["a" /* Animations */].deOpacify,
            __WEBPACK_IMPORTED_MODULE_4__work_animations__["a" /* Animations */].flySecondIn,
            __WEBPACK_IMPORTED_MODULE_4__work_animations__["a" /* Animations */].flySecondRight,
            __WEBPACK_IMPORTED_MODULE_4__work_animations__["a" /* Animations */].flyThirdIn
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__animation_service__["a" /* AnimationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__work_service__["a" /* WorkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__work_service__["a" /* WorkService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common__["d" /* Location */]) === "function" && _e || Object])
], WorkCategoriesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=work-categories.component.js.map

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_animations__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__work_service__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__animation_service__ = __webpack_require__(24);
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
    function WorkListComponent(animationService, workService, route, router, sanitizer) {
        var _this = this;
        this.animationService = animationService;
        this.workService = workService;
        this.route = route;
        this.router = router;
        this.sanitizer = sanitizer;
        this.subscription = animationService.categorySwitched$.subscribe();
        animationService.categorySwitched$.subscribe(function (state) { _this.categorySwitched = state; });
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
        this.showDetails = false;
        this.fadeState = 'in';
        this.detailState = 'false';
    };
    WorkListComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
        this.detailState = JSON.stringify(this.showDetails);
    };
    WorkListComponent.prototype.setInitialStage = function () {
        this.pictures = [];
        this.pictures = this.pictures.concat(this.selectedWork.cover, this.selectedWork.pictures);
        console.log(this.pictures);
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
        this.fadeState = 'in';
        this.detailState = 'false';
    };
    // on lcick left, select left image
    // rotate 3  stages to match new center
    //on click right, select right image
    //deal with less than 3 image cases
    //  single image case
    //  two image case
    WorkListComponent.prototype.prevPic = function () {
        var _this = this;
        this.fadeState = 'out';
        setTimeout(function () {
            switch (_this.i) {
                case 0: {
                    return null;
                }
                case 1: {
                    _this.c = 0;
                    _this.l = 0;
                    _this.r = 0;
                    break;
                }
                case 2: {
                    if (_this.c === 0) {
                        _this.c = 1;
                    }
                    else {
                        _this.c = 0;
                    }
                    if (_this.c === 0) {
                        _this.r = 1;
                        _this.l = 1;
                    }
                    else {
                        _this.r = 0;
                        _this.l = 0;
                    }
                    break;
                }
                default:
                    {
                        if (_this.c === 1) {
                            _this.c = _this.c - 1;
                            _this.r = _this.c + 1;
                            _this.l = _this.i - 1;
                        }
                        else if (_this.c === 0) {
                            _this.c = _this.i - 1;
                            _this.r = 0;
                            _this.l = _this.i - 2;
                        }
                        else {
                            _this.c = _this.c - 1;
                            _this.r = _this.c + 1;
                            _this.l = _this.c - 1;
                        }
                    }
                    break;
            }
            _this.stageCenter = _this.pictures[_this.c];
            _this.stageRight = _this.pictures[_this.r];
            _this.stageLeft = _this.pictures[_this.l];
            _this.updateBackground();
            _this.fadeState = 'in';
        }, 300);
    };
    WorkListComponent.prototype.nextPic = function () {
        var _this = this;
        this.fadeState = 'out';
        setTimeout(function () {
            switch (_this.i) {
                case 0: {
                    return null;
                }
                case 1: {
                    _this.c = 0;
                    _this.l = 0;
                    _this.r = 0;
                    break;
                }
                case 2: {
                    if (_this.c === (_this.i - 1)) {
                        _this.c = 0;
                    }
                    else {
                        _this.c = 1;
                    }
                    if (_this.c === 0) {
                        _this.r = 1;
                        _this.l = 1;
                    }
                    else {
                        _this.r = 0;
                        _this.l = 0;
                    }
                    break;
                }
                default: {
                    if (_this.c === (_this.i - 2)) {
                        _this.c = _this.c + 1;
                        _this.r = 0;
                        _this.l = _this.c - 1;
                    }
                    else if (_this.c === (_this.i - 1)) {
                        _this.c = 0;
                        _this.r = 1;
                        _this.l = _this.i - 1;
                    }
                    else {
                        _this.c = _this.c + 1;
                        _this.r = _this.c + 1;
                        _this.l = _this.c - 1;
                    }
                    break;
                }
            }
            _this.stageCenter = _this.pictures[_this.c];
            _this.stageRight = _this.pictures[_this.r];
            _this.stageLeft = _this.pictures[_this.l];
            _this.updateBackground();
            _this.fadeState = 'in';
        }, 300);
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
    WorkListComponent.prototype.updateBackground = function () {
        this.cImgDiv.nativeElement.style.backgroundImage = "url(" + this.stageCenter.image + ")";
    };
    WorkListComponent.prototype.getBackground = function (image) {
        return this.sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    WorkListComponent.prototype.switchPic = function (picture) {
        var _this = this;
        if (this.stageCenter.id === picture.id) {
            return;
        }
        this.fadeState = 'out';
        setTimeout(function () {
            _this.stageCenter = picture;
            _this.updateBackground();
            _this.fadeState = 'in';
        }, 300);
    };
    WorkListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return WorkListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Y" /* ViewChild */])('cImgDiv'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* ElementRef */]) === "function" && _a || Object)
], WorkListComponent.prototype, "cImgDiv", void 0);
WorkListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Z" /* Component */])({
        template: __webpack_require__(213),
        styles: [__webpack_require__(203)],
        animations: [
            __WEBPACK_IMPORTED_MODULE_4__work_animations__["a" /* Animations */].flyThirdIn,
            __WEBPACK_IMPORTED_MODULE_4__work_animations__["a" /* Animations */].fade,
            __WEBPACK_IMPORTED_MODULE_4__work_animations__["a" /* Animations */].shrinkContainer,
            __WEBPACK_IMPORTED_MODULE_4__work_animations__["a" /* Animations */].dropCaption,
            __WEBPACK_IMPORTED_MODULE_4__work_animations__["a" /* Animations */].showDeets
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__animation_service__["a" /* AnimationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__work_service__["a" /* WorkService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__work_service__["a" /* WorkService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _f || Object])
], WorkListComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=work-list.component.js.map

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work_categories_work_categories_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_list_work_list_component__ = __webpack_require__(86);
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
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 113;


/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(141);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__(78);
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
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__animation_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
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
    function AppComponent(animationService, route, router, location) {
        var _this = this;
        this.animationService = animationService;
        this.route = route;
        this.router = router;
        this.location = location;
        animationService.categorySelected$.subscribe(function (level) { _this.homeState = level; });
    }
    AppComponent.prototype.ngOnInit = function () {
        if (this.location.isCurrentPathEqualTo('/') ||
            this.location.isCurrentPathEqualTo('/works/categories') ||
            this.location.isCurrentPathEqualTo('/publications/categories')) {
            this.homeState = 'lvl0';
        }
        else {
            this.homeState = 'lvl1';
        }
    };
    AppComponent.prototype.changeState = function (arg) {
        this.homeState = arg;
        this.animationService.categorySelected(arg);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Z" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(205),
        styles: [__webpack_require__(195)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__animation_service__["a" /* AnimationService */]],
        animations: [
            __WEBPACK_IMPORTED_MODULE_0__animations__["a" /* Animations */].flyNavIn,
            __WEBPACK_IMPORTED_MODULE_0__animations__["a" /* Animations */].flyNavRight,
            __WEBPACK_IMPORTED_MODULE_0__animations__["a" /* Animations */].flySecondIn
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__animation_service__["a" /* AnimationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* Location */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_animations__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__publications__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__staff__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__works__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__categories_category_service__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__publications_publication_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__staff_staff_service__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__works_work_service__ = __webpack_require__(26);
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
            __WEBPACK_IMPORTED_MODULE_8__contact__["a" /* ContactModule */],
            __WEBPACK_IMPORTED_MODULE_9__publications__["a" /* PublicationsModule */],
            __WEBPACK_IMPORTED_MODULE_11__works__["a" /* WorksModule */],
            __WEBPACK_IMPORTED_MODULE_10__staff__["a" /* StaffModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__categories_category_service__["a" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_14__publications_publication_service__["a" /* PublicationService */],
            __WEBPACK_IMPORTED_MODULE_15__staff_staff_service__["a" /* StaffService */],
            __WEBPACK_IMPORTED_MODULE_16__works_work_service__["a" /* WorkService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),
/* 124 */
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
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__category_model__ = __webpack_require__(124);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__category_model__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__(75);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_component__ = __webpack_require__(77);
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
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_component__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_form_contact_form_component__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_routing_module__ = __webpack_require__(126);
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
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_module__ = __webpack_require__(127);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__contact_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_form_contact_form_component__ = __webpack_require__(76);
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(33);
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
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__publication_model__ = __webpack_require__(131);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__publication_service__ = __webpack_require__(25);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publications_module__ = __webpack_require__(132);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__publications_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publications_routing_module__ = __webpack_require__(83);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),
/* 131 */
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
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publication_categories_publication_categories_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__publication_list_publication_list_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__publications_routing_module__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__publication_service__ = __webpack_require__(25);
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
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__staff_list_staff_list_component__ = __webpack_require__(44);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__staff_model__ = __webpack_require__(136);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_service__ = __webpack_require__(35);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staff_module__ = __webpack_require__(137);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__staff_module__["a"]; });




//# sourceMappingURL=index.js.map

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Animations; });

var Animations = {
    flyStaffIn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyStaffIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-76%,0,0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-76%, 200%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ]),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('* => void', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(-76%, -400%, 0)', opacity: 0 }),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('500ms cubic-bezier(.4,-0.31,.66,1.26)')
        ])
    ]),
    flyInternsIn: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["a" /* trigger */])('flyInternsIn', [
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["b" /* state */])('*', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(179%,25%,0)', opacity: 1 })),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["d" /* transition */])('void => *', [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["c" /* style */])({ transform: 'translate3d(179%, 200%, 0)', opacity: 0 }),
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
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_list_staff_list_component__ = __webpack_require__(44);
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
/* 136 */
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
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__staff_list_staff_list_component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__staff_routing_module__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__staff_service__ = __webpack_require__(35);
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
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__work_model__ = __webpack_require__(139);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__work_service__ = __webpack_require__(26);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__works_module__ = __webpack_require__(140);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__works_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__works_routing_module__ = __webpack_require__(87);
/* unused harmony namespace reexport */




//# sourceMappingURL=index.js.map

/***/ }),
/* 139 */
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
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__work_categories_work_categories_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__work_list_work_list_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__works_routing_module__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__work_service__ = __webpack_require__(26);
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
/* 141 */
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
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, "/** {\n    box-sizing: border-box;\n}*/\n\n.slide {\n    margin: 0;\n}\n\n.lightbox-outer {\n    background: rgba(0, 0, 0, .7);\n    width: 100%;\n    height: 100%;\n    margin: 0 auto;\n    position: absolute;\n    top: 0;\n    left: 0;\n    text-align: left;\n}\n\n.lightbox-inner {\n    position: relative;\n    margin: 1% auto;\n    width: 95%;\n    height: 95%;\n    padding: 0;\n    background-color: #282625;\n    overflow-y: hidden;\n}\n\n.lightbox-title {\n    color: #eee;\n    font-size: 1.6em;\n    margin-left: 2%;\n    margin-top: 2%;\n    display: inline-block;\n}\n\n.details .lightbox-title {\n    margin-left: 0;\n    text-decoration: underline;\n}\n\n.lightbox-header {\n    box-sizing: border-box;\n    display: block;\n    position: relative;\n    width: 100%;\n    margin: 0 20px;\n    padding: 0;\n    height: 67px;\n}\n\n.container {\n    position: relative;\n    padding: 0;\n    margin: 0 auto;\n    width: 90%;\n    height: 90%;\n    display: inline-block;\n}\n\n.stage {\n    position: relative;\n    overflow: hidden;\n    float: left;\n    width: 100%;\n    height: 100%;\n}\n\n.stage-center {\n    -webkit-transform: translateX(0);\n            transform: translateX(0);\n}\n\n.stage-left {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%);\n}\n\n.stage-right {\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n}\n\n\n.stage .image {\n    position: relative;\n    float: left;\n    width: 100%;\n    height: 100%;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.container .caption {\n    box-sizing: border-box;\n    position: absolute;\n    bottom: 0;\n    color: #eee;\n    background-color: rgba(0,0,0,0.7);\n    width: 100%;\n    padding: 1%;\n    margin: 0;\n    clear: both;\n}\n\n.stage .btn-scroll {\n    position: absolute;\n    width: 50px;\n    height: 56px;\n    top: 10px;\n    margin-top: 25%;\n    padding: 0;\n    background-color: rgba(0,0,0,0.1);\n    line-height: center;\n    z-index: 10;\n    border: none;\n    transition: background-color 200ms;\n    \n}\n\n.btn-more {\n    position: absolute;\n    top: -40px;\n    right: 0;\n    width: 130px;\n    height: 25px;\n    margin-top: 0;\n    padding: 0;\n    background-color: #282625;\n    line-height: center;\n    border: none;\n    border-radius: 8px;\n    color: #eee;\n    z-index: 111;\n    font-size: 16px;\n}\n\n\n\n.prev-pic {\n    position: absolute;\n    left: 0;\n}\n\n.next-pic {\n    position: absolute;\n    right: 0;\n}\n\n.stage .btn-scroll:hover {\n    background-color:  rgba(0,0,0,0.5);\n}\n.stage .btn-scroll span {\n    margin: 0 auto;\n    padding: 0;\n}\n\n.btn-close {\n    position: absolute;\n    top: 13px;\n    right: 35px;\n    width: 20px;\n    height: 20px;\n    border-radius: 8px;\n}\n\n.chevron {\n    margin: 0 auto;\n    vertical-align: center;\n}\n\n.chevron::before {\n    color: #eee;\n\tborder-style: solid;\n\tborder-width: 0.25em 0.25em 0 0;\n\tcontent: '';\n\tdisplay: inline-block;\n\theight: 13px;\n\twidth: 12px;\n\t-webkit-transform: rotate(-45deg);\n\t        transform: rotate(-45deg);\n}\n\n.chevron.right-chevron:before {\n\t/*left: 10%;*/\n\t-webkit-transform: rotate(45deg);\n\t        transform: rotate(45deg);\n}\n\n.chevron.left-chevron:before {\n\t/*left: 0.25em;*/\n\t-webkit-transform: rotate(-135deg);\n\t        transform: rotate(-135deg);\n}\n\n.details {\n    width: 26%;\n    display: inline-block;\n    color: #eee;\n    float: right;\n    margin: 0;\n    margin-right: 1%;\n}\n\n.details p {\n    font-size: 1.2em;\n}\n\n.details p strong {\n    font-weight: bold;\n}\n\n.description {\n    display: block;\n    width: 100%;\n    margin: 20px 0;\n}\n\n.thumbnails {\n    height: 15%;\n    width: 70%;\n    margin-left: 1%;\n    padding: 1% 0;\n}\n\n.thumbnail-container {\n    margin: 0 auto;\n    padding: 0;\n}\n\n.thumbnail {\n    position: relative;\n    width: 160px;\n    height: 90px;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    display: inline-block;\n    margin: 0 0.5%;\n}\n\n.selected {\n    border: 1px solid #eee;\n}\n\n@media screen and (max-width: 480px) {\n    .lightbox-inner {\n        width: 100%;\n    }\n}\n\n.hidden {\n    display: none;\n}", ""]);

// exports


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports
exports.i(__webpack_require__(41), "");

// module
exports.push([module.i, "/*.router {\n    z-index: -1;\n}*/\n", ""]);

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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports
exports.i(__webpack_require__(41), "");

// module
exports.push([module.i, ":host {\n    width: 100%;\n}\n\n.background {\n    position: fixed;\n    left: 0;\n    height: 90vh;\n    width: 100vw;\n    z-index: -99;\n    margin: 0 auto;\n    overflow: hidden;\n}\n\n.background-image {\n    z-index: 100;\n    /*-o-animation: bg-move 30s linear;\n    -moz-animation: bg-move 30s linear;\n    -webkit-animation: bg-move 30s linear;\n    animation: bg-move 30s linear;*/\n    position: relative;\n    float: left;\n    width: 100%;\n    height: 100%;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    background-color: #eee;\n    background-position: 50% 50%;\n    background-size: 100%;\n    background-repeat: no-repeat;\n}\n\n/*@-webkit-keyframes bg-move {\n\t0%   { background-position:  0 0; }\n\t100% { background-position: -50px -50px; transform: scale(1.1); }\n}\n\n@-moz-keyframes bg-move {\n\t0%   { background-position:  0 0; }\n\t100% { background-position: -50px -50px; transform: scale(1.1); }\n}\n\n@keyframes bg-move {\n\t0%   { background-position:  0 0; }\n\t100% { background-position: -50px -50px; transform: scale(1.1); }\n}*/", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports
exports.i(__webpack_require__(42), "");

// module
exports.push([module.i, "/*:host {\n    display: inline-block;\n    width: \n}*/\n\n.menu-item a {\n    cursor: pointer;\n    color: #444;\n    text-decoration: none;\n    list-style: inherit;\n    font-size: 24px;\n    font-weight: 300;\n}\n\n\n.category-description {\n    width: 48%;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    float: left;\n    -webkit-transform: translate3d(-50%, 0, 0);\n            transform: translate3d(-50%, 0, 0);\n}\n\n.category-description p {\n    font-size: 1.4em;\n    color: #444;\n}\n\n.category {\n    text-decoration: none;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports
exports.i(__webpack_require__(41), "");

// module
exports.push([module.i, ".publications {\n    width: 590px;\n    height: 80vh;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    /*float: right;*/\n    overflow-y: auto;\n    /*overflow-x: visible;*/\n}\n\n.publication {\n    position: relative;\n    height: 240px;\n    margin: 2% auto;\n    padding: 0;\n    float: none;\n    clear: both;\n}\n.publication .caption {\n    width: 192px;\n    float: left;\n    padding: 5px 0 5px 5px;\n    clear: both;\n}\n\n.publication .caption p {\n    margin: 2px 0;\n    font-size: 13px;\n    font-weight: bold;\n}\n\n.publication .image {\n    position: relative;\n    float: right;\n    width: 382.111111px;\n    height: 214.9375px;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports


// module
exports.push([module.i, ".staff {\n    margin: 0;\n    padding: 0;\n    width: 56%;\n    overflow-y: auto;\n    display: inline-block;\n}\n\n.staff li {\n    float: left;\n    width: 29%;\n    height: 90%;\n    margin: 3% 2%;\n    padding: 0;\n    background-color: #eee;\n    list-style: none;\n}\n\n.staff li img {\n    margin: 0 auto;\n    width: 100%;\n}\n\n.staff li p {\n    width: 100%;\n    padding: 5% 1%;\n    margin: 0;\n    font-size: 0.9em;\n}\n\n.interns {\n    float: left;\n    width: 20%;\n    overflow-y: auto;\n}\n\n.interns li {\n    list-style: none;\n}\n\n.interns li p {\n    width: 100%;\n    padding: 2%;\n    margin: 0;\n    margin-left: -25%;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports
exports.i(__webpack_require__(42), "");

// module
exports.push([module.i, "/*:host {\n    display: inline-block;\n    width: \n}*/\n\n.menu-item a {\n    cursor: pointer;\n    color: #444;\n    text-decoration: none;\n    list-style: inherit;\n    font-size: 24px;\n    font-weight: 300;\n}\n\n\n.category-description {\n    width: 48%;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    float: left;\n    -webkit-transform: translate3d(-50%, 0, 0);\n            transform: translate3d(-50%, 0, 0);\n}\n\n.category-description p {\n    font-size: 1.4em;\n    color: #444;\n}\n\n.category {\n    text-decoration: none;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(5)(false);
// imports
exports.i(__webpack_require__(194), "");
exports.i(__webpack_require__(41), "");

// module
exports.push([module.i, ".works {\n    width: 590px;\n    height: 80vh;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n    /*float: right;*/\n    overflow-y: auto;\n    /*overflow-x: visible;*/\n}\n\n.work {\n    position: relative;\n    height: 240px;\n    margin: 2% auto;\n    padding: 0;\n    float: none;\n    clear: both;\n}\n\n.work .caption {\n    width: 192px;\n    float: left;\n    padding: 5px 0 5px 5px;\n    clear: both;\n}\n\n.work .caption p {\n    margin: 2px 0;\n    font-size: 13px;\n    font-weight: bold;\n}\n\n.work .image {\n    position: relative;\n    float: right;\n    width: 382.111111px;\n    height: 214.9375px;\n    background-position: 50% 50%;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),
/* 204 */,
/* 205 */
/***/ (function(module, exports) {

module.exports = "<nav \n[@flyNavIn]=\"homeState\" \n[@flyNavRight]=\"homeState\" \nclass=\"menu nav-menu\" \n[ngClass]=\"{'home-menu': homeState === 'home'}\">\n\n    <div class=\"menu-item\">\n    <a class=\"nav-menu-item\"\n    routerLink=\"works/categories\"\n    routerLinkActive=\"active\"\n    (click)=\"changeState('lvl0')\">works</a></div>\n\n    <div class=\"menu-item\">\n    <a \n    class=\"nav-menu-item\" \n    routerLink=\"publications/categories\" \n    routerLinkActive=\"active\"\n    (click)=\"changeState('lvl0')\">publications</a></div>\n\n    <!--<div class=\"menu-item\">\n    <a \n    class=\"nav-menu-item\" \n    routerLink=\"press/categories\" \n    routerLinkActive=\"active\"\n    (click)=\"changeState('other')\">press</a></div>-->\n\n    <div class=\"menu-item\">\n    <a \n    class=\"nav-menu-item\" \n    routerLink=\"staff\" \n    routerLinkActive=\"active\"\n    (click)=\"changeState('lvl1')\">staff</a></div>\n\n    <div class=\"menu-item\">\n    <a \n    class=\"nav-menu-item\" \n    routerLink=\"contact\" \n    routerLinkActive=\"active\"\n    (click)=\"changeState('lvl1')\">contact</a></div>\n\n    <div class=\"menu-item\">\n    <a \n    class=\"nav-menu-item\" \n    routerLink=\"/\"\n    (click)=\"changeState('lvl0')\">home</a></div>\n\n</nav>\n\n<router-outlet class=\"router\"></router-outlet>\n\n\n"

/***/ }),
/* 206 */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"contactForm\" novalidate>\n  <div class=\"form-group\">\n    <div class=\"contact-form contact-form-name\">\n      <label for=\"name\">Name</label>\n      <input formControlName=\"name\">\n    </div>\n    <div class=\"contact-form contact-form-email\">\n      <label for=\"email\">Email</label>\n      <input formControlName=\"email\">\n    </div>\n    <div class=\"contact-form contact-form-subject\">\n      <label for=\"subject\">Subject</label>\n      <input formControlName=\"subject\">\n    </div>\n    <div class=\"contact-form contact-form-message\">\n      <label for=\"message\">Message</label>\n      <textarea formControlName=\"message\"></textarea>\n    </div>    \n    <div>\n      <button>Submit</button>\n    </div>\n  </div>\n</form>\n<div class=\"message-preview\">\n  <div *ngIf=\"contactForm.get('subject').value != null\">\n    <h3>{{ contactForm.get('subject').value }}</h3>\n  </div>\n  <div *ngIf=\"contactForm.get('message').value != null\">\n  <p>{{contactForm.get('message').value}}</p>\n  </div>\n  <div *ngIf=\"contactForm.get('name').value != null\">\n  <p><strong>{{contactForm.get('name').value}}</strong></p>\n  </div>\n  <div *ngIf=\"contactForm.get('email').value != null\">\n  <p>{{contactForm.get('email').value}}</p>\n  </div>\n</div>"

/***/ }),
/* 207 */
/***/ (function(module, exports) {

module.exports = "\n<app-contact-form></app-contact-form>\n<div class=\"contact-details\">\n  <p>C/ Armando Oscar Pacheco #&lt;no&gt;,<br>\n    Paraiso, Sto. Dgo. DN,<br>\n    Republica Dominicana\n    </p>\n    <p>T-809.567.4364</p>\n\n  <div class=\"social-ribbon\">\n    Social Ribbon here\n  </div>\n<div>"

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "  <div class=\"background\">\n    <div class=\"background-image\" [@parallax]=\"parallaxState\" [@fade]=\"fadeState\" #theDiv >\n    </div>\n  </div>"

/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = "<div  [@flySecondIn]=\"selectionState\" [@flySecondRight]=\"selectionState\" class=\"categories menu\">\n  <div class=\"category menu-item\"\n  *ngFor=\"let category of categories\"\n  (click)=\"onSelect(category)\"\n  (mouseenter)=\"onHover(category)\"\n  (mouseleave)=\"offHover()\">\n    <a>{{category.name}}</a>\n  </div>\n</div>\n\n<div [@deOpacify]=\"hoverState\" class=\"category-description\">\n  <p *ngIf=\"hoveredCategory && selectionState === 'noSelection'\">{{hoveredCategory.description}}</p>\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = "<div class=\"publications\"  [@flyThirdIn]=\"in\">\n  <div class=\"publication\" *ngFor=\"let publication of publications\" (click)=\"onSelect(publication)\">\n    <div class=\"caption\">\n      <p><strong>Title: </strong>{{publication.title}}</p>\n      <p><strong>Description: </strong>{{publication.description}}</p>\n      <p><strong>Medium: </strong>{{publication.medium_slug}}</p>\n      <a *ngIf=\"publication.url !== ''\" href=\"{{publication.url}}\"><p>Link</p></a>\n    </div>\n    <div class=\"image\" [style.backgroundImage]=\"getBackground(publication.image)\"></div>\n  </div>\n</div>\n<!--<div *ngIf=\"selectedPublication\">\n  <span (click)=\"deSelect()\">Close</span>\n  <h4>{{selectedPublication.title}}</h4>\n  <p>{{selectedPublication.description}}</p>\n</div>-->"

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = "<div [@flyStaffIn]=\"in\" class=\"staff\">\n  <ul>\n    <li class=\"staff-member card\" *ngFor=\"let member of staff\" (click)=\"onSelect(member)\">\n        <img src=\"{{member.photo}}\" alt=\"{{member.username}}'s photo'\">\n        <p>{{member.first_name}} {{member.last_name}}</p>\n    </li>\n  </ul>\n</div>\n<div [@flyInternsIn]=\"in\" class=\"interns\">\n  <h4>Interns</h4>\n  <ul>\n    <li class=\"intern\" *ngFor=\"let member of interns\" (click)=\"onSelect(member)\">\n      <p>{{member.first_name}} {{member.last_name}}</p>\n    </li>\n  </ul>\n</div>\n<!--<div class=\"member-details\" *ngIf=\"selectedMember\">\n  <span (click)=\"clearSelection()\">Close</span>\n  <h3>{{selectedMember.first_name}} {{selectedMember.last_name}}</h3>\n  <img src=\"{{selectedMember.photo}}\" *ngIf=\"selectedMember.photo !== null\">\n  <h5>Bio</h5>\n  <p>{{selectedMember.bio}}</p>\n  \n</div>-->"

/***/ }),
/* 212 */
/***/ (function(module, exports) {

module.exports = "<div  [@flySecondIn]=\"selectionState\" [@flySecondRight]=\"selectionState\" class=\"categories menu\">\n  <div class=\"category menu-item\"\n  *ngFor=\"let category of categories\"\n  (click)=\"onSelect(category)\"\n  (mouseenter)=\"onHover(category)\"\n  (mouseleave)=\"offHover()\">\n    <a>{{category.name}}</a>\n  </div>\n</div>\n\n<div [@deOpacify]=\"hoverState\" class=\"category-description\">\n  <p *ngIf=\"hoveredCategory && selectionState === 'noSelection'\">{{hoveredCategory.description}}</p>\n</div>\n\n\n<router-outlet></router-outlet>\n"

/***/ }),
/* 213 */
/***/ (function(module, exports) {

module.exports = "<div class=\"works\"  [@flyThirdIn]=\"in\">\n  <div class=\"work\" *ngFor=\"let work of works\" (click)=\"onSelect(work)\">\n    <div class=\"caption\">\n      <p>{{work.published_date|date:'y'}}</p>\n      <p>{{work.title}}</p>\n      <p>{{work.program}}</p>\n      <!--<p><strong>Program: </strong>{{work.program}}</p>\n      <p><strong>Status: </strong>{{work.status}}</p>\n      <p><strong>Team: </strong>{{work.team}}</p>-->\n    </div>\n    <div class=\"image\" [style.backgroundImage]=\"getBackground(work.cover.image)\"></div>\n  </div>\n</div>\n<div class=\"lightbox-outer s-work\" *ngIf=\"selectedWork\">\n  <div class=\"lightbox-inner\" (keydown)=\"escape($event)\">\n    <!--<button (click)=\"nextItem()\">Next</button>-->\n    <!--<button (click)=\"prevItem()\">Previous</button>-->\n    <div class=\"lightbox-header\">\n      <h2 \n      class=\"lightbox-title\" \n      *ngIf=\"!showDetails\" \n      >{{selectedWork.published_date|date:'y'}} - {{selectedWork.title}} - {{selectedWork.program}}</h2>\n      <button class=\"btn-close btn\" (click)=\"deSelect()\">\n        <span class=\"close-icon\"></span>\n      </button>\n    </div>\n    <div class=\"container\" [@shrinkContainer]=\"detailState\">\n      <button class=\"btn-more\" \n      (click)=\"toggleDetails()\">\n        {{ showDetails ? 'Hide details' : 'Show details' }}\n      </button>\n      <div class=\"stage\">\n        <button class=\"btn-scroll prev-pic\" (click)=\"prevPic()\" (keydown)=\"scroll($event)\">\n          <span class=\"chevron left-chevron\"></span>\n        </button>\n          <div \n          [@fade]=\"fadeState\" \n          #cImgDiv \n          class=\"stage-center image\" \n          [style.backgroundImage]=\"getBackground(stageCenter.image)\"></div>\n        <button class=\"btn-scroll next-pic\" (click)=\"nextPic()\" (keydown)=\"scroll($event)\">\n          <span class=\"chevron right-chevron\"></span>\n        </button>\n      </div>\n      <div \n        class=\"caption\">\n        {{stageCenter.caption}}\n      </div>\n    </div>\n    <div \n    class=\"details\" \n    *ngIf=\"showDetails\" \n    [@showDeets]=\"detailState\">\n         <h2 \n      class=\"lightbox-title\" \n      *ngIf=\"showDetails\" \n      >{{selectedWork.published_date|date:'y'}} - {{selectedWork.title}}</h2>\n        <p><strong>Program: </strong>{{selectedWork.program}}</p>\n        <p><strong>Status: </strong>{{selectedWork.status}}</p>\n        <p><strong>Team: </strong>{{selectedWork.team}}</p>\n        <a href=\"{{selectedWork.document}}\" target=\"_blank\" download>\n          <button>Download</button>\n        </a>\n        <div class=\"description\">\n          <p>{{selectedWork.description}}</p>       \n        </div>\n    </div>\n    <div class=\"thumbnails\" *ngIf=\"showDetails\">\n      <div class=\"thumbnail-container\" [style.width]=\"(166 * i)+ 'px'\">\n        <div \n        class=\"thumbnail\" \n        *ngFor=\"let picture of pictures\" \n        (click)=\"switchPic(picture)\"\n        [style.backgroundImage]=\"getBackground(picture.image)\" \n        [ngClass]=\"{'selected': picture.id === stageCenter.id}\"\n        ></div>\n      </div>\n  </div>\n</div>"

/***/ }),
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
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(114);


/***/ })
]),[247]);
//# sourceMappingURL=main.bundle.js.map