import { NgModule } from '@angular/core';
import { NbAccordionModule, NbBadgeModule, NbButtonModule, NbCardModule, NbChatModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbPopoverModule, NbRadioModule, NbRouteTabsetModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../../theme.module';
import { PagesComponent } from '../../../pages/pages.component';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgxPaginationModule } from 'ngx-pagination';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { PagePaymentComponent } from '../../../page-payment/page-payment.component';
import { DashboardModule } from '../../../pages/dashboard/dashboard.module';
import { ECommerceModule } from '../../../pages/e-commerce/e-commerce.module';
import { MiscellaneousModule } from '../../../pages/miscellaneous/miscellaneous.module';
import { PageDetailsComponent } from '../../../pages/page-details/page-details.component';
import { PagesRoutingModule } from '../../../pages/pages-routing.module';
import { OneColumnLayoutComponent } from './one-column.layout';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    ReactiveFormsModule,
    NbEvaIconsModule,
    NbIconModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbCheckboxModule,    
    FormsModule,
    NbBadgeModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
    NbAccordionModule,
    NbListModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbTabsetModule,
    NbRadioModule,
    NbCheckboxModule,
    NbSelectModule,
    NbDatepickerModule,
    NbCardModule,
    NgxPaginationModule,
    NbUserModule,
    NgxCurrencyModule,
    NbChatModule,
    NbPopoverModule,
    NbCheckboxModule,
    NbSelectModule,
  ],
  declarations: [
    OneColumnLayoutComponent,
  ],
})
export class PagesModule {
}
