import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';
  @ViewChild('contactForm') contactForm: NgForm;

  formErrors = {
    'name': '',
    'email': '',
    'subject': '',
    'message': ''
  }
  validationMessages = {
    'name': {
      'required':      'Name is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
    },
    'power': {
      'required': 'Power is required.'
    }
  };

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  ifDisplay(arg): Boolean { return arg.length > 0}

  onValueChanged(data?: any) {
    if (!this.contactForm) { return; }
    const form = this.contactForm.form;

    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit(contactForm: NgForm) {
    let name = this.name;
    let email = this.email;
    let subject = this.subject;
    let message = this.message;
  }

}
