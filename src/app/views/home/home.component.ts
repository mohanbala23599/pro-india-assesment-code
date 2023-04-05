import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from './component/add-product-dialog/add-product-dialog.component';
import { ProductTableViewComponent } from './component/product-table-view/product-table-view.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(ProductTableViewComponent) productTableViewComponent! : ProductTableViewComponent

  constructor(private dialog : MatDialog) { }

  ngOnInit() {
  }

  openAddProductDialog(){
    this.dialog.open(AddProductDialogComponent,{
      panelClass : ['animate__animated','animate__fadeInLeftBig'],
      height: '100vh',
      maxWidth: '100%',
      width: '50%',
      position : {
        left: '0px'
      }
    }).afterClosed().subscribe(res =>{
      this.productTableViewComponent.initialTrigger()
    })
  }

}
