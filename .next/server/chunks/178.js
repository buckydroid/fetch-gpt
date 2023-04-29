"use strict";
exports.id = 178;
exports.ids = [178];
exports.modules = {

/***/ 178:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bodyFontClassName": () => (/* binding */ bodyFontClassName),
/* harmony export */   "createEmotionCache": () => (/* binding */ createEmotionCache),
/* harmony export */   "default": () => (/* binding */ MyApp),
/* harmony export */   "theme": () => (/* binding */ theme)
/* harmony export */ });
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(193);
/* harmony import */ var _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_inter___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(734);
/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_inter___WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_JetBrains_Mono_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_monospace_variableName_jetBrainsMono___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(652);
/* harmony import */ var next_font_google_target_css_path_pages_app_tsx_import_JetBrains_Mono_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_monospace_variableName_jetBrainsMono___WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_pages_app_tsx_import_JetBrains_Mono_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_monospace_variableName_jetBrainsMono___WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(913);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_emotion_cache__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_joy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(436);
/* harmony import */ var _mui_joy__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_mui_joy__WEBPACK_IMPORTED_MODULE_5__);








const theme = (0,_mui_joy__WEBPACK_IMPORTED_MODULE_5__.extendTheme)({
    fontFamily: {
        body: (next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default().style.fontFamily),
        code: (next_font_google_target_css_path_pages_app_tsx_import_JetBrains_Mono_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_monospace_variableName_jetBrainsMono___WEBPACK_IMPORTED_MODULE_7___default().style.fontFamily)
    }
});
const bodyFontClassName = (next_font_google_target_css_path_pages_app_tsx_import_Inter_arguments_weight_400_500_600_700_subsets_latin_display_swap_fallback_Helvetica_Arial_sans_serif_variableName_inter___WEBPACK_IMPORTED_MODULE_6___default().className);
// Client-side cache, shared for the whole session of the user in the browser.
const isBrowser = typeof document !== "undefined";
function createEmotionCache() {
    let insertionPoint;
    if (isBrowser) {
        // On the client side, _document.tsx has a meta tag with the name "emotion-insertion-point" at the top of the <head>.
        // This assures that MUI styles are loaded first, and allows allows developers to easily override MUI styles with other solutions like CSS modules.
        const emotionInsertionPoint = document.querySelector('meta[name="emotion-insertion-point"]');
        insertionPoint = emotionInsertionPoint ?? undefined;
    }
    return _emotion_cache__WEBPACK_IMPORTED_MODULE_3___default()({
        key: "mui-style",
        insertionPoint
    });
}
const clientSideEmotionCache = createEmotionCache();
function MyApp({ Component , emotionCache =clientSideEmotionCache , pageProps  }) {
    return /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.CacheProvider, {
        value: emotionCache,
        children: [
            /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
                children: /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "initial-scale=1, width=device-width"
                })
            }),
            /*#__PURE__*/ (0,_emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_joy__WEBPACK_IMPORTED_MODULE_5__.CssVarsProvider, {
                defaultMode: "light",
                theme: theme,
                children: [
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_joy__WEBPACK_IMPORTED_MODULE_5__.CssBaseline, {}),
                    /*#__PURE__*/ _emotion_react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                        ...pageProps
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;