"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app\\page",{

/***/ "./constants/index.js":
/*!****************************!*\
  !*** ./constants/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"socials\": function() { return /* binding */ socials; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"world-1\",\n        imgUrl: \"/gimli.jpg\",\n        title: \"RM of Gimli\"\n    },\n    {\n        id: \"world-2\",\n        imgUrl: \"/kaslo-01.jpg\",\n        title: \"Village of Kaslo\"\n    },\n    {\n        id: \"world-3\",\n        imgUrl: \"/lodi.jpg\",\n        title: \"Borough of Lodi\"\n    },\n    {\n        id: \"world-4\",\n        imgUrl: \"/three-hills.jpg\",\n        title: \"Town of Three Hills\"\n    },\n    {\n        id: \"world-5\",\n        imgUrl: \"/lexington.jpg\",\n        title: \"Village of Lexington\"\n    }\n];\nconst startingFeatures = [\n    {\n        id: \"job-1\",\n        company: \"CATALIS\",\n        role: \"Software Development Intern\"\n    },\n    {\n        id: \"job-2\",\n        company: \"CATALIS\",\n        role: \"Front-End Development Intern\"\n    },\n    {\n        id: \"job-3\",\n        company: \"MuniSight\",\n        role: \"Front-End Development Intern\"\n    }\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/vrpano.svg\",\n        title: \"A new world\",\n        subtitle: \"we have the latest update with new world for you to try never mind\"\n    },\n    {\n        imgUrl: \"/headset.svg\",\n        title: \"More realistic\",\n        subtitle: \"In the latest update, your eyes are narrow, making the world more realistic than ever\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/planet-06.png\",\n        title: \"The launch of the Metaverse makes Elon musk ketar-ketir\",\n        subtitle: \"Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.\"\n    },\n    {\n        imgUrl: \"/planet-07.png\",\n        title: \"7 tips to easily master the madness of the Metaverse\",\n        subtitle: \"Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum\"\n    },\n    {\n        imgUrl: \"/planet-08.png\",\n        title: \"With one platform you can explore the whole world virtually\",\n        subtitle: \"Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem\"\n    }\n];\nconst socials = [\n    {\n        name: \"twitter\",\n        url: \"/twitter.svg\"\n    },\n    {\n        name: \"linkedin\",\n        url: \"/linkedin.svg\"\n    },\n    {\n        name: \"instagram\",\n        url: \"/instagram.svg\"\n    },\n    {\n        name: \"facebook\",\n        url: \"/facebook.svg\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxnQkFBZ0I7SUFDM0I7UUFDRUMsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7Q0FDRCxDQUFDO0FBRUssTUFBTUMsbUJBQW1CO0lBQzlCO1FBQ0VILElBQUk7UUFDSkksU0FBUztRQUNUQyxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxJQUFJO1FBQ0pJLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsSUFBSTtRQUNKSSxTQUFTO1FBQ1RDLE1BQU07SUFDUjtDQUNELENBQUM7QUFFSyxNQUFNQyxjQUFjO0lBQ3pCO1FBQ0VMLFFBQVE7UUFDUkMsT0FBTztRQUNQSyxVQUNJO0lBQ047SUFDQTtRQUNFTixRQUFRO1FBQ1JDLE9BQU87UUFDUEssVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLFdBQVc7SUFDdEI7UUFDRVAsUUFBUTtRQUNSQyxPQUFPO1FBQ1BLLFVBQ0k7SUFDTjtJQUNBO1FBQ0VOLFFBQVE7UUFDUkMsT0FBTztRQUNQSyxVQUNJO0lBQ047SUFDQTtRQUNFTixRQUFRO1FBQ1JDLE9BQU87UUFDUEssVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1FLFVBQVU7SUFDckI7UUFDRUMsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLEtBQUs7SUFDUDtJQUNBO1FBQ0VELE1BQU07UUFDTkMsS0FBSztJQUNQO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7Q0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy9pbmRleC5qcz8zNzM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBleHBsb3JlV29ybGRzID0gW1xuICB7XG4gICAgaWQ6ICd3b3JsZC0xJyxcbiAgICBpbWdVcmw6ICcvZ2ltbGkuanBnJyxcbiAgICB0aXRsZTogJ1JNIG9mIEdpbWxpJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnd29ybGQtMicsXG4gICAgaW1nVXJsOiAnL2thc2xvLTAxLmpwZycsXG4gICAgdGl0bGU6ICdWaWxsYWdlIG9mIEthc2xvJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnd29ybGQtMycsXG4gICAgaW1nVXJsOiAnL2xvZGkuanBnJyxcbiAgICB0aXRsZTogJ0Jvcm91Z2ggb2YgTG9kaScsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3dvcmxkLTQnLFxuICAgIGltZ1VybDogJy90aHJlZS1oaWxscy5qcGcnLFxuICAgIHRpdGxlOiAnVG93biBvZiBUaHJlZSBIaWxscycsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3dvcmxkLTUnLFxuICAgIGltZ1VybDogJy9sZXhpbmd0b24uanBnJyxcbiAgICB0aXRsZTogJ1ZpbGxhZ2Ugb2YgTGV4aW5ndG9uJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzdGFydGluZ0ZlYXR1cmVzID0gW1xuICB7XG4gICAgaWQ6ICdqb2ItMScsXG4gICAgY29tcGFueTogJ0NBVEFMSVMnLFxuICAgIHJvbGU6ICdTb2Z0d2FyZSBEZXZlbG9wbWVudCBJbnRlcm4nLFxuICB9LFxuICB7XG4gICAgaWQ6ICdqb2ItMicsXG4gICAgY29tcGFueTogJ0NBVEFMSVMnLFxuICAgIHJvbGU6ICdGcm9udC1FbmQgRGV2ZWxvcG1lbnQgSW50ZXJuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnam9iLTMnLFxuICAgIGNvbXBhbnk6ICdNdW5pU2lnaHQnLFxuICAgIHJvbGU6ICdGcm9udC1FbmQgRGV2ZWxvcG1lbnQgSW50ZXJuJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBuZXdGZWF0dXJlcyA9IFtcbiAge1xuICAgIGltZ1VybDogJy92cnBhbm8uc3ZnJyxcbiAgICB0aXRsZTogJ0EgbmV3IHdvcmxkJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ3dlIGhhdmUgdGhlIGxhdGVzdCB1cGRhdGUgd2l0aCBuZXcgd29ybGQgZm9yIHlvdSB0byB0cnkgbmV2ZXIgbWluZCcsXG4gIH0sXG4gIHtcbiAgICBpbWdVcmw6ICcvaGVhZHNldC5zdmcnLFxuICAgIHRpdGxlOiAnTW9yZSByZWFsaXN0aWMnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnSW4gdGhlIGxhdGVzdCB1cGRhdGUsIHlvdXIgZXllcyBhcmUgbmFycm93LCBtYWtpbmcgdGhlIHdvcmxkIG1vcmUgcmVhbGlzdGljIHRoYW4gZXZlcicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgaW5zaWdodHMgPSBbXG4gIHtcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTA2LnBuZycsXG4gICAgdGl0bGU6ICdUaGUgbGF1bmNoIG9mIHRoZSBNZXRhdmVyc2UgbWFrZXMgRWxvbiBtdXNrIGtldGFyLWtldGlyJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ01hZ25hIGV0aWFtIHRlbXBvciBvcmNpIGV1IGxvYm9ydGlzIGVsZW1lbnR1bSBuaWJoIHRlbGx1cyBtb2xlc3RpZS4gRGlhbSBtYWVjZW5hcyBzZWQgZW5pbSB1dCBzZW0gdml2ZXJyYSBhbGlxdWUuJyxcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJy9wbGFuZXQtMDcucG5nJyxcbiAgICB0aXRsZTogJzcgdGlwcyB0byBlYXNpbHkgbWFzdGVyIHRoZSBtYWRuZXNzIG9mIHRoZSBNZXRhdmVyc2UnLFxuICAgIHN1YnRpdGxlOlxuICAgICAgICAnVml0YWUgY29uZ3VlIGV1IGNvbnNlcXVhdCBhYyBmZWxpcyBkb25lYy4gRXQgbWFnbmlzIGRpcyBwYXJ0dXJpZW50IG1vbnRlcyBuYXNjZXR1ciByaWRpY3VsdXMgbXVzLiBDb252YWxsaXMgdGVsbHVzIGlkIGludGVyZHVtJyxcbiAgfSxcbiAge1xuICAgIGltZ1VybDogJy9wbGFuZXQtMDgucG5nJyxcbiAgICB0aXRsZTogJ1dpdGggb25lIHBsYXRmb3JtIHlvdSBjYW4gZXhwbG9yZSB0aGUgd2hvbGUgd29ybGQgdmlydHVhbGx5JyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ1F1YW0gcXVpc3F1ZSBpZCBkaWFtIHZlbCBxdWFtIGVsZW1lbnR1bS4gVml2ZXJyYSBuYW0gbGliZXJvIGp1c3RvIGxhb3JlZXQgc2l0IGFtZXQgY3Vyc3VzIHNpdC4gTWF1cmlzIGluIGFsaXF1YW0gc2VtJyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBzb2NpYWxzID0gW1xuICB7XG4gICAgbmFtZTogJ3R3aXR0ZXInLFxuICAgIHVybDogJy90d2l0dGVyLnN2ZycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnbGlua2VkaW4nLFxuICAgIHVybDogJy9saW5rZWRpbi5zdmcnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2luc3RhZ3JhbScsXG4gICAgdXJsOiAnL2luc3RhZ3JhbS5zdmcnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2ZhY2Vib29rJyxcbiAgICB1cmw6ICcvZmFjZWJvb2suc3ZnJyxcbiAgfSxcbl07XG4iXSwibmFtZXMiOlsiZXhwbG9yZVdvcmxkcyIsImlkIiwiaW1nVXJsIiwidGl0bGUiLCJzdGFydGluZ0ZlYXR1cmVzIiwiY29tcGFueSIsInJvbGUiLCJuZXdGZWF0dXJlcyIsInN1YnRpdGxlIiwiaW5zaWdodHMiLCJzb2NpYWxzIiwibmFtZSIsInVybCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});