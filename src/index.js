'use strict';

import Reef from 'reefjs';
import 'reefjs/router';

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
