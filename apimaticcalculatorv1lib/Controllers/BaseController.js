/**
 * APIMATICCalculatorV1Lib
 *
 * This file was automatically generated for testing by APIMATIC v2.0 ( https://apimatic.io ).
 */

;(function (angular) {
'use strict';

angular.module('APIMATICCalculatorV1Lib')
	.factory('BaseController', ['ObjectMapper', BaseController]);

	function BaseController(ObjectMapper) {
	    /**
	     * Get ObjectMapper instance
	     * @return {ObjectMapper} Shared instance
	     */
	    var getObjectMapper = function() {
	        return ObjectMapper;
	    };

		return {
			getObjectMapper: getObjectMapper
		};
	}

}(angular));
