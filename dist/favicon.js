"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.msSquare = exports.appleIconLink = exports.iconLink = void 0;
var appleIconRel = 'apple-touch-icon-precomposed';
var pngType = 'image/png';

var iconLink = function iconLink(href, size) {
  var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : pngType;
  return {
    rel: 'icon',
    type: type,
    href: href,
    sizes: "".concat(size, "x").concat(size)
  };
};

exports.iconLink = iconLink;

var appleIconLink = function appleIconLink(href, size) {
  return {
    rel: appleIconRel,
    href: href,
    sizes: "".concat(size, "x").concat(size)
  };
};

exports.appleIconLink = appleIconLink;

var msSquare = function msSquare(content, size) {
  return {
    name: "msapplication-square".concat(size, "x").concat(size, "logo"),
    content: content
  };
};

exports.msSquare = msSquare;

var _default = function _default(_ref, meta, link) {
  var ico = _ref.ico,
      s16 = _ref.s16,
      s32 = _ref.s32,
      s57 = _ref.s57,
      s60 = _ref.s60,
      s70 = _ref.s70,
      s72 = _ref.s72,
      s76 = _ref.s76,
      s96 = _ref.s96,
      s114 = _ref.s114,
      s120 = _ref.s120,
      s128 = _ref.s128,
      s144 = _ref.s144,
      s150 = _ref.s150,
      s152 = _ref.s152,
      s196 = _ref.s196,
      s310 = _ref.s310,
      s310x150 = _ref.s310x150;
  if (ico) link.push({
    rel: 'shortcut icon',
    href: ico
  }); // <link rel="icon" sizes="16x16 32x32" href="/favicon.ico?v=2">

  if (s16) link.push(iconLink(s16, 16));
  if (s32) link.push(iconLink(s32, 32));
  if (s96) link.push(iconLink(s96, 96));
  if (s128) link.push(iconLink(s128, 128));
  if (s196) link.push(iconLink(s196, 196));
  if (s57) link.push(appleIconLink(s57, 57));
  if (s60) link.push(appleIconLink(s60, 60));
  if (s72) link.push(appleIconLink(s72, 72));
  if (s76) link.push(appleIconLink(s76, 76));
  if (s114) link.push(appleIconLink(s114, 114));
  if (s120) link.push(appleIconLink(s120, 120));
  if (s144) link.push(appleIconLink(s144, 144));
  if (s152) link.push(appleIconLink(s152, 152));
  if (s144) meta.push({
    name: 'msapplication-TileImage',
    content: s144
  });
  if (s70) meta.push(msSquare(s70, 70));
  if (s150) meta.push(msSquare(s150, 150));
  if (s310) meta.push(msSquare(s310, 310));
  if (s310x150) meta.push({
    name: 'msapplication-wide310x150logo',
    content: s310x150
  });
};

exports.default = _default;