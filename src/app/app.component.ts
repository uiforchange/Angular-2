import { Component,OnInit } from '@angular/core';
import { ReactiveFormsModule,  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { DataService } from './data-services';
import {Injectable, NgModule} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Angular app';
  
  constructor(private service: DataService)
  {

    
  }
  

    langs: string[] = [
      'English',
      'French',
      'German',
    ];
    myform: FormGroup;
    firstName: FormControl;
    lastName: FormControl;
    email: FormControl;
    password: FormControl;
    language: FormControl;
  
  
    ngOnInit() {
      this.createFormControls();
      this.createForm();
      this.service.getjoke();
    }
  
    createFormControls() {
      this.firstName = new FormControl('', Validators.required);
      this.lastName = new FormControl('', Validators.required);
      this.email = new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]);
      this.password = new FormControl('', [
        Validators.required,
        Validators.minLength(8)
      ]);
      this.language = new FormControl('');
    }
  
    createForm() {
      this.myform = new FormGroup({
        name: new FormGroup({
          firstName: this.firstName,
          lastName: this.lastName,
        }),
        email: this.email,
        password: this.password,
        language: this.language
      });
     
    }
  
    onSubmit() {
      if (this.myform.valid) {
        console.log("Form Submitted!");
        this.myform.reset();
      }
    }
  }
  

