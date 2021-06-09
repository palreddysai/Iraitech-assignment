import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'
@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.css']
})
export class Question3Component implements OnInit {

  numberForm: FormGroup;
  constructor(private fb:FormBuilder) {

    this.numberForm = this.fb.group({
      number:'',
      numbers: this.fb.array([]) ,
    });
  }

  numbers() : FormArray {
    return this.numberForm.get("numbers") as FormArray
  }

  newNumber(): FormGroup {
    return this.fb.group({
      phoneNumber: '',
    })
  }

  addNumber() {
    this.numbers().push(this.newNumber());
  }

  removeNumber(i:number) {
    this.numbers().removeAt(i);
  }

  onSubmit() {
    console.log(this.numberForm.value);

  }

  ngOnInit(): void {
  }

}
