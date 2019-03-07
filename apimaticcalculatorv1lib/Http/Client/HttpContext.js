/**
 * APIMATICCalculatorV1Lib
 *
 * This file was automatically generated for testing by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

/**
 * Creates a instance of HttpContext.
 *
 * @constructor
 */
angular.module('APIMATICCalculatorV1Lib')
    .factory('HttpContext', [HttpContextService]);

    function HttpContextService() {
        return function HttpContext() {
            this.request = null;
            this.response = null;
        };
    }

}(angular));
