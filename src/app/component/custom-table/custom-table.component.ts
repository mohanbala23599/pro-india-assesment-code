import { Component, ViewChild, OnChanges, Input, EventEmitter, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.css']
})
export class CustomTableComponent implements OnChanges {
  @Input() displayedColumns!: any;
  @Input() rowData: any;
  @Input() iconType: any
  @Output() triggerClick = new EventEmitter()
  dataSource = new MatTableDataSource()

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  constructor() { }

  ngOnChanges() {
    this.dataSource.data = this.rowData
    this.dataSource.paginator = this.paginator;
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  iconButtonOnClick(item: any) {
    this.triggerClick.emit(item)
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
