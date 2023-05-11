import { Component } from '@angular/core';
// import Swal from 'sweetalert2';
import {ApiService} from '../api/api.puchase';
import {LazyLoadEvent} from 'primeng/api';
// crud.component.ts
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
// import { FormControl } from '@angular/forms';
import {Router} from "@angular/router";

// interface requisition {
//   name: string;
//   puchase_id: string;
//   company:string;
//   department:string;
//   product_name:string;
//   quantity:number;
//   price:number;
// }

@Component({
  selector: 'app-puchase',
  templateUrl: './puchase.component.html',
  styleUrls: ['./puchase.component.scss']
})

export class PuchaseComponent {

  addData: boolean = false;
  form: FormGroup;

  addDialog() :void{
    this.addData=true;
  }

  constructor(private HttpApi: ApiService,private fb: FormBuilder,private router:Router) {
    {
      this.form = this.fb.group({
        //必填

        username: ['',[Validators.required]],
        purchase_code: ['', ],
        purchase_id:['',],
        company_name: ['',[Validators.required]],
        department: ['',[Validators.required]],
        product_name:['',[Validators.required]],
        purchase_quantity:['',[Validators.required]],
        price:['',[Validators.required]],
        ceated_by:['',[Validators.required]]
      });
   }}

  apiData!: ApiService[];
  ngOnInit(): void {
    this.getAllPurchaseRequest();
  }



//     // 懶加載
// loadPostsLazy(event: LazyLoadEvent) {
//   const page = (event.first! / event.rows!) + 1;
//   this.HttpApi.getAllPurchaseRequest(page).subscribe((request: any) => {
//     this.apiData = request;
//     console.log(this.apiData);
//   });
// }

getAllPurchaseRequest():void{
  this.HttpApi.getAllPurchaseRequest(1).subscribe((body) => {
    this.apiData = body.body.purchases;
    console.log(this.apiData);
  })
}
// .component.ts
post(): void {

  // 使用雙向繫結將值帶入body
  let body = {
    // 另title(要post的欄位) = 表單控制元件'title'的值
      username: this.form.value.username,
      purchase_code: this.form.value.purchase_code,
      company_name: this.form.value.company_name,
      department: this.form.value.department,
      product_name: this.form.value.product_name,
      purchase_quantity: Number(this.form.value.purchase_quantity),
      price: Number(this.form.value.price),
  }
  // 請求post api
  this.HttpApi.postPurchaseRequest(body)
    .subscribe((request: any) => {
      console.log(request)
      if(request.code == 200){
        this.addData=false;
        this.getAllPurchaseRequest();
      }

    })
}
edit2(purchase_id:any): void {
  this.router.navigate(['puchase/edit2/'+ purchase_id]);
  // console.log(purchase_id)
}
}
