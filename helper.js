const find = (id) => document.getElementById(id);
const findAll = (selector) => document.querySelectorAll(selector);
function to_si_unit(value, unit, unitType, obj) {
  return value / obj[unitType][unit];
}
function to_target_unit(value, unit, unitType, obj) {
  return obj[unitType][unit] * value;
}

function validateStr(str) {
  removedAndStr = str.replace(/and/gi, `&`);
  let arrOfStr = removedAndStr.split(/_| /);
  let finalStr = arrOfStr
    .map((val) => {
      val = val.replace(val[0], val[0].toUpperCase());
      return val;
    })
    .join(" ");
  return finalStr;
}

function reverseValidate(str) {
  let arr = str.split(" ");

  let arr2 = arr.map((val) => {
    val = val.replace(val[0], val[0].toLowerCase());
    return val;
  });

  let str2 = arr2.join("_");

  str2 = str2.replace(/&/gi, "and");
  str2 = str2.replace(/us$/gi, "US");
  str2 = str2.replace(/uk$/gi, "UK");

  return str2;
}
