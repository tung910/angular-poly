import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
  loggedInUser = {};
  isLogin = false;
  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private usersService: UsersService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      //   remember: [true],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.usersService.signIn(this.validateForm.value).subscribe((data) => {
        this.isVisible = false;
        this.isOkLoading = false;
        this.isLogin = true;
      });
    } else {
      Object.values(this.validateForm.controls).forEach((control) => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  showModal(): void {
    this.isVisible = true;
  }
  handleCancel(): void {
    this.isVisible = false;
  }
  handleOk(): void {
    this.isOkLoading = true;
    this.submitForm();
  }
}
