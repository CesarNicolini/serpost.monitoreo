function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_containers/default/default.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_containers/default/default.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_containersDefaultDefaultComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand navbar-dark bg-dark\" *ngIf=\"currentUser\">\n    <div class=\"navbar-nav\">\n        <a class=\"nav-item nav-link\" routerLink=\"/\">Cámaras</a>\n        <a class=\"nav-item nav-link\" routerLink=\"/admin\" *ngIf=\"isAdmin\">Admin</a>\n        <a class=\"nav-item nav-link\" (click)=\"logout()\">Logout</a>\n    </div>\n</nav>\n\n<!-- main app container -->\n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_containers/loader/loader.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_containers/loader/loader.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_containersLoaderLoaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"isLoading | async\" class=\"overlay\">\n    <div class=\"spinner\">\n        \n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/_containers/monitor/monitor.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_containers/monitor/monitor.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcApp_containersMonitorMonitorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n\n<iframe [src]=\"urlx | safe\" frameborder=\"0\"></iframe>\n\n<p>segura {{urlx | safe}} </p>\n<p>trucha {{urlx}} </p>\n\n\n\n<iframe src=\"http://192.168.1.6:8080/\" frameborder=\"0\"></iframe>\n\n<iframe src=\"https://192.168.1.6:8080/\" frameborder=\"0\"></iframe>\n\n<iframe src=\"192.168.1.6:8080/\" frameborder=\"0\"></iframe>\n\n<iframe src=\"//192.168.1.6:8080/\" frameborder=\"0\"></iframe>\n\n<br>\n\n\n<iframe src=\"http://192.168.1.6:8080/ | safe\" frameborder=\"0\"></iframe>\n\n<iframe src=\"https://192.168.1.6:8080/ | safe\" frameborder=\"0\"></iframe>\n\n<iframe src=\"192.168.1.6:8080/ | safe\" frameborder=\"0\"></iframe>\n\n<iframe src=\"//192.168.1.6:8080/ | safe\" frameborder=\"0\"></iframe>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAdminAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mt-4\">\r\n    <h4 class=\"card-header\">Admin</h4>\r\n    <div class=\"card-body\">\r\n        <p>This page can be accessed <u>only by administrators</u>.</p>\r\n        <p class=\"mb-1\">All users from secure (admin only) api end point:</p>\r\n        <div *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\"></div>\r\n        <ul *ngIf=\"users\">\r\n            <li *ngFor=\"let user of users\">{{user.firstName}} {{user.lastName}}</li>\r\n        </ul>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-loader></app-loader> \r\n\r\n<router-outlet></router-outlet>\r\n\r\n<!-- credits -->\r\n<!-- <div class=\"text-center mt-4\">\r\n    <p>\r\n        <a href=\"https://jasonwatmore.com/post/2019/08/06/angular-8-role-based-authorization-tutorial-with-example\" target=\"_top\">Angular 8 - Role Based Authorization Tutorial with Example</a>\r\n    </p>\r\n    <p>\r\n        <a href=\"https://jasonwatmore.com\" target=\"_top\">JasonWatmore.com</a>\r\n    </p>\r\n</div> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mt-4\">\r\n    <h4 class=\"card-header\">Cámaras</h4>\r\n    <div class=\"card-body\">\r\n        <!-- <p>You're logged in with Angular 8 & JWT!!</p>\r\n        <p>Your role is: <strong>{{currentUser.role}}</strong>.</p>\r\n        <p>This page can be accessed by <u>all authenticated users</u>.</p>\r\n        <p class=\"mb-1\">Current user from secure api end point:</p>\r\n        <div *ngIf=\"loading\" class=\"spinner-border spinner-border-sm\"></div>\r\n        <ul *ngIf=\"userFromApi\">\r\n            <li>{{userFromApi.firstName}} {{userFromApi.lastName}}</li>\r\n        </ul> -->\r\n\r\n        <div *ngFor=\"let cam  of cams\">\r\n            <li><a target=\"_blank\" href=\"{{cam.url_camara}}\">camara {{cam.id_camara}}</a></li>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-md-6 offset-md-3 mt-5\">\r\n    <div class=\"alert alert-info\">\r\n        <strong>U1</strong> - U: ACHAVARRI P: 123456<br />\r\n        <strong>U2</strong> - U: CNICOLINI P: 123456\r\n    </div>\r\n    <div class=\"card\">\r\n        <h4 class=\"card-header\">Acceda a su cuenta</h4>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\">Username</label>\r\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                    </div>\r\n                </div>\r\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    Login\r\n                </button>\r\n                <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>            ";
    /***/
  },

  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./_views/camaras/camaras.module": ["./src/app/_views/camaras/camaras.module.ts", "_views-camaras-camaras-module"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/_containers/default/default.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/_containers/default/default.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_containersDefaultDefaultComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb250YWluZXJzL2RlZmF1bHQvZGVmYXVsdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/_containers/default/default.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/_containers/default/default.component.ts ***!
    \**********************************************************/

  /*! exports provided: DefaultComponent */

  /***/
  function srcApp_containersDefaultDefaultComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DefaultComponent", function () {
      return DefaultComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _app_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_models */
    "./src/app/_models/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var DefaultComponent =
    /*#__PURE__*/
    function () {
      function DefaultComponent(router, authenticationService) {
        var _this = this;

        _classCallCheck(this, DefaultComponent);

        this.router = router;
        this.authenticationService = authenticationService;
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this.currentUser = x;
        });
      }

      _createClass(DefaultComponent, [{
        key: "logout",
        value: function logout() {
          this.authenticationService.logout();
          this.router.navigate(['/login']);
        }
      }, {
        key: "isAdmin",
        get: function get() {
          return this.currentUser && this.currentUser.role === _app_models__WEBPACK_IMPORTED_MODULE_3__["Role"].Admin;
        }
      }]);

      return DefaultComponent;
    }();

    DefaultComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    DefaultComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-default',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./default.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_containers/default/default.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./default.component.css */
      "./src/app/_containers/default/default.component.css")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], DefaultComponent);
    /***/
  },

  /***/
  "./src/app/_containers/loader/loader.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/_containers/loader/loader.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_containersLoaderLoaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".overlay {\r\n    position:fixed;\r\n    display:block;\r\n    width:100%;\r\n    height:100%;\r\n    top:0;\r\n    left:0;\r\n    background-color:rgba(74, 74, 74, 0.8);\r\n    z-index:99999;\r\n  }\r\n  .spinner {\r\n    position:absolute;\r\n    top:50%;\r\n    left:50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n            transform: translate(-50%,-50%);\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX2NvbnRhaW5lcnMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixVQUFVO0lBQ1YsV0FBVztJQUNYLEtBQUs7SUFDTCxNQUFNO0lBQ04sc0NBQXNDO0lBQ3RDLGFBQWE7RUFDZjtFQUNBO0lBQ0UsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxRQUFRO0lBQ1IsdUNBQStCO1lBQS9CLCtCQUErQjtFQUNqQyIsImZpbGUiOiJzcmMvYXBwL19jb250YWluZXJzL2xvYWRlci9sb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdmVybGF5IHtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6MTAwJTtcclxuICAgIHRvcDowO1xyXG4gICAgbGVmdDowO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDc0LCA3NCwgNzQsIDAuOCk7XHJcbiAgICB6LWluZGV4Ojk5OTk5O1xyXG4gIH1cclxuICAuc3Bpbm5lciB7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgfVxyXG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/_containers/loader/loader.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/_containers/loader/loader.component.ts ***!
    \********************************************************/

  /*! exports provided: LoaderComponent */

  /***/
  function srcApp_containersLoaderLoaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderComponent", function () {
      return LoaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_services/loader.service */
    "./src/app/_services/loader.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoaderComponent =
    /*#__PURE__*/
    function () {
      function LoaderComponent(loaderService) {
        _classCallCheck(this, LoaderComponent);

        this.loaderService = loaderService;
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.isLoading = this.loaderService.isLoading;
      }

      _createClass(LoaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoaderComponent;
    }();

    LoaderComponent.ctorParameters = function () {
      return [{
        type: _app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]
      }];
    };

    LoaderComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-loader',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./loader.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_containers/loader/loader.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./loader.component.css */
      "./src/app/_containers/loader/loader.component.css")).default]
    }), __metadata("design:paramtypes", [_app_services_loader_service__WEBPACK_IMPORTED_MODULE_1__["LoaderService"]])], LoaderComponent);
    /***/
  },

  /***/
  "./src/app/_containers/monitor/monitor.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/_containers/monitor/monitor.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcApp_containersMonitorMonitorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19jb250YWluZXJzL21vbml0b3IvbW9uaXRvci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/_containers/monitor/monitor.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/_containers/monitor/monitor.component.ts ***!
    \**********************************************************/

  /*! exports provided: MonitorComponent */

  /***/
  function srcApp_containersMonitorMonitorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MonitorComponent", function () {
      return MonitorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var MonitorComponent =
    /*#__PURE__*/
    function () {
      function MonitorComponent(route) {
        _classCallCheck(this, MonitorComponent);

        this.route = route;
      }

      _createClass(MonitorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.route.paramMap.subscribe(function (params) {
            //this.urlx = params.get("urlx");
            //console.log(params.get("urlx"))
            _this2.urlx = _this2.route.snapshot.queryParams['urlx']; //this.urlx = this.urlx.replace("http:","")

            console.log(_this2.urlx);
          });
        }
      }]);

      return MonitorComponent;
    }();

    MonitorComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }];
    };

    MonitorComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app-monitor',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./monitor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/_containers/monitor/monitor.component.html")).default,
      styles: [__importDefault(__webpack_require__(
      /*! ./monitor.component.css */
      "./src/app/_containers/monitor/monitor.component.css")).default]
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])], MonitorComponent);
    /***/
  },

  /***/
  "./src/app/_helpers/auth.guard.ts":
  /*!****************************************!*\
    !*** ./src/app/_helpers/auth.guard.ts ***!
    \****************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcApp_helpersAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, authenticationService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.authenticationService = authenticationService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var currentUser = this.authenticationService.currentUserValue;

          if (currentUser) {
            // check if route is restricted by role
            if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
              // role not authorised so redirect to home page
              this.router.navigate(['/']);
              return false;
            } // authorised so return true


            return true;
          } // not logged in so redirect to login page with the return url


          this.router.navigate(['/login'], {
            queryParams: {
              returnUrl: state.url
            }
          });
          return false;
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]
      }];
    };

    AuthGuard = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])], AuthGuard);
    /***/
  },

  /***/
  "./src/app/_helpers/error.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/_helpers/error.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: ErrorInterceptor */

  /***/
  function srcApp_helpersErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return ErrorInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var ErrorInterceptor =
    /*#__PURE__*/
    function () {
      function ErrorInterceptor(authenticationService) {
        _classCallCheck(this, ErrorInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(ErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this3 = this;

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if ([401, 403].indexOf(err.status) !== -1) {
              // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
              _this3.authenticationService.logout();

              location.reload(true);
            }

            var error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
          }));
        }
      }]);

      return ErrorInterceptor;
    }();

    ErrorInterceptor.ctorParameters = function () {
      return [{
        type: _app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    ErrorInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])], ErrorInterceptor);
    /***/
  },

  /***/
  "./src/app/_helpers/fake-backend.ts":
  /*!******************************************!*\
    !*** ./src/app/_helpers/fake-backend.ts ***!
    \******************************************/

  /*! exports provided: FakeBackendInterceptor, fakeBackendProvider */

  /***/
  function srcApp_helpersFakeBackendTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
      return FakeBackendInterceptor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return fakeBackendProvider;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/_models */
    "./src/app/_models/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var users = [{
      id: 1,
      username: 'admin',
      password: 'admin',
      firstName: 'Admin',
      lastName: 'User',
      role: _app_models__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin
    }, {
      id: 2,
      username: 'user',
      password: 'user',
      firstName: 'Normal',
      lastName: 'User',
      role: _app_models__WEBPACK_IMPORTED_MODULE_4__["Role"].User
    }];

    var FakeBackendInterceptor =
    /*#__PURE__*/
    function () {
      function FakeBackendInterceptor() {
        _classCallCheck(this, FakeBackendInterceptor);
      }

      _createClass(FakeBackendInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var url = request.url,
              method = request.method,
              headers = request.headers,
              body = request.body; // wrap in delayed observable to simulate server api call

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(handleRoute)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["materialize"])()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
          .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["dematerialize"])());

          function handleRoute() {
            switch (true) {
              case url.endsWith('/users/authenticate') && method === 'POST':
                return authenticate();

              case url.endsWith('/users') && method === 'GET':
                return getUsers();

              case url.match(/\/users\/\d+$/) && method === 'GET':
                return getUserById();

              default:
                // pass through any requests not handled above
                return next.handle(request);
            }
          } // route functions


          function authenticate() {
            var username = body.username,
                password = body.password;
            var user = users.find(function (x) {
              return x.username === username && x.password === password;
            });
            if (!user) return error('Username or password is incorrect');
            return ok({
              id: user.id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              role: user.role,
              token: "fake-jwt-token.".concat(user.id)
            });
          }

          function getUsers() {
            if (!isAdmin()) return unauthorized();
            return ok(users);
          }

          function getUserById() {
            if (!isLoggedIn()) return unauthorized(); // only admins can access other user records

            if (!isAdmin() && currentUser().id !== idFromUrl()) return unauthorized();
            var user = users.find(function (x) {
              return x.id === idFromUrl();
            });
            return ok(user);
          } // helper functions


          function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]({
              status: 200,
              body: body
            }));
          }

          function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
              status: 401,
              error: {
                message: 'unauthorized'
              }
            });
          }

          function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])({
              status: 400,
              error: {
                message: message
              }
            });
          }

          function isLoggedIn() {
            var authHeader = headers.get('Authorization') || '';
            return authHeader.startsWith('Bearer fake-jwt-token');
          }

          function isAdmin() {
            return isLoggedIn() && currentUser().role === _app_models__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin;
          }

          function currentUser() {
            if (!isLoggedIn()) return;
            var id = parseInt(headers.get('Authorization').split('.')[1]);
            return users.find(function (x) {
              return x.id === id;
            });
          }

          function idFromUrl() {
            var urlParts = url.split('/');
            return parseInt(urlParts[urlParts.length - 1]);
          }
        }
      }]);

      return FakeBackendInterceptor;
    }();

    FakeBackendInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], FakeBackendInterceptor);
    var fakeBackendProvider = {
      // use fake backend in place of Http service for backend-less development
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
      useClass: FakeBackendInterceptor,
      multi: true
    };
    /***/
  },

  /***/
  "./src/app/_helpers/index.ts":
  /*!***********************************!*\
    !*** ./src/app/_helpers/index.ts ***!
    \***********************************/

  /*! exports provided: AuthGuard, ErrorInterceptor, FakeBackendInterceptor, fakeBackendProvider, JwtInterceptor */

  /***/
  function srcApp_helpersIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/_helpers/auth.guard.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"];
    });
    /* harmony import */


    var _error_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./error.interceptor */
    "./src/app/_helpers/error.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function () {
      return _error_interceptor__WEBPACK_IMPORTED_MODULE_1__["ErrorInterceptor"];
    });
    /* harmony import */


    var _fake_backend__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./fake-backend */
    "./src/app/_helpers/fake-backend.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function () {
      return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["FakeBackendInterceptor"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function () {
      return _fake_backend__WEBPACK_IMPORTED_MODULE_2__["fakeBackendProvider"];
    });
    /* harmony import */


    var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./jwt.interceptor */
    "./src/app/_helpers/jwt.interceptor.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_3__["JwtInterceptor"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/_helpers/jwt.interceptor.ts":
  /*!*********************************************!*\
    !*** ./src/app/_helpers/jwt.interceptor.ts ***!
    \*********************************************/

  /*! exports provided: JwtInterceptor */

  /***/
  function srcApp_helpersJwtInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function () {
      return JwtInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var JwtInterceptor =
    /*#__PURE__*/
    function () {
      function JwtInterceptor(authenticationService) {
        _classCallCheck(this, JwtInterceptor);

        this.authenticationService = authenticationService;
      }

      _createClass(JwtInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          // add auth header with jwt if user is logged in and request is to api url
          var currentUser = this.authenticationService.currentUserValue; // const isLoggedIn = currentUser && currentUser.token;
          // const isApiUrl = request.url.startsWith(environment.apiUrl);
          // if (isLoggedIn && isApiUrl) {
          //     request = request.clone({
          //         setHeaders: {
          //             Authorization: `Bearer ${currentUser.token}`
          //         }
          //     });
          // }

          if (currentUser && currentUser.token) {
            //console.log('dentro el vale interceptor es',currentUser);
            //console.log('dentro el vale token es',currentUser.token);
            request = request.clone({
              setHeaders: {
                Authorization: "Bearer ".concat(currentUser.token)
              }
            });
          }

          return next.handle(request);
        }
      }]);

      return JwtInterceptor;
    }();

    JwtInterceptor.ctorParameters = function () {
      return [{
        type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
      }];
    };

    JwtInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])], JwtInterceptor);
    /***/
  },

  /***/
  "./src/app/_helpers/loader.interceptor.ts":
  /*!************************************************!*\
    !*** ./src/app/_helpers/loader.interceptor.ts ***!
    \************************************************/

  /*! exports provided: LoaderInterceptor */

  /***/
  function srcApp_helpersLoaderInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderInterceptor", function () {
      return LoaderInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/_services/loader.service */
    "./src/app/_services/loader.service.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoaderInterceptor =
    /*#__PURE__*/
    function () {
      function LoaderInterceptor(loaderService) {
        _classCallCheck(this, LoaderInterceptor);

        this.loaderService = loaderService;
      }

      _createClass(LoaderInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this4 = this;

          this.loaderService.show();
          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["finalize"])(function () {
            return _this4.loaderService.hide();
          }));
        }
      }]);

      return LoaderInterceptor;
    }();

    LoaderInterceptor.ctorParameters = function () {
      return [{
        type: _app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]
      }];
    };

    LoaderInterceptor = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(), __metadata("design:paramtypes", [_app_services_loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"]])], LoaderInterceptor);
    /***/
  },

  /***/
  "./src/app/_models/index.ts":
  /*!**********************************!*\
    !*** ./src/app/_models/index.ts ***!
    \**********************************/

  /*! exports provided: Role, User */

  /***/
  function srcApp_modelsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./role */
    "./src/app/_models/role.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Role", function () {
      return _role__WEBPACK_IMPORTED_MODULE_0__["Role"];
    });
    /* harmony import */


    var _user__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user */
    "./src/app/_models/user.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return _user__WEBPACK_IMPORTED_MODULE_1__["User"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/_models/role.ts":
  /*!*********************************!*\
    !*** ./src/app/_models/role.ts ***!
    \*********************************/

  /*! exports provided: Role */

  /***/
  function srcApp_modelsRoleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Role", function () {
      return Role;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var Role;

    (function (Role) {
      Role["User"] = "User";
      Role["Admin"] = "Admin";
    })(Role || (Role = {}));
    /***/

  },

  /***/
  "./src/app/_models/user.ts":
  /*!*********************************!*\
    !*** ./src/app/_models/user.ts ***!
    \*********************************/

  /*! exports provided: User */

  /***/
  function srcApp_modelsUserTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var User = function User() {
      _classCallCheck(this, User);
    };
    /***/

  },

  /***/
  "./src/app/_pipes/pipes.module.ts":
  /*!****************************************!*\
    !*** ./src/app/_pipes/pipes.module.ts ***!
    \****************************************/

  /*! exports provided: PipesModule */

  /***/
  function srcApp_pipesPipesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PipesModule", function () {
      return PipesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _safe_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./safe.pipe */
    "./src/app/_pipes/safe.pipe.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var PipesModule = function PipesModule() {
      _classCallCheck(this, PipesModule);
    };

    PipesModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      declarations: [_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
      exports: [_safe_pipe__WEBPACK_IMPORTED_MODULE_2__["SafePipe"]]
    })], PipesModule);
    /***/
  },

  /***/
  "./src/app/_pipes/safe.pipe.ts":
  /*!*************************************!*\
    !*** ./src/app/_pipes/safe.pipe.ts ***!
    \*************************************/

  /*! exports provided: SafePipe */

  /***/
  function srcApp_pipesSafePipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
      return SafePipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var SafePipe =
    /*#__PURE__*/
    function () {
      function SafePipe(sanitizer) {
        _classCallCheck(this, SafePipe);

        this.sanitizer = sanitizer;
      }

      _createClass(SafePipe, [{
        key: "transform",
        value: function transform(url) {
          //return this.sanitizer.sanitize(SecurityContext.URL, url)
          return this.sanitizer.bypassSecurityTrustResourceUrl(url);
        }
      }]);

      return SafePipe;
    }();

    SafePipe.ctorParameters = function () {
      return [{
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
      }];
    };

    SafePipe = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
      name: 'safe'
    }), __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])], SafePipe);
    /***/
  },

  /***/
  "./src/app/_services/authentication.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/_services/authentication.service.ts ***!
    \*****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcApp_servicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AuthenticationService =
    /*#__PURE__*/
    function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(username, password) {
          var _this5 = this;

          return this.http.post("/Auth/pochito", {
            username: username,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            console.log(user); // login successful if there's a jwt token in the response

            if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));

              _this5.currentUserSubject.next(user);
            }

            return user;
          })); // this.http.post<any>("/Auth/pochito", { username, password }).subscribe(user =>
          //     {
          //         console.log(user);
          //     })
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    AuthenticationService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/_services/camara.services.ts":
  /*!**********************************************!*\
    !*** ./src/app/_services/camara.services.ts ***!
    \**********************************************/

  /*! exports provided: CamaraService */

  /***/
  function srcApp_servicesCamaraServicesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CamaraService", function () {
      return CamaraService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var CamaraService =
    /*#__PURE__*/
    function () {
      function CamaraService(http) {
        _classCallCheck(this, CamaraService);

        this.http = http;
      } // getAll() {
      //     return this.http.get<User[]>(`${environment.apiUrl}/users`);
      // }
      // getById(id: number) {
      //     return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
      // }


      _createClass(CamaraService, [{
        key: "getCameraPerUser",
        value: function getCameraPerUser() {
          return this.http.get('/Camara/user');
        }
      }]);

      return CamaraService;
    }();

    CamaraService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    CamaraService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], CamaraService);
    /***/
  },

  /***/
  "./src/app/_services/index.ts":
  /*!************************************!*\
    !*** ./src/app/_services/index.ts ***!
    \************************************/

  /*! exports provided: AuthenticationService, UserService, CamaraService */

  /***/
  function srcApp_servicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/_services/authentication.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return _authentication_service__WEBPACK_IMPORTED_MODULE_0__["AuthenticationService"];
    });
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/_services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"];
    });
    /* harmony import */


    var _camara_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./camara.services */
    "./src/app/_services/camara.services.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "CamaraService", function () {
      return _camara_services__WEBPACK_IMPORTED_MODULE_2__["CamaraService"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/_services/loader.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/_services/loader.service.ts ***!
    \*********************************************/

  /*! exports provided: LoaderService */

  /***/
  function srcApp_servicesLoaderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoaderService", function () {
      return LoaderService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoaderService =
    /*#__PURE__*/
    function () {
      function LoaderService() {
        _classCallCheck(this, LoaderService);

        this.isLoading = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }

      _createClass(LoaderService, [{
        key: "show",
        value: function show() {
          console.log('Inicia spinner');
          this.isLoading.next(true);
        }
      }, {
        key: "hide",
        value: function hide() {
          console.log('Finaliza spinner');
          this.isLoading.next(false);
        }
      }]);

      return LoaderService;
    }();

    LoaderService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()], LoaderService);
    /***/
  },

  /***/
  "./src/app/_services/user.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/_services/user.service.ts ***!
    \*******************************************/

  /*! exports provided: UserService */

  /***/
  function srcApp_servicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var UserService = function UserService(http) {
      _classCallCheck(this, UserService);

      this.http = http;
    };

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UserService = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
      providedIn: 'root'
    }), __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], UserService);
    /***/
  },

  /***/
  "./src/app/admin/admin.component.ts":
  /*!******************************************!*\
    !*** ./src/app/admin/admin.component.ts ***!
    \******************************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return AdminComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AdminComponent =
    /*#__PURE__*/
    function () {
      function AdminComponent(userService) {
        _classCallCheck(this, AdminComponent);

        this.userService = userService;
        this.loading = false;
        this.users = [];
      }

      _createClass(AdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loading = true; // this.userService.getAll().pipe(first()).subscribe(users => {
          //     this.loading = false;
          //     this.users = users;
          // });
        }
      }]);

      return AdminComponent;
    }();

    AdminComponent.ctorParameters = function () {
      return [{
        type: _app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }];
    };

    AdminComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default
    }), __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]])], AdminComponent);
    /***/
  },

  /***/
  "./src/app/admin/index.ts":
  /*!********************************!*\
    !*** ./src/app/admin/index.ts ***!
    \********************************/

  /*! exports provided: AdminComponent */

  /***/
  function srcAppAdminIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./admin.component */
    "./src/app/admin/admin.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AdminComponent", function () {
      return _admin_component__WEBPACK_IMPORTED_MODULE_0__["AdminComponent"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      selector: 'app',
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./_helpers */
    "./src/app/_helpers/index.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _home__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home */
    "./src/app/home/index.ts");
    /* harmony import */


    var _admin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./admin */
    "./src/app/admin/index.ts");
    /* harmony import */


    var _login__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./login */
    "./src/app/login/index.ts");
    /* harmony import */


    var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.routing */
    "./src/app/app.routing.ts");
    /* harmony import */


    var _containers_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./_containers/loader/loader.component */
    "./src/app/_containers/loader/loader.component.ts");
    /* harmony import */


    var _services_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./_services/loader.service */
    "./src/app/_services/loader.service.ts");
    /* harmony import */


    var _helpers_loader_interceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./_helpers/loader.interceptor */
    "./src/app/_helpers/loader.interceptor.ts");
    /* harmony import */


    var _containers_default_default_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./_containers/default/default.component */
    "./src/app/_containers/default/default.component.ts");
    /* harmony import */


    var _containers_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./_containers/monitor/monitor.component */
    "./src/app/_containers/monitor/monitor.component.ts");
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./_pipes/pipes.module */
    "./src/app/_pipes/pipes.module.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }; // used to create fake backend


    ;
    ;

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({
        appId: 'ng-cli-universal'
      }), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__["PipesModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _home__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _admin__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"], _login__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _containers_loader_loader_component__WEBPACK_IMPORTED_MODULE_11__["LoaderComponent"], _containers_default_default_component__WEBPACK_IMPORTED_MODULE_14__["DefaultComponent"], _containers_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_15__["MonitorComponent"]],
      providers: [_services_loader_service__WEBPACK_IMPORTED_MODULE_12__["LoaderService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _helpers_loader_interceptor__WEBPACK_IMPORTED_MODULE_13__["LoaderInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["JwtInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"],
        useClass: _helpers__WEBPACK_IMPORTED_MODULE_5__["ErrorInterceptor"],
        multi: true
      }, // provider used to create fake backend
      _helpers__WEBPACK_IMPORTED_MODULE_5__["fakeBackendProvider"]],
      exports: [_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_16__["PipesModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/app.routing.ts":
  /*!********************************!*\
    !*** ./src/app/app.routing.ts ***!
    \********************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./admin */
    "./src/app/admin/index.ts");
    /* harmony import */


    var _login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./login */
    "./src/app/login/index.ts");
    /* harmony import */


    var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./_helpers */
    "./src/app/_helpers/index.ts");
    /* harmony import */


    var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./_models */
    "./src/app/_models/index.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _containers_default_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./_containers/default/default.component */
    "./src/app/_containers/default/default.component.ts");
    /* harmony import */


    var _containers_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./_containers/monitor/monitor.component */
    "./src/app/_containers/monitor/monitor.component.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var routes = [{
      path: '',
      component: _containers_default_default_component__WEBPACK_IMPORTED_MODULE_6__["DefaultComponent"],
      canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      children: [{
        path: '',
        redirectTo: 'camaras',
        pathMatch: 'full'
      }, {
        path: 'camaras',
        loadChildren: './_views/camaras/camaras.module#CamarasModule' //   canLoad: [EnterpriceGuard],
        //   data: {
        //     title: 'Inicio',
        //     roles: [Role.Admin, Role.Client, Role.Supplier]
        //   }

      }]
    }, {
      path: 'monitor',
      component: _containers_monitor_monitor_component__WEBPACK_IMPORTED_MODULE_7__["MonitorComponent"]
    }, {
      path: 'admin',
      component: _admin__WEBPACK_IMPORTED_MODULE_1__["AdminComponent"],
      canActivate: [_helpers__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      data: {
        roles: [_models__WEBPACK_IMPORTED_MODULE_4__["Role"].Admin]
      }
    }, {
      path: 'login',
      component: _login__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
    }, // otherwise redirect to home
    {
      path: '**',
      redirectTo: ''
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(userService, authenticationService, camaraService) {
        _classCallCheck(this, HomeComponent);

        this.userService = userService;
        this.authenticationService = authenticationService;
        this.camaraService = camaraService;
        this.loading = false;
        this.cams = [];
        this.currentUser = this.authenticationService.currentUserValue;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.loading = true; // this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
          //     this.loading = false;
          //     this.userFromApi = user;
          // });

          this.camaraService.getCameraPerUser().subscribe(function (cam) {
            _this6.loading = false;
            console.log(cam);
            _this6.cams = cam;
          });
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_1__["CamaraService"]
      }];
    };

    HomeComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default
    }), __metadata("design:paramtypes", [_app_services__WEBPACK_IMPORTED_MODULE_1__["UserService"], _app_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"], _app_services__WEBPACK_IMPORTED_MODULE_1__["CamaraService"]])], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/index.ts":
  /*!*******************************!*\
    !*** ./src/app/home/index.ts ***!
    \*******************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/home/home.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/login/index.ts":
  /*!********************************!*\
    !*** ./src/app/login/index.ts ***!
    \********************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/login/login.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"];
    });

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _app_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/_services */
    "./src/app/_services/index.ts");

    var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    var __metadata = undefined && undefined.__metadata || function (k, v) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(formBuilder, route, router, authenticationService) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = ''; // redirect to home if already logged in

        if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
        }
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }); // get return url from route parameters or default to '/'

          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this7 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.loginForm.invalid) {
            return;
          }

          this.loading = true;
          this.authenticationService.login(this.f.username.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (data) {
            _this7.router.navigate([_this7.returnUrl]);
          }, function (error) {
            _this7.error = error;
            _this7.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
      }, {
        type: _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    LoginComponent = __decorate([Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
      template: __importDefault(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default
    }), __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _app_services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]])], LoginComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }; // export const environment = {
    //   production: false
    // };


    var environment = {
      production: true
    };
    /*
     * In development mode, to ignore zone related error stack frames such as
     * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
     * import the following file, but please comment it out in production mode
     * because it will have performance impact when throw error
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! exports provided: getBaseUrl */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getBaseUrl", function () {
      return getBaseUrl;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    var __importDefault = undefined && undefined.__importDefault || function (mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    };

    function getBaseUrl() {
      return document.getElementsByTagName('base')[0].href;
    }

    var providers = [{
      provide: 'BASE_URL',
      useFactory: getBaseUrl,
      deps: []
    }];

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.log(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Administrador\source\repos\serpost.monitoreo\serpost.monitoreo.web\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map