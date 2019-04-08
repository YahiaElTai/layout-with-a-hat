"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

// return the Layout Component with its props and children (ie: Wrapped Component)
var InternalLayoutComponent = function InternalLayoutComponent(_ref) {
  var LayoutComponent = _ref.LayoutComponent,
      layoutComponentProps = _ref.layoutComponentProps,
      children = _ref.children;
  return _react.default.createElement(LayoutComponent, layoutComponentProps, children);
};

var DefaultLayout = function DefaultLayout(_ref2) {
  var children = _ref2.children;
  return _react.default.createElement("div", null, children);
};

DefaultLayout.defaultProps = {
  children: _react.default.createElement("div", null)
};
InternalLayoutComponent.defaultProps = {
  LayoutComponent: DefaultLayout,
  layoutComponentProps: {}
};
var _default = InternalLayoutComponent;
exports.default = _default;