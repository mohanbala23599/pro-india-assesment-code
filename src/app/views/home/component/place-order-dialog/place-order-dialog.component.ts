import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductListModel } from '../../home.model';
import { HomeService } from '../../home.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-place-order-dialog',
  templateUrl: './place-order-dialog.component.html',
  styleUrls: ['./place-order-dialog.component.css']
})
export class PlaceOrderDialogComponent implements OnInit {
  placeOrderForm! : FormGroup
  numberOfQuantity : number = 0
  constructor(@Inject(MAT_DIALOG_DATA) public data: ProductListModel, private homeService : HomeService, private dialog : MatDialog, private _snackBar : MatSnackBar, private formBuilder : FormBuilder) {
    this.numberOfQuantity = data['availableQuantity']
    this.placeOrderForm = this.formBuilder.group({
      customerId : ['3fa85f64-5717-4562-b3fc-2c963f66afa6', [Validators.required]],
      productId : [data['productId'], [Validators.required]],
      orderId : ['3fa85f64-5717-4562-b3fc-2c963f66afa6', [Validators.required]],
      quantity : [0, [Validators.required, Validators.min(1)]],
      title : [data['productName'],[Validators.required]]  
    })
  }

  ngOnInit() {
  }

  placeOrder(){
    if(this.placeOrderForm.valid){
      try{
        this.homeService.orderProduct(this.placeOrderForm.value).subscribe(res => {
          if(res){
            this._snackBar.open('Order placed successfully')
            setTimeout(() => {
              this._snackBar.dismiss()
            },6000)
            this.dialog.closeAll()
            this.placeOrderForm.reset()
          }
        })
      }
      catch(err){
        this._snackBar.open('Please contact administrator')
        setTimeout(() => {
          this._snackBar.dismiss()
        },3000)
      }
    }
  }

}
