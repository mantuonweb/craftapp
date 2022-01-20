import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '../../../../../../app/constants/countries';
import { CURRENCIES } from '../../../../../../app/constants/currency';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  countries = COUNTRIES;
  currencies = CURRENCIES; 
  constructor() { }

  ngOnInit(): void {
    console.log(this.countries,this.currencies)
  }
  save(){

  }
}
