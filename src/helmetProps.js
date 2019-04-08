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
  link = [],
  meta = [],
  og: ogParam = {},
  property,
  siteName,
  favicon,
  title,
  titleTemplate,
  twitter: twitterParam = {},
  url,
  script = [],
  style = [],
  ...rest
}) => {
  // og
  const og = {
    ...(siteName && { site_name: siteName }),
    ...(title && { title }),
    ...(description && { description }),
    ...(image && { image }),
    ...(url && { url }),
    ...ogParam,
  };

  // twitter
  const twitter = {
    ...(title && { title }),
    ...(description && { description }),
    ...(image && { image }),
    ...(url && { url }),
    ...twitterParam,
  };

  if (twitter.description) {
    twitter.description = truncate(
      twitter.description,
      twitterDescMaxLen,
      '...',
    );
  }

  if (twitter.title) {
    twitter.title = truncate(twitter.title, twitterTitleMaxLen, '...');
  }

  // default title
  defaultTitle = defaultTitle || siteName;

  // favicon
  if (favicon) {
    addFavicon(favicon, meta, link);
  }

  if (siteName && !hasObjectItem(meta, 'name', 'application-name')) {
    meta.push({ name: 'application-name', content: siteName });
  }
  // description

  if (description && !hasObjectItem(meta, 'name', 'description')) {
    meta.push({ name: 'description', content: description });
  }

  // image

  if (image && !hasObjectItem(link, 'rel', 'apple-touch-startup-image')) {
    link.push({ rel: 'apple-touch-startup-image', href: image });
  }

  // url

  if (url && !hasObjectItem(link, 'rel', 'canonical')) {
    link.push({ rel: 'canonical', href: url });
  }

  // set og
  forEach(
    og,
    (content, prop) =>
      content != null && meta.push({ property: `og:${prop}`, content }),
  );

  // set twitter
  forEach(
    twitter,
    (content, prop) =>
      content != null && meta.push({ property: `twitter:${prop}`, content }),
  );

  // property
  if (property) {
    forEach(property, (props, namespace) =>
      forEach(
        props,
        (content, prop) =>
          content != null &&
          meta.push({ property: `${namespace}:${prop}`, content }),
      ),
    );
  }

  return {
    ...rest,
    ...(defaultTitle && { defaultTitle }),
    ...(link.length && { link }),
    ...(meta.length && { meta }),
    ...(title && { title }),
    ...(script.length && { script }),
    ...(style.length && { style }),
    ...(base &&
      (typeof base === 'string' ? { base: { href: base } } : { base })),
  };
};
