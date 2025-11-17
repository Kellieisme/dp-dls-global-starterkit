import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableModule, MatTable } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { TableCdkDataSource, TableCdkItem } from './table-cdk-datasource';

@Component({
    selector: 'app-table-cdk',
    templateUrl: './table-cdk.component.html',
    styleUrl: './table-cdk.component.scss',
    imports: [MatTableModule, MatPaginatorModule, MatSortModule],
    standalone: true
})
export class TableCdkComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TableCdkItem>;
  dataSource = new TableCdkDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
