(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/tech-blog/app/_css/home.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "top_container": "home-module__qPJSrW__top_container",
});
}),
"[project]/packages/header-type-a/src/css/header_typeA.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "NavigationGroup": "header_typeA-module__dpvu-q__NavigationGroup",
  "NavigationGroup-items-item": "header_typeA-module__dpvu-q__NavigationGroup-items-item",
  "NavigationGroup_items": "header_typeA-module__dpvu-q__NavigationGroup_items",
  "NavigationGroup_items_item": "header_typeA-module__dpvu-q__NavigationGroup_items_item",
  "NavigationItem": "header_typeA-module__dpvu-q__NavigationItem",
  "NavigationItem_items": "header_typeA-module__dpvu-q__NavigationItem_items",
  "NavigationItem_items_item": "header_typeA-module__dpvu-q__NavigationItem_items_item",
  "NavigationItem_more": "header_typeA-module__dpvu-q__NavigationItem_more",
  "NavigationItem_text": "header_typeA-module__dpvu-q__NavigationItem_text",
  "NavigationItem_text_link": "header_typeA-module__dpvu-q__NavigationItem_text_link",
  "NavigationLink": "header_typeA-module__dpvu-q__NavigationLink",
  "NavigationLink_icon": "header_typeA-module__dpvu-q__NavigationLink_icon",
  "burger_menu_icon": "header_typeA-module__dpvu-q__burger_menu_icon",
  "close_menu_icon": "header_typeA-module__dpvu-q__close_menu_icon",
  "combinator_header_hamburger": "header_typeA-module__dpvu-q__combinator_header_hamburger",
  "flex_container": "header_typeA-module__dpvu-q__flex_container",
  "hamburger_menu_trigger": "header_typeA-module__dpvu-q__hamburger_menu_trigger",
  "hamburger_outer_box": "header_typeA-module__dpvu-q__hamburger_outer_box",
  "header-hidden": "header_typeA-module__dpvu-q__header-hidden",
  "header_logo": "header_typeA-module__dpvu-q__header_logo",
  "header_navigator": "header_typeA-module__dpvu-q__header_navigator",
  "header_navigator_item": "header_typeA-module__dpvu-q__header_navigator_item",
  "inner_box": "header_typeA-module__dpvu-q__inner_box",
  "open": "header_typeA-module__dpvu-q__open",
  "outer_box": "header_typeA-module__dpvu-q__outer_box",
});
}),
"[project]/packages/header-type-a/src/customHooks/useSmartHeader.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
;
var SCROLL_THRESHOLD = 0;
function useSmartHeader() {
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isHidden = _useState[0], setIsHidden = _useState[1];
    var lastScrollY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    var headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSmartHeader.useEffect": function() {
            var headerHeight = headerRef.current ? headerRef.current.offsetHeight : 70;
            // header-height variable value setting
            if (headerRef.current) {
                headerRef.current.style.setProperty('--header-height', "".concat(headerHeight, "px"));
            }
            var handleScroll = function handleScroll() {
                var currentScrollY = window.scrollY;
                // --- SCROLL DOWN LOGIC ---
                // If scrolling down AND past the header height, hide it.
                if (currentScrollY > lastScrollY.current && currentScrollY > headerHeight) {
                    if (!isHidden) {
                        setIsHidden(true);
                    }
                } else if (currentScrollY < lastScrollY.current - SCROLL_THRESHOLD) {
                    if (isHidden) {
                        setIsHidden(false);
                    }
                }
                lastScrollY.current = currentScrollY;
            };
            window.addEventListener('scroll', handleScroll);
            return ({
                "useSmartHeader.useEffect": function() {
                    window.removeEventListener('scroll', handleScroll);
                }
            })["useSmartHeader.useEffect"];
        }
    }["useSmartHeader.useEffect"], [
        isHidden
    ]);
    return {
        isHidden: isHidden,
        headerRef: headerRef
    };
}
_s(useSmartHeader, "sfrwC5H17UiMRrJyuqzluUfXzMk=");
const __TURBOPACK__default__export__ = useSmartHeader;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/header-type-a/src/css/hamburger.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "Navigation": "hamburger-module___FdKmG__Navigation",
  "NavigationBackLink": "hamburger-module___FdKmG__NavigationBackLink",
  "NavigationGroup": "hamburger-module___FdKmG__NavigationGroup",
  "NavigationGroup_items": "hamburger-module___FdKmG__NavigationGroup_items",
  "NavigationGroup_items_item": "hamburger-module___FdKmG__NavigationGroup_items_item",
  "NavigationItem": "hamburger-module___FdKmG__NavigationItem",
  "NavigationItem_items": "hamburger-module___FdKmG__NavigationItem_items",
  "NavigationItem_items_item": "hamburger-module___FdKmG__NavigationItem_items_item",
  "NavigationItem_more": "hamburger-module___FdKmG__NavigationItem_more",
  "NavigationItem_text": "hamburger-module___FdKmG__NavigationItem_text",
  "NavigationLink": "hamburger-module___FdKmG__NavigationLink",
  "NavigationLink_icon": "hamburger-module___FdKmG__NavigationLink_icon",
  "Navigation_items": "hamburger-module___FdKmG__Navigation_items",
  "Navigation_items_item": "hamburger-module___FdKmG__Navigation_items_item",
  "Page_header_hamburger_menu": "hamburger-module___FdKmG__Page_header_hamburger_menu",
  "Page_header_hamburger_menu_content": "hamburger-module___FdKmG__Page_header_hamburger_menu_content",
  "Page_header_socialBar": "hamburger-module___FdKmG__Page_header_socialBar",
  "SocialBar": "hamburger-module___FdKmG__SocialBar",
  "SocialBar_heading": "hamburger-module___FdKmG__SocialBar_heading",
  "SocialBar_items": "hamburger-module___FdKmG__SocialBar_items",
  "SocialBar_items_item": "hamburger-module___FdKmG__SocialBar_items_item",
  "SocialLink": "hamburger-module___FdKmG__SocialLink",
  "hamburger_hidden": "hamburger-module___FdKmG__hamburger_hidden",
  "hamburger_navigatior": "hamburger-module___FdKmG__hamburger_navigatior",
  "hamburger_navigatior_item": "hamburger-module___FdKmG__hamburger_navigatior_item",
  "hamburger_navigator_text": "hamburger-module___FdKmG__hamburger_navigator_text",
  "hamburger_outer_box": "hamburger-module___FdKmG__hamburger_outer_box",
  "sr_only": "hamburger-module___FdKmG__sr_only",
  "submenuOpened": "hamburger-module___FdKmG__submenuOpened",
});
}),
"[project]/packages/header-type-a/src/components/Hamburger.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/header-type-a/src/css/hamburger.module.css [app-client] (css module)");
;
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Hamburger(param) {
    var _this = this;
    var menuItems = param.menuItems, subMenuItems = param.subMenuItems, socialItems = param.socialItems, subTitles = param.subTitles, isMenuOpen = param.isMenuOpen;
    _s();
    var hamburgerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Hamburger.useEffect": function() {
            if (hamburgerRef.current) {
                hamburgerRef.current.style.setProperty('--hamburger-width', "".concat(hamburgerRef.current.offsetWidth, "px"));
            }
        }
    }["Hamburger.useEffect"], [
        isMenuOpen
    ]);
    var hamburgerClass = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Page_header_hamburger_menu;
    if (!isMenuOpen) {
        hamburgerClass = "".concat(hamburgerClass, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburger_hidden);
    }
    // 몇 번째 하위 메뉴가 열렸는지
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null), 2), openIndex = _useState[0], setOpenIndex = _useState[1];
    var toggleMenu = function toggleMenu(index) {
        setOpenIndex(openIndex === index ? null : index);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: hamburgerRef,
        className: hamburgerClass,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Page_header_hamburger_menu_wrapper,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Page_header_hamburger_menu_content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Navigation,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Navigation_items,
                            children: menuItems.map(function(item, index) {
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Navigation_items_item,
                                    children: subMenuItems[index] != null ? // 하위 메뉴가 있으면
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: index === openIndex ? "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].submenuOpened, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem) : __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_text,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_text_link,
                                                        href: "#",
                                                        children: item
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                        lineNumber: 41,
                                                        columnNumber: 25
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_more,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: function onClick() {
                                                                return toggleMenu(index);
                                                            },
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                id: "chevron-right",
                                                                viewBox: "0 0 10 10",
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M2.21339 1.27619C1.92497 0.985111 1.92497 0.515512 2.21339 0.224432C2.50555 -0.0701113 2.98183 -0.0702133 3.27393 0.224432L8.0005 4.99396L7.99464 5.0008L8.0005 5.00568L3.27393 9.77521C2.98177 10.0701 2.50558 10.07 2.21339 9.77521C1.92497 9.48414 1.92497 9.01551 2.21339 8.72443L5.90284 5.0008L2.21339 1.27619Z"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                    lineNumber: 50,
                                                                    columnNumber: 31
                                                                }, _this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                lineNumber: 49,
                                                                columnNumber: 29
                                                            }, _this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                            lineNumber: 48,
                                                            columnNumber: 27
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                        lineNumber: 47,
                                                        columnNumber: 25
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                lineNumber: 40,
                                                columnNumber: 23
                                            }, _this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_items,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_items_item,
                                                        "data-back-link": true,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationBackLink,
                                                            onClick: function onClick() {
                                                                return toggleMenu(index);
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    id: "chevron-left",
                                                                    viewBox: "0 0 10 18",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M9.7214 17.7246C9.34994 18.0918 8.74767 18.0918 8.37621 17.7246L0.278598 9.71952C-0.0928661 9.3523 -0.0928661 8.75692 0.278598 8.3897C0.650063 8.02248 1.25233 8.02248 1.62379 8.3897L9.7214 16.3948C10.0929 16.762 10.0929 17.3574 9.7214 17.7246Z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                            lineNumber: 65,
                                                                            columnNumber: 31
                                                                        }, _this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                            d: "M9.7214 0.275414C9.34994 -0.0918045 8.74767 -0.0918045 8.37621 0.275414L0.278598 8.28048C-0.0928661 8.6477 -0.0928661 9.24308 0.278598 9.6103C0.650063 9.97752 1.25233 9.97752 1.62379 9.6103L9.7214 1.60523C10.0929 1.23801 10.0929 0.642633 9.7214 0.275414Z"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                            lineNumber: 66,
                                                                            columnNumber: 31
                                                                        }, _this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                    lineNumber: 64,
                                                                    columnNumber: 29
                                                                }, _this),
                                                                item
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                            lineNumber: 60,
                                                            columnNumber: 27
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                        lineNumber: 58,
                                                        columnNumber: 25
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_items_item,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationGroup,
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationLink,
                                                                    children: subTitles[index]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                    lineNumber: 76,
                                                                    columnNumber: 29
                                                                }, _this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationGroup_items,
                                                                    children: subMenuItems[index].map(function(subItem, subIndex) {
                                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationGroup_items_item,
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationLink,
                                                                                href: "/".concat(item, "/").concat(subItem.title),
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationLink_icon,
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image,
                                                                                                dataimagesize: "smallIcon",
                                                                                                alt: "".concat(subItem.title, "_icon"),
                                                                                                src: subItem.icon
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                                                lineNumber: 90,
                                                                                                columnNumber: 41
                                                                                            }, _this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                                            lineNumber: 89,
                                                                                            columnNumber: 39
                                                                                        }, _this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                                        lineNumber: 88,
                                                                                        columnNumber: 37
                                                                                    }, _this),
                                                                                    subItem.title
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                                lineNumber: 84,
                                                                                columnNumber: 35
                                                                            }, _this)
                                                                        }, subIndex, false, {
                                                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                            lineNumber: 82,
                                                                            columnNumber: 33
                                                                        }, _this);
                                                                    })
                                                                }, void 0, false, {
                                                                    fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                                    lineNumber: 79,
                                                                    columnNumber: 29
                                                                }, _this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                            lineNumber: 74,
                                                            columnNumber: 27
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                        lineNumber: 72,
                                                        columnNumber: 25
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                lineNumber: 56,
                                                columnNumber: 23
                                            }, _this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                        lineNumber: 38,
                                        columnNumber: 21
                                    }, _this) : // 하위메뉴가 없으면
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_text,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_text_link,
                                                href: "/".concat(item),
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                lineNumber: 106,
                                                columnNumber: 25
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                            lineNumber: 105,
                                            columnNumber: 23
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                        lineNumber: 104,
                                        columnNumber: 21
                                    }, _this)
                                }, item, false, {
                                    fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                    lineNumber: 34,
                                    columnNumber: 17
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                            lineNumber: 32,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                        lineNumber: 31,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Page_header_socialBar,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].SocialBar,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].SocialBar_heading,
                                    children: "Social"
                                }, void 0, false, {
                                    fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].SocialBar_items,
                                    children: socialItems.map(function(item, index) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].SocialBar_items_item,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].SocialLink,
                                                href: item.url,
                                                children: [
                                                    item.svg,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$hamburger$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sr_only,
                                                        children: item.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                        lineNumber: 129,
                                                        columnNumber: 23
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                                lineNumber: 127,
                                                columnNumber: 21
                                            }, _this)
                                        }, item.id, false, {
                                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, _this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                            lineNumber: 120,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
                lineNumber: 29,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/packages/header-type-a/src/components/Hamburger.js",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Hamburger, "wxEPZXmE2H+O4LdJ6XsKCe5CAm4=");
_c = Hamburger;
const __TURBOPACK__default__export__ = Hamburger;
var _c;
__turbopack_context__.k.register(_c, "Hamburger");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/header-type-a/src/Header_typeA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/header-type-a/src/css/header_typeA.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$customHooks$2f$useSmartHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/header-type-a/src/customHooks/useSmartHeader.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$components$2f$Hamburger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/header-type-a/src/components/Hamburger.js [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function Header_typeA(param) {
    var _this = this;
    var logoImg = param.logoImg, menuItems = param.menuItems, subMenuItems = param.subMenuItems, subTitles = param.subTitles, socialItems = param.socialItems;
    _s();
    /* [Hamburger Menu] */ var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isMenuOpen = _useState[0], setIsMenuOpen = _useState[1];
    var toggleMenu = function toggleMenu() {
        setIsMenuOpen(!isMenuOpen);
    };
    /* [Smart Header System] */ var _useSmartHeader = (0, __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$customHooks$2f$useSmartHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(), isHidden = _useSmartHeader.isHidden, headerRef = _useSmartHeader.headerRef;
    var headerClass = __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].outer_box;
    if (isHidden) {
        headerClass = "".concat(headerClass, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["header-hidden"]);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: headerRef,
        className: headerClass,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].inner_box,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flex_container,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hamburger_menu_trigger, " ").concat(isMenuOpen ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].open : ''),
                            onClick: toggleMenu,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].burger_menu_icon,
                                    viewBox: "0 0 24 24",
                                    width: "24",
                                    height: "24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].close_menu_icon,
                                    viewBox: "0 0 24 24",
                                    width: "24",
                                    height: "24",
                                    "aria-hidden": "true",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                        lineNumber: 45,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                    lineNumber: 38,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header_logo,
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logoImg,
                                alt: "seans' tech blog"
                            }, void 0, false, {
                                fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header_navigator,
                            children: menuItems.map(function(item, index) {
                                // 하위 메뉴가 있을 때
                                if (subMenuItems[index] != null) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_text,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_text_link,
                                                    children: item
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                    lineNumber: 65,
                                                    columnNumber: 23
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_more,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            id: "chevron_nav_dropdown",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            viewBox: "0 0 8 8",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M6.97951 1.7706C7.21235 1.53988 7.58746 1.53993 7.82033 1.7706C8.05623 2.00435 8.05623 2.38548 7.82033 2.61923L4.0049 6.40048L4.00001 6.3956L3.99611 6.40048L0.179702 2.61923C-0.0560031 2.38552 -0.055986 2.00431 0.179702 1.7706C0.412507 1.53992 0.787647 1.54003 1.02052 1.7706L4.00001 4.72177L6.97951 1.7706Z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                                lineNumber: 71,
                                                                columnNumber: 29
                                                            }, _this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                            lineNumber: 70,
                                                            columnNumber: 27
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                        lineNumber: 69,
                                                        columnNumber: 25
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                    lineNumber: 68,
                                                    columnNumber: 23
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                            lineNumber: 64,
                                            columnNumber: 21
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_items,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_items_item,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationGroup,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationLink,
                                                            children: subTitles[index]
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                            lineNumber: 81,
                                                            columnNumber: 27
                                                        }, _this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationGroup_items,
                                                            children: subMenuItems[index].map(function(subItem, subIndex) {
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationGroup_items_item,
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationLink,
                                                                        href: "/".concat(item, "/").concat(subItem.title),
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationLink_icon,
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image,
                                                                                        dataimagesize: "smallIcon",
                                                                                        alt: "".concat(subItem.title, "_icon"),
                                                                                        src: subItem.icon
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                                                        lineNumber: 93,
                                                                                        columnNumber: 39
                                                                                    }, _this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                                                    lineNumber: 92,
                                                                                    columnNumber: 37
                                                                                }, _this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                                                lineNumber: 91,
                                                                                columnNumber: 35
                                                                            }, _this),
                                                                            subItem.title
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                                        lineNumber: 87,
                                                                        columnNumber: 33
                                                                    }, _this)
                                                                }, subItem.id, false, {
                                                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                                    lineNumber: 86,
                                                                    columnNumber: 31
                                                                }, _this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                            lineNumber: 84,
                                                            columnNumber: 27
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                    lineNumber: 79,
                                                    columnNumber: 25
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                                lineNumber: 78,
                                                columnNumber: 23
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                            lineNumber: 77,
                                            columnNumber: 21
                                        }, _this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                    lineNumber: 63,
                                    columnNumber: 19
                                }, _this);
                                else return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_text,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$css$2f$header_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_text_link,
                                            href: "/".concat(item),
                                            children: item
                                        }, index, false, {
                                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                            lineNumber: 110,
                                            columnNumber: 23
                                        }, _this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                        lineNumber: 109,
                                        columnNumber: 21
                                    }, _this)
                                }, index, false, {
                                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                                    lineNumber: 108,
                                    columnNumber: 19
                                }, _this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$components$2f$Hamburger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                menuItems: menuItems,
                subMenuItems: subMenuItems,
                socialItems: socialItems,
                subTitles: subTitles,
                isMenuOpen: isMenuOpen
            }, void 0, false, {
                fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
                lineNumber: 125,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/header-type-a/src/Header_typeA.js",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(Header_typeA, "ExkiJoeA/51M+46aAcPAJkwUWgc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$customHooks$2f$useSmartHeader$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = Header_typeA;
const __TURBOPACK__default__export__ = Header_typeA;
var _c;
__turbopack_context__.k.register(_c, "Header_typeA");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/header-type-a/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$Header_typeA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/header-type-a/src/Header_typeA.js [app-client] (ecmascript)");
;
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/hero-slide/src/css/heroslide_typeA.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bg_image": "heroslide_typeA-module__60Hyyq__bg_image",
  "description_area": "heroslide_typeA-module__60Hyyq__description_area",
  "description_content": "heroslide_typeA-module__60Hyyq__description_content",
  "description_content_area": "heroslide_typeA-module__60Hyyq__description_content_area",
  "details": "heroslide_typeA-module__60Hyyq__details",
  "hero_container": "heroslide_typeA-module__60Hyyq__hero_container",
  "hero_layer1": "heroslide_typeA-module__60Hyyq__hero_layer1",
  "hero_layer2": "heroslide_typeA-module__60Hyyq__hero_layer2",
  "hero_layer2_content_wrapper": "heroslide_typeA-module__60Hyyq__hero_layer2_content_wrapper",
  "navigation_area": "heroslide_typeA-module__60Hyyq__navigation_area",
  "navigation_flex_box": "heroslide_typeA-module__60Hyyq__navigation_flex_box",
  "navigation_item_box": "heroslide_typeA-module__60Hyyq__navigation_item_box",
  "navigation_slider": "heroslide_typeA-module__60Hyyq__navigation_slider",
  "navigation_title": "heroslide_typeA-module__60Hyyq__navigation_title",
  "play_pause": "heroslide_typeA-module__60Hyyq__play_pause",
  "progress_bar": "heroslide_typeA-module__60Hyyq__progress_bar",
  "readmore": "heroslide_typeA-module__60Hyyq__readmore",
  "title": "heroslide_typeA-module__60Hyyq__title",
});
}),
"[project]/packages/hero-slide/src/Heroslide_typeA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/hero-slide/src/css/heroslide_typeA.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
;
;
;
function Heroslide_typeA(param) {
    var _this = this;
    var _param_data = param.data, data = _param_data === void 0 ? [] : _param_data;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), currentIndex = _useState[0], setCurrentIndex = _useState[1];
    var currentSlide = data[currentIndex];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true), 2), isPlaying = _useState1[0], setIsPlaying = _useState1[1]; // 재생/일시정지 상태 관리
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), progress = _useState2[0], setProgress = _useState2[1]; // 0 ~ 100 퍼센트 상태 관리
    // -------------------------------------------------------
    // 1. 타이머 로직: 단순히 progress 숫자만 올림 (순수 로직)
    // -------------------------------------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Heroslide_typeA.useEffect": function() {
            var interval;
            if (isPlaying && data.length > 0) {
                interval = setInterval({
                    "Heroslide_typeA.useEffect": function() {
                        // 여기서는 오직 progress만 증가시킵니다. (다른 state 건드리지 않음)
                        setProgress({
                            "Heroslide_typeA.useEffect": function(prev) {
                                return prev + 100 / (6000 / 10);
                            }
                        }["Heroslide_typeA.useEffect"]);
                    }
                }["Heroslide_typeA.useEffect"], 10);
            }
            return ({
                "Heroslide_typeA.useEffect": function() {
                    return clearInterval(interval);
                }
            })["Heroslide_typeA.useEffect"];
        }
    }["Heroslide_typeA.useEffect"], [
        isPlaying,
        data.length
    ]);
    // -------------------------------------------------------
    // 2. 감시자 로직: progress가 100이 되면 슬라이드 넘김
    // -------------------------------------------------------
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Heroslide_typeA.useEffect": function() {
            if (progress >= 100) {
                // 1. 슬라이드 넘기기
                setCurrentIndex({
                    "Heroslide_typeA.useEffect": function(prevIndex) {
                        return prevIndex === data.length - 1 ? 0 : prevIndex + 1;
                    }
                }["Heroslide_typeA.useEffect"]);
                // 2. 게이지 초기화
                setProgress(0);
            }
        }
    }["Heroslide_typeA.useEffect"], [
        progress,
        data.length
    ]); // progress가 변할 때마다 검사
    // -------------------------------------------------------
    // 3. 수동 조작 핸들러
    // -------------------------------------------------------
    var handleSlideClick = function handleSlideClick(index) {
        setCurrentIndex(index);
        setProgress(0); // 사용자가 직접 누르면 게이지 0부터 다시 시작
    // 사용자 클릭 시 일시정지를 풀고 싶다면 setIsPlaying(true) 추가
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero_container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero_layer1,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: currentSlide.thumbnail,
                    alt: currentSlide.title,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bg_image
                }, void 0, false, {
                    fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero_layer2,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].hero_layer2_content_wrapper,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description_area,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description_content_area,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].description_content,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].title,
                                            children: currentSlide.title
                                        }, void 0, false, {
                                            fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                            lineNumber: 68,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].details,
                                            children: currentSlide.subTitle
                                        }, void 0, false, {
                                            fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                            lineNumber: 69,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readmore_area,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].readmore,
                                                href: "/post/".concat(currentSlide.title),
                                                children: "Read more"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                                lineNumber: 71,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                            lineNumber: 70,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                    lineNumber: 67,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                lineNumber: 66,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigation_area,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigation_flex_box,
                                children: [
                                    data.map(function(item, index) {
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigation_item_box,
                                            onClick: function onClick() {
                                                return handleSlideClick(index);
                                            },
                                            // (선택) 현재 활성화된 슬라이드면 스타일 다르게 주기
                                            style: {
                                                opacity: index === currentIndex ? 1 : 0.5,
                                                cursor: 'pointer'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigation_slider,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].progress_bar,
                                                        style: {
                                                            width: index === currentIndex ? "".concat(progress, "%") : '0%'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                                        lineNumber: 94,
                                                        columnNumber: 21
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                                    lineNumber: 92,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].navigation_title,
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                                    lineNumber: 101,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, item.id, true, {
                                            fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                            lineNumber: 85,
                                            columnNumber: 17
                                        }, _this);
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$css$2f$heroslide_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].play_pause,
                                        onClick: function onClick() {
                                            return setIsPlaying(!isPlaying);
                                        },
                                        children: isPlaying ? // 일시정지 아이콘 (현재 재생 중일 때 보임)
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            id: "nav-pause",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 16 16",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M13.5 3V13C13.5 13.2652 13.3946 13.5196 13.2071 13.7071C13.0196 13.8946 12.7652 14 12.5 14H10C9.73478 14 9.48043 13.8946 9.29289 13.7071C9.10536 13.5196 9 13.2652 9 13V3C9 2.73478 9.10536 2.48043 9.29289 2.29289C9.48043 2.10536 9.73478 2 10 2H12.5C12.7652 2 13.0196 2.10536 13.2071 2.29289C13.3946 2.48043 13.5 2.73478 13.5 3ZM6 2H3.5C3.23478 2 2.98043 2.10536 2.79289 2.29289C2.60536 2.48043 2.5 2.73478 2.5 3V13C2.5 13.2652 2.60536 13.5196 2.79289 13.7071C2.98043 13.8946 3.23478 14 3.5 14H6C6.26522 14 6.51957 13.8946 6.70711 13.7071C6.89464 13.5196 7 13.2652 7 13V3C7 2.73478 6.89464 2.48043 6.70711 2.29289C6.51957 2.10536 6.26522 2 6 2Z"
                                            }, void 0, false, {
                                                fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                                lineNumber: 111,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                            lineNumber: 110,
                                            columnNumber: 19
                                        }, this) : // 재생 아이콘 (현재 멈춤 상태일 때 보임)
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            id: "nav-play",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M22.5 12C22.5006 12.2546 22.4353 12.5051 22.3105 12.727C22.1856 12.949 22.0055 13.1348 21.7875 13.2665L8.28 21.5297C8.05227 21.6691 7.79144 21.7452 7.52445 21.7502C7.25746 21.7551 6.99399 21.6887 6.76125 21.5578C6.53073 21.4289 6.3387 21.2409 6.2049 21.0132C6.07111 20.7855 6.00039 20.5263 6 20.2622V3.73779C6.00039 3.47368 6.07111 3.21445 6.2049 2.98673C6.3387 2.75902 6.53073 2.57106 6.76125 2.44217C6.99399 2.31124 7.25746 2.24482 7.52445 2.24977C7.79144 2.25471 8.05227 2.33084 8.28 2.47029L21.7875 10.7334C22.0055 10.8651 22.1856 11.051 22.3105 11.2729C22.4353 11.4949 22.5006 11.7453 22.5 12Z"
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                                    lineNumber: 117,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                                lineNumber: 116,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                            lineNumber: 115,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                        lineNumber: 104,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                            lineNumber: 82,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/hero-slide/src/Heroslide_typeA.js",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_s(Heroslide_typeA, "ifaQXQ7K3kFpGeN7We3/YrTlevk=");
_c = Heroslide_typeA;
const __TURBOPACK__default__export__ = Heroslide_typeA;
var _c;
__turbopack_context__.k.register(_c, "Heroslide_typeA");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/hero-slide/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$Heroslide_typeA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/hero-slide/src/Heroslide_typeA.js [app-client] (ecmascript)");
;
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/research-area/src/css/section_typeA.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "ResearchAreaCard": "section_typeA-module__T6kVka__ResearchAreaCard",
  "ResearchAreaCard_content": "section_typeA-module__T6kVka__ResearchAreaCard_content",
  "ResearchAreaCard_link": "section_typeA-module__T6kVka__ResearchAreaCard_link",
  "ResearchAreaCard_media": "section_typeA-module__T6kVka__ResearchAreaCard_media",
  "ResearchAreaCard_title": "section_typeA-module__T6kVka__ResearchAreaCard_title",
  "ResearchArea_header": "section_typeA-module__T6kVka__ResearchArea_header",
  "ResearchArea_header_wrapper": "section_typeA-module__T6kVka__ResearchArea_header_wrapper",
  "flickity_group": "section_typeA-module__T6kVka__flickity_group",
  "top_container": "section_typeA-module__T6kVka__top_container",
});
}),
"[project]/packages/custom-carousel/src/css/customCarousel.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "carousel_slider": "customCarousel-module__mK8U3q__carousel_slider",
  "flickity_button": "customCarousel-module__mK8U3q__flickity_button",
  "flickity_button_icon": "customCarousel-module__mK8U3q__flickity_button_icon",
  "flickity_page_dot": "customCarousel-module__mK8U3q__flickity_page_dot",
  "flickity_page_dots": "customCarousel-module__mK8U3q__flickity_page_dots",
  "flickity_prev_next_button": "customCarousel-module__mK8U3q__flickity_prev_next_button",
  "flickity_slider": "customCarousel-module__mK8U3q__flickity_slider",
  "flickity_viewport": "customCarousel-module__mK8U3q__flickity_viewport",
  "is_selected": "customCarousel-module__mK8U3q__is_selected",
  "next": "customCarousel-module__mK8U3q__next",
  "previous": "customCarousel-module__mK8U3q__previous",
});
}),
"[project]/packages/custom-carousel/src/CustomCarousel.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/custom-carousel/src/css/customCarousel.module.css [app-client] (css module)");
;
;
;
var _s = __turbopack_context__.k.signature();
;
;
function CustomCarousel(param) {
    var _this = this;
    var children = param.children, _param_gap = param.gap, gap = _param_gap === void 0 ? 10 : _param_gap;
    _s();
    // ---------------------------------------------------------
    // 1. 화면 크기에 따라 슬라이드 개수 계산 로직 
    // ---------------------------------------------------------
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(2), 2), itemsPerSlide = _useState[0], setItemsPerSlide = _useState[1];
    var totalItems = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Children"].count(children); // 자식 요소(슬라이드 아이템) 개수 세기
    var slideCount = Math.ceil(totalItems / itemsPerSlide);
    // Item Per Slide도 사용자마다 달라야함, 근데 규칙이 있는건가 그냥 지정해야하는건가
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CustomCarousel.useEffect": function() {
            var handleResize = function handleResize() {
                var width = window.innerWidth; // 현재 브라우저의 너비
                if (width >= 1340) {
                    setItemsPerSlide(4);
                    setTransOffset(100);
                } else if (width >= 1024) {
                    setItemsPerSlide(3);
                    setTransOffset(100);
                } else if (width >= 568) {
                    setItemsPerSlide(2);
                    setTransOffset(100);
                } else {
                    setItemsPerSlide(1);
                    setTransOffset(82.5);
                }
            };
            handleResize(); // 컴포넌트 처음 뜰 때 한 번 실행
            window.addEventListener("resize", handleResize); // 화면 크기 바뀔 때마다 실행되도록 리스너 부착
            // 뒷정리 (Cleanup): 컴포넌트 사라질 때 리스너 제거
            return ({
                "CustomCarousel.useEffect": function() {
                    return window.removeEventListener("resize", handleResize);
                }
            })["CustomCarousel.useEffect"];
        }
    }["CustomCarousel.useEffect"], []);
    // ---------------------------------------------------------
    // 2. 슬라이드 이동 효과 구현
    // ---------------------------------------------------------
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), curSlide = _useState1[0], setCurSlide = _useState1[1];
    // ---------------------------------------------------------
    // 3. 드래그 효과 구현
    // ---------------------------------------------------------
    var _useState2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false), 2), isDragging = _useState2[0], setIsDragging = _useState2[1]; // 드래그 중인가?
    var _useState3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), startX = _useState3[0], setStartX = _useState3[1]; // 드래그 시작 X 좌표
    var _useState4 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), dragOffset = _useState4[0], setDragOffset = _useState4[1]; // 드래그로 움직인 거리 (px)
    var _useState5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(100), 2), transOffset = _useState5[0], setTransOffset = _useState5[1];
    var dragMovedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var transformValue = "translateX(calc(".concat(curSlide, " * (-").concat(transOffset, "% - ").concat(gap, "px) + ").concat(dragOffset, "px))");
    var onDragStart = function onDragStart(e) {
        setIsDragging(true);
        // 마우스 이벤트와 터치 이벤트를 구분해서 X좌표를 가져옴
        var pageX = e.touches ? e.touches[0].pageX : e.pageX;
        setStartX(pageX);
        // ★ 드래그 시작할 땐 "아직 안 움직였음"으로 초기화
        dragMovedRef.current = false;
    };
    var onDragMove = function onDragMove(e) {
        if (!isDragging) return; // 드래그 중이 아니면 무시
        var pageX = e.touches ? e.touches[0].pageX : e.pageX;
        var moveX = pageX - startX; // 움직인 거리 = 현재 위치 - 시작 위치
        setDragOffset(moveX);
        // 움직인 거리가 5px 이상이면 "이건 드래그다!"라고 표시
        if (Math.abs(moveX) > 5) {
            dragMovedRef.current = true;
        }
    };
    var onDragEnd = function onDragEnd() {
        if (!isDragging) return;
        setIsDragging(false);
        var DRAG_THRESHOLD = 100; // 100px 이상 움직여야 넘어감 (감도 조절)
        // 왼쪽으로 많이 끌었으면 (Next)
        if (dragOffset < -DRAG_THRESHOLD) {
            // 마지막 페이지가 아닐 때만 이동
            if (curSlide < slideCount - 1) {
                setCurSlide(function(prev) {
                    return prev + 1;
                });
            }
        } else if (dragOffset > DRAG_THRESHOLD) {
            // 첫 페이지가 아닐 때만 이동
            if (curSlide > 0) {
                setCurSlide(function(prev) {
                    return prev - 1;
                });
            }
        }
        // 드래그 거리 초기화 (이때 transition이 먹히면서 부드럽게 제자리 or 다음자리로 감)
        setDragOffset(0);
    };
    var onMouseLeave = function onMouseLeave() {
        if (isDragging) onDragEnd();
    };
    // ---------------------------------------------------------
    // 링크 클릭 차단 핸들러
    // ---------------------------------------------------------
    // ★ 중요: 링크 클릭 방지 로직을 껍데기에서 한방에 해결 (Capture Phase)
    // 자식 컴포넌트에 일일이 handleLinkClick을 안 달아도 됩니다.
    var handleClickCapture = function handleClickCapture(e) {
        if (dragMovedRef.current) {
            e.preventDefault();
            e.stopPropagation();
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].carousel_slider,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flickity_viewport,
                // 마우스/터치 이벤트 연결
                onMouseDown: onDragStart,
                onMouseMove: onDragMove,
                onMouseUp: onDragEnd,
                onMouseLeave: onMouseLeave,
                onTouchStart: onDragStart,
                onTouchMove: onDragMove,
                onTouchEnd: onDragEnd,
                onClickCapture: handleClickCapture,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flickity_slider,
                    style: {
                        transform: transformValue,
                        transition: isDragging ? "none" : "transform 0.5s ease-out",
                        cursor: isDragging ? "grabbing" : "grab" // 커서 모양 변경
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/packages/custom-carousel/src/CustomCarousel.js",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/custom-carousel/src/CustomCarousel.js",
                lineNumber: 125,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flickity_button, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flickity_prev_next_button, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].previous),
                onClick: function onClick() {
                    return setCurSlide(curSlide - 1);
                },
                style: curSlide === 0 ? {
                    display: 'none'
                } : null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flickity_button_icon,
                    viewBox: "0 0 100 100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                            children: "Previous"
                        }, void 0, false, {
                            fileName: "[project]/packages/custom-carousel/src/CustomCarousel.js",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0.6,0.3c-0.4,0.4-0.4,1,0,1.4L5.8,7l-5.2,5.2c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l6.5-6.5L8.7,7L8.5,6.8 L2,0.3C1.6-0.1,1-0.1,0.6,0.3z",
                            transform: "translate(100, 100) rotate(180)"
                        }, void 0, false, {
                            fileName: "[project]/packages/custom-carousel/src/CustomCarousel.js",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/custom-carousel/src/CustomCarousel.js",
                    lineNumber: 156,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/custom-carousel/src/CustomCarousel.js",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flickity_button, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flickity_prev_next_button, " ").concat(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].next),
                onClick: function onClick() {
                    return setCurSlide(curSlide + 1);
                },
                style: curSlide === slideCount - 1 ? {
                    display: 'none'
                } : null,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flickity_button_icon,
                    viewBox: "0 0 100 100",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("title", {
                            children: "Next"
                        }, void 0, false, {
                            fileName: "[project]/packages/custom-carousel/src/CustomCarousel.js",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M0.6,0.3c-0.4,0.4-0.4,1,0,1.4L5.8,7l-5.2,5.2c-0.4,0.4-0.4,1,0,1.4c0.4,0.4,1,0.4,1.4,0l6.5-6.5L8.7,7L8.5,6.8 L2,0.3C1.6-0.1,1-0.1,0.6,0.3z",
                            transform: "translate(100, 100) rotate(180)"
                        }, void 0, false, {
                            fileName: "[project]/packages/custom-carousel/src/CustomCarousel.js",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/custom-carousel/src/CustomCarousel.js",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/custom-carousel/src/CustomCarousel.js",
                lineNumber: 163,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flickity_page_dots,
                children: Array.from({
                    length: slideCount
                }).map(function(_, index) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flickity_page_dot, "  ").concat(index === curSlide ? __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$css$2f$customCarousel$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].is_selected : ""),
                        onClick: function onClick() {
                            return setCurSlide(index);
                        }
                    }, index, false, {
                        fileName: "[project]/packages/custom-carousel/src/CustomCarousel.js",
                        lineNumber: 177,
                        columnNumber: 11
                    }, _this);
                })
            }, void 0, false, {
                fileName: "[project]/packages/custom-carousel/src/CustomCarousel.js",
                lineNumber: 175,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/custom-carousel/src/CustomCarousel.js",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
_s(CustomCarousel, "vyTJgL/4Nrnv3DzDrgV+Y1S1V/8=");
_c = CustomCarousel;
const __TURBOPACK__default__export__ = CustomCarousel;
var _c;
__turbopack_context__.k.register(_c, "CustomCarousel");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/custom-carousel/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$CustomCarousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/custom-carousel/src/CustomCarousel.js [app-client] (ecmascript)");
;
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/research-area/src/Section_typeA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$research$2d$area$2f$src$2f$css$2f$section_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/research-area/src/css/section_typeA.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/custom-carousel/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$CustomCarousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/custom-carousel/src/CustomCarousel.js [app-client] (ecmascript)");
;
;
;
;
;
function Section_typeA(param) {
    var _this = this;
    var _param_data = param.data, data = _param_data === void 0 ? [] : _param_data;
    // 받은 data 전처리 (2개씩 그룹핑)
    var groups = []; // groups = [ [data1, data2], [data3, data4], ... ]
    for(var i = 0; i < data.length; i += 2){
        groups.push(data.slice(i, i + 2));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$research$2d$area$2f$src$2f$css$2f$section_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top_container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$research$2d$area$2f$src$2f$css$2f$section_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ResearchArea_header_wrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$research$2d$area$2f$src$2f$css$2f$section_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ResearchArea_header,
                    children: "Research areas"
                }, void 0, false, {
                    fileName: "[project]/packages/research-area/src/Section_typeA.js",
                    lineNumber: 16,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/research-area/src/Section_typeA.js",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$CustomCarousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                gap: 10,
                children: groups.map(function(group, groupIdx) {
                    return(// 이미지 드래그 방지 (중요: 이미지가 드래그되면 슬라이드가 안됨)
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$research$2d$area$2f$src$2f$css$2f$section_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flickity_group,
                        onDragStart: function onDragStart(e) {
                            return e.preventDefault();
                        },
                        children: group.map(function(item) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$research$2d$area$2f$src$2f$css$2f$section_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ResearchAreaCard,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$research$2d$area$2f$src$2f$css$2f$section_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ResearchAreaCard_link,
                                    href: item.link,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$research$2d$area$2f$src$2f$css$2f$section_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ResearchAreaCard_media,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    "data-image-size": "mediumIcon",
                                                    alt: "".concat(item.title, ".svg"),
                                                    width: "48",
                                                    height: "48",
                                                    src: item.icon
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/research-area/src/Section_typeA.js",
                                                    lineNumber: 37,
                                                    columnNumber: 23
                                                }, _this)
                                            }, void 0, false, {
                                                fileName: "[project]/packages/research-area/src/Section_typeA.js",
                                                lineNumber: 36,
                                                columnNumber: 21
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/research-area/src/Section_typeA.js",
                                            lineNumber: 35,
                                            columnNumber: 19
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$research$2d$area$2f$src$2f$css$2f$section_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ResearchAreaCard_content,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$research$2d$area$2f$src$2f$css$2f$section_typeA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].ResearchAreaCard_title,
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/packages/research-area/src/Section_typeA.js",
                                                lineNumber: 41,
                                                columnNumber: 21
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/research-area/src/Section_typeA.js",
                                            lineNumber: 40,
                                            columnNumber: 19
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/research-area/src/Section_typeA.js",
                                    lineNumber: 31,
                                    columnNumber: 17
                                }, _this)
                            }, item.id, false, {
                                fileName: "[project]/packages/research-area/src/Section_typeA.js",
                                lineNumber: 30,
                                columnNumber: 15
                            }, _this);
                        })
                    }, groupIdx, false, {
                        fileName: "[project]/packages/research-area/src/Section_typeA.js",
                        lineNumber: 24,
                        columnNumber: 11
                    }, _this));
                })
            }, void 0, false, {
                fileName: "[project]/packages/research-area/src/Section_typeA.js",
                lineNumber: 20,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/research-area/src/Section_typeA.js",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
_c = Section_typeA;
const __TURBOPACK__default__export__ = Section_typeA;
var _c;
__turbopack_context__.k.register(_c, "Section_typeA");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/research-area/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$research$2d$area$2f$src$2f$Section_typeA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/research-area/src/Section_typeA.js [app-client] (ecmascript)");
;
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/from-the-blog/src/css/fromtheblog.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "blogMediaOverride": "fromtheblog-module__KRUkAG__blogMediaOverride",
  "blogTitleOverride": "fromtheblog-module__KRUkAG__blogTitleOverride",
  "fromtheblog_footer_button": "fromtheblog-module__KRUkAG__fromtheblog_footer_button",
  "fromtheblog_footer_wrapper": "fromtheblog-module__KRUkAG__fromtheblog_footer_wrapper",
  "fromtheblog_header": "fromtheblog-module__KRUkAG__fromtheblog_header",
  "fromtheblog_header_button": "fromtheblog-module__KRUkAG__fromtheblog_header_button",
  "fromtheblog_header_description": "fromtheblog-module__KRUkAG__fromtheblog_header_description",
  "fromtheblog_header_wrapper": "fromtheblog-module__KRUkAG__fromtheblog_header_wrapper",
  "fromtheblog_heading": "fromtheblog-module__KRUkAG__fromtheblog_heading",
  "fromtheblog_heading_background_image": "fromtheblog-module__KRUkAG__fromtheblog_heading_background_image",
  "fromtheblog_heading_body": "fromtheblog-module__KRUkAG__fromtheblog_heading_body",
  "fromtheblog_heading_text": "fromtheblog-module__KRUkAG__fromtheblog_heading_text",
  "fromtheblog_items": "fromtheblog-module__KRUkAG__fromtheblog_items",
  "fromtheblog_items_item": "fromtheblog-module__KRUkAG__fromtheblog_items_item",
  "fromtheblog_items_wrapper": "fromtheblog-module__KRUkAG__fromtheblog_items_wrapper",
  "img": "fromtheblog-module__KRUkAG__img",
  "top_container": "fromtheblog-module__KRUkAG__top_container",
});
}),
"[project]/packages/promo-a/src/css/promoA.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "Image": "promoA-module__htKQUq__Image",
  "Link": "promoA-module__htKQUq__Link",
  "PromoA": "promoA-module__htKQUq__PromoA",
  "PromoA_category": "promoA-module__htKQUq__PromoA_category",
  "PromoA_content": "promoA-module__htKQUq__PromoA_content",
  "PromoA_description": "promoA-module__htKQUq__PromoA_description",
  "PromoA_details": "promoA-module__htKQUq__PromoA_details",
  "PromoA_duration": "promoA-module__htKQUq__PromoA_duration",
  "PromoA_media": "promoA-module__htKQUq__PromoA_media",
  "PromoA_title": "promoA-module__htKQUq__PromoA_title",
});
}),
"[project]/packages/promo-a/src/PromoA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$css$2f$promoA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/promo-a/src/css/promoA.module.css [app-client] (css module)");
;
;
;
;
function PromoA(param) {
    var item = param.item, _param_detailsOn = param.detailsOn, detailsOn = _param_detailsOn === void 0 ? true : _param_detailsOn, _param_descciptOn = param.descciptOn, descciptOn = _param_descciptOn === void 0 ? true : _param_descciptOn, _param_categoryOn = param.categoryOn, categoryOn = _param_categoryOn === void 0 ? true : _param_categoryOn, mediaClassName = param.mediaClassName, titleClassName = param.titleClassName;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$css$2f$promoA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoA,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$css$2f$promoA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoA_media, " ").concat(mediaClassName || ''),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$css$2f$promoA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Link,
                    href: "/post/".concat(item.title),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "Image",
                            "data-image-size": "promoMedium",
                            alt: "".concat(item.title, " + _image"),
                            src: item.thumbnail
                        }, void 0, false, {
                            fileName: "[project]/packages/promo-a/src/PromoA.js",
                            lineNumber: 10,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/promo-a/src/PromoA.js",
                        lineNumber: 9,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/packages/promo-a/src/PromoA.js",
                    lineNumber: 8,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/promo-a/src/PromoA.js",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$css$2f$promoA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoA_content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "".concat(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$css$2f$promoA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoA_title, " ").concat(titleClassName || ''),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$css$2f$promoA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Link,
                            href: "/post/".concat(item.title),
                            children: item.title
                        }, void 0, false, {
                            fileName: "[project]/packages/promo-a/src/PromoA.js",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/promo-a/src/PromoA.js",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    detailsOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$css$2f$promoA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoA_details,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$css$2f$promoA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoA_date,
                                children: item.date
                            }, void 0, false, {
                                fileName: "[project]/packages/promo-a/src/PromoA.js",
                                lineNumber: 23,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$css$2f$promoA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoA_duration,
                                children: item.readDuration
                            }, void 0, false, {
                                fileName: "[project]/packages/promo-a/src/PromoA.js",
                                lineNumber: 26,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/promo-a/src/PromoA.js",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this) : null,
                    descciptOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$css$2f$promoA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoA_description,
                        children: item.subTitle
                    }, void 0, false, {
                        fileName: "[project]/packages/promo-a/src/PromoA.js",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this) : null,
                    categoryOn ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$css$2f$promoA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoA_category,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$css$2f$promoA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Link,
                            href: "/Blog/".concat(item.category),
                            children: item.category
                        }, void 0, false, {
                            fileName: "[project]/packages/promo-a/src/PromoA.js",
                            lineNumber: 43,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/promo-a/src/PromoA.js",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/packages/promo-a/src/PromoA.js",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/promo-a/src/PromoA.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = PromoA;
const __TURBOPACK__default__export__ = PromoA;
var _c;
__turbopack_context__.k.register(_c, "PromoA");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/promo-a/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$PromoA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/promo-a/src/PromoA.js [app-client] (ecmascript)");
;
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/from-the-blog/src/Fromtheblog.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/from-the-blog/src/css/fromtheblog.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/promo-a/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$PromoA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/promo-a/src/PromoA.js [app-client] (ecmascript)");
;
;
;
;
;
function Fromtheblog(param) {
    var _this = this;
    var viewAllLik = param.viewAllLik, _param_data = param.data, data = _param_data === void 0 ? [] : _param_data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top_container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fromtheblog_heading,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fromtheblog_heading_body,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fromtheblog_heading_background_image,
                            width: "481",
                            height: "416",
                            viewBox: "0 0 481 416",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                stroke: "#D5DBDB",
                                strokeWidth: "1.5",
                                fill: "none",
                                fillRule: "evenodd",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M240.966 104.38h119.646l59.823 103.537-59.823 103.536H240.966l-59.823-103.536z"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                                        lineNumber: 12,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        opacity: ".6",
                                        d: "M61.026.844h119.646l59.823 103.536-59.823 103.537H61.026L1.203 104.38z"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                                        lineNumber: 13,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        opacity: ".603",
                                        d: "M183.498.844h119.646l59.823 103.536-59.823 103.537H183.498L123.675 104.38z"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                                        lineNumber: 14,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M180.672 207.917h119.646l59.823 103.536-59.823 103.537H180.672L120.85 311.453z"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                                        lineNumber: 15,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M300.318 207.917h119.646l59.823 103.536-59.823 103.537H300.318l-59.823-103.537z"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                                        lineNumber: 16,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                                lineNumber: 11,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                            lineNumber: 10,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fromtheblog_heading_text,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fromtheblog_header_wrapper,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fromtheblog_header,
                                        children: "From the blog"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fromtheblog_header_button,
                                        href: viewAllLik,
                                        children: "View all"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                                        lineNumber: 22,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fromtheblog_header_description,
                                        children: "Technical deep-dives and perspectives from our scientists."
                                    }, void 0, false, {
                                        fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                                        lineNumber: 23,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fromtheblog_items_wrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fromtheblog_items,
                    children: data.map(function(item, index) {
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fromtheblog_items_item,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$PromoA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                item: item,
                                descciptOn: index === 0,
                                mediaClassName: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blogMediaOverride,
                                titleClassName: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].blogTitleOverride
                            }, void 0, false, {
                                fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                                lineNumber: 34,
                                columnNumber: 15
                            }, _this)
                        }, index, false, {
                            fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                            lineNumber: 33,
                            columnNumber: 13
                        }, _this);
                    })
                }, void 0, false, {
                    fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fromtheblog_footer_wrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$css$2f$fromtheblog$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].fromtheblog_footer_button,
                    href: "blog",
                    children: "View all"
                }, void 0, false, {
                    fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
                lineNumber: 44,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/from-the-blog/src/Fromtheblog.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = Fromtheblog;
const __TURBOPACK__default__export__ = Fromtheblog;
var _c;
__turbopack_context__.k.register(_c, "Fromtheblog");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/from-the-blog/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$Fromtheblog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/from-the-blog/src/Fromtheblog.js [app-client] (ecmascript)");
;
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/featured-news/src/css/featurednews.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "featured_header": "featurednews-module___dIAMW__featured_header",
  "featured_header_wrapper": "featurednews-module___dIAMW__featured_header_wrapper",
  "flickity_cell": "featurednews-module___dIAMW__flickity_cell",
  "top_container": "featurednews-module___dIAMW__top_container",
});
}),
"[project]/packages/featured-news/src/FeaturedNews.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$featured$2d$news$2f$src$2f$css$2f$featurednews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/featured-news/src/css/featurednews.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/custom-carousel/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$CustomCarousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/custom-carousel/src/CustomCarousel.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/promo-a/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$PromoA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/promo-a/src/PromoA.js [app-client] (ecmascript)");
;
;
;
;
;
function FeaturedNews(param) {
    var _this = this;
    var _param_data = param.data, data = _param_data === void 0 ? [] : _param_data;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$featured$2d$news$2f$src$2f$css$2f$featurednews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top_container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$featured$2d$news$2f$src$2f$css$2f$featurednews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featured_header_wrapper,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$featured$2d$news$2f$src$2f$css$2f$featurednews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].featured_header,
                    children: "Featured news"
                }, void 0, false, {
                    fileName: "[project]/packages/featured-news/src/FeaturedNews.js",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/featured-news/src/FeaturedNews.js",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$custom$2d$carousel$2f$src$2f$CustomCarousel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                gap: 20,
                children: data.map(function(item, index) {
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$featured$2d$news$2f$src$2f$css$2f$featurednews$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].flickity_cell,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$promo$2d$a$2f$src$2f$PromoA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            item: item,
                            detailsOn: false,
                            categoryOn: false
                        }, void 0, false, {
                            fileName: "[project]/packages/featured-news/src/FeaturedNews.js",
                            lineNumber: 17,
                            columnNumber: 13
                        }, _this)
                    }, index, false, {
                        fileName: "[project]/packages/featured-news/src/FeaturedNews.js",
                        lineNumber: 16,
                        columnNumber: 11
                    }, _this);
                })
            }, void 0, false, {
                fileName: "[project]/packages/featured-news/src/FeaturedNews.js",
                lineNumber: 14,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/featured-news/src/FeaturedNews.js",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
_c = FeaturedNews;
const __TURBOPACK__default__export__ = FeaturedNews;
var _c;
__turbopack_context__.k.register(_c, "FeaturedNews");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/featured-news/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$featured$2d$news$2f$src$2f$FeaturedNews$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/featured-news/src/FeaturedNews.js [app-client] (ecmascript)");
;
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/section-publications/src/css/publications.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "Link": "publications-module__Duh33G__Link",
  "PromoF": "publications-module__Duh33G__PromoF",
  "PromoF_authors": "publications-module__Duh33G__PromoF_authors",
  "PromoF_body": "publications-module__Duh33G__PromoF_body",
  "PromoF_category": "publications-module__Duh33G__PromoF_category",
  "PromoF_content": "publications-module__Duh33G__PromoF_content",
  "PromoF_description": "publications-module__Duh33G__PromoF_description",
  "PromoF_details": "publications-module__Duh33G__PromoF_details",
  "PromoF_journal": "publications-module__Duh33G__PromoF_journal",
  "PromoF_title": "publications-module__Duh33G__PromoF_title",
  "body": "publications-module__Duh33G__body",
  "body_items": "publications-module__Duh33G__body_items",
  "body_items_item": "publications-module__Duh33G__body_items_item",
  "header": "publications-module__Duh33G__header",
  "header_button": "publications-module__Duh33G__header_button",
  "header_wrapper": "publications-module__Duh33G__header_wrapper",
  "nextPage": "publications-module__Duh33G__nextPage",
  "top_contianer": "publications-module__Duh33G__top_contianer",
});
}),
"[project]/packages/section-publications/src/Publications.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/section-publications/src/css/publications.module.css [app-client] (css module)");
;
;
;
;
function Publications(param) {
    var _this = this;
    var _param_data = param.data, data = _param_data === void 0 ? [] : _param_data, loadNext = param.loadNext;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top_contianer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header_wrapper,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header,
                        children: "Publications"
                    }, void 0, false, {
                        fileName: "[project]/packages/section-publications/src/Publications.js",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].header_button,
                        href: "/Article Search",
                        children: "View all"
                    }, void 0, false, {
                        fileName: "[project]/packages/section-publications/src/Publications.js",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/section-publications/src/Publications.js",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body_items,
                        children: data.map(function(item, index) {
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].body_items_item,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoF,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoF_title,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Link,
                                                href: "/post/".concat(item.title),
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/packages/section-publications/src/Publications.js",
                                                lineNumber: 18,
                                                columnNumber: 19
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/section-publications/src/Publications.js",
                                            lineNumber: 17,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoF_details,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoF_authors,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Link,
                                                        href: "/author/".concat(item.author),
                                                        children: item.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/section-publications/src/Publications.js",
                                                        lineNumber: 22,
                                                        columnNumber: 21
                                                    }, _this)
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/section-publications/src/Publications.js",
                                                    lineNumber: 21,
                                                    columnNumber: 19
                                                }, _this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoF_date,
                                                    children: item.date
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/section-publications/src/Publications.js",
                                                    lineNumber: 25,
                                                    columnNumber: 19
                                                }, _this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/section-publications/src/Publications.js",
                                            lineNumber: 20,
                                            columnNumber: 17
                                        }, _this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoF_content,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoF_body,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoF_description,
                                                        children: [
                                                            item.subTitle,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    "...",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Link,
                                                                        href: "/post/".concat(item.title),
                                                                        children: "Read more"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/packages/section-publications/src/Publications.js",
                                                                        lineNumber: 32,
                                                                        columnNumber: 25
                                                                    }, _this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/packages/section-publications/src/Publications.js",
                                                                lineNumber: 31,
                                                                columnNumber: 23
                                                            }, _this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/section-publications/src/Publications.js",
                                                        lineNumber: 29,
                                                        columnNumber: 21
                                                    }, _this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoF_category,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Link,
                                                            href: "/Blog/".concat(item.category),
                                                            children: item.category
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/section-publications/src/Publications.js",
                                                            lineNumber: 36,
                                                            columnNumber: 23
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/section-publications/src/Publications.js",
                                                        lineNumber: 35,
                                                        columnNumber: 21
                                                    }, _this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/packages/section-publications/src/Publications.js",
                                                lineNumber: 28,
                                                columnNumber: 19
                                            }, _this)
                                        }, void 0, false, {
                                            fileName: "[project]/packages/section-publications/src/Publications.js",
                                            lineNumber: 27,
                                            columnNumber: 17
                                        }, _this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/packages/section-publications/src/Publications.js",
                                    lineNumber: 16,
                                    columnNumber: 15
                                }, _this)
                            }, index, false, {
                                fileName: "[project]/packages/section-publications/src/Publications.js",
                                lineNumber: 15,
                                columnNumber: 13
                            }, _this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/packages/section-publications/src/Publications.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].nextPage,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$css$2f$publications$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Link,
                            onClick: loadNext,
                            href: "#",
                            children: "Load more"
                        }, void 0, false, {
                            fileName: "[project]/packages/section-publications/src/Publications.js",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/section-publications/src/Publications.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/section-publications/src/Publications.js",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/section-publications/src/Publications.js",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = Publications;
const __TURBOPACK__default__export__ = Publications;
var _c;
__turbopack_context__.k.register(_c, "Publications");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/section-publications/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$Publications$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/section-publications/src/Publications.js [app-client] (ecmascript)");
;
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/footer-type-a/src/css/footerA.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "FooterNavigation": "footerA-module__U_UGfq__FooterNavigation",
  "FooterNavigation_items_item": "footerA-module__U_UGfq__FooterNavigation_items_item",
  "NavigationItem": "footerA-module__U_UGfq__NavigationItem",
  "NavigationItem_text": "footerA-module__U_UGfq__NavigationItem_text",
  "PromoNewsletter_body": "footerA-module__U_UGfq__PromoNewsletter_body",
  "PromoNewsletter_content": "footerA-module__U_UGfq__PromoNewsletter_content",
  "PromoNewsletter_description": "footerA-module__U_UGfq__PromoNewsletter_description",
  "PromoNewsletter_media": "footerA-module__U_UGfq__PromoNewsletter_media",
  "PromoNewsletter_title": "footerA-module__U_UGfq__PromoNewsletter_title",
  "SocialBar_heading": "footerA-module__U_UGfq__SocialBar_heading",
  "SocialBar_items": "footerA-module__U_UGfq__SocialBar_items",
  "SocialBar_items_item": "footerA-module__U_UGfq__SocialBar_items_item",
  "SocialLink": "footerA-module__U_UGfq__SocialLink",
  "footer": "footerA-module__U_UGfq__footer",
  "footer_body": "footerA-module__U_UGfq__footer_body",
  "footer_bottom": "footerA-module__U_UGfq__footer_bottom",
  "footer_bottom_content": "footerA-module__U_UGfq__footer_bottom_content",
  "footer_column": "footerA-module__U_UGfq__footer_column",
  "footer_columns": "footerA-module__U_UGfq__footer_columns",
  "footer_content": "footerA-module__U_UGfq__footer_content",
  "footer_disclaimer": "footerA-module__U_UGfq__footer_disclaimer",
  "footer_logo": "footerA-module__U_UGfq__footer_logo",
  "footer_social": "footerA-module__U_UGfq__footer_social",
  "sr_only": "footerA-module__U_UGfq__sr_only",
});
}),
"[project]/packages/footer-type-a/src/Footer_typeA.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/packages/footer-type-a/src/css/footerA.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
;
function Footer_typeA(param) {
    var _this = this;
    var logoImg = param.logoImg, socialItems = param.socialItems;
    var footerMenuItems = [
        "About",
        "Research areas",
        "Blog",
        "Publications",
        "Conferences",
        "Code and datasets",
        "Academia",
        "Amazon News",
        "Amazon Developer",
        "Amazon Web Services",
        "Awards and recognitions",
        "Newsletter",
        "Careers",
        "FAQs"
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer_body,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer_logo,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: logoImg,
                                alt: "sean's tech blog",
                                width: "171",
                                height: "29"
                            }, void 0, false, {
                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                lineNumber: 15,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                            lineNumber: 14,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer_columns,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer_column,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer_navigation,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].FooterNavigation,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].FooterNavigation_items,
                                            children: footerMenuItems.map(function(item, index) {
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].FooterNavigation_items_item,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem,
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_text,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].NavigationItem_text_link,
                                                                href: "/",
                                                                children: item
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                                lineNumber: 27,
                                                                columnNumber: 27
                                                            }, _this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                            lineNumber: 26,
                                                            columnNumber: 25
                                                        }, _this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                        lineNumber: 25,
                                                        columnNumber: 23
                                                    }, _this)
                                                }, index, false, {
                                                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                    lineNumber: 24,
                                                    columnNumber: 21
                                                }, _this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                            lineNumber: 22,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                        lineNumber: 21,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                lineNumber: 19,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer_column,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer_content,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoNewsletter,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoNewsletter_content,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoNewsletter_media,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("picture", {
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Image,
                                                            "data-image-size": "hexagonXSmall",
                                                            alt: "View from space of a connected network around planet Earth representing the Internet of Things.",
                                                            width: "70",
                                                            height: "61",
                                                            src: "https://assets.amazon.science/dims4/default/edd567d/2147483647/strip/true/crop/1465x1277+227+0/resize/70x61!/quality/90/?url=http%3A%2F%2Famazon-topics-brightspot.s3.amazonaws.com%2Fscience%2F20%2Fc4%2Fc36de9f643dab18e2f27ea071590%2Famazon-science-newsletter-project-kuiper.jpg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                            lineNumber: 43,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                        lineNumber: 42,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                    lineNumber: 40,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoNewsletter_body,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoNewsletter_text,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoNewsletter_title,
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                    className: "Link",
                                                                    href: "/",
                                                                    children: "Get more from Sean's Tech Blog"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                                    lineNumber: 49,
                                                                    columnNumber: 25
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                                lineNumber: 48,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].PromoNewsletter_description,
                                                                children: "Subscribe to our monthly newsletter"
                                                            }, void 0, false, {
                                                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                                lineNumber: 53,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                        lineNumber: 47,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                    lineNumber: 46,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                        lineNumber: 38,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                    lineNumber: 37,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                        lineNumber: 18,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer_bottom,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer_bottom_content,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer_disclaimer,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Link,
                                        href: "/",
                                        target: "_blank",
                                        children: "Amazon.com"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                        lineNumber: 68,
                                        columnNumber: 15
                                    }, this),
                                    " | ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Link,
                                        href: "/",
                                        target: "_blank",
                                        children: "Conditions of Use"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this),
                                    " | ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].Link,
                                        href: "/",
                                        target: "_blank",
                                        children: "Privacy"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                        lineNumber: 72,
                                        columnNumber: 15
                                    }, this),
                                    " | © 1996-2026 Amazon.com, Inc. or its affiliates"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].footer_social,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].SocialBar,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].SocialBar_heading,
                                        children: "Social"
                                    }, void 0, false, {
                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].SocialBar_items,
                                        children: socialItems.map(function(item, index) {
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].SocialBar_items_item,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].SocialLink,
                                                    href: item.url,
                                                    target: "_blank",
                                                    children: [
                                                        item.svg,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$css$2f$footerA$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].sr_only,
                                                            children: item.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                            lineNumber: 84,
                                                            columnNumber: 23
                                                        }, _this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                    lineNumber: 82,
                                                    columnNumber: 21
                                                }, _this)
                                            }, item.id, false, {
                                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                                lineNumber: 81,
                                                columnNumber: 19
                                            }, _this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/packages/footer-type-a/src/Footer_typeA.js",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c = Footer_typeA;
const __TURBOPACK__default__export__ = Footer_typeA;
var _c;
__turbopack_context__.k.register(_c, "Footer_typeA");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/packages/footer-type-a/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$Footer_typeA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/footer-type-a/src/Footer_typeA.js [app-client] (ecmascript)");
;
;
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/web_icon.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/web_icon.0p2dctbc-.nmq.png");}),
"[project]/apps/tech-blog/src/assets/images/web_icon.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/web_icon.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$web_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/web_icon.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$web_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 864,
    height: 730,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAkElEQVR42l2PsQqAMAxE+/v+iCDi6uQXCCqILrZ061ZohxZKaXuSDA7eEJJ3CVwEfgohIOf8zYKK9x5aa9RaMc8ztm1jxgtSSvR9D6UUrLWYpgnP8zAjT3Rdh+M40FrDuq7Y9517YuQJYwyGYcB5nhjHEc453PfNjDzOEGPEdV1YloWvySD2hSSVUpBS+j+FF9buy+YLvT9XAAAAAElFTkSuQmCC"
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/algorithm_icon.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/algorithm_icon.0n.oa5w3-zbn-.png");}),
"[project]/apps/tech-blog/src/assets/images/algorithm_icon.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/algorithm_icon.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$algorithm_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/algorithm_icon.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$algorithm_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 826,
    height: 780,
    blurWidth: 8,
    blurHeight: 8,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAxUlEQVR42jWPK8uEYBCF/f+wYdmyRdEgCGpQ1KAYBEHFomDRZhOLxQveeD7e3W9PmDkzc8Iz0jRNGIZBnueM4/jpwzCwritCUl3X+L6PqqrYts3j8cA0TRzH4TgOJFHEoes6fn5ZFsIwZNs2JDEoioLruqRpyvP5xPM8Xq8XbdsiiZSu6yRJQhzHyLJMURS832/6vkcSIE3TkGUZURRRliWCS/jzPL+B67o+AQGnaRpVVbHv+/cL/jXPM5ZlEQQB933/1vwBl4/blFURxaYAAAAASUVORK5CYII="
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/developments_icon.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/developments_icon.14~cwa29ph~h..png");}),
"[project]/apps/tech-blog/src/assets/images/developments_icon.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/developments_icon.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$developments_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/developments_icon.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$developments_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 882,
    height: 800,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAtUlEQVR42iXPPctHcBTGca//XwaShcFCKQOSDaU8hMELwCayykD43v3cV53tnM7nkq7roixLPM/DsizatmXfd+77RkRalgXbtjEMA0VR0HWdrutomuZ/YZomVFXFNE2KoqDve8RRmqY8z4OU5zmO4/D7/QiCgDiOCcMQ13WZ5xlpHEc0TfsmyzKGYWBdV5Ik+RzSeZ7UdY0syx9SYAW0qire90USEPFr2zZ83yeKIo7jQLQT+QPeK7w+YF4kVwAAAABJRU5ErkJggg=="
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/essay_icon.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/essay_icon.0opxhcg85xvz0.png");}),
"[project]/apps/tech-blog/src/assets/images/essay_icon.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/essay_icon.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$essay_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/essay_icon.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$essay_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1068,
    height: 968,
    blurWidth: 8,
    blurHeight: 7,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAoElEQVR42kXOzQpGUBDGcfd/G96VLGw4CzbEEfmIlNzAa4mNkPpzjsWZmpqaXzOPxVvDMJCmKTLPyd9W8zRN3PeNpUDbtjRNoxdZlhHHMfbP5j/PBlRVRZIkRFGEEAIpJdd1GVDXNYEI8DxPg7Is2ffdANWO4+C6Lr7vE4Yh67p+oOs6tm3jOA6WZdEXxnFUqw/0fa9/FkWhA6oc53lq8ACm7sN/pZPluAAAAABJRU5ErkJggg=="
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/data/categoryData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$web_icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$web_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/web_icon.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/web_icon.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$algorithm_icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$algorithm_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/algorithm_icon.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/algorithm_icon.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$developments_icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$developments_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/developments_icon.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/developments_icon.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$essay_icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$essay_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/essay_icon.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/essay_icon.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
var researchAreaData = [
    {
        id: "Web",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$web_icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$web_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        title: "Web",
        description: "웹 프로젝트를 진행하며 연구한 프론트엔드/백엔드를 아우르는 전반적인 웹 지식 및 경험을 기술합니다.",
        link: "/Blog/Web"
    },
    {
        id: "Algorithm",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$algorithm_icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$algorithm_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        title: "Algorithm",
        description: "효율적인 문제 해결을 위한 알고리즘 설계와 복잡도 분석 기록입니다.",
        link: "/Blog/Algorithm"
    },
    {
        id: "Developments",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$developments_icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$developments_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        title: "Developments",
        description: "모노레포 관리, 버전 관리 등 소프트웨어 공학적 접근법을 다룹니다.",
        link: "/Blog/Developments"
    }
];
var extraCategoryData = [
    {
        id: "Projects",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$essay_icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$essay_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        title: "Projects",
        description: "프로젝트를 통해 배운 것들을 정리합니다",
        link: "/Projects"
    },
    {
        id: "Essay",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$essay_icon$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$essay_icon$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        title: "Essay",
        description: "개발 이야기를 다루는 공간입니다",
        link: "/Essay"
    }
];
const __TURBOPACK__default__export__ = {
    researchAreaData: researchAreaData,
    extraCategoryData: extraCategoryData
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/data/headerData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$categoryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/data/categoryData.js [app-client] (ecmascript)");
;
;
var menuItems = [
    "Article Search",
    "Blog",
    "Projects",
    "Essay"
];
var subMenuItems = [
    null,
    __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$categoryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].researchAreaData,
    null,
    null
];
var subTitles = [
    null,
    "Research areas",
    null,
    null
];
const __TURBOPACK__default__export__ = {
    logoImg: "/images/logo.png",
    logoSvg: "/svg/logo.svg",
    menuItems: menuItems,
    subMenuItems: subMenuItems,
    subTitles: subTitles
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/logo.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/logo.106cwxzl8tgko.png");}),
"[project]/apps/tech-blog/src/assets/images/logo.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/logo.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/logo.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1636,
    height: 368,
    blurWidth: 8,
    blurHeight: 2,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAIAAADq9gq6AAAANElEQVR42g3JMQoAAAQAQP9/lEyYpSjJ6hkstxxkprt3d1Uxs4gg4gtmRkTfu/vOTESo6gHVgydbxeYZxgAAAABJRU5ErkJggg=="
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/data/footerData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/logo.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/logo.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
var socialItems = [
    {
        id: "youtube",
        name: "youtube",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            id: "mono-icon-youtube",
            viewBox: "0 0 512 512",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    d: "M508.6,148.8c0-45-33.1-81.2-74-81.2C379.2,65,322.7,64,265,64c-3,0-6,0-9,0s-6,0-9,0c-57.6,0-114.2,1-169.6,3.6 c-40.8,0-73.9,36.4-73.9,81.4C1,184.6-0.1,220.2,0,255.8C-0.1,291.4,1,327,3.4,362.7c0,45,33.1,81.5,73.9,81.5 c58.2,2.7,117.9,3.9,178.6,3.8c60.8,0.2,120.3-1,178.6-3.8c40.9,0,74-36.5,74-81.5c2.4-35.7,3.5-71.3,3.4-107 C512.1,220.1,511,184.5,508.6,148.8z M207,353.9V157.4l145,98.2L207,353.9z"
                }, void 0, false, {
                    fileName: "[project]/apps/tech-blog/src/data/footerData.js",
                    lineNumber: 9,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/src/data/footerData.js",
                lineNumber: 8,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/tech-blog/src/data/footerData.js",
            lineNumber: 7,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0)),
        url: "https://www.youtube.com"
    },
    {
        id: "linkedin",
        name: "linkedin",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            id: "mono-icon-linkedin",
            viewBox: "0 0 16 17",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                fillRule: "evenodd",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M3.734 16.125H.464V5.613h3.27zM2.117 4.172c-.515 0-.96-.188-1.336-.563A1.825 1.825 0 0 1 .22 2.273c0-.515.187-.96.562-1.335.375-.375.82-.563 1.336-.563.516 0 .961.188 1.336.563.375.375.563.82.563 1.335 0 .516-.188.961-.563 1.336-.375.375-.82.563-1.336.563zM15.969 16.125h-3.27v-5.133c0-.844-.07-1.453-.21-1.828-.259-.633-.762-.95-1.512-.95s-1.278.282-1.582.845c-.235.421-.352 1.043-.352 1.863v5.203H5.809V5.613h3.128v1.442h.036c.234-.469.609-.856 1.125-1.16.562-.375 1.218-.563 1.968-.563 1.524 0 2.59.48 3.2 1.441.468.774.703 1.97.703 3.586v5.766z"
                }, void 0, false, {
                    fileName: "[project]/apps/tech-blog/src/data/footerData.js",
                    lineNumber: 22,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/src/data/footerData.js",
                lineNumber: 21,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/tech-blog/src/data/footerData.js",
            lineNumber: 20,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0)),
        url: "https://www.linkedin.com/in/sean-lee-547000361/"
    },
    {
        id: "github",
        name: "github",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            id: "mono-icon-github",
            viewBox: "0 0 16 16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M7.99926333,0 C3.58218484,0 0,3.58169373 0,8.00024556 C0,11.5347924 2.29202861,14.5330428 5.47100893,15.5909021 C5.87126677,15.6645692 6.0171276,15.4175389 6.0171276,15.2053777 C6.0171276,15.0158077 6.010252,14.512416 6.00632309,13.8449922 C3.78108598,14.3282483 3.31158108,12.7723994 3.31158108,12.7723994 C2.94766567,11.848123 2.42315602,11.602075 2.42315602,11.602075 C1.69679855,11.1060499 2.47816078,11.1158722 2.47816078,11.1158722 C3.28113202,11.1723503 3.70348998,11.9404524 3.70348998,11.9404524 C4.41707849,13.162835 5.57610731,12.8097241 6.03186101,12.6049296 C6.10454587,12.0882777 6.31130483,11.7356579 6.5396728,11.5357746 C4.76331379,11.3339268 2.8956076,10.6473495 2.8956076,7.58181651 C2.8956076,6.70861598 3.20746493,5.99404524 3.71920562,5.43515762 C3.63669849,5.23281869 3.36216581,4.41904294 3.79778385,3.31796556 C3.79778385,3.31796556 4.46913656,3.10285767 5.99748304,4.13812579 C6.63544001,3.96034255 7.32005279,3.87194205 8.00024556,3.86850425 C8.67994721,3.87194205 9.36406888,3.96034255 10.0030081,4.13812579 C11.5303723,3.10285767 12.2007428,3.31796556 12.2007428,3.31796556 C12.6373431,4.41904294 12.3628104,5.23281869 12.2807944,5.43515762 C12.7935173,5.99404524 13.1029191,6.70861598 13.1029191,7.58181651 C13.1029191,10.6552073 11.2322662,11.3314712 9.45050493,11.5293901 C9.73731545,11.7764204 9.99318579,12.2645876 9.99318579,13.0110808 C9.99318579,14.0802357 9.98336352,14.9431229 9.98336352,15.2053777 C9.98336352,15.4195034 10.127751,15.6684981 10.5334111,15.590411 C13.7099358,14.5300961 16,11.5338101 16,8.00024556 C16,3.58169373 12.4178152,0 7.99926333,0",
                id: "icon-Github"
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/src/data/footerData.js",
                lineNumber: 31,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/apps/tech-blog/src/data/footerData.js",
            lineNumber: 30,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0)),
        url: "https://github.com/2shoneycom"
    }
];
const __TURBOPACK__default__export__ = {
    logoImg: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$logo$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$logo$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
    socialItems: socialItems
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/monorepo_1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/monorepo_1.0vyfw_28iq-_9.png");}),
"[project]/apps/tech-blog/src/assets/images/monorepo_1.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/monorepo_1.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$monorepo_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/monorepo_1.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$monorepo_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2872,
    height: 1670,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAXUlEQVR42i2NRxKAIBAE+f9PjbABYQOraNmXOUxVdzqwHyR4mZrH/TJidJGUqZeq3Mzdx8ec91h2WE/cMp1AzHXCzACYCgtUpTZVIyI+VahZylgLNb5kSu6/Eer2AFPXdD5L09XMAAAAAElFTkSuQmCC"
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/clip-path_1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/clip-path_1.0e65kt0t3jah..png");}),
"[project]/apps/tech-blog/src/assets/images/clip-path_1.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/clip-path_1.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$clip$2d$path_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/clip-path_1.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$clip$2d$path_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 533,
    height: 377,
    blurWidth: 8,
    blurHeight: 6,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/AOTf2tLIvuzv76O7x6q6w/T2993Y0/Xz8QCcn5uae2XFz9KLlpazopXh5eajjn3MysUAzdvevMC14+70pcnV5+Xg+fv8zdPO7vHwANng473Ex+3x9MLP1sTN0t7p78LN08nY4QCVqrGLf3LC09qTko2WjYOtwsuMf3OQn6MAhb/UZZ2twd/sj6yxj6anwdvntK6htsjPz6hst07u8wMAAAAASUVORK5CYII="
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/infix_to_prefix_1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/infix_to_prefix_1.10bcdu4r6ebsh.png");}),
"[project]/apps/tech-blog/src/assets/images/infix_to_prefix_1.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/infix_to_prefix_1.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$infix_to_prefix_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/infix_to_prefix_1.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$infix_to_prefix_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 716,
    height: 470,
    blurWidth: 8,
    blurHeight: 5,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAh0lEQVR42h2OQQ6CMBQFe/8rGd0bG1TEuGmiLEQjKKVS+C0kY2UxmdXkPSUieO8Zk5370iXa1i5ICChjDFprqurBTmdk2YH8VHDMC2znUNM0EWNExoi1PpX9YucEkRlVlmWqMm7XJ5vVlnVirw2X853mNaBC2vl/8H2kqT3vesB+Al0bGfzMDwFNlO80JpzOAAAAAElFTkSuQmCC"
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/vanilacss_vs_framework_1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/vanilacss_vs_framework_1.14k~0wqxcwn59.png");}),
"[project]/apps/tech-blog/src/assets/images/vanilacss_vs_framework_1.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/vanilacss_vs_framework_1.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vanilacss_vs_framework_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/vanilacss_vs_framework_1.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vanilacss_vs_framework_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1090,
    height: 576,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAfUlEQVR42iWNsQrCMBQA88H+gD8iroJLFxcFwUURdHRSUNBBxCK0RlqhSfOSdwY8Dm4847ynri2qivInRQhdroBZbipG0ytlLZzekbONXLbCbNhxmPeYxbphXFhuL2H3DDy+ieMqMBm07AuH+TSRexmQqGTzCsRDWyV6p/wAhmd2SIrk5iMAAAAASUVORK5CYII="
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/vanilacss_vs_framework_2.jpeg (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/vanilacss_vs_framework_2.0dh1v.vob1syg.jpeg");}),
"[project]/apps/tech-blog/src/assets/images/vanilacss_vs_framework_2.jpeg.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/vanilacss_vs_framework_2.jpeg (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vanilacss_vs_framework_2$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/vanilacss_vs_framework_2.jpeg (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vanilacss_vs_framework_2$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 318,
    height: 159,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1xk3PuLt/u54rQg//2Q=="
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/graph_1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/graph_1.0o4nqqbjfdiw-.png");}),
"[project]/apps/tech-blog/src/assets/images/graph_1.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/graph_1.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/graph_1.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 1978,
    height: 908,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAZUlEQVR42g3MSQqAIAAAQP//pujQJSk0DaKNIEJTy4XcznkeGPCFJLVXxseUby4JGREl67YBafwp3MGsdr5DpG6aGkJEB/DYcHBX7HUBz0sFuxb3eKKgVOUpW4j5VGplnAnOrv0HfWNUS35+U+0AAAAASUVORK5CYII="
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/graph_2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/graph_2.0t8oa7rfvgq_2.png");}),
"[project]/apps/tech-blog/src/assets/images/graph_2.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/graph_2.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/graph_2.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 2339,
    height: 1000,
    blurWidth: 8,
    blurHeight: 3,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAN0lEQVR42i3MUQoAIAgD0FFEZH1UEHX/kzZxwsOBOACYtClLQkyn5WGI0dFD03a49KjoUNXi2T4yHgEQh0ZLPwAAAABJRU5ErkJggg=="
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/graph_3.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/graph_3.04u3q7pdz6yw2.png");}),
"[project]/apps/tech-blog/src/assets/images/graph_3.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/graph_3.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/graph_3.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_3$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 992,
    height: 484,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAARElEQVR42lXNSwrAMAhF0ex/ufGD4ucVQwvNHTg66sJbd4OZERH4t2ZUFYgIIgJVhZndYLbd/YCBmXmDacC82Hufi18PikB+Gf7Y03cAAAAASUVORK5CYII="
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/graph_4.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/graph_4.0qlrxn2icvfzt.png");}),
"[project]/apps/tech-blog/src/assets/images/graph_4.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/graph_4.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_4$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/graph_4.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_4$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 858,
    height: 468,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAQklEQVR42mWMWwrAMAgEc//jxveHbquQQokwLLjDLrxXVWBm7L0nm8zsCusIRARVHcxsfj9BRBARI3ReQs+6+8cRHl0Qfa1/mX8gAAAAAElFTkSuQmCC"
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/graph_5.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/graph_5.096h2af9akv.a.png");}),
"[project]/apps/tech-blog/src/assets/images/graph_5.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/graph_5.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_5$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/graph_5.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_5$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 804,
    height: 434,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAUUlEQVR42lXNOwrAQAgE0L3/Hfdf7FbaKogTFBLIVDI+tLg7iAh7b8w5sdbK+ZwDEUEJwMxZttbQe8+lmSHyA7XWRPdeRP+BeBGnxxiJVRVvHhLmeTaNuBjIAAAAAElFTkSuQmCC"
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/vite_1.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/vite_1.0zbkvz_i1cpeu.png");}),
"[project]/apps/tech-blog/src/assets/images/vite_1.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/vite_1.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vite_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/vite_1.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vite_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 870,
    height: 408,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAb0lEQVR42iXM7QqDIBhA4S5EZ6yam5aorx+NgsHu/57Ogv09HJ7haA0JQq87OWwE9+I5T9zHEa01w1kr5+r5FOHbKu9tRezCw9xQSjEcpeCmmSqF/dJyikhKpBjx3v+HxRjSFXvviAg5Z5xzWGv5AYoZMTi9ofSAAAAAAElFTkSuQmCC"
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/assets/images/vite_2.png (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/vite_2.0kdyar.bmo3ca.png");}),
"[project]/apps/tech-blog/src/assets/images/vite_2.png.mjs { IMAGE => \"[project]/apps/tech-blog/src/assets/images/vite_2.png (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vite_2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/assets/images/vite_2.png (static in ecmascript, tag client)");
;
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vite_2$2e$png__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 740,
    height: 400,
    blurWidth: 8,
    blurHeight: 4,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAYAAACzzX7wAAAAj0lEQVR42gGEAHv/ANTn/f/q5cP/8d6h/+Ha9P/LxLr/o5aH/5WBdf+oopX/AL/S+/+8rqj/37N7/9jH7v+zqqT/loR3/6WEeP+Ve3D/APX0/v+9nOH/0qHH//bx+/+Nh4P/ODEz/zovL/89Mi3/AP/////r1vr/7Nb5//v7+/9/enz/IBwk/xkVHP8iGhn/nuddJCs2HBwAAAAASUVORK5CYII="
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/data/dummyPosts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dummyPosts",
    ()=>dummyPosts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$monorepo_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$monorepo_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/monorepo_1.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/monorepo_1.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$clip$2d$path_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$clip$2d$path_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/clip-path_1.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/clip-path_1.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$infix_to_prefix_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$infix_to_prefix_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/infix_to_prefix_1.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/infix_to_prefix_1.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vanilacss_vs_framework_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vanilacss_vs_framework_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/vanilacss_vs_framework_1.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/vanilacss_vs_framework_1.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vanilacss_vs_framework_2$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vanilacss_vs_framework_2$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/vanilacss_vs_framework_2.jpeg.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/vanilacss_vs_framework_2.jpeg (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/graph_1.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/graph_1.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/graph_2.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/graph_2.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/graph_3.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/graph_3.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_4$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/graph_4.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/graph_4.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_5$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/graph_5.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/graph_5.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vite_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vite_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/vite_1.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/vite_1.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vite_2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vite_2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/apps/tech-blog/src/assets/images/vite_2.png.mjs { IMAGE => "[project]/apps/tech-blog/src/assets/images/vite_2.png (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
;
;
;
;
;
;
;
;
;
;
;
;
var dummyPosts = [
    // Vite가 뭐길래
    {
        id: "Vite가 뭐길래",
        category: "Developments",
        tag: [
            "Web",
            "Frontend",
            "React",
            "DevTool"
        ],
        title: "Vite가 뭐길래",
        subTitle: "리액트는 CRA가 근본인줄 알고 사용하고 있었는데..",
        author: "Sean Lee",
        date: "April 18, 2026",
        readDuration: 10,
        thumbnail: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vite_2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vite_2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        content: '\n      <p>리액트로 작업 중에 뜬금없이 이런 에러가 떴다. </p>\n      <div class="Enhancement" data-align-center=>\n        <div class="Enhancement-item">\n          <figure class="Figure">\n            <div class="Figure-media">\n              <picture>\n                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src='.concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vite_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vite_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"], '>\n              </picture>\n            </div>\n            <div class="Figure-content">\n              <figcaption class="Figure-caption">\n                CRA 사용중 의존성 문제 발생\n              </figcaption>\n            </div>\n          </figure>\n        </div>\n      </div>\n      <p>\n        그동안 자바스크립트로 작업해오다가 타입스크립트를 도입했는데 타입스크립트와 react-scripts가 서로 버전호환이 안된다는 것이다. 정확히는 react-scripts가 타입스크립트의 최신 버전을 따라가지 못한다는 말이었다.\n      </p>\n      <br>\n      <h2>\n        <p>react-scripts는 무엇인가?</p>\n      </h2>\n      <p>\n        react-scripts는 CRA(Create React App) 시스템의 총책임자다. CRA는 사용자가 복잡한 설정을 신경쓰지 않게 하려고, 빌드에 필요한 모든 도구(Webpack, Babel, ESLint 등)를 react-scripts라는 하나의 패키지 안에 다 집어넣었다. 흔히 개발 서버를 실행하기 위해 npm start를 칠 때, react-scripts가 내부의 Webpack을 깨워 서버를 돌리고 코드를 변환한다.\n      </p>\n      <p>\n        위에서 나온 오류는 그런 react-scripts가 최신 타입스크립트 버전인 typescript@6.0.2는 지원할 수 없다고 에러를 낸 것이다. \n      </p>\n      <br>\n      <h2>\n        <p>CRA는 오래된 도구이다</p>\n      </h2>\n      <p>\n        리액트를 만든 페이스북의 오픈소스 팀에의해 개발된 Create React App(CRA)는 2016년 7월 공개되었다. CRA는 출시 당시 리액트 개발의 진입장벽을 낮추는 혁신적인 도구였다. 이전에는 리액트 프로젝트를 시작하려면 Webpack, Babel, 테스트 도구 등을 일일이 설정해야했으나 CRA는 단 한 번의 명령어로 리액트 프로젝트를 시작할 수 있게끔 만들었다.\n      </p>\n      <p>\n        그러나 CRA는 한계를 맞이했다. 사용자에게 편리함을 주기위해 Webpack, Babel 등 수많은 도구를 한 번에 담고 있었던 react-scripts는 내부 도구 중 하나만 업데이트되어도 전체 시스템과의 호환성을 검토해야했다. 이 과정이 너무 무거워지기 시작한 것이다. 여기에 더해, 유연성이 부족하다는 한계점도 존재했다. 사용자가 설정을 조금만 바꾸려고 해도 eject를 통해 모든 설정을 밖으로 꺼내야했고, 한 번 꺼내면 CRA의 편리한 업데이트 혜택을 받을 수 없었다.\n      </p>\n      <p>\n        때마침 차세대 도구들이 등장했다. Vite 같은 도구들은 브라우저의 최신 기능(Native ESM)과 초고속 엔진(esbuild)을 사용하여 Webpack 기반인 CRA보다 수십 배 빠른 속도를 보여주었다. 또한 리액트 팀은 단순한 UI 라이브러리, 클라이언트 사이드 렌더링에서 벗어나 서버 사이드 렌더링이나 서버 컴포넌트 같은 기능을 강조하기 시작했다. 하지만 CRA는 클라이언트 사이드 렌더링에만 초점이 맞춰져있어 한계가 있었고 자연스럽게 Next.js나 Remix 같은 프레임워크가 떠올랐다.\n      </p>\n      <p>\n        <b>너무 무겁고, 너무 느리고, 최신 리액트의 방향성과 맞지 않은</b> CRA는 그렇게 2022년 4월 사실상 마지막 안정화 버전인 react-scripts@5.0.1을 마지막으로 업데이트가 중단되었으며, 2023년 초부터 리액트 공식 문서에서 "새 프로젝트를 시작할 때 CRA를 사용하라"는 문구는 삭제되었고, 대신 Next.js나 Remix같은 프레임워크를 권장하기 시작하며 은퇴를 맞이했다. \n      </p>\n      <br>\n      <h2>\n        <p>CRA의 완벽한 대체제 Vite</p>\n      </h2>\n      <div class="Enhancement" data-align-center=>\n        <div class="Enhancement-item">\n          <figure class="Figure">\n            <div class="Figure-media">\n              <picture>\n                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=').concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vite_2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vite_2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"], '>\n              </picture>\n            </div>\n            <div class="Figure-content">\n              <figcaption class="Figure-caption">\n                Vite와 창시자 에반 유\n              </figcaption>\n            </div>\n          </figure>\n        </div>\n      </div>\n      <p>\n        Vite(비트)는 Vue.js의 창시자, 에반 유(Evan You)에 의해 개발되어 2020년 4월에 공개되었으며 프랑스어로 빠르다를 의미한다. 기존 Webpack 기반의 개발 환경이 프로젝트가 커질수록 너무 느려지는 것에 불만이었던 그는 브라우저의 최신 기능인 Native ESM을 활용해 "파일이 수천 개여도 즉시 뜨는 개발 서버"를 목표로 Vite롤 만들었다.\n      </p>\n      <p>\n        Vite는 react-scripts 패키지 하나 안에 모든 것을 담은 CRA와는 다르게 <b>가벼운 코어엔진</b>에 필요한 기능을 플러그인으로 끼워 맞추는 조립식 구조를 가진다. Vite는 플러그인 기반이며 CRA의 react-scripts가 수행하던 "리액트 코드 해석" 역할은 Vite에서 @vitejs/plugin-react라는 별도의 플러그인이 담당한다.\n      </p>\n      <table>\n        <tr>\n          <th>기능</th><td>CRA(react-scripts)</td><td>Vite</td>\n        </tr>\n        <tr>\n          <th>핵심 엔진</th><td>Webpack (번들러)</td><td>Vite Core (개발 서버 및 빌드 파이프라인 제어)</td>\n        </tr>\n        <tr>\n          <th>컴파일러</th><td>Babel (JS/JSX 변환)</td><td>esbuild (초고속 변환 엔진)</td>\n        </tr>\n        <tr>\n          <th>React 지원</th><td>내장됨 (설정 변경 불가)</td><td>@vitejs/plugin-react (공식 플러그인)</td>\n        </tr>\n        <tr>\n          <th>프로덕션 빌드</th><td>Webpack</td><td>Rollup (최적화된 배포용 빌드)</td>\n        </tr>\n      </table>\n      <br>\n      <p>\n        Vite가 CRA보다 압도적인 빠른 속도를 자랑하는 이유에는 둘이 사용하는 엔진의 차이점에 있다. CRA가 사용하는 Webpack 엔진은 서버를 띄울 때 모든 파일을 다 읽어야 한다. 반면에 Vite는 esbuild라는 초고속 엔진과 브라우저의 Native ESM을 사용하여 일단 서버부터 띄우고, 브라우저가 요청하는 파일만 그때그때 변환해서 던져주므로 프로젝트 크기의 상관없이 일관되게 빠른 속도를 보여준다.\n      </p>\n      <br>\n      <h2>\n        <p>CRA, 이제는 놓아줄 때</p>\n      </h2>\n      <p>\n        리액트를 처음 시작할 때 Node.js를 설치하고 npx create-react-app으로 리액트 프로젝트를 생성하는 것이라고 배웠고 그게 근본이라고 생각하고 여태까지 사용해왔었다. 하지만 이제는 여러가지 이유에서 CRA를 만든 사람들 조차 CRA는 사용하지말라고 권고할 정도이니 이제는 CRA를 놓아주고 Vite 또는 Next를 사용해 볼 생각이다.\n      </p>\n    ')
    },
    /*
  {
    id: "에라토스테네스의 체",
    category: "Algorithm",
    tag: ["Math", "Prime Number"],
    title: "에라토스테네스의 체",
    subTitle: "",
    author: "Sean Lee",
  },
  {
    id: "그리디",
    category: "Algorithm",
    tag: ["Greedy"],
    title: "그리디",
    subTitle: "",
    author: "Sean Lee",
  },
  {
    id: "이진 탐색",
    category: "Algorithm",
    tag: ["Binary Search"],
    title: "이진 탐색",
    subTitle: "",
    author: "Sean Lee",
  },
  {
    id: "Heap의 기본",
    category: "Algorithm",
    tag: ["Data Structure", "Heap"],
    title: "Heap의 기본",
    subTitle: "",
    author: "Sean Lee",
  },
  {
    id: "Stack의 기본",
    category: "Algorithm",
    tag: ["Data Structure", "Stack"],
    title: "Stack의 기본",
    subTitle: "",
    author: "Sean Lee",
  },
  {
    id: "DP(Bottom-up)",
    category: "Algorithm",
    tag: ["Dynamic Programming"],
    title: "DP(Bottom-up)",
    subTitle: "",
    author: "Sean Lee",
  },
  {
    id: "DP(Top-down)",
    category: "Algorithm",
    tag: ["Dynamic Programming"],
    title: "DP(Top-down)",
    subTitle: "",
    author: "Sean Lee",
  },
  {
    id: "그래프의 탐색(BFS, DFS)",
    category: "Algorithm",
    tag: ["Graph"],
    title: "그래프의 탐색(BFS, DFS)",
    subTitle: "",
    author: "Sean Lee",
  },*/ // 그래프의 구현
    {
        id: "그래프의 구현",
        category: "Algorithm",
        tag: [
            "Graph"
        ],
        title: "그래프의 구현",
        subTitle: "가장 널리 쓰이는 자료구조이자 알고리즘, 그래프의 개념과 구현 방법을 알아보자",
        author: "Sean Lee",
        date: "March 22, 2026",
        readDuration: 8,
        thumbnail: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        content: '\n      <p>\n        그래프는 데이터를 나타내는 하나의 방법, 자료구조 중 하나이다. 이 자료구조의 특징은 <b>데이터들의 연결</b>을 나타낸다는 것이다. 네트워크를 생각하면 편할 것 같다. 일상 속에서는 지하철 노선도가 정말 딱 들어맞는 그래프의 예시이다. \n      </p>\n      <div class="Enhancement" data-align-center=>\n        <div class="Enhancement-item">\n          <figure class="Figure">\n            <div class="Figure-media">\n              <picture>\n                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src='.concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"], '>\n              </picture>\n            </div>\n            <div class="Figure-content">\n              <figcaption class="Figure-caption">\n                그래프의 대표적인 예시, 네트워크와 지하철 노선도\n              </figcaption>\n            </div>\n          </figure>\n        </div>\n      </div>\n      <br>\n      <h2>\n        <p>그래프를 이루는 것, 그래프의 구성</p>\n      </h2>\n      <p>\n        그래프는 노드(node 또는 vertex)와 간선(edge)으로 구성되어진다. 노드는 데이터가 위치한 지점 그 자체이고 간선은 해당 노드에서 다른 노드를 가리키는 포인터이다. 이해를 돕기 위해 아래 예시를 보자.\n      </p>\n      <div class="Enhancement" data-align-center=>\n        <div class="Enhancement-item">\n          <figure class="Figure">\n            <div class="Figure-media">\n              <picture>\n                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=').concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_2$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_2$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"], '>\n              </picture>\n            </div>\n            <div class="Figure-content">\n              <figcaption class="Figure-caption">\n                노드와 간선\n              </figcaption>\n            </div>\n          </figure>\n        </div>\n      </div>\n      <p>\n        노드1과 간선1이 있다고 하자. 간선1은 노드1으로부터 나오고 노드2를 가리키고 있다면 노드1에서 간선1을 타면 노드2로 갈 수 있는 것이다. 그래서 그래프는 여러 개의 노드와 그 노드들 사이를 서로 연결하고 있는 간선들이 존재하여 전체적으로 네트워크의 형상을 띄고있다.\n      </p>\n      <br>\n      <h2>\n        <p>그래프의 표현</p>\n      </h2>\n      <p>\n        그래프가 무엇인지는 알았다. 그렇다면 이 그래프를 코드 상으로 어떻게 표현하여 사용할 수 있을까? 크게 두 가지 방법이 있다.\n      </p>\n      <ol>\n        <li>인접 행렬(Adjacency Matrix)</li>\n        <li>인접 리스트(Adjacency List)</li>\n      </ol>\n      <p>\n        예시를 통해 알아보자. 먼저 우리가 표현하고 싶은 그래프는 다음과 같다.\n      </p>\n      <div class="Enhancement" data-align-center=>\n        <div class="Enhancement-item">\n          <figure class="Figure">\n            <div class="Figure-media">\n              <picture>\n                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=').concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_3$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_3$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"], '>\n              </picture>\n            </div>\n            <div class="Figure-content">\n              <figcaption class="Figure-caption">\n                그래프 예시\n              </figcaption>\n            </div>\n          </figure>\n        </div>\n      </div>\n      <p>\n        위 그래프를 첫 번째 방법, 인접 행렬로 표현하면 다음과 같이 표현할 수 있다. 1은 서로 간선으로 연결되어있음을 뜻하고 0은 연결되지 않았음을 의미한다.\n      </p>\n      <div class="Enhancement" data-align-center=>\n        <div class="Enhancement-item">\n          <figure class="Figure">\n            <div class="Figure-media">\n              <picture>\n                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=').concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_4$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_4$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"], '>\n              </picture>\n            </div>\n            <div class="Figure-content">\n              <figcaption class="Figure-caption">\n                인접 행렬\n              </figcaption>\n            </div>\n          </figure>\n        </div>\n      </div>\n      <p>\n        코드로는 다음과 같이 작성할 수 있다. (편의상 a, b, c, d, e를 0, 1, 2, 3, 4로 사용했다)\n      </p>\n      <div class="CodeBlock">\n        <div class="CodeBlock_header">\n          <span>C++</span>\n        </div>\n        <pre><code>bool edge[5][5];\n\n// a <-> b\nedge[0][1] = true;\nedge[1][0] = true;\n// a <-> c\nedge[0][2] = true;\nedge[2][0] = true;\n// a <-> d\nedge[0][3] = true;\nedge[3][0] = true;\n// b <-> d\nedge[1][3] = true;\nedge[3][1] = true;\n// c <-> e\nedge[2][4] = true;\nedge[4][2] = true;</code></pre>\n      </div>\n      <p>\n        다음으로, 위의 그래프를 인접 리스트 방식으로 나타내면 다음과 같다.\n      </p>\n      <div class="Enhancement" data-align-center=>\n        <div class="Enhancement-item">\n          <figure class="Figure">\n            <div class="Figure-media">\n              <picture>\n                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=').concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_5$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$graph_5$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"], '>\n              </picture>\n            </div>\n            <div class="Figure-content">\n              <figcaption class="Figure-caption">\n                인접 리스트\n              </figcaption>\n            </div>\n          </figure>\n        </div>\n      </div>\n      <p>\n        이를 코드로 표현하면 다음과 같다.\n      </p>\n      <div class="CodeBlock">\n        <div class="CodeBlock_header">\n          <span>C++</span>\n        </div>\n        <pre><code>vector<int> edge[5];\n\n// a <-> b\nedge[0].push_back(1);\nedge[1].push_back(0);\n// a <-> c\nedge[0].push_back(2);\nedge[2].push_back(0);\n// a <-> d\nedge[0].push_back(3);\nedge[3].push_back(0);\n// b <-> d\nedge[1].push_back(3);\nedge[3].push_back(1);\n// c <-> e\nedge[2].push_back(4);\nedge[4].push_back(2);</code></pre>\n      </div>\n      <br>\n      <h2>\n        <p>\n          두 가지 구현 방식의 장단점 비교\n        </p>\n      </h2>\n      <p>\n        두 가지 구현 방식(인접 행렬, 인접 리스트)은 장단점이 명확하다. 먼저 인접 행렬의 장단점을 살펴보자.\n      </p>\n      <p>\n        인접 행렬의 장점은 다음과 같다.\n      </p>\n      <ul>\n        <li><b>‘특정 두 노드가 연결되어있는가’를 O(1) 속도로 알아낼 수 있다.</b><br>\n        이게 인접 행렬의 가장 강력한 무기이다. 예를 들어, a와 b노드가 연결되어있는가는 단순히 edge[a][b]에 접근하여 단번에 알아낼 수 있다.</li>\n        <li><b>사람이 보기에 편하다</b><br>\n        이걸 장점으로 보기에는 애매하지만, 사람에게는 장황하게 늘어져 표현된 인접 리스트보다는 인접 행렬이 눈에 더 잘 들어오는 것 같다.</li>\n      </ul>\n      <p>\n        인접 행렬의 단점은 다음과 같다.\n      </p>\n      <ul>\n        <li><b>메모리 낭비</b><br>\n        인접 행렬의 가장 큰 단점이다. 인접 행렬은 연결된 정보(1)뿐만 아니라 연결이 안되어있다는 정보(0)까지도 정보 포함하기때문에 무조건 NxN 만큼의 이차원 배열을 필요로 한다. 이것은 심각한 메모리 낭비를 초래한다.</li>\n      </ul>\n      <p>\n        인접 리스트의 장단점을 살펴보자. 인접 리스트의 장단점은 인접 행렬의 정반대이다.\n      </p>\n      <p>\n        인접 리스트의 장점은 다음과 같다.\n      </p>\n      <ul>\n        <li><b>메모리 낭비가 적다.</b><br>\n        인접 리스트는 오직 연결된 노드만을 리스트에 추가하기에 인접 행렬에 비해 메모리 낭비가 적다.</li>\n        <li><b>한 노드에 연결된 노드들을 전부 탐색하는 것은 인접 리스트가 유리하다.</b><br>\n        예를 들어, ‘a에 연결된 노드들을 전부 나열하시오’와 같은 문제는 인접 리스트로 해결하면 그저 edge[a]에 들어있는 내용물을 쭉 출력하면 그만이다. 하지만 인접 행렬같은 경우에는 edge[a][a]~edge[a][e]까지 전부 순회하며 1인지 0인지 확인해야한다. </li>\n      </ul>\n      <p>\n        인접 리스트의 단점은 인접 행렬의 장점을 생각하면 되므로 생략한다.\n      </p>\n      <br>\n      <h2>\n        <p>\n          결론: 언제 무엇을 사용할까?\n        </p>\n      </h2>\n      <p>\n        그래프의 두 가지 구현 방식을 알아보았다. 그렇다면 언제 어떤 구현 방식을 사용하면 좋을까?\n      </p>\n      <ul>\n        <li>그래프의 밀도가 낮은 경우 (간선의 수가 적은 경우)<br>\n        -> <b>인접 리스트</b>를 사용하는 것이 유리하다</li>\n        <li>그래프의 밀도가 높은 경우 (간선의 수가 많은 경우)<br>\n        -> <b>인접 행렬</b>을 사용하는 것이 유리하다</li>\n      </ul>\n      <p>\n        참고로 그래프는 보통 밀도가 낮다고 한다. \n      </p>\n    ')
    },
    // 바닐라 CSS vs CSS 프레임워크
    {
        id: "바닐라 CSS vs CSS 프레임워크",
        category: "Web",
        tag: [
            "CSS"
        ],
        title: "바닐라 CSS vs CSS 프레임워크",
        subTitle: "순수(Vanilla) CSS와 프레임워크의 대비: 핵심 차이점과 장단점 분석",
        author: "Sean Lee",
        date: "March 14, 2026",
        readDuration: 8,
        thumbnail: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vanilacss_vs_framework_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vanilacss_vs_framework_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        content: '\n      <p>\n        웹 페이지를 보기 좋게 만들기 위해 빠질 수 없는 것이 CSS인데 이전에는 CSS를 직접 작성해서 스타일링을 했어야 하는 반면에 현대적인 개발 방법론으로 CSS 프레임워크가 제시되었고 현재는 주류라고 할 수 있을 정도로 CSS 프레임워크는 많은 곳에 사용되고 있는 것 같다. Bootstrap, Tailwind CSS 등 모두 한 번쯤은 들어본 CSS 프레임워크이며 이 말은 곧 CSS 프레임워크가 그만큼 많은 사람들에게 사용되어지고 있다는 것을 의미하기도 한다.\n      </p>\n      <div class="Enhancement" data-align-center=>\n        <div class="Enhancement-item">\n          <figure class="Figure">\n            <div class="Figure-media">\n              <picture>\n                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src='.concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vanilacss_vs_framework_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vanilacss_vs_framework_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"], '>\n              </picture>\n            </div>\n            <div class="Figure-content">\n              <figcaption class="Figure-caption">\n                바닐라 CSS, Tailwind CSS, Bootstrap\n              </figcaption>\n            </div>\n          </figure>\n        </div>\n      </div>\n      <h2>\n        <p>CSS 프레임 워크란?</p>\n      </h2>\n      <p>\n        CSS 프레임워크란 웹 디자이너나 개발자가 웹사이트를 더 쉽고 빠르게 구축할 수 있도록 <b>미리 정의된 CSS 스타일, 레이아웃 규칙, 그리고 클래스들의 모음</b>이다. \n      </p>\n      <p>\n        CSS 프레임워크에는 사용하는 방식에 따라 크게 두 가지 유형으로 나뉜다. \n      </p>\n      <ol>\n        <li>\n          구성 요소 중심(Component-based): 미리 완성된 UI 컴포넌트 제공한다\n          <ul>\n            <li>예시: Bootstrap, Bulma</li>\n          </ul>\n        </li>\n        <br>\n        <li>\n          유틸리티 중심(Utility-first): 작은 단위의 스타일 클래스들을 조합해 직접 디자인을 쌓아 올린다\n          <ul>\n            <li>예시: Tailwind CSS</li>\n          </ul>\n        </li>\n      </ol>\n      <br>\n      <h2>\n        <p>Bootstrap 사용 예시</p>\n      </h2>\n      <p>\n        Bootstrap은 구성 요소 중심의 CSS 프레임워크로써 미리 완성된 UI 컴포넌트를 제공한다. 마치 \'버튼은 이렇게 생겨야 해\', \'모달창은 이런 모양이야\'라고 이미 정의된 컴포넌트를 제공하는 것과 같다. Bootstrap의 코드예시는 아래와 같다.\n      </p>\n      <p>\n        <b>버튼</b>\n      </p>\n      <div class="CodeBlock">\n        <div class="CodeBlock_header">\n          <span>Bootstrap</span>\n        </div>\n        <pre><code>&lt;!-- 파란색 버튼 --&gt;\n&lt;button type="button" class="btn btn-primary">저장하기&lt;/button>\n\n&lt;!-- 빨간색 테두리 버튼 -->\n&lt;button type="button" class="btn btn-outline-danger">삭제하기&lt;/button>\n\n&lt;!-- 큰 사이즈 노란색 버튼 -->\n&lt;button type="button" class="btn btn-warning btn-lg">로그인&lt;/button></code></pre>\n      </div>\n      <p>\n        <b>카드 레이아웃</b>\n      </p>\n      <div class="CodeBlock">\n        <div class="CodeBlock_header">\n          <span>Bootstrap</span>\n        </div>\n        <pre><code>&lt;div class="card" style="width: 18rem;">\n  &lt;img src="https://placeholder.com" class="card-img-top" alt="이미지">\n  &lt;div class="card-body">\n    &lt;h5 class="card-title">부트스트랩 카드&lt;/h5>\n    &lt;p class="card-text">클래스 몇 개만 추가하면 이런 박스 디자인이 뚝딱 완성됩니다.&lt;/p>\n    &lt;a href="#" class="btn btn-primary">자세히 보기&lt;/a>\n  &lt;/div>\n&lt;/div></code></pre>\n      </div>\n      <br>\n      <h2>\n        <p>Tailwind CSS 사용 예시</p>\n      </h2>\n      <p>\n        Tailwind CSS는 유틸리티 중심 CSS 프레임워크로써 작은 단위의 스타일 클래스들을 조합해서 직접 디자인을 쌓아 올린다. Tailwind CSS는 \'버튼\'을 주지 않고, \'파란색\', \'둥근 모서리\', \'그림자\' 같은 원자 단위의 클래스를 제공한다.\n      </p>\n      <p>\n        <b>버튼</b>\n      </p>\n      <div class="CodeBlock">\n        <div class="CodeBlock_header">\n          <span>Tailwind CSS</span>\n        </div>\n        <pre><code>&lt;!-- 파란색, 둥근 모서리, 글자 흰색, 마우스 올리면(hover) 진해짐 -->\n&lt;button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">\n  저장하기\n&lt;/button>\n\n&lt;!-- 테두리만 있는 빨간색 버튼 -->\n&lt;button class="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">\n  삭제하기\n&lt;/button></code></pre>\n      </div>\n      <p>\n        <b>카드 레이아웃</b>\n      </p>\n      <div class="CodeBlock">\n        <div class="CodeBlock_header">\n          <span>Tailwind CSS</span>\n        </div>\n        <pre><code>&lt;div class="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200">\n  &lt;img class="w-full" src="https://placeholder.com" alt="이미지">\n  &lt;div class="px-6 py-4">\n    &lt;div class="font-bold text-xl mb-2">테일윈드 카드&lt;/div>\n    &lt;p class="text-gray-700 text-base">\n      클래스가 좀 길어 보이죠? 하지만 CSS 파일을 따로 열지 않고 여기서 모든 디자인을 끝낼 수 있습니다.\n    &lt;/p>\n  &lt;/div>\n  &lt;div class="px-6 pt-4 pb-2">\n    &lt;button class="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">자세히 보기&lt;/button>\n  &lt;/div>\n&lt;/div></code></pre>\n      </div>\n      <br>\n      <h2>\n        <p>CSS 프레임워크 사용의 장단점 정리</p>\n      </h2>\n      <p>\n        그렇다면 CSS 프레임워크를 사용하는 것이 무조건 좋은 것인가? CSS 프레임워크를 사용하는 데에 있어 장단점과 프레임워크별 자유도의 정도 차이를 알아보자.\n      </p>\n      <p>\n        <b>주요 장점</b>\n      </p>\n      <ul>\n        <li><b>개발 속도 향상</b><br>\n        버튼, 내비게이션 바, 카드 등 자주 쓰이는 UI 구성 요소가 이미 디자인되어 있어 가져다 쓰기만 하면 된다.</li>\n        <li><b>반응형 디자인 지원</b><br>\n        복잡한 화면 레이아웃(그리드 시스템)을 기본으로 제공하여 모바일, 태블릿, PC 등 다양한 기기에서 화면이 자동으로 조절되도록 돕는다.</li>\n        <li><b>일관성 유지</b><br>\n        여러 개발자가 협업할 때 정해진 클래스 명칭과 규칙을 사용하므로 전체적인 디자인 스타일이 통일된다.</li>\n      </ul>\n      <p>\n        <b>단점(고려해야할 점)</b>\n      </p>\n      <ul>\n        <li><b>학습 비용</b><br>\n        프레임워크마다 고유한 클래스 명칭이나 사용법을 새로 익혀야 한다.</li>\n        <li><b>디자인의 유사성</b><br>\n        부트스트랩 같은 프레임워크를 그대로 사용하면 웹사이트들이 서로 비슷해 보일 수 있다.</li>\n        <li><b>무거운 파일 크기</b><br>\n        사용하지 않는 스타일까지 포함되어 웹페이지 로딩 속도에 영향을 줄 수 있다.</li>\n      </ul>\n      <p>\n        추가적으로 나는 CSS 프레임워크의 사용에 대하여 다음과 같은 의문점이 떠올랐다. "CSS 프레임워크를 사용하면 Vanila CSS를 사용하는 것 만큼의 자유도를 얻기 어려운가?". Vanila CSS를 사용하면 개발자가 0부터 100까지 말그대로 CSS를 직접 작성하는 것이기 때문에 당연히 CSS의 사용률을 100%까지 끌어올릴 수 있다. 반면 CSS 프레임워크는 CSS를 바탕으로 재구성된 2차 가공품이다. 그러면 CSS 프레임워크의 사용만으로는 CSS의 사용률을 100%까지 끌어올릴 수는 없는 것일까?\n      </p>\n      <p>\n        이에 관해 조사해본 결과, 정답은 <b>"CSS 프레임워크마다 다르다"</b>이다. 현대 웹 개발에서 가장 널리 사용되는 CSS 프레임워크 두 가지, Bootstrap과 Tailwind CSS를 놓고 이야기 해보자.\n      </p>\n      <p>\n        앞서 말했듯이 Bootstrap은 컴포넌트 기반으로 동작한다. 즉, 이미 만들어진 완성품을 주기 때문에 Bootstrap은 그 자유도가 상대적으로 낮다. 자잘한 커스터마이징(색상 변경, 크기 조절)은 가능하지만, 뼈대가 워낙 견고해서 대충 만들면 일명 Bootstrap-look이 강하게 나타난다. 또한 Bootstrap은 태생적으로 \'규격화된 틀\'을 제공하는 것이 목적이기 때문에, 아무리 숙련된 Bootstrap 전문가라도 Vanila CSS 만큼의 완전한 자유도를 누리기는 구조적으로 어렵다. \n      </p>\n      <p>\n        반면, 완성품을 제공해주는 Bootstrap과 다르게 Tailwind CSS는 \'재료\'를 제공한다. 그렇기에 자유도가 Vanila CSS를 사용하는 것과 거의 동일하다고 할 수 있다. 이론적으로는 Vanila CSS가 0.1% 더 자유롭지만(완전 새로운 속성 정의 등), 실무에서는 Tailwind CSS 프레임워크가 제공하는 수치만으로도 99% 이상의 디자인을 구현할 수 있다.\n      </p>\n      <br>\n      <h2>\n        <p>번외: MUI (리액트 UI 라이브러리)</p>\n      </h2>\n      <div class="Enhancement" data-align-center=>\n        <div class="Enhancement-item">\n          <figure class="Figure">\n            <div class="Figure-media">\n              <picture>\n                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src=').concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vanilacss_vs_framework_2$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$vanilacss_vs_framework_2$2e$jpeg__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"], '>\n              </picture>\n            </div>\n            <div class="Figure-content">\n              <figcaption class="Figure-caption">\n                MUI (리액트 전용 UI 라이브러리)\n              </figcaption>\n            </div>\n          </figure>\n        </div>\n      </div>\n      <p>\n        엄밀히 말하면 CSS 프레임워크는 아니지만, 비슷한 용도로 사용되는 MUI(구: Material UI)가 있다. MUI는 엄밀히 말해 CSS 프레임워크라기보다 \'UI 컴포넌트 라이브러리\'이다. 주요한 특징은 다음과 같다.\n      </p>\n      <ul>\n        <li><b>컴포넌트 단위</b>\n        단순히 디자인(CSS)만 주는 게 아니라, 클릭하면 열리는 메뉴, 입력창의 애니메이션 등 기능(JS)이 포함된 완성된 부품을 통째로 가져다 쓴다.</li>\n        <li><b>React 전용</b>\n        MUI는 리액트 환경에서만 돌아간다.</li>\n        <li><b>구글의 디자인 철학</b>\n        구글이 만든 \'Material Design\' 가이드를 코드로 구현해 놓은 것이라서 특유의 "구글스러운" 느낌이 강하게 박혀 있다.</li>\n      </ul>\n    ')
    },
    // 중위 표기식을 후위 표기식으로 변경하기
    {
        id: "중위 표기식을 후위 표기식으로 변경하기",
        category: "Algorithm",
        tag: [
            "Stack",
            "String"
        ],
        title: "중위 표기식을 후위 표기식으로 변경하기",
        subTitle: "스택 자료구조를 활용하여 중위 표기식을 후위 표기식으로 변경하는 방법",
        author: "Sean Lee",
        date: "March 6, 2026",
        readDuration: 8,
        thumbnail: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$infix_to_prefix_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$infix_to_prefix_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        content: '\n      <p>\n        중위 표기식이란 사람이 가장 익숙하게 사용하는 방식으로 연산자가 피연산자 가운데에 위치한다. 후위 표기식은 연산자가 피연산자 뒤에 위치하는 식으로 컴퓨터에게 있어서, 스택 구조를 이용해 왼쪽부터 순서대로 계산할 수 있어 매우 효율적이라는 점이 특징이다.\n      </p>\n      <div class="Enhancement" data-align-center=>\n        <div class="Enhancement-item">\n          <figure class="Figure">\n            <div class="Figure-media">\n              <picture>\n                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src='.concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$infix_to_prefix_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$infix_to_prefix_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"], ">\n              </picture>\n            </div>\n            <div class=\"Figure-content\">\n              <figcaption class=\"Figure-caption\">\n                중위 표기식과 후위 표기식\n              </figcaption>\n            </div>\n          </figure>\n        </div>\n      </div>\n      <p>\n        중위 표기식을 후위 표기식으로 변환하기 위해서는 보통 스택이라는 자료구조를 사용한다. \n      </p>\n      <h2>\n        <p>변환 규칙</p>\n      </h2>\n      <p>\n        구체적으로 중위 표기식을 후위 표기식으로 변환하는 규칙은 다음과 같다.\n      </p>\n      <ol>\n        <li><b>피연산자 (숫자 or 문자)</b><br>\n        피연산자를 만나면 스택을 거치지 않고 즉시 출력한다\n        </li>\n        <li><b>여는 괄호 '('</b><br>\n        여는 괄호는 무조건 스택에 push 한다\n        </li>\n        <li><b>닫는 괄호 ')'</b><br>\n        여는 괄호 '('를 만날 때까지 스택 내의 모든 연산자를 pop 하여 출력한다.\n        </li>\n        <li><b>그 외 연산자 +, -, *, /</b><br>\n        스택의 top과 현재 연산자의 우선순위를 비교한다.<br>\n          <ol>\n            <li>스택의 top > 현재 연산자 -> top은 pop하고 출력, 현재 연산자는 push</li>\n            <li>스택의 top <= 현재 연산자 -> 현재 연산자를 push만</li>  \n          </ol>\n        </li>\n      </ol>\n      <br>\n      <h2>\n        <p>왜 이런 규칙이 가능한가?</p>\n      </h2>\n      <p>\n        상기된 규칙이 모든 상황에서 통하는 이유는 후위 표기식을 실행하는 방식에 있다. 후위 표기식을 통해 계산을 하는 과정 자체는 매우 간단한 규칙을 따른다. 바로 <b>'연산자를 만나면 앞의 피연산자 2개를 가지고 연산을 행한다'</b>이다. \n      </p>\n      <p>\n        그렇다면 자연스럽게 후위 표기식에서의 <b>연산자의 등장 순서는 곧 연산자의 실행 순서</b>이다. 다시 말해 후위 표기식에서의 연산자는 중위 표기식에서의 연산자 우선 순위에 맞게 나열되어 있어야 한다.\n      </p>\n      <p>\n        예시를 통해 살펴보자. 다음은 중위 표기식의 한 예이다.\n      </p>\n      <ul>\n        2 * (3 + 8 / 4) - 5\n      </ul>\n      <p>\n        먼저, 위의 식에서 사용된 연산자를 분석해보자. 사용된 연산자는 앞에서부터 * + / - 이다. 이를 피연산자와 함께 써보면 다음과 같다.\n      </p>\n      <ul>\n        <li>2 * 뒷내용</li>\n        <li>3 + 뒷내용</li>\n        <li>8 / 4</li>\n        <li>앞내용 - 5</li>\n      </ul>\n      <p>\n        이 4개의 연산자를 연산자 우선 순위를 고려한 실행 순서대로 다시 작성하면 다음과 같다.\n      </p>\n      <ol>\n        <li>8 / 4</li>\n        <li>3 + 뒷내용</li>\n        <li>2 * 뒷내용</li>\n        <li>앞내용 - 5</li>\n      </ol>\n      <p>\n        앞서 말했듯이 후위 표기식에서의 연산자 등장 순서는 중위 표기식에서의 연산자 우선 순위와 동일해야 한다. 위 예시에서 첫 번째 연산자( '/' )는 후위 표기식에서 모든 연산자 중 가장 첫 번째로 등장해야한다. 다른 말로, 위의 순서대로 연산자가 나타나야 한다. 즉, 후위 표기식에서 연산자만큼은 다음의 순서로 나타나야 한다.\n      </p>\n      <ul>\n        / + * -\n      </ul>\n      <p>\n        주어진 사실들을 바탕으로 앞선 예시를 후위 표기식으로 차례 차례 조합하면 다음과 같다.\n      </p>\n      <ol>\n        <li>8 4 /</li>\n        <li>3 8 4 / +</li>\n        <li>2 3 8 4 / + *</li>\n        <li>2 3 8 4 / + * 5 -</li>\n      </ol>\n      <p>\n        여태까지의 분석 내용과 기존의 변환 규칙을 비교해보면 왜 해당 규칙이 모든 상황에서 만족하는 지 이해가 된다.\n      </p>\n    ")
    },
    // clip-path 내용 정리
    {
        id: "clip-path 내용 정리",
        category: "Web",
        tag: [
            "CSS"
        ],
        title: "clip-path 내용 정리",
        subTitle: "요소를 자르는 효과를 구현하는 CSS의 clip-path 내용 정리",
        author: "Sean Lee",
        date: "March 3, 2026",
        readDuration: 5,
        thumbnail: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$clip$2d$path_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$clip$2d$path_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        content: '\n      <p>\n        별다른 일을 수행하지 않으면 HTML 요소의 기본적인 모양은 직사각형이다. 하지만 실제 웹사이트에서는 원, 마름모, 육각형, 그 외 여러 다양한 모양의 요소들이 필요할 때가 있다. 이럴때 clip-path 속성을 사용하면 된다.\n      </p>\n      <h2>\n        <p>기본 문법 및 사용 예시</p>\n      </h2>\n      <p>\n        clip-path 속성의 기본적인 사용방법은 다음과 같다.\n      </p>\n      <div class="CodeBlock">\n        <div class="CodeBlock_header">\n          <span>CSS</span>\n        </div>\n        <pre><code>/* 예시 */\nclip-path: circle(40%);\nclip-path: ellipse(130px 140px at 10% 20%);\nclip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);\nclip-path: path("M 0 200 L 0,75 A 5,5 0,0,1 150,75 L 200 200 z");\nclip-path: rect(5px 145px 160px 5px round 20%);\nclip-path: xywh(0 5px 100% 75% round 15% 0);</code></pre>\n      </div>\n      <div class="Enhancement" data-align-center=>\n        <div class="Enhancement-item">\n          <figure class="Figure">\n            <div class="Figure-media">\n              <picture>\n                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src='.concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$clip$2d$path_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$clip$2d$path_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"], '>\n              </picture>\n            </div>\n            <div class="Figure-content">\n              <figcaption class="Figure-caption">\n                위의 코드의 실행 결과\n              </figcaption>\n            </div>\n          </figure>\n        </div>\n      </div>\n    ')
    },
    // 모노레포: 프로젝트 모듈화 관리 방법
    {
        id: "모노레포: 프로젝트 모듈화 관리 방법",
        category: "Developments",
        tag: [
            "Project Management",
            "Git",
            "Repository"
        ],
        title: "모노레포: 프로젝트 모듈화 관리 방법",
        subTitle: "프로젝트 진행 시, 모듈화 된 컴포넌트를 관리하기 위한 최적의 방법 모노레포를 소개한다",
        author: "Sean Lee",
        date: "Feburary 27, 2026",
        readDuration: 10,
        thumbnail: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$monorepo_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$monorepo_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
        content: '\n      <p>\n        웹, 게임, 어플리케이션 등 모든 프로젝트에서 모듈화는 중요하다. 다름 아닌 \'재사용성\'때문이다. 내가 1번 프로젝트를 진행하며 만든 <헤더> 컴포넌트가 그대로 혹은 조금만 바꿔서 2번 프로젝트에서 쓰일 수 있을 것 같다면, 그때 모듈화는 빛을 발한다. \n      </p>\n      <p>\n        하지만 막상 프로젝트를 진행할 때 모듈화된 컴포넌트를 어떻게 관리해야할 지 막막한 경우가 있다. \n        이번 글에서는 직접 몸으로 부딪히고 여러 시행착오를 겪으며 배운 것을 공유하고 그 결과로 배운 모노레포(Monorepo) 관리 방법에 대해 소개한다.\n      </p>\n      <h2>\n        <p>그냥 모듈별로 레포지토리를 만들면 되지 않을까?</p>\n      </h2>\n      <div class="Enhancement" data-align-center=>\n        <div class="Enhancement-item">\n          <figure class="Figure">\n            <div class="Figure-media">\n              <picture>\n                <img class="Image" data-image-size="figureLarge" alt="monorepo_1.png" src='.concat(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$monorepo_1$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$assets$2f$images$2f$monorepo_1$2e$png__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"], '>\n              </picture>\n            </div>\n            <div class="Figure-content">\n              <figcaption class="Figure-caption">\n                모듈 컴포넌트 각각마다 레포지토리가 생성된 모습\n              </figcaption>\n            </div>\n          </figure>\n        </div>\n      </div>\n      <p>\n        내가 처음 사용한 방법이다. 웹 페이지 프로젝트를 진행하는 동안 만들어진 컴포넌트(e.g. 헤더, 네비게이터, 슬라이더 등)를 만들어진대로 깃허브와 연동하여 레포지토리를 생성하였다.\n      </p>\n      <p>\n        그랬더니 내가 느낀 불편한 점은 다음과 같았다.\n      </p>\n      <ul class="rte2-style-ul">\n        <li><b>레포지토리가 너무 많아진다.</b><br> \n        큰 컴포넌트든, 작은 컴포넌트든 모듈화가 이뤄지는 족족 레포지토리가 생성되니 오히려 관리하기가 어려울 정도로 그 수가 많아진다.</li>\n        <li><b>업데이트 내용이 실시간으로 반영되지 않는다.</b><br>\n        결국 개별 프로젝트를 관리하는 것처럼 동작하기 때문에 수정이 일어날때마다 매번 사용된 프로젝트에 가서 복사/붙여넣기를 실행해야한다.\n        </li>\n      </ul>\n      <br>\n      <h2>\n        <p>해결책: 모노레포(Monorepo)</p>\n      </h2>\n      <p>\n       모노레포(Monorepo)는 \'Monolithic Repository\'의 줄임말로, 두 개 이상의 독립적인 프로젝트 코드와 자산을 단일 버전 관리 저장소에 모아서 관리하는 소프트웨어 개발 전략이다. 쉽게 말해, 프론트엔드 앱, 백엔드 서버, 공통 UI 컴포넌트 라이브러리 등 여러 개의 개별 프로젝트를 각각의 레포지토리에 쪼개지 않고 거대한 폴더 하나(단일 레포지토리) 안에 다 같이 담아두고 운영하는 방식이다.\n      </p>\n      <p>\n        구조는 다음과 같다.\n      </p>\n      <p style="padding-left: 50px;">\n      My-Workspace (최상위 폴더)<br>\n      ├── package.json (workspaces 설정)<br>\n      ├── apps<br>\n      │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Tech-Blog (메인 블로그)<br>\n      │&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Portfolio (포트폴리오 사이트)<br>\n      └── packages (공통 모듈들)<br>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── header-ui (헤더 모듈)<br>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── section-ui (섹션 모듈)<br>\n      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── shared-ui (Carousel 등 공통 컴포넌트)<br>\n      <br>\n      </p>\n      <p>\n        위의 예에서는 My-Workspace라는 최상위 폴더를 기준으로 단 1개의 레포지토리만 생성하고 그 안에 여러개의 프로젝트와 사용되는 모듈들이 동시에 관리되는 것이다. 이렇게 하면 기존의 단점들을 모두 해결 가능하다.\n      </p>\n      <p>\n        이외에도 모노레포의 주요 장점은 다음과 같다.\n      </p>\n      <ul class="rte2-style-ul">\n        <li><b>쉬운 코드 공유 및 재사용:</b> 여러 프로젝트가 한곳에 있으므로, 공통 모듈(예: 디자인 시스템, 유틸리티 함수)을 분리하여 다른 프로젝트에서 쉽게 import 해서 쓸 수 있다.</li>\n        <li><b>원자적 커밋:</b> 공통 컴포넌트에 변경 사항이 생겼을 때, 해당 컴포넌트를 사용하는 A 앱과 B 앱의 코드도 한 번의 커밋으로 동시에 수정하고 테스트할 수 있다.</li>\n        <li><b>의존성 관리의 단순화:</b> 모든 프로젝트가 단일 진실 공급원(Single Source of Truth)을 공유하므로, 패키지 버전 파편화나 충돌을 방지하기 좋습니다.</li>\n        <li><b>일관된 개발 환경:</b> 모든 프로젝트가 동일한 린터(ESLint), 포매터(Prettier), 빌드 설정, CI/CD 파이프라인을 공유하기 쉽습니다.</li>\n      </ul>\n      <br>\n      <h2>\n        <p>모노레포 구축 방법</p>\n      </h2>\n    ')
    }
];
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/src/api/posts.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPostById",
    ()=>getPostById,
    "loadSlicedPosts",
    ()=>loadSlicedPosts
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$dummyPosts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/data/dummyPosts.js [app-client] (ecmascript)");
;
;
;
;
var getPostById = function getPostById(id) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
        var post;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
            switch(_state.label){
                case 0:
                    return [
                        4,
                        new Promise(function(resolve) {
                            return setTimeout(resolve, 500);
                        })
                    ];
                case 1:
                    _state.sent();
                    post = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$dummyPosts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyPosts"].find(function(p) {
                        return p.id === id;
                    });
                    if (!post) {
                        throw new Error("게시글을 찾을 수 없습니다");
                    }
                    return [
                        2,
                        post
                    ];
            }
        });
    })();
};
var loadSlicedPosts = function loadSlicedPosts(fromIdx, toIdx) {
    var slicedPosts = __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$dummyPosts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dummyPosts"].slice(fromIdx, toIdx);
    return slicedPosts;
};
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/tech-blog/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$app$2f$_css$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/app/_css/home.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/header-type-a/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$Header_typeA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/header-type-a/src/Header_typeA.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/hero-slide/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$Heroslide_typeA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/hero-slide/src/Heroslide_typeA.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$research$2d$area$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/research-area/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$research$2d$area$2f$src$2f$Section_typeA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/research-area/src/Section_typeA.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/from-the-blog/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$Fromtheblog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/from-the-blog/src/Fromtheblog.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$featured$2d$news$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/featured-news/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$featured$2d$news$2f$src$2f$FeaturedNews$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/featured-news/src/FeaturedNews.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/section-publications/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$Publications$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/section-publications/src/Publications.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/packages/footer-type-a/src/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$Footer_typeA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/packages/footer-type-a/src/Footer_typeA.js [app-client] (ecmascript)");
// 데이터 로드
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$headerData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/data/headerData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$footerData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/data/footerData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$categoryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/data/categoryData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$api$2f$posts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/tech-blog/src/api/posts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
var PUB_LOAD_AMOUNT = 2;
function Home() {
    _s();
    // 히어로 슬라이드쇼 데이터 불러오기 (최신순 5개)
    var heroData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$api$2f$posts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSlicedPosts"])(0, 5);
    var fromtheblogData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$api$2f$posts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSlicedPosts"])(0, 5);
    var featuredNewsData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$api$2f$posts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSlicedPosts"])(0, 5);
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0), 2), pubIdx = _useState[0], setPubIdx = _useState[1];
    var _useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$api$2f$posts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSlicedPosts"])(pubIdx, pubIdx + PUB_LOAD_AMOUNT)), 2), publicationsData = _useState1[0], setPublicationsData = _useState1[1];
    var loadNextPublications = function loadNextPublications() {
        // 2. 현재 인덱스에 불러올 개수를 더해 '다음 인덱스'를 미리 계산합니다.
        var nextIdx = pubIdx + PUB_LOAD_AMOUNT;
        console.log("불러올 다음 인덱스: ".concat(nextIdx));
        // 3. 계산된 값을 state에 저장해 다음번 클릭을 대비합니다.
        setPubIdx(nextIdx);
        // 4. 기존 데이터(prevData)에 새 데이터를 이어 붙입니다.
        setPublicationsData(function(prevData) {
            return prevData.concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$api$2f$posts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadSlicedPosts"])(nextIdx, nextIdx + PUB_LOAD_AMOUNT));
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$app$2f$_css$2f$home$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].top_container,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$header$2d$type$2d$a$2f$src$2f$Header_typeA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                logoImg: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$headerData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].logoImg,
                menuItems: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$headerData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].menuItems,
                subMenuItems: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$headerData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].subMenuItems,
                subTitles: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$headerData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].subTitles,
                socialItems: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$footerData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].socialItems
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/app/page.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$hero$2d$slide$2f$src$2f$Heroslide_typeA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: heroData
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/app/page.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$research$2d$area$2f$src$2f$Section_typeA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$categoryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].researchAreaData).concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$categoryData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extraCategoryData))
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/app/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$from$2d$the$2d$blog$2f$src$2f$Fromtheblog$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                viewAllLik: "Article Search",
                data: fromtheblogData
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/app/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$featured$2d$news$2f$src$2f$FeaturedNews$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: featuredNewsData
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/app/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$section$2d$publications$2f$src$2f$Publications$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                data: publicationsData,
                loadNext: loadNextPublications
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/app/page.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$packages$2f$footer$2d$type$2d$a$2f$src$2f$Footer_typeA$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                logoImg: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$footerData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].logoImg,
                socialItems: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$tech$2d$blog$2f$src$2f$data$2f$footerData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].socialItems
            }, void 0, false, {
                fileName: "[project]/apps/tech-blog/app/page.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/tech-blog/app/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(Home, "gjyjxs+UYUaT1BMtO4XZ7LSOqeo=");
_c = Home;
const __TURBOPACK__default__export__ = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_0hmy5vo._.js.map