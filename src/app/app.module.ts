import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumberSeriesComponent } from './question1/number-series/number-series.component';
import { HeaderComponent } from './header/header.component';
import { Question2Component } from './question2/question2/question2.component';
import { Question3Component } from './question3/question3/question3.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Corner1Component } from './question4/corner1/corner1.component';
import { Corner2Component } from './question4/corner2/corner2.component';
import { Corner3Component } from './question4/corner3/corner3.component';
import { Corner4Component } from './question4/corner4/corner4.component';
import { CenterComponent } from './question4/center/center.component';
import { Question4Component } from './question4/question4.component';
import { ChildComponent } from './question2/child/child.component';
import { Child2Component } from './question2/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberSeriesComponent,
    HeaderComponent,
    Question2Component,
    Question3Component,
    Corner1Component,
    Corner2Component,
    Corner3Component,
    Corner4Component,
    CenterComponent,
    Question4Component,
    ChildComponent,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
