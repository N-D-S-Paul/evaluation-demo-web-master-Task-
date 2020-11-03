import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { appRoutingModule } from "./app.routing";
import { JwtInterceptor, ErrorInterceptor } from "./_helpers";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home";
import { LoginComponent } from "./login";
import { RegisterComponent } from "./register";
import { AlertComponent } from "./_components";
import { AuditComponent } from "./audit";
import { MatButtonModule } from "@angular/material/button";
import { MatTableModule } from "@angular/material/table";
import {
  MatPaginatorModule,
  MatFormFieldModule,
  MatInputModule,
  MatSortModule,
} from "@angular/material";
import { MatSelectModule } from "@angular/material/select";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatSortModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AuditComponent,
    AlertComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
