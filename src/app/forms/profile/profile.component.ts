import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputComponent } from '../input/input.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule, InputComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
//https://blog.angular-university.io/angular-custom-validators/
//https://medium.com/@bohndez.dev/custom-form-control-con-control-value-accessor-en-angular-5-6-o-7-f8f4030f105d
export class ProfileComponent {
  profileForm = new FormGroup({
    firstName: new FormControl('Pedro',[
      Validators.required
    ]),
    lastName: new FormControl(''),
  });

  handlerClick(){
    if (this.profileForm.valid){
      console.log(this.profileForm.value)
    }
  }
}
