import { Platform } from '@angular/cdk/platform';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, NativeDateAdapter } from '@angular/material/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MonthpickerDateAdapter } from './monthpicker-date-formats';


@Component({
  selector: 'app-monthpicker',
  templateUrl: './monthpicker.component.html',
  styleUrls: ['./monthpicker.component.css'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MonthpickerDateAdapter,
      deps: [MAT_DATE_LOCALE, Platform]
    }
  ]
})
export class MonthpickerComponent {

  @Input()
  public monthAndYear: Date | null = null;

  @Output()
  public monthAndYearChange = new EventEmitter<Date | null>();

  constructor(private fb: FormBuilder) { }

  public emitDateChange(event: MatDatepickerInputEvent<Date | null, unknown>): void {
    console.log(event.value);
    this.monthAndYearChange.emit(event.value);
  }

}
