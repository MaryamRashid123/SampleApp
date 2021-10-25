/*
    General Helper Class
*/

// Components
import { REDUCER_KEYS } from "@cattleview/common/src/constants/ReducerKeyConstants";

// Localization
import LOCALIZATION from "@cattleview/common/src/services/LocalizationService";

//constant
import { DATA_TYPES } from  "@cattleview/common/src/constants/GenericConstants";

// Plugin
import { format } from "date-fns";

// Constants
import { DATE_FORMAT } from "@cattleview/common/src/constants/DateFormatConstants";

export function getLoadingKey(key){
  return (key || "") + REDUCER_KEYS.LOADING;
}

// Sort array of object on base of multiple keys
// example: https://bithacker.dev/javascript-object-multi-property-sort
export function sortArray(array=[], sortBy) {
  return array && array.sort(function (a, b) {
    let i = 0,
      result = 0;
    while (i < sortBy.length && result === 0) {
      result =
        sortBy[i].direction *
        (a[sortBy[i]?.prop]?.toString() < b[sortBy[i]?.prop]?.toString()
          ? -1
          : a[sortBy[i]?.prop]?.toString() > b[sortBy[i]?.prop]?.toString()
          ? 1
          : 0);
      i++;
    }
    return result;
  });
}

export function getIntVal(value){
  return parseInt(value || 0);
}

export function getDropdownData(list, value, text, parent){

  if(!list){
    return []
  }
  
  let data = [];
  for(let i=0; i<list.length; i++){
    data.push({
      value: parent? list[i]?.[parent]?.[value] : list[i][value],
      text: parent ? list[i]?.[parent]?.[text] : list[i][text]
    })
  }
  return data;
}

export function getDropdownDataWithDetailValue(list, value, text){
  if(!list){
    return []
  }
  
  let data = [];
  for(let i=0; i<list.length; i++){
    data.push({
      value: JSON.stringify({value: list[i][value], text: list[i][text]}),
      text: list[i][text]
    })
  }

  return data;
}

export function existInArray(arr, value){
  let flag = false;
  value && arr && arr.forEach((val) => {
    if(value.includes(val)){
      flag = true;
    }
  });
  return flag;
}

export function isNodeFilterOverlay(node){
  return !!node && node.classList.contains("filter-overlay");
  // return !!node && (
  //           node.classList.contains("ant-select-item-option-content") || 
  //           node.classList.contains("ant-select-item-option") || 
  //           node.tagName === "path" || 
  //           node.tagName === "svg"
  //         );
}

export function getErrorMessage(e, defaultMessage=LOCALIZATION.SERVER_ERROR){
  let errors = e?.response?.data?.errors;
  return !!errors && !!errors.length ? errors[0] : defaultMessage;
}

export function disabledFutureDates (current) {
  return current && current > new Date();
}

export function disabledPastDates (current) {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  return current && current < new Date(date);
}

export function toFixed(val){
  let value = (val || 0);
  return Math.round(value) !== value? value.toFixed(2): value;
}

export function thousandSeprator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function countFilter(object, exclude = []){
  let count = 0;
  for (const property in object) {
    if(object[property] !== undefined && 
        object[property] !== null && 
        object[property] !== '' && 
        !exclude.includes(property)
      ){
      count++;
    }
  }
  return count;
}

export function countValidKeys(object){
  let count = 0;
  for (const property in object) {
    count += !!object[property] + 0;
  }
  return count;
}


export function deleteListingRecord(list, id, key ){
  if(!id){
    return list;
  }
  let records = JSON.parse(JSON.stringify(list || {}));
  let index = records?.result.findIndex(el => el[key] === id);
  if(index !== -1){
    records.result = [...records?.result.slice(0, index), ...records?.result.slice(index+1)];
    records.totalRecords = records.totalRecords - 1;
  }
  return records;
}

export function updateListingRecord(list, record, key){
  if(!record){
    return list;
  }
  let records = JSON.parse(JSON.stringify(list || {}));
  
  let index = records?.result.findIndex(el => el[key] === record?.[key]);
  if(index !== -1){
    records.result = [...records?.result.slice(0, index), record, ...records?.result.slice(index+1)];
  }
  return records;
}

export function getCattleChargesEditSuggestion(list){
  const arr = [];
  for(let i=0; i<list.length; i++){
    arr.push({ value: list[i] })
  }

  return arr;
}

export function getRecordValue( data, parent, key, type){

  let value = "";
  value = !!parent && !!data?.[parent]?.[key]?  data[parent][key]: data[key] || LOCALIZATION.NA ;
  if (value && value !== LOCALIZATION.NA) {
    switch (type) {
      case DATA_TYPES.DATE:
        return format(new Date(value), DATE_FORMAT.MONTH_DAY_YEAR);
      default:
        return value;
    }
  }
}
export const handlingPrecision = (e, number) => {
  let value = String(e.target.value);
  let index = value.split('.');
  if(number > 0 ){
  if (index[1] > number){
    value = Number(value);
    value = value.toPrecision(number);
  }else{
    value = Number(value)
  }
  }else{
    value = Math.round(value);
  }
  return value;

}

export const bytesToMB = (bytes) => {
  return bytes/1048576;
}

// export function customWeekFormat(value){
//   let start = startOfWeek(value);
//   let end = endOfWeek(value);
//   return `Week ${ format(new Date(end), 'I', {weekStartsOn: 0, firstWeekContainsDate: 4}) } ${ format(new Date(start), 'MM-dd-yyyy') } - ${ format(new Date(end), 'MM-dd-yyyy') }`;
// };