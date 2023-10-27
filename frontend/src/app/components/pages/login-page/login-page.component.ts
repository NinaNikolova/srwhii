import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
    loginForm!: FormGroup;
    isSubmitted = false;
    returnUrl = '';
    constructor(private formBuilder: FormBuilder, private userService: UserService, private activateRoute: ActivatedRoute, private router: Router) { }
    // Email, First Name, Last Name, Password, Repeat Password
    // loginForm.controls.email - very long -> getter -> fc.email; fc.password
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [, Validators.email]],
            password: ['', Validators.required]
        })
        // snapshot means the latest value of it
        this.returnUrl = this.activateRoute.snapshot.queryParams.returnUrl;
    }
    get fc() {
        return this.loginForm.controls;
    }
    submit() {
        this.isSubmitted = true;
        if (this.loginForm.invalid) {
            return;
        }

        this.userService.login({
            email: this.fc.email.value,
            password: this.fc.password.value
        }).subscribe(() => {
            this.router.navigateByUrl(this.returnUrl);
        })
        // when we change the angular.json we need to restart the angular server
    }
}





