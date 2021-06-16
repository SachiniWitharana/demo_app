import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbIconLibraries } from '@nebular/theme';

@Component({
  selector: 'ngx-page-payment',
  templateUrl: './page-payment.component.html',
  styleUrls: ['./page-payment.component.scss']
})
export class PagePaymentComponent implements OnInit {
  selectedOption
  evaIcons = [];
  constructor(iconsLibrary: NbIconLibraries,private router: Router,) { 
    this.evaIcons = Array.from(iconsLibrary.getPack('eva').icons.keys())
    .filter(icon => icon.indexOf('outline') === -1);
  }

  ngOnInit(): void {
  }

  navigate(){
    this.router.navigate(['pages/page-details/'])
  }

}
