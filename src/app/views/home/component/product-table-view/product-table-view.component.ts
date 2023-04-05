import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HomeService } from '../../home.service';
import { ProductListModel } from '../../home.model';
import { PlaceOrderDialogComponent } from '../place-order-dialog/place-order-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-product-table-view',
  templateUrl: './product-table-view.component.html',
  styleUrls: ['./product-table-view.component.css']
})
export class ProductTableViewComponent implements OnInit {
  colStructure : string[] = ['productName','availableQuantity','actions']
  rowStructure : any = []
  constructor(private homeService : HomeService, private dialog : MatDialog, private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.initialTrigger()  
  }

  initialTrigger(){
    this.fetchProductDetails().subscribe((data) => {
      this.rowStructure = data
      this.rowStructure.map((item : any) => {
        return item['actions'] = 'add_shopping_cart'
      })
    })
  }

  fetchProductDetails(){
    return this.homeService.getProductDetails()
  }

  triggerClick(item : ProductListModel){
    if(item['availableQuantity'] !== 0){
      this.dialog.open(PlaceOrderDialogComponent,{
        panelClass : ['animate__animated','animate__fadeInRightBig'],
        height: '100vh',
        maxWidth: '100%',
        width: '50%',
        position : {
          right: '0px'
        },
        data : item
      }).afterClosed().subscribe(res => {
        this.initialTrigger()
      })
    }
    else{
      this._snackBar.open('Sorry for your Inconvinience. There is no enough quantity to place order')
      setTimeout(() => {
        this._snackBar.dismiss()
      },6000)
    }
  }

}
