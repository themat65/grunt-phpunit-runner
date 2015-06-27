# grunt-phpunit-runner

> A phpunit runner that works

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-phpunit-runner --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-phpunit-runner');
```

## The "phpunit-runner" task

### Overview
In your project's Gruntfile, add a section named `phpunit-runner` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  'phpunit-runner': {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    }
  }
});
```

Phpunit currently doesn't support individual files to deal with.
`grunt-phpunit-runner` bridges that gap... sort of.

### Test files

#### Specifying a test folder
```js
grunt.initConfig({
  'phpunit-runner': {
    all: {
      options: {
        phpunit: 'vendor/bin/phpunit'
      },
      testFolder: 'tests/'
    }
  }
});
```

##### Specifying multiple folders

You can specify multiple folders. That will result in running phpunit as many times
as number of folders you have.

```js
grunt.initConfig({
  'phpunit-runner': {
    all: {
      options: {
        phpunit: 'vendor/bin/phpunit'
      },
      testFolder1: 'tests1/',
      testFolder2: 'tests2/'
    }
  }
});
```

#### Specifying unittests
```js
grunt.initConfig({
  'phpunit-runner': {
    all: {
      options: {
        phpunit: 'vendor/bin/phpunit'
      },
      testName: 'tests/testName.php'
    }
  }
});
```
Again, you can specify as many as you'd like

### Options

The options more or less mimic `phpunit`'s configuration parameters.

> There are 2 special cases however, the `options.extraParameters` and the
`options.phpIni`

#### options.extraParameters
Type: `Array`

If you want to pass through something that `phpunut-runner` doesn't support
Whatever you'd add in the command line, like:
```js
extraParameters: [
  '--a-new-option',
  '--another-option'
]
```

#### options.phpIni
Type: `Object`

For `phpunit`'s `-d` flag.

```js
phpIni: {
  'parameter':'value',
  'flag': ''
}
```
will translate to `-d parameter=value -d flag`

#### options.coverageClover
Type: `string`

The equivalent of `phpunit`'s `--coverage-clover` option

#### options.coverageCrap4j
Type: `string`

The equivalent of `phpunit`'s `--coverage-crap4j` option

#### options.coverageHtml
Type: `string`

The equivalent of `phpunit`'s `--coverage-html` option

#### options.coveragePhp
Type: `string`

The equivalent of `phpunit`'s `--coverage-php` option

#### options.coverageText
Type: `string`

The equivalent of `phpunit`'s `--coverage-text` option

#### options.coverageXml
Type: `string`

The equivalent of `phpunit`'s `--coverage-xml` option

#### options.logJunit
Type: `string`

The equivalent of `phpunit`'s `--log-junit` option

#### options.logTap
Type: `string`

The equivalent of `phpunit`'s `--log-tap` option

#### options.logJson
Type: `string`

The equivalent of `phpunit`'s `--log-json` option

#### options.testdoxHtml
Type: `string`

The equivalent of `phpunit`'s `--testdox-html` option

#### options.testdoxText
Type: `string`

The equivalent of `phpunit`'s `--testdox-text` option

#### options.configuration
Type: `string`

The equivalent of `phpunit`'s `--configuration` option

#### options.bootstrap
Type: `string`

The equivalent of `phpunit`'s `--bootstrap` option

#### options.filter
Type: `string`

The equivalent of `phpunit`'s `--filter` option

#### options.testsuite
Type: `string`

The equivalent of `phpunit`'s `--testsuite` option

#### options.group
Type: `string`

The equivalent of `phpunit`'s `--group` option

#### options.excludeGroup
Type: `string`

The equivalent of `phpunit`'s `--exclude-group` option

#### options.listGroups
Type: `boolean`

The equivalent of `phpunit`'s `--list-groups` option

#### options.testSuffix
Type: `string`

The equivalent of `phpunit`'s `--test-suffix` option

#### options.reportUselessTests
Type: `boolean`

The equivalent of `phpunit`'s `--report-useless-tests` option

#### options.strictCoverage
Type: `boolean`

The equivalent of `phpunit`'s `--strict-coverage` option

#### options.strictGlobalState
Type: `boolean`

The equivalent of `phpunit`'s `--strict-global-state` option

#### options.disallowTestOutput
Type: `boolean`

The equivalent of `phpunit`'s `--disallow-test-output` option

#### options.enforecTimeLimit
Type: `boolean`

The equivalent of `phpunit`'s `--enforce-time-limit` option

#### options.disallowTodoTests
Type: `boolean`

The equivalent of `phpunit`'s `--disallow-todo-tests` option

#### options.processIsolation
Type: `boolean`

The equivalent of `phpunit`'s `--process-isolation` option

#### options.noGlobalsBackup
Type: `boolean`

The equivalent of `phpunit`'s `--no-globals-backup` option

#### options.staticBackup
Type: `boolean`

The equivalent of `phpunit`'s `--static-backup` option

#### options.columns
Type: `string`

The equivalent of `phpunit`'s `--columns` option

#### options.stderr
Type: `boolean`

The equivalent of `phpunit`'s `--stderr` option

#### options.stopOnError
Type: `boolean`

The equivalent of `phpunit`'s `--stop-on-error` option

#### options.stopOnFailure
Type: `boolean`

The equivalent of `phpunit`'s `--stop-on-failure` option

#### options.stopOnRisky
Type: `boolean`

The equivalent of `phpunit`'s `--stop-on-risky` option

#### options.stopOnSkipped
Type: `boolean`

The equivalent of `phpunit`'s `--stop-on-skipped` option

#### options.stopOnIncomplete
Type: `boolean`

The equivalent of `phpunit`'s `--stop-on-incomplete` option

#### options.verbose
Type: `boolean`

The equivalent of `phpunit`'s `--verbose` option

#### options.debug
Type: `boolean`

The equivalent of `phpunit`'s `--debug` option

#### options.loader
Type: `string`

The equivalent of `phpunit`'s `--loader` option

#### options.repeat
Type: `string`

The equivalent of `phpunit`'s `--repeat` option

#### options.tap
Type: `boolean`

The equivalent of `phpunit`'s `--tap` option

#### options.testdox
Type: `boolean`

The equivalent of `phpunit`'s `--testdox` option

#### options.printer
Type: `string`

The equivalent of `phpunit`'s `--printer` option

#### options.noConfiguration
Type: `boolean`

The equivalent of `phpunit`'s `--no-configuration` option

#### options.includePath
Type: `string`

The equivalent of `phpunit`'s `--include-path` option

#### options.version
Type: `boolean`

The equivalent of `phpunit`'s `--version` option


### Usage Examples

#### Good Options
An example how to generate test and coverage reports

```js
grunt.initConfig({
  'phpunit-runner': {
    complete: {
      options: {
        phpunit: 'vendor/bin/phpunit',
        logJunit: 'reports/unit.xml',
        coverageClover: 'reports/coverage.xml',
        colors: true
      },
      files: {
            testFiles: 'tests/'
          }
      }
    }
  }
});
```

#### Fast Options
This is a config that runs very fast, and could be used in a `watch` config for example

```js
grunt.initConfig({
  'phpunit-runner': {
    fast: {
      options: {
        phpunit: 'vendor/bin/phpunit',
        colors: true
      },
      files: {
            testFiles: 'tests/'
          }
      }
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
* 0.1.9 - properly calling error callback
* 0.1.8 - fixed properly quitting on error, and suppressed double error logging
* 0.1.7 - proper config in readme
* 0.1.6 - cleaning up versions and travis
* 0.1.5 - readme fixup
* 0.1.4 - readme fixup
* 0.1.3 - working targets
* 0.1.0 - basic functionality
