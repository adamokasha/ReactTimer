var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {
    it('should render pause button when started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      // Contains is a jQuery filter lets you check text value of this button
      var $pauseButton = $el.find('button:contains(Pause)');

      // Length property on jQuery selector equal to number of items it found
      expect($pauseButton.length).toBe(1);
    });

    it('should render start button when paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      // Contains is a jQuery filter lets you check text value of this button
      var $startButton = $el.find('button:contains(Start)');

      // Length property on jQuery selector equal to number of items it found
      expect($startButton.length).toBe(1);
    });
  });
});
