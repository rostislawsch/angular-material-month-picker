import { Platform } from '@angular/cdk/platform';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  DateAdapter, MAT_DATE_LOCALE
} from '@angular/material/core';
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
      deps: [MAT_DATE_LOCALE, Platform],
    },
  ],
})
export class MonthpickerComponent {
  @Input()
  public monthAndYear: Date | null = null;

  @Output()
  public monthAndYearChange = new EventEmitter<Date | null>();

  public emitDateChange(event: MatDatepickerInputEvent<Date | null, unknown>): void {
    debugger;
    this.monthAndYear = event.value;
    this.monthAndYearChange.emit(event.value);
  }

  public monthChanged(value: any, widget: any): void {
    this.monthAndYear = value;
    widget.close();
  }
}
