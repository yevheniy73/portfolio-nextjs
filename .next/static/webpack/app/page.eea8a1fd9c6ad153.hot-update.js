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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"exploreWorlds\": function() { return /* binding */ exploreWorlds; },\n/* harmony export */   \"insights\": function() { return /* binding */ insights; },\n/* harmony export */   \"newFeatures\": function() { return /* binding */ newFeatures; },\n/* harmony export */   \"socials\": function() { return /* binding */ socials; },\n/* harmony export */   \"startingFeatures\": function() { return /* binding */ startingFeatures; }\n/* harmony export */ });\nconst exploreWorlds = [\n    {\n        id: \"world-1\",\n        imgUrl: \"/planet-1.png\",\n        title: \"RM of Gimli\"\n    },\n    {\n        id: \"world-2\",\n        imgUrl: \"/planet-02.png\",\n        title: \"Village of Kaslo\"\n    },\n    {\n        id: \"world-3\",\n        imgUrl: \"/planet-03.png\",\n        title: \"Borough of Lodi\"\n    },\n    {\n        id: \"world-4\",\n        imgUrl: \"/planet-04.png\",\n        title: \"Town of Three Hills\"\n    },\n    {\n        id: \"world-5\",\n        imgUrl: \"/planet-05.png\",\n        title: \"Village of Lexington\"\n    }\n];\nconst startingFeatures = [\n    {\n        id: \"job-1\",\n        company: \"CATALIS\",\n        role: \"Software Development Intern\"\n    },\n    {\n        id: \"job-2\",\n        company: \"CATALIS\",\n        role: \"Front-End Development Intern\"\n    },\n    {\n        id: \"job-3\",\n        company: \"MuniSight\",\n        role: \"Front-End Development Intern\"\n    }\n];\nconst newFeatures = [\n    {\n        imgUrl: \"/vrpano.svg\",\n        title: \"A new world\",\n        subtitle: \"we have the latest update with new world for you to try never mind\"\n    },\n    {\n        imgUrl: \"/headset.svg\",\n        title: \"More realistic\",\n        subtitle: \"In the latest update, your eyes are narrow, making the world more realistic than ever\"\n    }\n];\nconst insights = [\n    {\n        imgUrl: \"/planet-06.png\",\n        title: \"The launch of the Metaverse makes Elon musk ketar-ketir\",\n        subtitle: \"Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.\"\n    },\n    {\n        imgUrl: \"/planet-07.png\",\n        title: \"7 tips to easily master the madness of the Metaverse\",\n        subtitle: \"Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum\"\n    },\n    {\n        imgUrl: \"/planet-08.png\",\n        title: \"With one platform you can explore the whole world virtually\",\n        subtitle: \"Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem\"\n    }\n];\nconst socials = [\n    {\n        name: \"twitter\",\n        url: \"/twitter.svg\"\n    },\n    {\n        name: \"linkedin\",\n        url: \"/linkedin.svg\"\n    },\n    {\n        name: \"instagram\",\n        url: \"/instagram.svg\"\n    },\n    {\n        name: \"facebook\",\n        url: \"/facebook.svg\"\n    }\n];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxNQUFNQSxnQkFBZ0I7SUFDM0I7UUFDRUMsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7SUFDQTtRQUNFRixJQUFJO1FBQ0pDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0E7UUFDRUYsSUFBSTtRQUNKQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBO1FBQ0VGLElBQUk7UUFDSkMsUUFBUTtRQUNSQyxPQUFPO0lBQ1Q7Q0FDRCxDQUFDO0FBRUssTUFBTUMsbUJBQW1CO0lBQzlCO1FBQ0VILElBQUk7UUFDSkksU0FBUztRQUNUQyxNQUFNO0lBQ1I7SUFDQTtRQUNFTCxJQUFJO1FBQ0pJLFNBQVM7UUFDVEMsTUFBTTtJQUNSO0lBQ0E7UUFDRUwsSUFBSTtRQUNKSSxTQUFTO1FBQ1RDLE1BQU07SUFDUjtDQUNELENBQUM7QUFFSyxNQUFNQyxjQUFjO0lBQ3pCO1FBQ0VMLFFBQVE7UUFDUkMsT0FBTztRQUNQSyxVQUNJO0lBQ047SUFDQTtRQUNFTixRQUFRO1FBQ1JDLE9BQU87UUFDUEssVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1DLFdBQVc7SUFDdEI7UUFDRVAsUUFBUTtRQUNSQyxPQUFPO1FBQ1BLLFVBQ0k7SUFDTjtJQUNBO1FBQ0VOLFFBQVE7UUFDUkMsT0FBTztRQUNQSyxVQUNJO0lBQ047SUFDQTtRQUNFTixRQUFRO1FBQ1JDLE9BQU87UUFDUEssVUFDSTtJQUNOO0NBQ0QsQ0FBQztBQUVLLE1BQU1FLFVBQVU7SUFDckI7UUFDRUMsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7SUFDQTtRQUNFRCxNQUFNO1FBQ05DLEtBQUs7SUFDUDtJQUNBO1FBQ0VELE1BQU07UUFDTkMsS0FBSztJQUNQO0lBQ0E7UUFDRUQsTUFBTTtRQUNOQyxLQUFLO0lBQ1A7Q0FDRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnN0YW50cy9pbmRleC5qcz8zNzM3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBleHBsb3JlV29ybGRzID0gW1xuICB7XG4gICAgaWQ6ICd3b3JsZC0xJyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTEucG5nJyxcbiAgICB0aXRsZTogJ1JNIG9mIEdpbWxpJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnd29ybGQtMicsXG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wMi5wbmcnLFxuICAgIHRpdGxlOiAnVmlsbGFnZSBvZiBLYXNsbycsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3dvcmxkLTMnLFxuICAgIGltZ1VybDogJy9wbGFuZXQtMDMucG5nJyxcbiAgICB0aXRsZTogJ0Jvcm91Z2ggb2YgTG9kaScsXG4gIH0sXG4gIHtcbiAgICBpZDogJ3dvcmxkLTQnLFxuICAgIGltZ1VybDogJy9wbGFuZXQtMDQucG5nJyxcbiAgICB0aXRsZTogJ1Rvd24gb2YgVGhyZWUgSGlsbHMnLFxuICB9LFxuICB7XG4gICAgaWQ6ICd3b3JsZC01JyxcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTA1LnBuZycsXG4gICAgdGl0bGU6ICdWaWxsYWdlIG9mIExleGluZ3RvbicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc3RhcnRpbmdGZWF0dXJlcyA9IFtcbiAge1xuICAgIGlkOiAnam9iLTEnLFxuICAgIGNvbXBhbnk6ICdDQVRBTElTJyxcbiAgICByb2xlOiAnU29mdHdhcmUgRGV2ZWxvcG1lbnQgSW50ZXJuJyxcbiAgfSxcbiAge1xuICAgIGlkOiAnam9iLTInLFxuICAgIGNvbXBhbnk6ICdDQVRBTElTJyxcbiAgICByb2xlOiAnRnJvbnQtRW5kIERldmVsb3BtZW50IEludGVybicsXG4gIH0sXG4gIHtcbiAgICBpZDogJ2pvYi0zJyxcbiAgICBjb21wYW55OiAnTXVuaVNpZ2h0JyxcbiAgICByb2xlOiAnRnJvbnQtRW5kIERldmVsb3BtZW50IEludGVybicsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgbmV3RmVhdHVyZXMgPSBbXG4gIHtcbiAgICBpbWdVcmw6ICcvdnJwYW5vLnN2ZycsXG4gICAgdGl0bGU6ICdBIG5ldyB3b3JsZCcsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICd3ZSBoYXZlIHRoZSBsYXRlc3QgdXBkYXRlIHdpdGggbmV3IHdvcmxkIGZvciB5b3UgdG8gdHJ5IG5ldmVyIG1pbmQnLFxuICB9LFxuICB7XG4gICAgaW1nVXJsOiAnL2hlYWRzZXQuc3ZnJyxcbiAgICB0aXRsZTogJ01vcmUgcmVhbGlzdGljJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ0luIHRoZSBsYXRlc3QgdXBkYXRlLCB5b3VyIGV5ZXMgYXJlIG5hcnJvdywgbWFraW5nIHRoZSB3b3JsZCBtb3JlIHJlYWxpc3RpYyB0aGFuIGV2ZXInLFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGluc2lnaHRzID0gW1xuICB7XG4gICAgaW1nVXJsOiAnL3BsYW5ldC0wNi5wbmcnLFxuICAgIHRpdGxlOiAnVGhlIGxhdW5jaCBvZiB0aGUgTWV0YXZlcnNlIG1ha2VzIEVsb24gbXVzayBrZXRhci1rZXRpcicsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdNYWduYSBldGlhbSB0ZW1wb3Igb3JjaSBldSBsb2JvcnRpcyBlbGVtZW50dW0gbmliaCB0ZWxsdXMgbW9sZXN0aWUuIERpYW0gbWFlY2VuYXMgc2VkIGVuaW0gdXQgc2VtIHZpdmVycmEgYWxpcXVlLicsXG4gIH0sXG4gIHtcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTA3LnBuZycsXG4gICAgdGl0bGU6ICc3IHRpcHMgdG8gZWFzaWx5IG1hc3RlciB0aGUgbWFkbmVzcyBvZiB0aGUgTWV0YXZlcnNlJyxcbiAgICBzdWJ0aXRsZTpcbiAgICAgICAgJ1ZpdGFlIGNvbmd1ZSBldSBjb25zZXF1YXQgYWMgZmVsaXMgZG9uZWMuIEV0IG1hZ25pcyBkaXMgcGFydHVyaWVudCBtb250ZXMgbmFzY2V0dXIgcmlkaWN1bHVzIG11cy4gQ29udmFsbGlzIHRlbGx1cyBpZCBpbnRlcmR1bScsXG4gIH0sXG4gIHtcbiAgICBpbWdVcmw6ICcvcGxhbmV0LTA4LnBuZycsXG4gICAgdGl0bGU6ICdXaXRoIG9uZSBwbGF0Zm9ybSB5b3UgY2FuIGV4cGxvcmUgdGhlIHdob2xlIHdvcmxkIHZpcnR1YWxseScsXG4gICAgc3VidGl0bGU6XG4gICAgICAgICdRdWFtIHF1aXNxdWUgaWQgZGlhbSB2ZWwgcXVhbSBlbGVtZW50dW0uIFZpdmVycmEgbmFtIGxpYmVybyBqdXN0byBsYW9yZWV0IHNpdCBhbWV0IGN1cnN1cyBzaXQuIE1hdXJpcyBpbiBhbGlxdWFtIHNlbScsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3Qgc29jaWFscyA9IFtcbiAge1xuICAgIG5hbWU6ICd0d2l0dGVyJyxcbiAgICB1cmw6ICcvdHdpdHRlci5zdmcnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2xpbmtlZGluJyxcbiAgICB1cmw6ICcvbGlua2VkaW4uc3ZnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdpbnN0YWdyYW0nLFxuICAgIHVybDogJy9pbnN0YWdyYW0uc3ZnJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdmYWNlYm9vaycsXG4gICAgdXJsOiAnL2ZhY2Vib29rLnN2ZycsXG4gIH0sXG5dO1xuIl0sIm5hbWVzIjpbImV4cGxvcmVXb3JsZHMiLCJpZCIsImltZ1VybCIsInRpdGxlIiwic3RhcnRpbmdGZWF0dXJlcyIsImNvbXBhbnkiLCJyb2xlIiwibmV3RmVhdHVyZXMiLCJzdWJ0aXRsZSIsImluc2lnaHRzIiwic29jaWFscyIsIm5hbWUiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/index.js\n"));

/***/ })

});