# pre-vue

[![CircleCI](https://circleci.com/gh/mtlynch/pre-vue.svg?style=svg)](https://circleci.com/gh/mtlynch/pre-vue) [![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](LICENSE)

## Overview

This is an example of a [Vue](https://vuejs.org) + [Nuxt](https://nuxtjs.org) configuration that generates a pre-rendered, static site.

Instead of generating a normal single-page app, it generates a static page for every route on your site, making it easier for you to configure search engine optimization and social sharing.

## Features

The following features are built-in to this project template:

- Generates a sitemap (for SEO)
- Generates a robots.txt (for SEO)
- Supports unique `<title>` tags for each page (for SEO)
- Adds unique opengraph tags to each page (for social sharing)
- Adds Google Analytics support
- Adds a favicon
- Handles 404s

## Benefits of pre-rendering

### Search engine optimization

The primary benefit of this configuration is that it makes it easier to improve your site's search engine optimization. With a traditional Vue SPA, you can't set per-page attributes like the `<title>` tag or the `<link rel="canonical">` tag, which search engines use to understand the structure of your website.

With pre-rendering, you can configure all the per-page elements so that they're present in your site's HTML when search engines index it.

### Social sharing

Another major drawback of SPAs is that they have poor support for social sharing. Sites like Twitter, Facebook, and Pinterest require your pages to have HTML `<meta>` tags present before any JavaScript loads. With a normal Vue SPA, this prevents you from having distinct social sharing cards for different pages.

With pre-rendering, each page on your site can have its own set of `<meta>` tags, so you can customize the social sharing cards for all of your site's pages.

## Requirements

- [Node.js](https://nodejs.org/en/download/) 14.x or higher

## Quick Start

```bash
npm install
npm run serve
```

Visit [http://localhost:3700](http://localhost:3700) to see the site running.

## Deploying to production

To pre-render your website, run

```bash
npm install
npm run build
```

This will generate all the files for a static, pre-rendered version of your website under the `dist/` folder. You can upload these files to any service that suports static website hosting, such as:

- [Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/dev/WebsiteHosting.html)
- [Google Cloud Storage](https://cloud.google.com/storage/docs/hosting-static-website)
- [Netlify](https://www.netlify.com/blog/2016/10/27/a-step-by-step-guide-deploying-a-static-site-or-single-page-app/)

The [circleci-firebase](https://github.com/mtlynch/pre-vue/tree/circleci-firebase) branch of this repo includes an example configuration that automatically builds your site using Circle CI and deploys it to Firebase.

## Customization

To customize this template for your project:

1. Find/replace "https://pre-vue.web.app" with your app's base URL.
1. Find/replace `pre-vue` with your repo name.
1. Update `.env` with your Google Analytics ID.

## Live Demo

The live version of this project is at:

- [https://pre-vue.web.app](https://pre-vue.web.app)
