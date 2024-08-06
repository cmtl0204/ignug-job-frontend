import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {AppComponent} from './app.component';
import {HttpInterceptorProviders} from './interceptors';
import {HttpClientModule} from '@angular/common/http';
import {
  FooterComponent,
  TopbarComponent,
  SidebarComponent,
  BlankComponent,
  MainComponent,
  BreadcrumbComponent
} from '@layout';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from 'primeng/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SharedModule} from "@shared/shared.module";
import {DialogModule} from "primeng/dialog";
import {ProgressBarModule} from "primeng/progressbar";
import {DividerModule} from "primeng/divider";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {ConfirmPopupModule} from "primeng/confirmpopup";
import {MegaMenuModule} from "primeng/megamenu";
import {DropdownModule} from "primeng/dropdown";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {RippleModule} from "primeng/ripple";
import {AvatarModule} from "primeng/avatar";
import {FileUploadModule} from "primeng/fileupload";

import localEs from '@angular/common/locales/es';
import {registerLocaleData} from '@angular/common';
import { AboutComponent } from '@layout';
import {InputTextModule} from "primeng/inputtext";
import {SidebarModule} from "primeng/sidebar";
import {BadgeModule} from "primeng/badge";
import {PanelMenuModule} from "primeng/panelmenu";
import {ThemeComponent} from "./layout/theme/theme.component";

registerLocaleData(localEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
    BreadcrumbComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    TopbarComponent,
    AboutComponent,
    ThemeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    BreadcrumbModule,
    MenubarModule,
    ButtonModule,
    DialogModule,
    ProgressBarModule,
    DividerModule,
    ToastModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    MegaMenuModule,
    DropdownModule,
    OverlayPanelModule,
    RippleModule,
    AvatarModule,
    FileUploadModule,
    InputTextModule,
    SidebarModule,
    BadgeModule,
    PanelMenuModule   
  ],
  providers: [
    // {
    //   provide: LocationStrategy,
    //   useClass: HashLocationStrategy
    // },
    {provide: LOCALE_ID, useValue: 'es'},
    HttpInterceptorProviders,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
