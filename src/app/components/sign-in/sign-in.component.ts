import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  @Output() isLogin = new EventEmitter<any>();
  isVisible = false;
  isOkLoading = false;
  loggedInUser = {};
  validateForm!: FormGroup;
  messages = {
    type: 'success',
    message: '',
    visible: false,
  };

  constructor(private fb: FormBuilder, private usersService: UsersService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.usersService.signIn(this.validateForm.value).subscribe(
        () => {
          this.isLogin.emit(true);
          this.isVisible = false;
          this.isOkLoading = false;
        },
        (error) => {
          return Object.assign(this.messages, {
            type: 'error',
            message: error.error,
            visible: true,
          });
        }
      );
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
