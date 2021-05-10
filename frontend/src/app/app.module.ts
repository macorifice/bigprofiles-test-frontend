import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './components/grid/grid.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FooterComponent } from './components/footer/footer.component';
import { DataCardComponent } from './components/data-card/data-card.component';
import { QueueComponent } from './components/queue/queue.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ChartsModule } from 'ng2-charts';
import { PrettyjsonPipe } from './pipes/prettyjson.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ToolbarComponent,
    FooterComponent,
    DataCardComponent,
    QueueComponent,
    BarChartComponent,
    PieChartComponent,
    LineChartComponent,
    SpinnerComponent,
    PrettyjsonPipe
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
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    ChartsModule,
    MatExpansionModule,
    ScrollingModule
  ],
  providers: [
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
