// 'use strict';

import Reef from 'https://cdn.skypack.dev/reefjs@7.6.1';
import 'https://cdn.skypack.dev/reefjs/router';

// import 'reef-router';

// Style
import 'normalize.css';
import './styles/main.css';

// Polyfills
// import 'core-js/stable';
// import 'regenerator-runtime/runtime';
// import 'airbnb-browser-shims';
// import '@webcomponents/custom-elements';
// import 'lib/polyfills/customevent';
// import 'element-remove-polyfill';
// import 'details-element-polyfill';

// Library Imports
// import './js/app/app';

var router = new Reef.Router({
  routes: [
    {
      id: 'home',
      title: 'Home',
      url: '/'
    },
    {
      id: 'about',
      title: 'About',
      url: '/about'
    },
    {
      id: 'contact',
      title: 'Contact Us',
      url: '/contact'
    }
  ]
});

var app = new Reef('#app', {
  router: router,
  data: {
    greeting: 'Hello'
  },
  template: function (props, route) {
    return `
    <div class="container">
      <h1>${route.title}</h1>
      <p>${props.greeting} ${route.url}</p>
    </div>`;
  }
});

app.render();