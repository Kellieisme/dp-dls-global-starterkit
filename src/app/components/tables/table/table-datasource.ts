import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

export interface TableItem {
  name: string;
  status: string;
  content: string;
  user: string;
  email: string;
  application: string;
  type: string;
  group: string;
  platform: string;
  updated: string;
  serial: string;
  assettag: string;
}

const EXAMPLE_DATA: TableItem[] = [
  {
    name: "WP0TEST7_THATCH_DEMfghjfghO_IPAD space",
    status: "Registered",
    content: "Current",
    user: "Olivera, Leonardo",
    email: "user@abc.com",
    application:  "Test App 9.2, FD Pro 4.1, Aviator ...",
    type: "mobile",
    group: "Winter route",
    platform: "Apple",
    updated: "20-Mar-2019 22:38:16",
    serial: "LX75WJQLHW",
    assettag: "409fkeb3ooftjftj",
  },
  {
    name: "SMITH_IPAD_TEST asdfasdkl asd;oirdiu sfasd",
    status: "Out of Contact",
    content: "Missing, Expired",
    user: "Drake, Marcus",
    email: "this@couldbeemail.com",
    application: "FD Pro 3.8, FD Pro 4.3",
    group: "3049 Group-B really long name here",
    type: "mobile",
    platform: "Apple",
    updated: "18-Jan-2019 03:57:22",
    serial: "CO4904568u98709877687",
    assettag: "fghjfghjdghjdtj",
  },
  {
    name: "WP0TEST7_SMARTAIRPORTS",
    status: "Created",
    content: "Current",
    user: "Vandenberg, Thatch",
    email: "janedoe@nothing.com",
    application: "OPT, Aviator, FD Pro 4.5 ...",
    group: "Group 123ABC456",
    platform: "Apple",
    type: "mobile",
    updated: "20-Mar-2019 22:38:16",
    serial: "",
    assettag: "",
  },
  {
    name: "JOES_IPAD",
    status: "Inactive",
    content: "Missing",
    user: "User, Jane",
    application: "FD Pro X 4.6.1",
    group: "Boeing Aviator Minotaur",
    platform: "Apple",
    updated: "17-Jan-2019 07:12:56",
    email: "janedoe@nothing.com",
    type: "mobile",
    serial: "",
    assettag: "",
  },
  {
    name: "N438A",
    status: "Registered",
    content: "Expired",
    user: "Wilson, Rolando",
    application: "FD Pro 4.1",
    group: "Mesopotamia",
    platform: "Apple",
    updated: "12-Jun-2019 20:56:03",
    email: "janedoe@nothing.com",
    type: "mobile",
    serial: "",
    assettag: "",
  },
  {
    name: "ABC-39RFDC",
    status: "Out of Contact",
    content: "Missing",
    user: "Pinkerton, Brandon",
    application: "OPT 2.1, FD Pro 4.1, Aviator ...",
    group: "TestGroup 47",
    platform: "Windows",
    updated: "24-Feb-2018 07:12:56",
    email: "janedoe@nothing.com",
    type: "desktop",
    serial: "",
    assettag: "",
  },
  {
    name: "AVBIZ-THATCH-Demd0586",
    status: "Created",
    content: "Next Cycle Available",
    user: "Boden-Smith, Jennifer",
    application:  "FD Pro X",
    group: "TestGroup14-admins",
    platform: "Apple",
    updated: "13-Jan-2019 22:38:16",
    email: "myvery@longemailaddress.com",
    type: "mobile",
    serial: "",
    assettag: "",
  },
  {
    name: "JONES-6957F",
    status: "Out of Contact",
    content: "Unpublished Updates",
    user: "Jones, Rashida",
    application:  "Test App 9.2, FD Pro 4.1, Aviator ...",
    group: "MyGroup123AVB",
    platform: "Windows",
    updated: "07-Jul-2017 03:57:22",
    email: "here@isanotheruser.com",
    type: "mobile",
    serial: "",
    assettag: "",
  },
];

export class TableDataSource extends DataSource<TableItem> {
  data: TableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TableItem[]): TableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TableItem[]): TableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'status': return compare(+a.status, +b.status, isAsc);
        case 'content': return compare(+a.name, +b.name, isAsc);
        case 'user': return compare(+a.name, +b.name, isAsc);
        case 'application': return compare(+a.name, +b.name, isAsc);
        case 'group': return compare(+a.name, +b.name, isAsc);
        case 'platform': return compare(+a.name, +b.name, isAsc);
        case 'updated': return compare(+a.name, +b.name, isAsc);
        case 'email': return compare(+a.name, +b.name, isAsc);
        case 'type': return compare(+a.name, +b.name, isAsc);
        case 'serial': return compare(+a.name, +b.name, isAsc);
        case 'assettag': return compare(+a.name, +b.name, isAsc);
        default: return 0;
      }
    });
 }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}