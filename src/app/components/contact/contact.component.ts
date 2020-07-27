import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private fb: FormBuilder, private mailService: MailService) { }

  @ViewChild('container', { static: true }) container: ElementRef;

  contact: FormGroup;

  displayLoader = false;

  disabled = false;

  displayInfo: boolean;
  displayLocalErrors: boolean;
  displayServerErrors: boolean;
  success: boolean;

  // Build contact form
  ngOnInit(): void {
    this.contact = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      text: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submit() {
    const el = this.container.nativeElement;

    // Remove errors
    this.displayInfo = false;
    this.displayLocalErrors = false;
    this.displayServerErrors = false;
    this.success = false;

    // Display error container if there is an error
    if (this.contact.invalid) {
      this.displayInfo = true;
      this.displayLocalErrors = true;
      el.scrollIntoView({ behaviour: 'smooth' });
      return;
    }

    const email = this.contact.value.email;
    const subject = this.contact.value.subject;
    const text = this.contact.value.text;

    this.displayLoader = true;
    this.disabled = true;

    // Send mail
    this.mailService.sendMail(email, subject, text)
    .pipe(
      finalize(() => {
        this.displayLoader = false;
        this.displayInfo = true;
        this.disabled = false;
        el.scrollIntoView({ behaviour: 'smooth' });
      })
    )
    .subscribe(
      (data) => null,
      (error) => {
        console.error(error);
        this.displayServerErrors = true;
      },
      () => {
        this.success = true;
        this.contact.reset();
      }
    );
  }

}
