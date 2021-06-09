import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent implements OnInit {
  num:any;
  x:any;
  y = [];
  constructor() { }

  ngOnInit(): void {
  }
  submit(n){
    console.log("number",this.num)
        if (n % 2 == 1)
            this.x = (n * n) + 1;

        else
        this.x = (n * n) - 1;

  this.y.push(this.x)
  console.log(this.y)

  }
}
