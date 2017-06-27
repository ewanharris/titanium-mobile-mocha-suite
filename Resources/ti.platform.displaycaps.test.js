/*
 * Appcelerator Titanium Mobile
 * Copyright (c) 2011-2016 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

var utilities = require('./utilities/utilities'),
	should = require('./utilities/assertions');

describe('Titanium.Platform.DisplayCaps', function () {
	it('apiName', function () {
		should(Ti.Platform.displayCaps).have.readOnlyProperty('apiName').which.is.a.String;
		should(Ti.Platform.displayCaps.apiName).be.eql('Ti.Platform.DisplayCaps');
	});

	// FIXME Get working on IOS // on iOS property is configurable
	(utilities.isIOS() || utilities.isWindows() ? it.skip : it)('density', function () {
		should(Ti.Platform.displayCaps).have.readOnlyProperty('density').which.is.a.String;
		// TODO Test for known range of values?
		// Android: "high", "medium", "xhigh", "xxhigh", "xxxhigh", "low", "medium"
		// iOS: "xhigh", "high", "medium"
	});

	(utilities.isWindows() ? it.skip : it)('getDensity()', function () {
		should(Ti.Platform.displayCaps.getDensity).be.a.Function;
		should(Ti.Platform.displayCaps.getDensity()).be.a.String;
	});

	// FIXME Get working on IOS
	(utilities.isIOS() || utilities.isWindows() ? it.skip : it)('dpi', function () {
		should(Ti.Platform.displayCaps).have.readOnlyProperty('dpi').which.is.a.Number;
		should(Ti.Platform.displayCaps.dpi).be.above(0);
	});

	(utilities.isWindows() ? it.skip : it)('getDpi()', function () {
		should(Ti.Platform.displayCaps.getDpi).be.a.Function;
		should(Ti.Platform.displayCaps.getDpi()).be.a.Number;
	});

	// FIXME Get working on IOS
	(utilities.isIOS() || utilities.isWindows() ? it.skip : it)('logicalDensityFactor', function () {
		should(Ti.Platform.displayCaps).have.readOnlyProperty('logicalDensityFactor').which.is.a.Number;
		should(Ti.Platform.displayCaps.logicalDensityFactor).be.above(0);
	});

	(utilities.isWindows() ? it.skip : it)('getLogicalDensityFactor()', function () {
		should(Ti.Platform.displayCaps.getLogicalDensityFactor).be.a.Function;
		should(Ti.Platform.displayCaps.getLogicalDensityFactor()).be.a.Number;
	});

	(utilities.isWindows() ? it.skip : it)('platformHeight', function () {
		should(Ti.Platform.displayCaps.platformHeight).be.a.Number;
		should(Ti.Platform.displayCaps.platformHeight).be.above(0);
	});

	(utilities.isWindows() ? it.skip : it)('getPlatformHeight()', function () {
		should(Ti.Platform.displayCaps.getPlatformHeight).be.a.Function;
		should(Ti.Platform.displayCaps.getPlatformHeight()).be.a.Number;
	});

	(utilities.isWindows() ? it.skip : it)('platformWidth', function () {
		should(Ti.Platform.displayCaps.platformWidth).be.a.Number;
		should(Ti.Platform.displayCaps.platformWidth).be.above(0);
	});

	(utilities.isWindows() ? it.skip : it)('getPlatformWidth()', function () {
		should(Ti.Platform.displayCaps.getPlatformWidth).be.a.Function;
		should(Ti.Platform.displayCaps.getPlatformWidth()).be.a.Number;
	});

	(utilities.isIOS() || utilities.isWindows() ? it.skip : it)('xdpi', function () {
		should(Ti.Platform.displayCaps).have.readOnlyProperty('xdpi').which.is.a.Number;
		should(Ti.Platform.displayCaps.xdpi).be.above(0);
	});

	(utilities.isIOS() || utilities.isWindows() ? it.skip : it)('getXdpi()', function () {
		should(Ti.Platform.displayCaps.getXdpi).be.a.Function;
		should(Ti.Platform.displayCaps.getXdpi()).be.a.Number;
	});

	(utilities.isIOS() || utilities.isWindows() ? it.skip : it)('ydpi', function () {
		should(Ti.Platform.displayCaps).have.readOnlyProperty('ydpi').which.is.a.Number;
		should(Ti.Platform.displayCaps.ydpi).be.above(0);
	});

	(utilities.isIOS() || utilities.isWindows() ? it.skip : it)('getYdpi()', function () {
		should(Ti.Platform.displayCaps.getYdpi).be.a.Function;
		should(Ti.Platform.displayCaps.getYdpi()).be.a.Number;
	});
});
