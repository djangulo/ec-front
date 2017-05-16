import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  formErrors = {
    'name': '',
    'email': '',
    'subject': '',
    'message': ''
  }


  ngOnInit() {
  }
  ifDisplay(arg): Boolean { return arg.length > 0}

  // onValueChanged(data?: any) {
  //   if (!this.contactForm) { return; }
  //   const form = this.contactForm.form;

  //   for (const field in this.formErrors) {
  //     // clear previous error message (if any)
  //     this.formErrors[field] = '';
  //     const control = form.get(field);

  //     if (control && control.dirty && !control.valid) {
  //       const messages = this.validationMessages[field];
  //       for (const key in control.errors) {
  //         this.formErrors[field] += messages[key] + ' ';
  //       }
  //     }
  //   }
  // }

//   onSubmit(contactForm: NgForm) {
//     let name = this.name;
//     let email = this.email;
//     let subject = this.subject;
//     let message = this.message;
//   }

}
