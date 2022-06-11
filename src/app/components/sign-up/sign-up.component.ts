import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
  validateForm!: FormGroup;
  messages = {
    type: 'success',
    message: '',
    visible: false,
  };

  constructor(private fb: FormBuilder, private usersService: UsersService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      password: [null, [Validators.required]],
      role: [0],
    });
  }

  submitForm(): void {
    if (this.validateForm.valid) {
      this.usersService.signUp(this.validateForm.value).subscribe(
        (data) => {
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
          this.isOkLoading = false;
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
