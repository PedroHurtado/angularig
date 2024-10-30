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
