import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TimeZoneService } from '../../services/time-zone.service';

@Component({
  selector: 'app-add-new-zone',
  templateUrl: './add-new-zone.component.html',
  styleUrls: ['./add-new-zone.component.css']
})
export class AddNewZoneComponent implements OnInit {

  AddNewZoneGroup: FormGroup = new FormGroup({
    offset: new FormControl('', [
      Validators.required,
      Validators.pattern('[-+]((1[0-2])|([0-9]))')
    ]),
    cityName: new FormControl('', [
      Validators.required,
      Validators.maxLength(40),
    ])
  });

  constructor(private _timeZoneService: TimeZoneService) { }

  ngOnInit() { }

  async addNewZone() {
    if (this.AddNewZoneGroup.valid) {
     await this._timeZoneService.addNewZone(this.AddNewZoneGroup.controls['cityName'].value,
        this.AddNewZoneGroup.controls['offset'].value);
    }
  }
}
