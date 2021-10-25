/*
    Date Helper Class
*/

// Lib
import { format, startOfWeek, endOfWeek, getWeek, setISODay } from "date-fns";

// Constants
import { DATE_FORMAT } from "../constants/DateFormatConstants";

// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

export function getPreviousDate(day = 1){
  let d = new Date();
  d.setDate(d.getDate() - day);
  return d;
}

export function getWeekDates(value){
  return {
    startDate: startOfWeek(value),
    endDate: endOfWeek(value)
  }
};

export function getNextWeekDates(value){
  let date = new Date(value);
  date.setDate(date.getDate() + 7);
  return {
    startDate: startOfWeek(date),
    endDate: endOfWeek(date)
  }
};

export function getPreviousWeekDates(value){
  let date = new Date(value);
  date.setDate(date.getDate() - 7);
  return {
    startDate: startOfWeek(date),
    endDate: endOfWeek(date)
  }
};

export function customWeekFormat(start, end, showWeek){
  const weekNo = getWeek(start, {
    weekStartsOn: 0,
    firstWeekContainsDate: 4
  });

  const fromDate = format(new Date(start), DATE_FORMAT.SHORTMONTH_DATE);
  const toDate = format(new Date(end), DATE_FORMAT.SHORTMONTH_DATE_YEAR);

  if(!!showWeek){
    return `${ LOCALIZATION.WEEK } ${ weekNo } - ${ fromDate } to ${ toDate }`;
  }
  return `${ fromDate } to ${ toDate }`;  
};

export function formatDate(date, givenFormat){
  return !!date? format(new Date(date), givenFormat || DATE_FORMAT.MONTH_SLASH_DAY_SLASH_YEAR): LOCALIZATION.NA;
}