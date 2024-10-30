import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
//https://medium.com/@bohndez.dev/custom-form-control-con-control-value-accessor-en-angular-5-6-o-7-f8f4030f105d
export class InputComponent implements OnChanges, OnInit {
  ngOnInit(): void {
    console.log("oninit")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  @Input() Text=''
  @Input() name= ''
  @Input() formGroup:FormGroup|any;
}
