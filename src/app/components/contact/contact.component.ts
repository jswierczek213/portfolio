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

  displayInfo: boolean;
  displayLocalErrors: boolean;
  displayServerErrors: boolean;
  success: boolean;

  ngOnInit(): void {
    this.contact = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      text: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  submit() {
    if (this.contact.invalid) {
      this.displayInfo = true;
      this.displayLocalErrors = true;
      return;
    }

    this.displayInfo = false;
    this.displayLocalErrors = false;
    this.displayServerErrors = false;
    this.success = false;

    const email = this.contact.value.email;
    const subject = this.contact.value.subject;
    const text = this.contact.value.text;

    this.mailService.sendMail(email, subject, text)
    .pipe(
      finalize(() => {
        this.displayInfo = true;
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

        const el = this.container.nativeElement;
        el.scrollIntoView({ behaviour: 'smooth' });
      }
    );
  }

}
