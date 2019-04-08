"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasObjectItem = exports.truncate = exports.forEach = void 0;

var findIndex = function findIndex(arr, fn) {
  for (var i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      return i;
    }
  }

  return -1;
};

var forEach = function forEach(obj, fn) {
  var hasOwn = Object.hasOwnProperty;
  Object.keys(obj).forEach(function (key) {
    if (hasOwn.call(obj, key)) {
      fn(obj[key], key, obj);
    }
  });
};

exports.forEach = forEach;

var truncate = function truncate(str, maxLength) {
  var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  return str.length > maxLength ? str.substring(0, maxLength - suffix.length) + suffix : str;
};

exports.truncate = truncate;

var hasObjectItem = function hasObjectItem(arr, name, value) {
  return findIndex(arr, function (_ref) {
    var val = _ref[name];
    return val === value;
  }) >= 0;
};

exports.hasObjectItem = hasObjectItem;