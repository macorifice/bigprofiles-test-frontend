import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './components/grid/grid.component';
import { SelectJobComponent } from './components/select-job/select-job.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import { HighchartsChartModule } from 'highcharts-angular';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { SelectDateComponent } from './components/select-date/select-date.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FooterComponent } from './components/footer/footer.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { QueueComponent } from './components/queue/queue.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { RefreshButtonComponent } from './components/refresh-button/refresh-button.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { ApiService } from './services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    SelectJobComponent,
    ToolbarComponent,
    SelectDateComponent,
    FooterComponent,
    DataCardComponent,
    QueueComponent,
    BarChartComponent,
    PieChartComponent,
    RefreshButtonComponent,
    LineChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    HighchartsChartModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [
    ApiService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
