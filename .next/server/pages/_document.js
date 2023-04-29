"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyDocument)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(859);
;// CONCATENATED MODULE: external "@emotion/server/create-instance"
const create_instance_namespaceObject = require("@emotion/server/create-instance");
var create_instance_default = /*#__PURE__*/__webpack_require__.n(create_instance_namespaceObject);
;// CONCATENATED MODULE: external "@mui/joy/styles"
const styles_namespaceObject = require("@mui/joy/styles");
// EXTERNAL MODULE: ./pages/_app.tsx
var _app = __webpack_require__(178);
;// CONCATENATED MODULE: ./pages/_document.tsx






function MyDocument({ emotionStyleTags  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
        lang: "en",
        className: _app.bodyFontClassName,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "theme-color",
                        content: "#000000"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "https://pbs.twimg.com/profile_images/1652308062202658816/pUGzlhNm_400x400.jpg"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "emotion-insertion-point",
                        content: ""
                    }),
                    emotionStyleTags
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                children: [
                    (0,styles_namespaceObject.getInitColorSchemeScript)(),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {})
                ]
            })
        ]
    });
}
// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx)=>{
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render
    const originalRenderPage = ctx.renderPage;
    // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = (0,_app.createEmotionCache)();
    const { extractCriticalToChunks  } = create_instance_default()(cache);
    ctx.renderPage = ()=>originalRenderPage({
            enhanceApp: (App)=>function EnhanceApp(props) {
                    return /*#__PURE__*/ jsx_runtime_.jsx(App, {
                        emotionCache: cache,
                        ...props
                    });
                }
        });
    const initialProps = await next_document["default"].getInitialProps(ctx);
    // This is important. It prevents Emotion to render invalid HTML.
    // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style)=>/*#__PURE__*/ jsx_runtime_.jsx("style", {
            "data-emotion": `${style.key} ${style.ids.join(" ")}`,
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML: {
                __html: style.css
            }
        }, style.key));
    return {
        ...initialProps,
        emotionStyleTags
    };
};


/***/ }),

/***/ 913:
/***/ ((module) => {

module.exports = require("@emotion/cache");

/***/ }),

/***/ 805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 193:
/***/ ((module) => {

module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 436:
/***/ ((module) => {

module.exports = require("@mui/joy");

/***/ }),

/***/ 140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [768,178], () => (__webpack_exec__(563)));
module.exports = __webpack_exports__;

})();