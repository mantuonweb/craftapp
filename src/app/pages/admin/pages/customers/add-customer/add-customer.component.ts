import { Component, OnInit } from '@angular/core';
import { COUNTRIES } from '../../../../../../app/constants/countries';
import { CURRENCIES } from '../../../../../../app/constants/currency';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  countries = COUNTRIES;
  currencies = CURRENCIES; 
  customerForm = this.fb.group({
    basicInformation:this.fb.group({
      displayName:['',Validators.required],
      primaryContactName:[''],
      email:[''],
      phone:[''],
      primaryCurrency:['INR'],
      website:[''],
      prefix:['']
    }),
    billingAddress:this.fb.group({
      name:[''],
      country:['IN'],
      state:[''],
      city:[''],
      address:[''],
      phone:[''],
      zip:['']
    }),
    shippingAddress:this.fb.group({
      name:[''],
      country:['IN'],
      state:[''],
      city:[''],
      address:[''],
      phone:[''],
      zip:['']
    }),
    customfields:['']
  });
  get f() { 
    return this.customerForm.controls;
  }
  get bif(){
    const bi = <FormGroup>this.customerForm?.controls?.basicInformation;
    return bi?.controls;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // console.log(this.countries,this.currencies);
  }
  save(){
    console.log(this.customerForm.value);
  }
  copyFromBilling(){
    const billingAddress = this.customerForm?.value?.billingAddress;
    this.customerForm.patchValue({
      shippingAddress:{...billingAddress}
    });
  }
}
