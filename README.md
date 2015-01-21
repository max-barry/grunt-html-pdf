# grunt-html-pdf

> Grunt wrapper for the Node package [html-pdf](https://www.npmjs.com/package/html-pdf). Credit to [marcbachmann](https://github.com/marcbachmann/node-html-pdf) for doing all the heavy lifting.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-html-pdf --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-html-pdf');
```

## The "html_pdf" task

### Overview
In your project's Gruntfile, add a section named `html_pdf` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  html_pdf: {
    dist: {
      options: {
        // Task-specific options go here.
      },
      files: {
        // Target-specific file lists and/or options go here.
      },
    }
  },
});
```

### Options

#### options.separator
Type: `String`
Default value: `'\n'`

If multiple input files are supplied in one file declaration, they will be concatenated with this separator.

For example:

```js
files: {
  'examples/example.pdf': ['examples/example.html', 'examples/second_source.html',],
}
```

Will concatenate `example.html` and `second_source.html` before converting the concatenated file to a PDF.

*For a full list of options see [html-pdf](https://www.npmjs.com/package/html-pdf) settings*

### Usage Examples

```js
grunt.initConfig({
  html_pdf: {
    dist: {
      options: {
        format: 'A4',
        orientation: 'portrait',
        quality: '75',
      },
      files: {
        'files/mypdf.pdf': ['src/myhtml.html',],
      },
    }
  },
});
```

## Future Features
- Support Markdown compilation