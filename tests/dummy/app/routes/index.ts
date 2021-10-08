import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import type RouterService from '@ember/routing/router-service';

export default class Index extends Route {
  @service declare router: RouterService;

  async beforeModel() {
    this.router.transitionTo('docs');
  }
}
