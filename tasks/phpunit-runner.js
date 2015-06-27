'use strict';

var _ = require('lodash'),
	Command = require('./lib/command'),
	PhpunitTarget = require('./lib/phpunit-target'),
	extendPlugin = require('extend-grunt-plugin');

module.exports = function (grunt) {

	grunt.registerMultiTask('phpunit-runner', 'A phpunit runner that works', function () {
		var options = this.options({
				phpunit: 'phpunit'
			}),
			workFiles = [],
			flags = [],
			addValueToCommand = function (cmd, opts, optsKey, phpunitSetting) {
				if (opts.hasOwnProperty(optsKey)) {
					cmd.append(phpunitSetting, opts[optsKey] || '');
				}
			},
			addFlagToCommand = function (cmd, opts, flag, flagValue) {
				if (opts.hasOwnProperty(flag) && flag === true) {
					cmd.append(flagValue);
				}
			},
			command = function (opts, file) {
				var cmd = new Command(),
					toExecute = '';

				cmd.append(opts.phpunit);
				addValueToCommand(cmd, opts, 'coverageClover', '--coverage-clover');
				addValueToCommand(cmd, opts, 'coverageCrap4j', '--coverage-crap4j');
				addValueToCommand(cmd, opts, 'coverageHtml', '--coverage-html');
				addValueToCommand(cmd, opts, 'coveragePhp', '--coverage-php');
				addValueToCommand(cmd, opts, 'coverageText', '--coverage-text');
				addValueToCommand(cmd, opts, 'coverageXml', '--coverage-xml');
				addValueToCommand(cmd, opts, 'logJunit', '--log-junit');
				addValueToCommand(cmd, opts, 'logTap', '--log-tap');
				addValueToCommand(cmd, opts, 'logJson', '--log-json');
				addValueToCommand(cmd, opts, 'testdoxHtml', '--testdox-html');
				addValueToCommand(cmd, opts, 'testdoxText', '--testdox-text');
				addValueToCommand(cmd, opts, 'configuration', '--configuration');
				addValueToCommand(cmd, opts, 'bootstrap', '--bootstrap');
				addValueToCommand(cmd, opts, 'filter', '--filter');
				addValueToCommand(cmd, opts, 'testsuite', '--testsuite');
				addValueToCommand(cmd, opts, 'group', '--group');
				addValueToCommand(cmd, opts, 'excludeGroup', '--exclude-group');
				addFlagToCommand(cmd, opts, 'listGroups', '--list-groups');
				addValueToCommand(cmd, opts, 'testSuffix', '--test-suffix');
				addFlagToCommand(cmd, opts, 'reportUselessTests', '--report-useless-tests');
				addFlagToCommand(cmd, opts, 'strictCoverage', '--strict-coverage');
				addFlagToCommand(cmd, opts, 'strictGlobalState', '--strict-global-state');
				addFlagToCommand(cmd, opts, 'disallowTestOutput', '--disallow-test-output');
				addFlagToCommand(cmd, opts, 'enforecTimeLimit', '--enforce-time-limit');
				addFlagToCommand(cmd, opts, 'disallowTodoTests', '--disallow-todo-tests');
				addFlagToCommand(cmd, opts, 'processIsolation', '--process-isolation');
				addFlagToCommand(cmd, opts, 'noGlobalsBackup', '--no-globals-backup');
				addFlagToCommand(cmd, opts, 'staticBackup', '--static-backup');
				addValueToCommand(cmd, opts, 'columns', '--columns');
				addFlagToCommand(cmd, opts, 'stderr', '--stderr');
				addFlagToCommand(cmd, opts, 'stopOnError', '--stop-on-error');
				addFlagToCommand(cmd, opts, 'stopOnFailure', '--stop-on-failure');
				addFlagToCommand(cmd, opts, 'stopOnRisky', '--stop-on-risky');
				addFlagToCommand(cmd, opts, 'stopOnSkipped', '--stop-on-skipped');
				addFlagToCommand(cmd, opts, 'stopOnIncomplete', '--stop-on-incomplete');
				addFlagToCommand(cmd, opts, 'verbose', '--verbose');
				addFlagToCommand(cmd, opts, 'debug', '--debug');
				addValueToCommand(cmd, opts, 'loader', '--loader');
				addValueToCommand(cmd, opts, 'repeat', '--repeat');
				addFlagToCommand(cmd, opts, 'tap', '--tap');
				addFlagToCommand(cmd, opts, 'testdox', '--testdox');
				addValueToCommand(cmd, opts, 'printer', '--printer');
				addFlagToCommand(cmd, opts, 'noConfiguration', '--no-configuration');
				addValueToCommand(cmd, opts, 'includePath', '--include-path');
				addFlagToCommand(cmd, opts, 'version', '--version');

				_.forEach(opts.extraParameters, function (extraParam) {
					cmd.append(extraParam);
				});

				if (opts.phpIni) {
					flags = Object.keys(opts.phpIni);

					_.forEach(flags, function (iniSetting) {
						if (_.isEmpty(opts.phpIni[iniSetting])) {
							cmd.append('-d ' + iniSetting);
						} else {
							cmd.append('-d ' + iniSetting + '=' + opts.phpIni[iniSetting]);
						}
					});
				}

				if (opts.colors) {
					cmd.append('--colors=' + opts.colors);
				}

				cmd.append(file.command());

				toExecute = cmd.toString();
				return toExecute;
			},
			log = function (error, stdout, stderr, cb) {
				if (error) {
					grunt.log.error(stdout);
					return cb(error);
				}

				grunt.log.ok(stdout);
				return cb();
			},
			i = 0,
			opt = {};

		this.files.forEach(function (target) {

			target.src.forEach(function (fpath) {
				workFiles.push(new PhpunitTarget(grunt, fpath, target.dest));
			});

		});

		if (!_.isEmpty(workFiles)) {
			i = 0;
			workFiles.forEach(function (file) {

				opt['shell.phpunit-runner-' + i] = {
					options: {
						callback: log,
						stderr: false,
						stdout: false
					},
					command: command(options, file)
				};

				extendPlugin(grunt, require('grunt-shell/tasks/shell'), opt);
				grunt.task.run('shell:phpunit-runner-' + i);
				i++;
			});

		} else {
			grunt.log.warn('No files matched the pattern');
		}

	});

};
