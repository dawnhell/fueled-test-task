import { ActivatedRoute } from '@angular/router';

import { Breadcrumb } from '../../shared/models/breadcrumb';

export class BreadcrumbsBuilderService {

  public createBreadcrumb(route: ActivatedRoute, previousUrl: string = '', breadcrumbs: Array<Breadcrumb> = []): Array<Breadcrumb> {
    let fullUrl = '',
        newBreadcrumbs: Array<Breadcrumb> = [];

    if (route.routeConfig && route.routeConfig.data) {
      fullUrl = `${previousUrl}${route.routeConfig.path}/`;
      newBreadcrumbs = [...breadcrumbs, {label: route.routeConfig.data.breadcrumb, url: fullUrl}];
    } else {
      newBreadcrumbs = [...breadcrumbs];
    }

    if (route.firstChild) {
      return this.createBreadcrumb(route.firstChild, fullUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }
}
