import fc from 'fast-check';
import { dayOfWeek, monthName, numberOfDaysInMonth } from '../src';

export const fcCalendarDate = () =>
  fc
    .tuple(fcCalendarMonth(), fc.integer(1, 31))
    .map(([month, day]) => ({
      ...month,
      day,
    }))
    .filter((date) => date.day <= numberOfDaysInMonth(date));

export const fcCalendarMonth = () =>
  fc.tuple(fcYear(), fcMonth()).map(([year, month]) => ({ year, month }));

export const fcYear = () => fc.integer(-1055, 1055).map((n) => n + 2020);
export const fcMonth = () => fc.integer(1, 12).map(monthName);

export const fcWeekDay = () => fcCalendarDate().map(dayOfWeek);
