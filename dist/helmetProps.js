"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/esm/objectWithoutProperties"));

var _utilities = require("./utilities");

var _favicon = _interopRequireDefault(require("./favicon"));

// Twitter title and description limitations
var twitterTitleMaxLen = 70;
var twitterDescMaxLen = 200;

var _default = function _default(_ref) {
  var base = _ref.base,
      defaultTitle = _ref.defaultTitle,
      description = _ref.description,
      image = _ref.image,
      _ref$link = _ref.link,
      link = _ref$link === void 0 ? [] : _ref$link,
      _ref$meta = _ref.meta,
      meta = _ref$meta === void 0 ? [] : _ref$meta,
      _ref$og = _ref.og,
      ogParam = _ref$og === void 0 ? {} : _ref$og,
      property = _ref.property,
      siteName = _ref.siteName,
      favicon = _ref.favicon,
      title = _ref.title,
      titleTemplate = _ref.titleTemplate,
      _ref$twitter = _ref.twitter,
      twitterParam = _ref$twitter === void 0 ? {} : _ref$twitter,
      url = _ref.url,
      _ref$script = _ref.script,
      script = _ref$script === void 0 ? [] : _ref$script,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? [] : _ref$style,
      rest = (0, _objectWithoutProperties2.default)(_ref, ["base", "defaultTitle", "description", "image", "link", "meta", "og", "property", "siteName", "favicon", "title", "titleTemplate", "twitter", "url", "script", "style"]);
  // og
  var og = (0, _objectSpread2.default)({}, siteName && {
    site_name: siteName
  }, title && {
    title: title
  }, description && {
    description: description
  }, image && {
    image: image
  }, url && {
    url: url
  }, ogParam); // twitter

  var twitter = (0, _objectSpread2.default)({}, title && {
    title: title
  }, description && {
    description: description
  }, image && {
    image: image
  }, url && {
    url: url
  }, twitterParam);

  if (twitter.description) {
    twitter.description = (0, _utilities.truncate)(twitter.description, twitterDescMaxLen, '...');
  }

  if (twitter.title) {
    twitter.title = (0, _utilities.truncate)(twitter.title, twitterTitleMaxLen, '...');
  } // default title


  defaultTitle = defaultTitle || siteName; // favicon

  if (favicon) {
    (0, _favicon.default)(favicon, meta, link);
  }

  if (siteName && !(0, _utilities.hasObjectItem)(meta, 'name', 'application-name')) {
    meta.push({
      name: 'application-name',
      content: siteName
    });
  } // description


  if (description && !(0, _utilities.hasObjectItem)(meta, 'name', 'description')) {
    meta.push({
      name: 'description',
      content: description
    });
  } // image


  if (image && !(0, _utilities.hasObjectItem)(link, 'rel', 'apple-touch-startup-image')) {
    link.push({
      rel: 'apple-touch-startup-image',
      href: image
    });
  } // url


  if (url && !(0, _utilities.hasObjectItem)(link, 'rel', 'canonical')) {
    link.push({
      rel: 'canonical',
      href: url
    });
  } // set og


  (0, _utilities.forEach)(og, function (content, prop) {
    return content != null && meta.push({
      property: "og:".concat(prop),
      content: content
    });
  }); // set twitter

  (0, _utilities.forEach)(twitter, function (content, prop) {
    return content != null && meta.push({
      property: "twitter:".concat(prop),
      content: content
    });
  }); // property

  if (property) {
    (0, _utilities.forEach)(property, function (props, namespace) {
      return (0, _utilities.forEach)(props, function (content, prop) {
        return content != null && meta.push({
          property: "".concat(namespace, ":").concat(prop),
          content: content
        });
      });
    });
  }

  return (0, _objectSpread2.default)({}, rest, defaultTitle && {
    defaultTitle: defaultTitle
  }, link.length && {
    link: link
  }, meta.length && {
    meta: meta
  }, title && {
    title: title
  }, script.length && {
    script: script
  }, style.length && {
    style: style
  }, base && (typeof base === 'string' ? {
    base: {
      href: base
    }
  } : {
    base: base
  }));
};

exports.default = _default;