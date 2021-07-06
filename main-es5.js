(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkang_rba"] = self["webpackChunkang_rba"] || []).push([["main"], {
    /***/
    8255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 8255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    2629:
    /*!**************************************!*\
      !*** ./src/app/app-routing.guard.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthGuard": function AuthGuard() {
          return (
            /* binding */
            _AuthGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./services/auth.service */
      7556);

      var _AuthGuard = /*#__PURE__*/function () {
        function _AuthGuard(router, authService) {
          _classCallCheck(this, _AuthGuard);

          this.router = router;
          this.authService = authService;
        }

        _createClass(_AuthGuard, [{
          key: "canActivate",
          value: function canActivate(route) {
            var _this = this;

            if (!this.authService.isAuthorized()) {
              this.router.navigate(['login']);
              return false;
            }

            var roles = route.data.roles;

            if (roles && !roles.some(function (r) {
              return _this.authService.hasRole(r);
            })) {
              this.router.navigate(['error', 'not-found']);
              return false;
            }

            return true;
          }
        }, {
          key: "canLoad",
          value: function canLoad(route) {
            var _this2 = this;

            if (!this.authService.isAuthorized()) {
              return false;
            }

            var roles = route.data && route.data.roles;

            if (roles && !roles.some(function (r) {
              return _this2.authService.hasRole(r);
            })) {
              return false;
            }

            return true;
          }
        }]);

        return _AuthGuard;
      }();

      _AuthGuard.ɵfac = function AuthGuard_Factory(t) {
        return new (t || _AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
      };

      _AuthGuard.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _AuthGuard,
        factory: _AuthGuard.ɵfac
      });
      /***/
    },

    /***/
    158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./home/home.component */
      5067);
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./profile/profile.component */
      6630);
      /* harmony import */


      var _error_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error/not-found/not-found.component */
      8694);
      /* harmony import */


      var _app_routing_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.guard */
      2629);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./services/auth.service */
      7556);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login/login.component */
      8458);
      /* harmony import */


      var _models_role__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./models/role */
      4946);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        children: [{
          path: '',
          component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
        }, {
          path: 'profile',
          canActivate: [_app_routing_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
          component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_1__.ProfileComponent
        }, {
          path: 'login',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent
        }]
      }, {
        path: 'admin',
        canLoad: [_app_routing_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        canActivate: [_app_routing_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard],
        data: {
          roles: [_models_role__WEBPACK_IMPORTED_MODULE_6__.Role.Admin]
        },
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_admin_admin_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./admin/admin.module */
          7095)).then(function (m) {
            return m.AdminModule;
          });
        }
      }, {
        path: '**',
        component: _error_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent
      }];

      var _AppRoutingModule = function _AppRoutingModule() {
        _classCallCheck(this, _AppRoutingModule);
      };

      _AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || _AppRoutingModule)();
      };

      _AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _AppRoutingModule
      });
      _AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [_app_routing_guard__WEBPACK_IMPORTED_MODULE_3__.AuthGuard, _services_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    6747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app-routing.module */
      158);
      /* harmony import */


      var _app_app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.component */
      498);
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./home/home.component */
      5067);
      /* harmony import */


      var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile/profile.component */
      6630);
      /* harmony import */


      var _error_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./error/not-found/not-found.component */
      8694);
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./login/login.component */
      8458);
      /* harmony import */


      var _directives_user_role_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./directives/user-role.directive */
      891);
      /* harmony import */


      var _directives_user_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./directives/user.directive */
      5791);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./services/auth.service */
      7556);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AppModule = function _AppModule() {
        _classCallCheck(this, _AppModule);
      };

      _AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || _AppModule)();
      };

      _AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _AppModule,
        bootstrap: [_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
      });
      _AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_8__.AuthService],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_AppModule, {
          declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent, _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__.ProfileComponent, _error_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_4__.NotFoundComponent, _login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent, _directives_user_directive__WEBPACK_IMPORTED_MODULE_7__.UserDirective, _directives_user_role_directive__WEBPACK_IMPORTED_MODULE_6__.UserRoleDirective],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule],
          exports: [_directives_user_directive__WEBPACK_IMPORTED_MODULE_7__.UserDirective, _directives_user_role_directive__WEBPACK_IMPORTED_MODULE_6__.UserRoleDirective]
        });
      })();
      /***/

    },

    /***/
    498:
    /*!**************************************!*\
      !*** ./src/app/app/app.component.ts ***!
      \**************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/role */
      4946);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/auth.service */
      7556);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0() {
        return ["profile"];
      };

      function AppComponent_li_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
        }
      }

      var _c1 = function _c1() {
        return ["admin", "dashboard"];
      };

      function AppComponent_li_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
        }
      }

      var _c2 = function _c2() {
        return ["login"];
      };

      function AppComponent_li_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Login");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c2));
        }
      }

      function AppComponent_li_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AppComponent_li_8_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r6.logout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Logout");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_span_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Authorized");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_span_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Admin");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      }

      var _c3 = function _c3() {
        return ["/"];
      };

      var _AppComponent = /*#__PURE__*/function () {
        function _AppComponent(router, authService) {
          _classCallCheck(this, _AppComponent);

          this.router = router;
          this.authService = authService;
          this.Role = _models_role__WEBPACK_IMPORTED_MODULE_0__.Role;
        }

        _createClass(_AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "isAuthorized",
          get: function get() {
            return this.authService.isAuthorized();
          }
        }, {
          key: "isAdmin",
          get: function get() {
            return this.authService.hasRole(_models_role__WEBPACK_IMPORTED_MODULE_0__.Role.Admin);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
            this.router.navigate(['login']);
          }
        }]);

        return _AppComponent;
      }();

      _AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || _AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
      };

      _AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AppComponent,
        selectors: [["app-root"]],
        decls: 15,
        vars: 8,
        consts: [[1, "navbar", "navbar-expand", "navbar-dark", "bg-dark"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], [1, "nav-link", 3, "routerLink"], ["class", "nav-item", 4, "ngIf"], [1, "navbar-text"], ["class", "badge badge-warning", 4, "ngIf"], ["class", "badge badge-danger", 4, "ngIf"], [1, "jumbotron"], [1, "container-fluid"], [1, "nav-link", 3, "click"], [1, "badge", "badge-warning"], [1, "badge", "badge-danger"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "a", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Home");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AppComponent_li_5_Template, 3, 2, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AppComponent_li_6_Template, 3, 2, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, AppComponent_li_7_Template, 3, 2, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, AppComponent_li_8_Template, 3, 0, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, AppComponent_span_10_Template, 2, 0, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AppComponent_span_11_Template, 2, 0, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](7, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAuthorized);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAdmin);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isAuthorized);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAuthorized);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAuthorized);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isAdmin);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet],
        styles: [".badge[_ngcontent-%COMP%] {\n  margin: 2px;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWRnZSB7XG4gIG1hcmdpbjogMnB4O1xufVxuXG4ubmF2LWxpbmsge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"]
      });
      /***/
    },

    /***/
    891:
    /*!***************************************************!*\
      !*** ./src/app/directives/user-role.directive.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserRoleDirective": function UserRoleDirective() {
          return (
            /* binding */
            _UserRoleDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/auth.service */
      7556);

      var _UserRoleDirective = /*#__PURE__*/function () {
        function _UserRoleDirective(templateRef, authService, viewContainer) {
          _classCallCheck(this, _UserRoleDirective);

          this.templateRef = templateRef;
          this.authService = authService;
          this.viewContainer = viewContainer;
        }

        _createClass(_UserRoleDirective, [{
          key: "appUserRole",
          set: function set(roles) {
            if (!roles || !roles.length) {
              throw new Error('Roles value is empty or missed');
            }

            this.userRoles = roles;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            var hasAccess = false;

            if (this.authService.isAuthorized() && this.userRoles) {
              hasAccess = this.userRoles.some(function (r) {
                return _this3.authService.hasRole(r);
              });
            }

            if (hasAccess) {
              this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
              this.viewContainer.clear();
            }
          }
        }]);

        return _UserRoleDirective;
      }();

      _UserRoleDirective.ɵfac = function UserRoleDirective_Factory(t) {
        return new (t || _UserRoleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef));
      };

      _UserRoleDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _UserRoleDirective,
        selectors: [["", "appUserRole", ""]],
        inputs: {
          appUserRole: "appUserRole"
        }
      });
      /***/
    },

    /***/
    5791:
    /*!**********************************************!*\
      !*** ./src/app/directives/user.directive.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserDirective": function UserDirective() {
          return (
            /* binding */
            _UserDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../services/auth.service */
      7556);

      var _UserDirective = /*#__PURE__*/function () {
        function _UserDirective(templateRef, authService, viewContainer) {
          _classCallCheck(this, _UserDirective);

          this.templateRef = templateRef;
          this.authService = authService;
          this.viewContainer = viewContainer;
        }

        _createClass(_UserDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var hasAccess = this.authService.isAuthorized();

            if (hasAccess) {
              this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
              this.viewContainer.clear();
            }
          }
        }]);

        return _UserDirective;
      }();

      _UserDirective.ɵfac = function UserDirective_Factory(t) {
        return new (t || _UserDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ViewContainerRef));
      };

      _UserDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: _UserDirective,
        selectors: [["", "appUser", ""]]
      });
      /***/
    },

    /***/
    8694:
    /*!********************************************************!*\
      !*** ./src/app/error/not-found/not-found.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotFoundComponent": function NotFoundComponent() {
          return (
            /* binding */
            _NotFoundComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _NotFoundComponent = /*#__PURE__*/function () {
        function _NotFoundComponent() {
          _classCallCheck(this, _NotFoundComponent);
        }

        _createClass(_NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _NotFoundComponent;
      }();

      _NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || _NotFoundComponent)();
      };

      _NotFoundComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 2,
        vars: 0,
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\nnot-found works!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    },

    /***/
    5067:
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "HomeComponent": function HomeComponent() {
          return (
            /* binding */
            _HomeComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _HomeComponent = /*#__PURE__*/function () {
        function _HomeComponent() {
          _classCallCheck(this, _HomeComponent);
        }

        _createClass(_HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _HomeComponent;
      }();

      _HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || _HomeComponent)();
      };

      _HomeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _HomeComponent,
        selectors: [["app-home"]],
        decls: 2,
        vars: 0,
        consts: [["role", "alert", 1, "alert", "alert-success"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Home component!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    8458:
    /*!******************************************!*\
      !*** ./src/app/login/login.component.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/role */
      4946);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../services/auth.service */
      7556);

      var _LoginComponent = /*#__PURE__*/function () {
        function _LoginComponent(router, authService) {
          _classCallCheck(this, _LoginComponent);

          this.router = router;
          this.authService = authService;
          this.Role = _models_role__WEBPACK_IMPORTED_MODULE_0__.Role;
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "login",
          value: function login(role) {
            this.authService.login(role);
            this.router.navigate(['/']);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.authService.logout();
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["app-login"]],
        decls: 6,
        vars: 0,
        consts: [["role", "alert", 1, "alert", "alert-success"], [1, "btn", "btn-outline-warning", 3, "click"], [1, "btn", "btn-outline-danger", 3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Login component!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_2_listener() {
              return ctx.login(ctx.Role.User);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Login as User");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_4_listener() {
              return ctx.login(ctx.Role.Admin);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Login as Admin");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }
        },
        styles: ["button[_ngcontent-%COMP%] {\n  margin: 0 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG4gIG1hcmdpbjogMCAycHg7XG59Il19 */"]
      });
      /***/
    },

    /***/
    4946:
    /*!********************************!*\
      !*** ./src/app/models/role.ts ***!
      \********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Role": function Role() {
          return (
            /* binding */
            _Role
          );
        }
        /* harmony export */

      });

      var _Role;

      (function (Role) {
        Role[Role["User"] = 1] = "User";
        Role[Role["Admin"] = 2] = "Admin";
      })(_Role || (_Role = {}));
      /***/

    },

    /***/
    6630:
    /*!**********************************************!*\
      !*** ./src/app/profile/profile.component.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProfileComponent": function ProfileComponent() {
          return (
            /* binding */
            _ProfileComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _models_role__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../models/role */
      4946);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _directives_user_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../directives/user.directive */
      5791);
      /* harmony import */


      var _directives_user_role_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../directives/user-role.directive */
      891);

      function ProfileComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Content for authorized users only (e.g. display email, send message)!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProfileComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Content for admin users only (e.g. enable/disable user)!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return [a0];
      };

      var _ProfileComponent = /*#__PURE__*/function () {
        function _ProfileComponent() {
          _classCallCheck(this, _ProfileComponent);

          this.Role = _models_role__WEBPACK_IMPORTED_MODULE_0__.Role;
        }

        _createClass(_ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ProfileComponent;
      }();

      _ProfileComponent.ɵfac = function ProfileComponent_Factory(t) {
        return new (t || _ProfileComponent)();
      };

      _ProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ProfileComponent,
        selectors: [["app-profile"]],
        decls: 4,
        vars: 3,
        consts: [["role", "alert", 1, "alert", "alert-success"], ["class", "alert alert-warning", "role", "alert", 4, "appUser"], ["class", "alert alert-danger", "role", "alert", 4, "appUserRole"], ["role", "alert", 1, "alert", "alert-warning"], ["role", "alert", 1, "alert", "alert-danger"]],
        template: function ProfileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Profile component!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ProfileComponent_div_2_Template, 2, 0, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ProfileComponent_div_3_Template, 2, 0, "div", 2);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appUserRole", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](1, _c0, ctx.Role.Admin));
          }
        },
        directives: [_directives_user_directive__WEBPACK_IMPORTED_MODULE_1__.UserDirective, _directives_user_role_directive__WEBPACK_IMPORTED_MODULE_2__.UserRoleDirective],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /***/
    },

    /***/
    7556:
    /*!******************************************!*\
      !*** ./src/app/services/auth.service.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthService": function AuthService() {
          return (
            /* binding */
            _AuthService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AuthService = /*#__PURE__*/function () {
        function _AuthService() {
          _classCallCheck(this, _AuthService);
        }

        _createClass(_AuthService, [{
          key: "isAuthorized",
          value: function isAuthorized() {
            return !!this.user;
          }
        }, {
          key: "hasRole",
          value: function hasRole(role) {
            return this.isAuthorized() && this.user.Role === role;
          }
        }, {
          key: "login",
          value: function login(role) {
            this.user = {
              Role: role
            };
          }
        }, {
          key: "logout",
          value: function logout() {
            this.user = null;
          }
        }]);

        return _AuthService;
      }();

      _AuthService.ɵfac = function AuthService_Factory(t) {
        return new (t || _AuthService)();
      };

      _AuthService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: _AuthService,
        factory: _AuthService.ɵfac
      });
      /***/
    },

    /***/
    4431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      9075);
      /* harmony import */


      var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./polyfills */
      7435);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app/app.module */
      6747);

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).then(function (ref) {
        // Ensure Angular destroys itself on hot reloads.
        if (window['ngRef']) {
          window['ngRef'].destroy();
        }

        window['ngRef'] = ref; // Otherwise, log the boot error
      })["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    7435:
    /*!**************************!*\
      !*** ./src/polyfills.ts ***!
      \**************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! zone.js */
      7277);
      /* harmony import */


      var zone_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js__WEBPACK_IMPORTED_MODULE_0__);
      /**
       * This file includes polyfills needed by Angular and is loaded before the app.
       * You can add your own extra polyfills to this file.
       *
       * This file is divided into 2 sections:
       *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
       *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
       *      file.
       *
       * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
       * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
       * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
       *
       * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
       */

      /***************************************************************************************************
       * BROWSER POLYFILLS
       */

      /** IE9, IE10 and IE11 requires all of the following polyfills. **/
      // import 'core-js/es6/symbol';
      // import 'core-js/es6/object';
      // import 'core-js/es6/function';
      // import 'core-js/es6/parse-int';
      // import 'core-js/es6/parse-float';
      // import 'core-js/es6/number';
      // import 'core-js/es6/math';
      // import 'core-js/es6/string';
      // import 'core-js/es6/date';
      // import 'core-js/es6/array';
      // import 'core-js/es6/regexp';
      // import 'core-js/es6/map';
      // import 'core-js/es6/set';

      /** IE10 and IE11 requires the following for NgClass support on SVG elements */
      // import 'classlist.js';  // Run `npm install --save classlist.js`.

      /** IE10 and IE11 requires the following to support `@angular/animation`. */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /** Evergreen browsers require these. **/
      // import 'core-js/es6/reflect';
      // import 'core-js/es7/reflect';

      /**
       * Web Animations `@angular/platform-browser/animations`
       * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
       * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
       */
      // import 'web-animations-js';  // Run `npm install --save web-animations-js`.

      /***************************************************************************************************
       * Zone JS is required by Angular itself.
       */
      // Included with Angular CLI.

      /***************************************************************************************************
       * APPLICATION IMPORTS
       */

      /**
       * Date, currency, decimal and percent pipes.
       * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
       */
      // import 'intl';  // Run `npm install --save intl`.

      /***/

    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(4431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map