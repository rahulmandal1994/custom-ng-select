import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {
    this.bioSection = this.fb.group({
      firstName: [null],
    });
    this.bioSection.controls['firstName'].setValue({ id: 1, name: 'Vilnius' });
  }
  bioSection: FormGroup;
  name = 'Angular ' + VERSION.major;
  selectedCity: any = '';
  cities = [
    { id: 1, name: 'Vilnius' },
    { id: 2, name: 'Kaunas' },
    { id: 3, name: 'Pavilnys' },
    { id: 4, name: 'Pabradė' },
    { id: 5, name: 'Klaipėda' },
  ];
}
