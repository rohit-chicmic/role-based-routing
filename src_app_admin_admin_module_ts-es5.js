(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkang_rba"] = self["webpackChunkang_rba"] || []).push([["src_app_admin_admin_module_ts"], {
    /***/
    3176:
    /*!***********************************************!*\
      !*** ./src/app/admin/admin-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "routes": function routes() {
          return (
            /* binding */
            _routes
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      6662);

      var _routes = [{
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
      }];
      /***/
    },

    /***/
    7095:
    /*!***************************************!*\
      !*** ./src/app/admin/admin.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AdminModule": function AdminModule() {
          return (
            /* binding */
            _AdminModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard/dashboard.component */
      6662);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _admin_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-routing.module */
      3176);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _AdminModule = function _AdminModule() {
        _classCallCheck(this, _AdminModule);
      };

      _AdminModule.ɵfac = function AdminModule_Factory(t) {
        return new (t || _AdminModule)();
      };

      _AdminModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AdminModule
      });
      _AdminModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(_admin_routing_module__WEBPACK_IMPORTED_MODULE_1__.routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AdminModule, {
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    6662:
    /*!********************************************************!*\
      !*** ./src/app/admin/dashboard/dashboard.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DashboardComponent": function DashboardComponent() {
          return (
            /* binding */
            _DashboardComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _DashboardComponent = /*#__PURE__*/function () {
        function _DashboardComponent() {
          _classCallCheck(this, _DashboardComponent);
        }

        _createClass(_DashboardComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _DashboardComponent;
      }();

      _DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
        return new (t || _DashboardComponent)();
      };

      _DashboardComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _DashboardComponent,
        selectors: [["app-dashboard"]],
        decls: 4,
        vars: 0,
        consts: [["role", "alert", 1, "alert", "alert-danger"], ["role", "alert", 1, "alert", "alert-success"]],
        template: function DashboardComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Admin module!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Dashboard component!\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_admin_admin_module_ts-es5.js.map