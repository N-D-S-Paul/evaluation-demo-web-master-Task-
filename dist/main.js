(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{185:function(e,t){function r(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=185},186:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(249))},188:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(255))},189:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(257))},190:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(259))},191:function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(262)),n(r(263)),n(r(264)),n(r(265))},192:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(193);var n=r(246),o=r(247);n.platformBrowserDynamic().bootstrapModule(o.AppModule)},193:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r(194),r(245)},247:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=r(32),a=r(24),s=r(81),c=r(248),u=r(191),l=r(266),f=r(186),d=r(188),p=r(189),m=r(273),h=r(190),v=r(54),g=r(39),b=r(276),y=r(40),R=r(21),w=function(){function e(){}return e=n([o.NgModule({imports:[i.BrowserModule,a.ReactiveFormsModule,s.HttpClientModule,c.appRoutingModule,v.MatButtonModule,g.MatTableModule,b.MatPaginatorModule,b.MatFormFieldModule,b.MatInputModule,R.BrowserAnimationsModule,y.MatSelectModule],declarations:[l.AppComponent,f.HomeComponent,d.LoginComponent,p.RegisterComponent,h.AuditComponent,m.AlertComponent],providers:[{provide:s.HTTP_INTERCEPTORS,useClass:u.JwtInterceptor,multi:!0},{provide:s.HTTP_INTERCEPTORS,useClass:u.ErrorInterceptor,multi:!0}],bootstrap:[l.AppComponent]})],e)}();t.AppModule=w},248:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(104),o=r(186),i=r(188),a=r(189),s=r(190),c=r(191),u=[{path:"",component:o.HomeComponent,canActivate:[c.AuthGuard]},{path:"audit",component:s.AuditComponent,canActivate:[c.AuthGuard]},{path:"login",component:i.LoginComponent},{path:"register",component:a.RegisterComponent},{path:"**",redirectTo:""}];t.appRoutingModule=n.RouterModule.forRoot(u)},249:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(22),s=r(79),c=function(){function e(e,t){this.authenticationService=e,this.userService=t,this.users=[],this.currentUser=this.authenticationService.currentUserValue}return e.prototype.ngOnInit=function(){this.loadAllUsers()},e.prototype.deleteUser=function(e){var t=this;this.userService.delete(e).pipe(a.first()).subscribe((function(){return t.loadAllUsers()}))},e.prototype.loadAllUsers=function(){var e=this;this.userService.getAll().pipe(a.first()).subscribe((function(t){return e.users=t}))},e=n([i.Component({template:r(254)}),o("design:paramtypes",[s.AuthenticationService,s.UserService])],e)}();t.HomeComponent=c},250:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(104),s=r(20),c=function(){function e(e){var t=this;this.router=e,this.subject=new s.Subject,this.keepAfterRouteChange=!1,this.router.events.subscribe((function(e){e instanceof a.NavigationStart&&(t.keepAfterRouteChange?t.keepAfterRouteChange=!1:t.clear())}))}return e.prototype.getAlert=function(){return this.subject.asObservable()},e.prototype.success=function(e,t){void 0===t&&(t=!1),this.keepAfterRouteChange=t,this.subject.next({type:"success",text:e})},e.prototype.error=function(e,t){void 0===t&&(t=!1),this.keepAfterRouteChange=t,this.subject.next({type:"error",text:e})},e.prototype.clear=function(){this.subject.next()},e=n([i.Injectable({providedIn:"root"}),o("design:paramtypes",[a.Router])],e)}();t.AlertService=c},251:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(81),s=r(20),c=r(22),u=function(){function e(e){this.http=e,this.currentUserSubject=new s.BehaviorSubject(JSON.parse(localStorage.getItem("currentUser"))),this.currentUser=this.currentUserSubject.asObservable()}return Object.defineProperty(e.prototype,"currentUserValue",{get:function(){return this.currentUserSubject.value},enumerable:!0,configurable:!0}),e.prototype.login=function(e,t){var r=this;return this.http.post("https://demo-api-master.byteridge.com/users/authenticate",{username:e,password:t}).pipe(c.map((function(e){return localStorage.setItem("currentUser",JSON.stringify(e)),r.currentUserSubject.next(e),e})))},e.prototype.logout=function(e){var t=this,r={user:e.session.user,loginTime:e.session.loginTime,logoutTime:Date.now(),ip:e.session.ip,role:e.role};return this.http.put("https://demo-api-master.byteridge.com/audits/"+e.session.id,r).pipe(c.map((function(e){return localStorage.removeItem("currentUser"),t.currentUserSubject.next(null),e})))},e=n([i.Injectable({providedIn:"root"}),o("design:paramtypes",[a.HttpClient])],e)}();t.AuthenticationService=u},252:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(81),s=function(){function e(e){this.http=e}return e.prototype.getAll=function(){return this.http.get("https://demo-api-master.byteridge.com/users")},e.prototype.register=function(e){return this.http.post("https://demo-api-master.byteridge.com/users/register",e)},e.prototype.delete=function(e){return this.http.delete("https://demo-api-master.byteridge.com/users/"+e)},e=n([i.Injectable({providedIn:"root"}),o("design:paramtypes",[a.HttpClient])],e)}();t.UserService=s},253:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(81),s=function(){function e(e){this.http=e}return e.prototype.getAll=function(){return this.http.get("https://demo-api-master.byteridge.com/audits")},e.prototype.create=function(e){return this.http.post("https://demo-api-master.byteridge.com/audits",e)},e.prototype.delete=function(e){return this.http.delete("https://demo-api-master.byteridge.com/audits/"+e)},e=n([i.Injectable({providedIn:"root"}),o("design:paramtypes",[a.HttpClient])],e)}();t.AuditService=s},254:function(e,t){e.exports='<h1>Hi {{currentUser.firstName}}!</h1>\n<p>You\'re logged in!!</p>\n<h3>All registered users:</h3>\n<ul>\n    <li *ngFor="let user of users">\n        {{user.username}} ({{user.firstName}} {{user.lastName}})\n        <br/><span class="badge badge-secondary">{{user.role}}</span>\n        <br/><a (click)="deleteUser(user.id)" class="badge badge-danger" *ngIf="currentUser.role == \'Auditor\'">Delete</a>\n    </li>\n</ul>'},255:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(104),s=r(24),c=r(22),u=r(79),l=function(){function e(e,t,r,n,o){this.formBuilder=e,this.route=t,this.router=r,this.authenticationService=n,this.alertService=o,this.loading=!1,this.submitted=!1,this.authenticationService.currentUserValue&&this.router.navigate(["/"])}return e.prototype.ngOnInit=function(){this.loginForm=this.formBuilder.group({username:["",s.Validators.required],password:["",s.Validators.required]}),this.returnUrl=this.route.snapshot.queryParams.returnUrl||"/"},Object.defineProperty(e.prototype,"f",{get:function(){return this.loginForm.controls},enumerable:!0,configurable:!0}),e.prototype.onSubmit=function(){var e=this;this.submitted=!0,this.alertService.clear(),this.loginForm.invalid||(this.loading=!0,this.authenticationService.login(this.f.username.value,this.f.password.value).pipe(c.first()).subscribe((function(t){e.router.navigate([e.returnUrl])}),(function(t){e.alertService.error(t),e.loading=!1})))},e=n([i.Component({template:r(256)}),o("design:paramtypes",[s.FormBuilder,a.ActivatedRoute,a.Router,u.AuthenticationService,u.AlertService])],e)}();t.LoginComponent=l},256:function(e,t){e.exports='<h2>Login</h2>\n<form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n    <div class="form-group">\n        <label for="username">Username</label>\n        <input type="text" formControlName="username" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.username.errors }" />\n        <div *ngIf="submitted && f.username.errors" class="invalid-feedback">\n            <div *ngIf="f.username.errors.required">Username is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="password">Password</label>\n        <input type="password" formControlName="password" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.password.errors }" />\n        <div *ngIf="submitted && f.password.errors" class="invalid-feedback">\n            <div *ngIf="f.password.errors.required">Password is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <button [disabled]="loading" class="btn btn-primary">\n            <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>\n            Login\n        </button>\n        <a routerLink="/register" class="btn btn-link">Register</a>\n    </div>\n</form>'},257:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(104),s=r(24),c=r(22),u=r(79),l=function(){function e(e,t,r,n,o){this.formBuilder=e,this.router=t,this.authenticationService=r,this.userService=n,this.alertService=o,this.loading=!1,this.submitted=!1,this.authenticationService.currentUserValue&&this.router.navigate(["/"])}return e.prototype.ngOnInit=function(){this.registerForm=this.formBuilder.group({firstName:["",s.Validators.required],lastName:["",s.Validators.required],username:["",s.Validators.required],password:["",[s.Validators.required,s.Validators.minLength(6)]],role:["User",s.Validators.required]})},Object.defineProperty(e.prototype,"f",{get:function(){return this.registerForm.controls},enumerable:!0,configurable:!0}),e.prototype.onSubmit=function(){var e=this;this.submitted=!0,this.alertService.clear(),this.registerForm.invalid||(this.loading=!0,this.userService.register(this.registerForm.value).pipe(c.first()).subscribe((function(t){e.alertService.success("Registration successful",!0),e.router.navigate(["/login"])}),(function(t){e.alertService.error(t),e.loading=!1})))},e=n([i.Component({template:r(258)}),o("design:paramtypes",[s.FormBuilder,a.Router,u.AuthenticationService,u.UserService,u.AlertService])],e)}();t.RegisterComponent=l},258:function(e,t){e.exports='<h2>Register</h2>\n<form [formGroup]="registerForm" (ngSubmit)="onSubmit()">\n    <div class="form-group">\n        <label for="firstName">First Name</label>\n        <input type="text" formControlName="firstName" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.firstName.errors }" />\n        <div *ngIf="submitted && f.firstName.errors" class="invalid-feedback">\n            <div *ngIf="f.firstName.errors.required">First Name is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="lastName">Last Name</label>\n        <input type="text" formControlName="lastName" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.lastName.errors }" />\n        <div *ngIf="submitted && f.lastName.errors" class="invalid-feedback">\n            <div *ngIf="f.lastName.errors.required">Last Name is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="username">Username</label>\n        <input type="text" formControlName="username" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.username.errors }" />\n        <div *ngIf="submitted && f.username.errors" class="invalid-feedback">\n            <div *ngIf="f.username.errors.required">Username is required</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="password">Password</label>\n        <input type="password" formControlName="password" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.password.errors }" />\n        <div *ngIf="submitted && f.password.errors" class="invalid-feedback">\n            <div *ngIf="f.password.errors.required">Password is required</div>\n            <div *ngIf="f.password.errors.minlength">Password must be at least 6 characters</div>\n        </div>\n    </div>\n    <div class="form-group">\n        <label for="role">Role</label>  \n        <select formControlName="role" class="form-control" [ngClass]="{ \'is-invalid\': submitted && f.role.errors }">\n            <option>Auditor</option>\n            <option>User</option>\n        </select>\n        <div *ngIf="submitted && f.role.errors" class="invalid-feedback">\n        </div>\n    </div>\n    <div class="form-group">\n        <button [disabled]="loading" class="btn btn-primary">\n            <span *ngIf="loading" class="spinner-border spinner-border-sm mr-1"></span>\n            Register\n        </button>\n        <a routerLink="/login" class="btn btn-link">Cancel</a>\n    </div>\n</form>\n'},259:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(22),s=r(79),c=r(87),u=r(80),l=r(39),f=function(){function e(e,t){this.authenticationService=e,this.auditService=t,this.audits=[],this.displayedColumns=["id","ip","loginTime","logoutTime"],this.selected="M/d/yy,h:mm"}return e.prototype.ngOnInit=function(){this.currentUser=this.authenticationService.currentUserValue,this.loadAllAudits()},e.prototype.loadAllAudits=function(){var e=this;this.auditService.getAll().pipe(a.first()).subscribe((function(t){e.audits=t,e.dataSource=new l.MatTableDataSource(e.audits),e.dataSource.paginator=e.paginator,e.dataSource.sort=e.sort}))},e.prototype.applyFilter=function(e){var t=e.target.value;this.dataSource.filter=t.trim().toLowerCase(),this.dataSource.paginator&&this.dataSource.paginator.firstPage()},n([i.ViewChild(c.MatPaginator,{static:!1}),o("design:type",c.MatPaginator)],e.prototype,"paginator",void 0),n([i.ViewChild(u.MatSort,{static:!1}),o("design:type",u.MatSort)],e.prototype,"sort",void 0),e=n([i.Component({template:r(261),styles:["\n      .mat-column-id,\n      .mat-column-ip,\n      .mat-column-loginTime {\n        word-wrap: break-word !important;\n        white-space: unset !important;\n        flex: 0 0 50% !important;\n        /* width: 50% !important; */\n        overflow-wrap: break-word;\n        word-wrap: break-word;\n\n        word-break: break-word;\n\n        -ms-hyphens: auto;\n        -moz-hyphens: auto;\n        -webkit-hyphens: auto;\n        hyphens: auto;\n      }\n      table {\n        width: 100%;\n      }\n\n      .mat-form-field {\n        font-size: 14px;\n        width: 100%;\n      }\n\n      td,\n      th {\n        width: 25%;\n      }\n    "]}),o("design:paramtypes",[s.AuthenticationService,s.AuditService])],e)}();t.AuditComponent=f},261:function(e,t){e.exports='<h1>Hi {{currentUser.firstName}}!</h1>\n<p>You\'re logged in with Angular 8!!</p>\n<h3>All login audit :</h3>\n\n\x3c!-- <ul>\n    <li *ngFor="let audit of audits">\n        <br/><span class="badge badge-primary">{{audit.user}}</span>\n        <br/><span class="badge badge-secondary">{{audit._id}}</span>\n        <br/>Login - {{audit.loginTime}}\n        <br/>Logout - {{audit.logoutTime}}\n        <br/>IP - {{audit.ip}}\n    </li>\n\n</ul> --\x3e\n<mat-form-field>\n  <mat-label>Filter</mat-label>\n  <input matInput (keyup)="applyFilter($event)" placeholder="id..." #input />\n</mat-form-field>\n\n<mat-form-field appearance="fill">\n    <mat-label>Change the date/time format </mat-label>\n    <mat-select  [(value)]="selected">\n      <mat-option value="M/d/yy,h:mm">12 hrs</mat-option>\n      <mat-option value="M/d/yy,H:mm">24 hrs</mat-option>\n    </mat-select>\n  </mat-form-field>\n\n<div class="mat-elevation-z8">\n  <table mat-table [dataSource]="dataSource" MatSort>\n    \x3c!-- ID Column --\x3e\n    <ng-container matColumnDef="id">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>\n      <td mat-cell *matCellDef="let row">{{row._id}}</td>\n    </ng-container>\n\n    \x3c!-- login Column --\x3e\n\n    <ng-container matColumnDef="loginTime" >\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>LOGIN TIME</th>\n      <td mat-cell *matCellDef="let row">\n        {{row.loginTime | date:[selected]}}\n      </td>\n    </ng-container>\n\n\n    \x3c!-- logot Column --\x3e\n    <ng-container matColumnDef="logoutTime">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>LOGOUT TIME</th>\n      <td mat-cell *matCellDef="let row">\n        {{row.logoutTime | date:[selected]}}\n      </td>\n    </ng-container>\n    \x3c!-- Name Column --\x3e\n    <ng-container matColumnDef="ip">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header>IP</th>\n      <td mat-cell *matCellDef="let row">{{row.ip}}</td>\n    </ng-container>\n\n    \x3c!-- Color Column --\x3e\n    \x3c!-- <ng-container matColumnDef="color">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header> Color </th>\n        <td mat-cell *matCellDef="let row" [style.color]="row.color"> {{row.color}} </td>\n      </ng-container> --\x3e\n\n    <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\n    <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>\n\n    \x3c!-- Row shown when there is no matching data. --\x3e\n    <tr class="mat-row" *matNoDataRow>\n      <td class="mat-cell" colspan="4">\n        No data matching the filter "{{input.value}}"\n      </td>\n    </tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]="[5, 10, 25, 100]"></mat-paginator>\n</div>\n'},262:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(104),s=r(79),c=function(){function e(e,t){this.router=e,this.authenticationService=t}return e.prototype.canActivate=function(e,t){return!!this.authenticationService.currentUserValue||(this.router.navigate(["/login"],{queryParams:{returnUrl:t.url}}),!1)},e=n([i.Injectable({providedIn:"root"}),o("design:paramtypes",[a.Router,s.AuthenticationService])],e)}();t.AuthGuard=c},263:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(20),s=r(22),c=r(79),u=function(){function e(e){this.authenticationService=e}return e.prototype.intercept=function(e,t){return t.handle(e).pipe(s.catchError((function(e){401===e.status&&location.reload(!0);var t=e.error.message||e.statusText;return a.throwError(t)})))},e=n([i.Injectable(),o("design:paramtypes",[c.AuthenticationService])],e)}();t.ErrorInterceptor=u},264:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(79),s=function(){function e(e){this.authenticationService=e}return e.prototype.intercept=function(e,t){var r=this.authenticationService.currentUserValue;return r&&r.token&&(e=e.clone({setHeaders:{Authorization:"Bearer "+r.token}})),t.handle(e)},e=n([i.Injectable(),o("design:paramtypes",[a.AuthenticationService])],e)}();t.JwtInterceptor=s},265:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a};Object.defineProperty(t,"__esModule",{value:!0});var o=r(0),i=r(81),a=r(20),s=r(22),c=JSON.parse(localStorage.getItem("users"))||[],u=function(){function e(){}return e.prototype.intercept=function(e,t){var r=e.url,n=e.method,o=e.headers,u=e.body;return a.of(null).pipe(s.mergeMap((function(){switch(!0){case r.endsWith("/users/authenticate")&&"POST"===n:return o=u.username,i=u.password,(a=c.find((function(e){return e.username===o&&e.password===i})))?l({id:a.id,username:a.username,firstName:a.firstName,lastName:a.lastName,token:"fake-jwt-token"}):f("Username or password is incorrect");case r.endsWith("/users/register")&&"POST"===n:return function(){var e=u;if(c.find((function(t){return t.username===e.username})))return f('Username "'+e.username+'" is already taken');return e.id=c.length?Math.max.apply(Math,c.map((function(e){return e.id})))+1:1,c.push(e),localStorage.setItem("users",JSON.stringify(c)),l()}();case r.endsWith("/users")&&"GET"===n:return p()?l(c):d();case r.match(/\/users\/\d+$/)&&"DELETE"===n:return p()?(c=c.filter((function(e){return e.id!==(t=r.split("/"),parseInt(t[t.length-1]));var t})),localStorage.setItem("users",JSON.stringify(c)),l()):d();default:return t.handle(e)}var o,i,a}))).pipe(s.materialize()).pipe(s.delay(500)).pipe(s.dematerialize());function l(e){return a.of(new i.HttpResponse({status:200,body:e}))}function f(e){return a.throwError({error:{message:e}})}function d(){return a.throwError({status:401,error:{message:"Unauthorised"}})}function p(){return"Bearer fake-jwt-token"===o.get("Authorization")}},e=n([o.Injectable()],e)}();t.FakeBackendInterceptor=u,t.fakeBackendProvider={provide:i.HTTP_INTERCEPTORS,useClass:u,multi:!0}},266:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(104),s=r(79);r(267);var c=function(){function e(e,t){var r=this;this.router=e,this.authenticationService=t,this.authenticationService.currentUser.subscribe((function(e){return r.currentUser=e}))}return e.prototype.logout=function(){var e=this;this.authenticationService.logout(this.currentUser).toPromise().then((function(t){e.router.navigate(["/login"])}))},e=n([i.Component({selector:"app",template:r(272)}),o("design:paramtypes",[a.Router,s.AuthenticationService])],e)}();t.AppComponent=c},267:function(e,t,r){var n=r(268);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(270)(n,o);n.locals&&(e.exports=n.locals)},268:function(e,t,r){(e.exports=r(269)(!1)).push([e.i,"a {\n  cursor: pointer;\n}\n",""])},272:function(e,t){e.exports='\x3c!-- nav --\x3e\n<nav class="navbar navbar-expand navbar-dark bg-dark" *ngIf="currentUser">\n    <div class="navbar-nav">\n        <a class="nav-item nav-link" routerLink="/">Home</a>\n        <a class="nav-item nav-link" routerLink="/audit" *ngIf="currentUser.role == \'Auditor\'">Audit</a>\n        <a class="nav-item nav-link" (click)="logout()">Logout</a>\n       \n    </div>\n</nav>\n\n\x3c!-- main app container --\x3e\n<div class="jumbotron">\n    <div class="container">\n        <div class="row">\n            <div class="col-sm-6 offset-sm-3">\n                <alert></alert>\n                <router-outlet></router-outlet>\n            </div>\n        </div>\n    </div>\n</div>'},273:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(274))},274:function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var o,i=arguments.length,a=i<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,r,n);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,r,a):o(t,r))||a);return i>3&&a&&Object.defineProperty(t,r,a),a},o=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=r(0),a=r(79),s=function(){function e(e){this.alertService=e}return e.prototype.ngOnInit=function(){var e=this;this.subscription=this.alertService.getAlert().subscribe((function(t){switch(t&&t.type){case"success":t.cssClass="alert alert-success";break;case"error":t.cssClass="alert alert-danger"}e.message=t}))},e.prototype.ngOnDestroy=function(){this.subscription.unsubscribe()},e=n([i.Component({selector:"alert",template:r(275)}),o("design:paramtypes",[a.AlertService])],e)}();t.AlertComponent=s},275:function(e,t){e.exports='<div *ngIf="message" [ngClass]="message.cssClass">{{message.text}}</div>'},79:function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(250)),n(r(251)),n(r(252)),n(r(253))}},[[192,1,2]]]);