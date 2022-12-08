import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown,faChevronRight } from "@fortawesome/free-solid-svg-icons";

@Component ({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faFacebook = faFacebook;
  faLinkedin = faLinkedin;
  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faChevronDown = faChevronDown;
  faChevronRight = faChevronRight;

  errorMessage = '';
  registerForm!: FormGroup;
  submitted = false;
  

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]]
      });
  }
      get f() {return this.registerForm.controls}

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      this.errorMessage;
    }
  }
}
