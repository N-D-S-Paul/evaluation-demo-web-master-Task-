import { Component, OnInit, ViewChild } from "@angular/core";
import { first } from "rxjs/operators";

import { Audit, User } from "@/_models";
import { AuditService, AuthenticationService } from "@/_services";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";

export interface UserData {
  _id: string;
  user: string;
  loginTime: string;
  logoutTime: string;
  ip: string;
  __v: number;
  id: string;
}

@Component({
  templateUrl: "audit.component.html",
  styles: [
    `
      .mat-column-id,
      .mat-column-ip,
      .mat-column-loginTime {
        word-wrap: break-word !important;
        white-space: unset !important;
        flex: 0 0 50% !important;
        /* width: 50% !important; */
        overflow-wrap: break-word;
        word-wrap: break-word;

        word-break: break-word;

        -ms-hyphens: auto;
        -moz-hyphens: auto;
        -webkit-hyphens: auto;
        hyphens: auto;
      }
      table {
        width: 100%;
      }

      .mat-form-field {
        font-size: 14px;
        width: 100%;
      }

      td,
      th {
        width: 25%;
      }
    `,
  ],
})
export class AuditComponent implements OnInit {
  audits = [];
  currentUser: User;
  displayedColumns: string[] = ["id", "ip", "loginTime", "logoutTime"];
  selected = "M/d/yy,h:mm";

  dataSource: MatTableDataSource<UserData>;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  constructor(
    private authenticationService: AuthenticationService,
    private auditService: AuditService
  ) {}

  ngOnInit() {
    this.currentUser = this.authenticationService.currentUserValue;
    this.loadAllAudits();
  }

  private loadAllAudits() {
    this.auditService
      .getAll()
      .pipe(first())
      .subscribe((audits) => {
        this.audits = audits;
        this.dataSource = new MatTableDataSource(this.audits);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
