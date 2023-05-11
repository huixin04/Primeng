import { Router } from '@angular/router';
import { Component } from '@angular/core';
import {ApiService} from "../../api/api.puchase";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit2',
  templateUrl: './edit2.component.html',
  styleUrls: ['./edit2.component.scss']
})
export class Edit2Component {
  form: FormGroup;

  constructor(
    private HttpApi: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.form = this.fb.group({
      //必填
      username: ['',[Validators.required]],
      purchase_id: ['', ],
      company_name: ['',[Validators.required]],
      department: ['',[Validators.required]],
      product_name:['',[Validators.required]],
      purchase_quantity:['',[Validators.required]],
      price:['',[Validators.required]],
      ceated_by:['',[Validators.required]]
    });
  }
  purchase_id: any;
  ngOnInit() {
    // 擷取特定路徑的路由參數
    this.purchase_id = this.route.snapshot.paramMap.get('purchase_id');
    console.log(this.purchase_id);
    this.getOne(this.purchase_id);
  }

  getOne(purchase_id:any):void{
    this.HttpApi.getOnePurchaseRequest(purchase_id)
      .subscribe(request => {
        console.log(request.body)
        this.form.patchValue(request.body);
      })
  }

  goBack(): void {
    this.location.back();
  }


  patch(): void {
    let purchase_id = this.purchase_id
    let body = {
      username: this.form.controls['username'].value,
      company_name: this.form.controls['company_name'].value,
      department: this.form.controls['department'].value,
      product_name: this.form.controls['product_name'].value,
      purchase_quantity:Number( this.form.controls['purchase_quantity'].value),
      price: Number(this.form.controls['price'].value)

    }
    this.HttpApi.patchPurchaseRequest(purchase_id, body)
      .subscribe(request => {
        console.log(request)
        if(request.code == 200){
          this.goBack();
        }
      })
  }

  // edit-crud.component.ts
  delete(): void {
    let puchase_id = this.form.controls['purchase_id'].value
    this.HttpApi.deletePurchaseRequest(puchase_id).subscribe(request => {
      console.log(request)
      if(request.code == 200){
        this.goBack();
      }
    })
  }
}
