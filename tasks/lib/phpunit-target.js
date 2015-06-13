'use strict';
var Command = require('./command');

module.exports = function (grunt, path, classToRun) {

	var cmd = new Command();

	if (grunt.file.isDir(path)) {
		cmd.append(path);
	} else {
		cmd.append(classToRun, path);
	}

	return {
		command: function () {
			return cmd.toString();
		}
	};

};
