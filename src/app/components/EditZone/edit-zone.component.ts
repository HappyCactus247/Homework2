import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TimeZoneService } from '../../services/time-zone.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TimeZone } from '../../models/timeZone.model';

@Component({
  selector: 'app-edit-zone',
  templateUrl: './edit-zone.component.html',
  styleUrls: ['./edit-zone.component.css']
})
export class EditZoneComponent implements OnInit {
  EditingTimeZone: TimeZone;

  EditZoneGroup: FormGroup;

  constructor(
    private _timeZoneService: TimeZoneService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const timeZoneId = this.route.snapshot.paramMap.get('id');
    this.EditingTimeZone = this._timeZoneService.TimeZones.find(el => el.id === +timeZoneId);

    this.EditZoneGroup = new FormGroup({
      offset: new FormControl(this.EditingTimeZone.offset, [
        Validators.required,
        Validators.pattern('[-+]((1[0-2])|([0-9]))')
      ]),
      cityName: new FormControl(this.EditingTimeZone.city, [
        Validators.required,
        Validators.maxLength(40),
      ])
    });
  }

  updateTimeZone() {
    this._timeZoneService.updateZone(this.EditingTimeZone.id,
      this.EditZoneGroup.controls.cityName.value,
      this.EditZoneGroup.controls.offset.value);

    this.router.navigate(['']);
  }

}
