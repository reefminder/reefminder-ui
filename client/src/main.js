import Promise from 'bluebird';

import Router from 'app/Router';

new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve))
    .then(Router.run);