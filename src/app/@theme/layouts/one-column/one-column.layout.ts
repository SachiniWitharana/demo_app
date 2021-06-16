import { Component } from '@angular/core';

@Component({
  
  selector: 'ngx-one-column-layout',
  styleUrls: ['./one-column.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar right class="menu-sidebar" tag="menu-sidebar" responsive>
      <div style="background-color: rgb(219, 220, 250);  width: 100%;" class="card">
      <div class="card-body p-0 clearfix">
          <div class="mb-0 pt-3">
              <div class="col-sm-2"></div>
              <div class="col-sm-10">
              <b>Last Payment </b><label style="color: rgb(0, 102, 255)"><b>Rs. 600.0</b></label>
              </div>
          </div>
          <div class="text-muted text-uppercase font-weight-bold font-xs">
              <div class="col-sm-2"></div>
              <div class="col-sm-10">
              <a class="label col-form-label" style="color: darkslategrey;">11 May 2021</a>
              </div>
          </div>
          <div class="row">
              <div class="col-7"></div>
              <div class="col-5">
                  <a style="font-size: 0.75rem; color:rgb(0, 102, 255); align-self: right;">View History</a>
              </div>
          </div>
      </div>
  </div>
        </nb-sidebar>

      <nb-layout-column>
        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `,
})
export class OneColumnLayoutComponent {}
