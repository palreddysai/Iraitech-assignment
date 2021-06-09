import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NumberSeriesComponent } from './question1/number-series/number-series.component';
import { Question2Component } from './question2/question2/question2.component';
import { Question3Component } from './question3/question3/question3.component';
import { Question4Component } from './question4/question4.component';

const routes: Routes = [
  {path:"", redirectTo:"/question1", pathMatch:"full"},
  {path:"question1", component:NumberSeriesComponent},
  {path:"question2", component:Question2Component},
  {path:"question3", component:Question3Component},
  {path:"question4", component:Question4Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
