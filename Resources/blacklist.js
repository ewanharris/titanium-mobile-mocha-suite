/**
 * Files that shouldn't be required on a platform due to reasons
 * such as unsupported syntax which causes parse errors from
 * the platforms JS Engine
 * @type {Object}
 */

module.exports = {
	'android': [
		'ios_tests',
		'windows_tests',
	],
	'ios':[
		'android_tests',
		'windows_tests',
	],
	'windows': [
		'android_tests',
		'ios_tests'
	]
};
