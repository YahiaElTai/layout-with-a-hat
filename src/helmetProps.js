/* eslint-disable no-param-reassign */
import { forEach, truncate, hasObjectItem } from './utilities';
import addFavicon from './favicon';
// Twitter title and description limitations
const twitterTitleMaxLen = 70;
const twitterDescMaxLen = 200;

export default ({
  base,
  defaultTitle,
  description,
  image,
  link,
  meta,
  og,
  property,
  siteName,
  favicon,
  title,
  titleTemplate,
  twitter,
  url,
  script,
  style,
  ...rest
}) => {
  link = link || [];
  meta = meta || [];
  og = og || {};
  twitter = twitter || {};
  script = script || [];
  style = style || [];

  // siteName
  if (siteName != null) {
    if (defaultTitle == null) defaultTitle = siteName;
    if (og.site_name == null) og.site_name = siteName;
    if (!hasObjectItem(meta, 'name', 'application-name')) {
      meta.push({ name: 'application-name', content: siteName });
    }
  }

  // favicon
  if (favicon) {
    addFavicon(favicon, meta, link);
  }

  // title
  if (title != null) {
    if (og.title == null) og.title = title;
    if (twitter.title == null) twitter.title = title;
  }
  if (twitter.title) {
    twitter.title = truncate(twitter.title, twitterTitleMaxLen, '...');
  }

  // description
  if (description != null) {
    if (og.description == null) og.description = description;
    if (twitter.description == null) twitter.description = description;
    if (!hasObjectItem(meta, 'name', 'description')) {
      meta.push({ name: 'description', content: description });
    }
  }
  if (twitter.description) {
    twitter.description = truncate(
      twitter.description,
      twitterDescMaxLen,
      '...',
    );
  }

  // image
  if (image != null) {
    if (og.image == null) og.image = image;
    if (twitter.image == null) twitter.image = image;
    if (!hasObjectItem(link, 'rel', 'apple-touch-startup-image')) {
      link.push({ rel: 'apple-touch-startup-image', href: image });
    }
  }

  // url
  if (url != null) {
    if (og.url == null) og.url = url;
    if (twitter.url == null) twitter.url = url;
    if (!hasObjectItem(link, 'rel', 'canonical')) {
      link.push({ rel: 'canonical', href: url });
    }
  }

  // og
  forEach(
    og,
    (content, prop) =>
      content != null && meta.push({ property: `og:${prop}`, content }),
  );

  // twitter
  forEach(
    twitter,
    (content, prop) =>
      content != null && meta.push({ property: `twitter:${prop}`, content }),
  );

  // rest
  if (base != null) {
    rest.base = typeof base === 'string' ? { href: base } : base;
  }
  if (defaultTitle != null) rest.defaultTitle = defaultTitle;
  if (link.length) rest.link = link;
  if (meta.length) rest.meta = meta;
  if (title != null) rest.title = title;
  if (script.length) rest.script = script;
  if (style.length) rest.style = style;

  return rest;
};
