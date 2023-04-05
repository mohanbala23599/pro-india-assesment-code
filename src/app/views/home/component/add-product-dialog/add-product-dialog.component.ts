import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeService } from '../../home.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.css']
})
export class AddProductDialogComponent implements OnInit {

  productInformationForm! : FormGroup

  constructor(private homeSerive: HomeService, private dialog: MatDialog, private _snackBar: MatSnackBar, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.productInformationForm = this.formBuilder.group({
      productName: ['', Validators.required],
      availableQuantity: [0, [Validators.required, Validators.min(1)]]
    });
  }

  addProductToList() {
    if(this.productInformationForm.valid){
      try{
        this.homeSerive.addProductToList(this.productInformationForm.value).subscribe(res => {
          if(res){
            this._snackBar.open('Product added to list successfully')
            setTimeout(() => {
              this._snackBar.dismiss()
            },6000)
            this.productInformationForm.reset()
            this.dialog.closeAll()
          }
        })
      }
      catch(err){
        this._snackBar.open('Please contact administrator')
        setTimeout(() => {
          this._snackBar.dismiss()
        },6000)
      }
    }
  }

}
