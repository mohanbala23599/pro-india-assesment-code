import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http'
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CustomTableComponent } from 'src/app/component/custom-table/custom-table.component';
import { CustomDialogComponent } from 'src/app/component/custom-dialog/custom-dialog.component';

import { HomeService } from './home.service';
import { ProductTableViewComponent } from './component/product-table-view/product-table-view.component';
import { PlaceOrderDialogComponent } from './component/place-order-dialog/place-order-dialog.component';
import { AddProductDialogComponent } from './component/add-product-dialog/add-product-dialog.component';

@NgModule({
  declarations: [
    HomeComponent,
    CustomTableComponent,
    ProductTableViewComponent,
    CustomDialogComponent,
    PlaceOrderDialogComponent,
    AddProductDialogComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSortModule
  ],
  entryComponents : [PlaceOrderDialogComponent, AddProductDialogComponent],
  providers: [HomeService]
})
export class HomeModule { }
