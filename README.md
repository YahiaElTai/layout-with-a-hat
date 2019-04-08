# layout-with-a-hat

A higher order component to add different layouts to your pages and automatically fills meta tags including og / twitter meta tags to every single page with react-helmet.

- The first call you would pass your react-helmet meta tags.
- The second call you would pass your Layout component and its needed props if any.
- The third call you would pass your wrapped component and its needed props if any. the wrapped component is the content of the page excluding the layout.

### Install

```
npm install  layout-with-a-hat
```

or

```
yarn add  layout-with-a-hat
```

### Usage

```javascript
import React from 'react';
import LayoutWithAHat from 'layout-with-a-hat';

const helmetConfig = {
  base: 'http://example.com', // or {"target": "_blank", "href": "http://mysite.com/"}
  title: 'page title',
  description: 'description text',
  favicon: {
    ico: '/favicon.ico',
    s16: '/favicon-16.png',
    ...
  },
  image: '/image.jpg',
  link: [
    { rel: 'link rel', href: 'link href' },
    ...
  ],
  meta: [
    { name: 'meta name', content: 'meta content' },
    ...
  ],
  og: {
    title: 'og title',
    image: '/og_image.jpg',
  },
  twitter: {
    title: ' twitter title',
    image: '/twitter_image.jpg',
  },

  url: '/page.url',
  htmlAttributes: {
    lang: 'en'
  },
  script: [
    {"type": "text/javascript", "src": "http://mysite.com/js/test1.js"},
    {"type": "text/javascript", "src": "http://mysite.com/js/test2.js"}
  ],
  style: [
    {type: 'text/css', cssText: 'div{ display: block; color: blue;}' }
  ],
};

const WrappedComponent = () => (
  <div>
    <p>This is the component i want to wrap in Layout.</p>
  </div>
);

const LayoutComponent = ({ children }) => (
  <div>
    <p>This is the Layout that i want my component to be wrapped in.</p>
    <header>
      <nav />
      ...
      <h1>This is a header</h1>
      ...
      {children}
      <footer>
        <p>This is a footer</p>
        ...
      </footer>
    </header>
  </div>
);

export default LayoutWithAHat(helmetConfig)({
  LayoutComponent,
  layoutComponentProps: { prop: 'value' ...}
})({
  WrappedComponent,
  wrappedComponentProps: { prop: 'value' ...}
});
```

### Important Notes

1. everything in `layout-with-a-hat` is optional.

2. If you would like to use different layouts for your pages and not use `layout-with-a-hat` for your react-helmet needs, you can do that by not providing anything in the first call. same goes for the other 2 calls, if you would like to use only react-helmet side of `layout-with-a-hat`, you can do that by not providing anything in the second and third calls.

3. if you provide `title` prop to the first call, it will be used as default title for the open graph protocol and twitter title meta tags unless you provide them separately (eg: `og: {title: 'og specific title'}`) .same goes for `description`, `image` and `url` props.

4. if `application-name` meta tag is not provided the `sitename` will be used if the latter is provided.

5. if `canonical` link tag is not provided the `url` will be used if the latter is provided.

6. quick reminder for twitter
   - Twitter Title Max Length = `70`;
   - Twitter Desc Max Length = `200`;

### LICENSE

MIT
