import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ReCaptchaComponent } from './../recaptcha/recaptcha.component';
import { ReCaptchaResponse } from './../recaptcha/recaptcha-response.model';

import { ContactService } from './../contact-form.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
  @ViewChild('submit') submit: ElementRef;
  private captchaResponse: ReCaptchaResponse;
  private token: string;
  private errorMessage: any;

  constructor(
    private service: ContactService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.contactForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
        ]
      ],
      email: ['', [
        Validators.required,
        Validators.email
        ]
      ],
      subject: '',
      message: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(500)
        ]
      ],
    })
  }

  formErrors = {
    'name': '',
    'email': '',
    'subject': '',
    'message': ''
  }

  verifyCallback(response) {
    console.log(response)
  }

  captchaVerify(response) {
    // this.http.post(
    //   'https://www.google.com/recaptcha/api/siteverify',
    //   {}
    // )
    console.log(response)
    this.service.captchaVerify(response)
      .subscribe(
        resp => this.captchaResponse = resp,
        error => this.errorMessage = <any>error);
  }


  onSubmit() {
    let token = this.captcha.getResponse();
    console.log(token);
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
