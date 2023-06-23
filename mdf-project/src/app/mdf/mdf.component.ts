import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
      gender: new FormControl(''),
      age: new FormControl('')
    });
  }


  ngOnInit(){}

  onSubmit() {
    console.log(this.form.value);  //log the data submitted here
    this.form.reset();
  }
}
