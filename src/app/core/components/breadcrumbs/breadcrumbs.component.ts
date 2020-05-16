import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { filter, distinctUntilChanged } from 'rxjs/internal/operators';

import { BreadcrumbsBuilderService } from '../../services/breadcrumbs-builder.service';
import { Breadcrumb } from '../../../shared/models/breadcrumb';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  public breadcrumbs: Array<Breadcrumb>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbBuilderService: BreadcrumbsBuilderService) {
  }

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event: any) => event instanceof NavigationEnd),
        distinctUntilChanged()
      )
      .subscribe(
        () => this.breadcrumbs = this.breadcrumbBuilderService.createBreadcrumb(this.activatedRoute.root),
        (error: any) => console.log(error)
      );
  }
}
