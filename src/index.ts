import 'zone.js/dist/zone';
import angular from 'angular';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { StaticProvider } from '@angular/core';
import { DowngradedNg12Module, DowngradedNg12Component } from 'downgraded-ng12';
import {
  downgradeComponent,
  downgradeModule,
  UpgradeComponent,
} from '@angular/upgrade/static';

const ng2BootstrapFn = (extraProviders: StaticProvider[]) =>
  platformBrowserDynamic(extraProviders).bootstrapModule(DowngradedNg12Module);

let app = () => {
  return {
    template: require('./template.html').default,
    controller: 'AppCtrl',
    controllerAs: 'app',
  };
};

class AppCtrl {}

const MODULE_NAME = 'app';

angular
  .module(MODULE_NAME, [downgradeModule(ng2BootstrapFn)])
  .directive('downgradedNg12', downgradeComponent({ component: DowngradedNg12Component }))
  .directive('app', app)
  .controller('AppCtrl', AppCtrl);

export default MODULE_NAME;
