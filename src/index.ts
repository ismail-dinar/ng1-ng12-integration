import angular from 'angular';

let app = () => {
  return {
    template: require('./template.html').default,
    controller: 'AppCtrl',
    controllerAs: 'app',
  };
};

class AppCtrl {
  url;
  constructor() {
    this.url = 'https://github.com/preboot/angular-webpack';
  }
}

const MODULE_NAME = 'app';

angular
  .module(MODULE_NAME, [])
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
