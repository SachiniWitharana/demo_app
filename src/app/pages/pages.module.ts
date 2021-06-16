import { NgModule } from '@angular/core';
import { NbAccordionModule, NbBadgeModule, NbButtonModule, NbCardModule, NbChatModule, NbCheckboxModule, NbDatepickerModule, NbIconModule, NbInputModule, NbListModule, NbMenuModule, NbPopoverModule, NbRadioModule, NbRouteTabsetModule, NbSelectModule, NbStepperModule, NbTabsetModule, NbUserModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { PagePaymentComponent } from './page-payment/page-payment.component';
import { PageDetailsComponent } from './page-details/page-details.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxCurrencyModule } from 'ngx-currency';
import { NgxPaginationModule } from 'ngx-pagination';
import { NbEvaIconsModule } from '@nebular/eva-icons';

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
    PagesComponent,
    PagePaymentComponent,
    PageDetailsComponent,
  ],
})
export class PagesModule {
}
