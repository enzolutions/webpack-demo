# Webpack-demo

This repository was used during a the webinar [Introduction to Webpack]() hosted by [weKnow](http://weknowinc.com). During this session I tried to show how to use [Webpack](webpack.js.org).

Webpack is a nodejs tools used to create bundles to distrube your node applications providing all yours scripts, images, css and others assets.

## Installation

```bash
$ npm install
```

## Examples

### Simple bundle packaging

```bash
$ npm run build
```

### Packing multiple bundles

```bash
$ npm run build:multiple
```

### Create a package for all vendors

```bash
$ npm run build:implicit
```

### Create two specific packages for vendors

```bash
$ npm run build:explicit
```

### Ignore partial parts of a vendor

```bash
$ npm run build:ignore
```

### Reduce bundle sizes grouping bungles by chunks

```bash
$ npm run build:split
```

### Minify bundles

```bash
$ npm run build:uglify
```


### Gzip bundles

```bash
$ npm run build:compression
```


### Process LESS and CSS

```bash
$ npm run build:css
```