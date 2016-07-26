var React = require('react');
var ReactDOM = require('react-dom');
// Destructuring syntax
var { Route, Router, IndexRoute, hashHistory } = require('react-router');
var Main = require('Main');
var Navigation = require('Navigation');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundation-sites
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

// var Main = React.createClass({
//   render: function () {
//     return (
//       <div>
//         <Navigation/>
//         <Main/>
//       </div>
//     );
//   }
// });

// Renders to screen
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
