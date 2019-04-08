"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = require("react-helmet");

var _helmetProps = _interopRequireDefault(require("./helmetProps"));

var _components = require("./components");

var LayoutWithAHat = function LayoutWithAHat(helmet) {
  return function (layout) {
    return function (component) {
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHelmet.Helmet, (0, _helmetProps.default)(helmet || {})), _react.default.createElement(_components.LayoutComponent, layout, _react.default.createElement(_components.WrappedComponent, component)));
    };
  };
};

var _default = LayoutWithAHat;
exports.default = _default;