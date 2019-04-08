import React from 'react';
import { Helmet } from 'react-helmet';

import helmetPropsFunc from '../src/helmetProps';
import { WrappedComponent, LayoutComponent } from '../src/components';
import LayoutWithAHat from '../src';

const helmetToUse = {
  base: 'http://example.com',
  description: 'description text',
  favicon: {
    ico: '/favicon.ico',
    s16: '/favicon-16.png',
    s70: '/favicon-70.png',
    s144: '/favicon-144.png',
  },
  image: '/image.jpg',
  link: [
    { rel: 'link rel', href: 'link href' },
    { rel: 'canonical', href: '/canonical' },
    { rel: 'apple-touch-startup-image', href: 'my image' },
  ],
  meta: [{ name: 'meta name', content: 'meta content' }],
  og: {
    k1: 'v1',
  },
  property: {
    ns: {
      k2: 'v2',
    },
  },
  siteName: 'site name',
  title: 'page title',
  twitter: {
    k3: 'v3',
  },
  url: '/page.url',
};

const WrappedComponentTest = ({ name, className }) => (
  <div className={className}>
    <p>{`Hello ${name}, How are you today?`}</p>
  </div>
);

const wrappedTest = {
  WrappedComponent: WrappedComponentTest,
  wrappedComponentProps: { name: 'James', className: 'content' },
};

const LayoutComponentTest = ({ className, children }) => (
  <div className={className}>
    <header>
      <p>Header here</p>
    </header>
    <div>{children}</div>
    <footer>All rights reserved to this this</footer>
  </div>
);

const layoutTest = {
  WrappedComponent: LayoutComponentTest,
  wrappedComponentProps: { className: 'sidebar' },
};

it('helmetPropsFunc returns the correct react-helmet tags', () => {
  expect(helmetPropsFunc(helmetToUse)).toEqual({
    base: { href: 'http://example.com' },
    defaultTitle: 'site name',
    link: [
      { rel: 'link rel', href: 'link href' },
      { rel: 'canonical', href: '/canonical' },
      { rel: 'apple-touch-startup-image', href: 'my image' },
      { rel: 'shortcut icon', href: '/favicon.ico' },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon-16.png',
        sizes: '16x16',
      },
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/favicon-144.png',
        sizes: '144x144',
      },
    ],
    meta: [
      { name: 'meta name', content: 'meta content' },
      { name: 'msapplication-TileImage', content: '/favicon-144.png' },
      { name: 'msapplication-square70x70logo', content: '/favicon-70.png' },
      { name: 'application-name', content: 'site name' },
      { name: 'description', content: 'description text' },
      { property: 'og:site_name', content: 'site name' },
      { property: 'og:title', content: 'page title' },
      { property: 'og:description', content: 'description text' },
      { property: 'og:image', content: '/image.jpg' },
      { property: 'og:url', content: '/page.url' },
      { property: 'og:k1', content: 'v1' },
      { property: 'twitter:title', content: 'page title' },
      { property: 'twitter:description', content: 'description text' },
      { property: 'twitter:image', content: '/image.jpg' },
      { property: 'twitter:url', content: '/page.url' },
      { property: 'twitter:k3', content: 'v3' },
      { property: 'ns:k2', content: 'v2' },
    ],
    title: 'page title',
  });
});

it('renders only react helmet tags', () => {
  expect(LayoutWithAHat(helmetToUse)()()).toEqual(
    <React.Fragment>
      <Helmet {...helmetPropsFunc(helmetToUse)} />
      <LayoutComponent>
        <WrappedComponent />
      </LayoutComponent>
    </React.Fragment>,
  );
});

it('renders the layout component and its correct props with react-helmet tags', () => {
  expect(LayoutWithAHat(helmetToUse)(layoutTest)()).toEqual(
    <React.Fragment>
      <Helmet {...helmetPropsFunc(helmetToUse)} />
      <LayoutComponent {...layoutTest}>
        <WrappedComponent />
      </LayoutComponent>
    </React.Fragment>,
  );
});

it('renders the wrapped components with its correct props with react-helmet tags', () => {
  expect(LayoutWithAHat(helmetToUse)()(wrappedTest)).toEqual(
    <React.Fragment>
      <Helmet {...helmetPropsFunc(helmetToUse)} />
      <LayoutComponent>
        <WrappedComponent {...wrappedTest} />
      </LayoutComponent>
    </React.Fragment>,
  );
});

it('renders the layout and wrapped components with their correct props with react-helmet tags', () => {
  expect(LayoutWithAHat(helmetToUse)(layoutTest)(wrappedTest)).toEqual(
    <React.Fragment>
      <Helmet {...helmetPropsFunc(helmetToUse)} />
      <LayoutComponent {...layoutTest}>
        <WrappedComponent {...wrappedTest} />
      </LayoutComponent>
    </React.Fragment>,
  );
});

it('renders the layout and wrapped components with their correct props without react helmet tags', () => {
  expect(LayoutWithAHat()(layoutTest)(wrappedTest)).toEqual(
    <React.Fragment>
      <Helmet />
      <LayoutComponent {...layoutTest}>
        <WrappedComponent {...wrappedTest} />
      </LayoutComponent>
    </React.Fragment>,
  );
});
