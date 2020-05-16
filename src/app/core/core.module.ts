import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { BreadcrumbsBuilderService } from './services/breadcrumbs-builder.service';
import { InMemoryDataService } from './services/in-memory-data.service';
import { CartApi } from './api/cart-api';
import { CartService } from './services/cart.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  exports: [
    HeaderComponent,
    BreadcrumbsComponent
  ],
  declarations: [
    HeaderComponent,
    BreadcrumbsComponent
  ],
  providers: [
    BreadcrumbsBuilderService,
    CartApi,
    CartService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
