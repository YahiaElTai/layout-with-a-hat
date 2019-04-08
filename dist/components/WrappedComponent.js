"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

// return the Wrapped Component with its props
var InternalWrappedComponent = function InternalWrappedComponent(_ref) {
  var WrappedComponent = _ref.WrappedComponent,
      wrappedComponentProps = _ref.wrappedComponentProps;
  return _react.default.createElement(WrappedComponent, wrappedComponentProps);
};

var DefaultComponent = function DefaultComponent() {
  return _react.default.createElement("div", null, _react.default.createElement("p", null, "This is the wrapped component"));
};

InternalWrappedComponent.defaultProps = {
  WrappedComponent: DefaultComponent,
  wrappedComponentProps: {}
};
var _default = InternalWrappedComponent;
exports.default = _default;