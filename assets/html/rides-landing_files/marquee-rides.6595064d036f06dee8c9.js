"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkaem_maven_archetype"] = self["webpackChunkaem_maven_archetype"] || []).push([["marquee-rides"],{

/***/ "./src/main/webpack/components/re-rides/marquee-rides-events/js/_marquee-rides.js":
/*!****************************************************************************************!*\
  !*** ./src/main/webpack/components/re-rides/marquee-rides-events/js/_marquee-rides.js ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst RidesEventsComponent = {\r\n\r\n  init: function () {\r\n    // console.log(\"marqee rides event\");\r\n\r\n\r\n    const marqeeswiper = new Swiper('.cmp--marquee-swiper', {\r\n      direction: 'horizontal',\r\n      loop: false,\r\n      pagination: {\r\n        el: '.swiper-pagination',\r\n        clickable: true,\r\n      },\r\n      effect: 'slide',\r\n      slidesPerView: 1.2, // Default value for desktop\r\n      spaceBetween: 20,\r\n      breakpoints: {\r\n        // When the window width is <= 768px (mobile size)\r\n        768: {\r\n          slidesPerView: 1.2, // Show 1 slide on mobile\r\n        },\r\n        // When the window width is > 768px (desktop size)\r\n        1024: {\r\n          slidesPerView: 4, // Show 3 slides on desktop\r\n\r\n        },\r\n      },\r\n    });\r\n\r\n\r\n  }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (RidesEventsComponent);\n\n//# sourceURL=webpack://aem-maven-archetype/./src/main/webpack/components/re-rides/marquee-rides-events/js/_marquee-rides.js?");

/***/ })

}]);