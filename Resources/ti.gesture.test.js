/*
 * Appcelerator Titanium Mobile
 * Copyright (c) 2011-2016 by Appcelerator, Inc. All Rights Reserved.
 * Licensed under the terms of the Apache Public License
 * Please see the LICENSE included with this distribution for details.
 */

var should = require('./utilities/assertions'),
	utilities = require('./utilities/utilities');

describe('Titanium.Gesture', function () {
	it('apiName', function () {
		should(Ti.Gesture).have.a.readOnlyProperty('apiName').which.is.a.String;
		should(Ti.Gesture.apiName).be.eql('Ti.Gesture');
	});

	it('Ti.Gesture', function () {
		should(Ti.Gesture).not.be.undefined;
		should(Ti.Gesture.addEventListener).be.a.Function;
		should(Ti.Gesture.removeEventListener).be.a.Function;
	});

	it('landscape', function () {
		should(Ti.Gesture).have.a.readOnlyProperty('landscape').which.is.a.Boolean;
	});

	it('orientation', function () {
		should(Ti.Gesture).have.a.readOnlyProperty('orientation').which.is.a.Number;
	});

	it('portrait', function () {
		should(Ti.Gesture).have.a.readOnlyProperty('portrait').which.is.a.Boolean;
	});

	it('getLandscape()', function () {
		should(Ti.Gesture.getLandscape).not.be.undefined;
		should(Ti.Gesture.getLandscape).be.a.Function;
		should(Ti.Gesture.getLandscape()).be.a.Boolean;
	});

	it('getPortrait()', function () {
		should(Ti.Gesture.getPortrait).not.be.undefined;
		should(Ti.Gesture.getPortrait).be.a.Function;
		should(Ti.Gesture.getPortrait()).be.a.Boolean;
	});

	// FIXME Seems like only Windows has this? Was it deprecated/removed?
	(utilities.isWindows() ? it : it.skip)('isFaceDown()', function () {
		should(Ti.Gesture.isFaceDown).not.be.undefined;
		should(Ti.Gesture.isFaceDown).be.a.Function;
		should(Ti.Gesture.isFaceDown()).be.a.Boolean;
	});

	// FIXME Seems like only Windows has this? Was it deprecated/removed?
	(utilities.isWindows() ? it : it.skip)('isFaceUp()', function () {
		should(Ti.Gesture.isFaceUp).not.be.undefined;
		should(Ti.Gesture.isFaceUp).be.a.Function;
		should(Ti.Gesture.isFaceUp()).be.a.Boolean;
	});

	it('getOrientation()', function () {
		should(Ti.Gesture.getOrientation).not.be.undefined;
		should(Ti.Gesture.getOrientation).be.a.Function;
		should(Ti.Gesture.getOrientation()).be.a.Number;
	});
});
