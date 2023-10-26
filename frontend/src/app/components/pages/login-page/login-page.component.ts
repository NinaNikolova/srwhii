import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    loginForm!: FormGroup;
    isSubmitted = false;
    constructor(private formBuilder: FormBuilder) { }
    // Email, First Name, Last Name, Password, Repeat Password
    // loginForm.controls.email - very long -> getter -> fc.email; fc.password
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [, Validators.email]],
            password: ['', Validators.required]
        })
    }
    get fc() {
        return this.loginForm.controls;
    }
    submit() {
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        alert(`email: ${this.fc.email.value}, password: ${this.fc.password.value}`)
    }
}




