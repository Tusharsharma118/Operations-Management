import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from '@clr/angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { TdmComponent } from './components/tdm/tdm.component';
import { AgGridModule } from 'ag-grid-angular';
import { DeliveryPortfolioComponent } from './components/delivery-portfolio/delivery-portfolio.component';
import { DataService } from "./service/data-service.service";
import { AdminModuleComponent } from './components/admin-module/admin-module.component';

@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        TdmComponent,
        DeliveryPortfolioComponent,
        AdminModuleComponent
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule,
        ROUTING,
        AgGridModule.withComponents([])
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
